import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "./supabase";

const CHAVES = {
    xp: "@studyflow:xp",
    licoes: "@studyflow:completedLessons",
    streak: "@studyflow:streak",
    ultimoDia: "@studyflow:lastActive",
    minutos: "@studyflow:tempoEstudadoMinutos",
    dono: "@studyflow:donoDoProgresso",
    backup: "@studyflow:backupAntesDaMigracao",
};

const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// "Tue Jul 28 2026" (formato guardado no aparelho) -> "2026-07-28" (formato do banco)
function dataParaBanco(texto) {
    if (!texto) return null;
    const partes = texto.split(" "); // ["Tue", "Jul", "28", "2026"]
    const mes = MESES.indexOf(partes[1]);
    const dia = parseInt(partes[2], 10);
    const ano = parseInt(partes[3], 10);
    if (mes < 0 || Number.isNaN(dia) || Number.isNaN(ano)) return null;
    return `${ano}-${String(mes + 1).padStart(2, "0")}-${String(dia).padStart(2, "0")}`;
}

// "2026-07-28" -> "Tue Jul 28 2026"
function dataParaAparelho(dataDoBanco) {
    if (!dataDoBanco) return null;
    const [ano, mes, dia] = dataDoBanco.split("-").map(Number);
    return new Date(ano, mes - 1, dia).toDateString();
}

function lerNumero(texto) {
    const n = parseInt(texto, 10);
    return Number.isNaN(n) ? 0 : n;
}

function lerLista(texto) {
    try {
        const lista = JSON.parse(texto);
        return Array.isArray(lista) ? lista : [];
    } catch (erro) {
        return [];
    }
}

export async function sincronizarAoEntrar(idUsuario) {
    // 1) O que existe hoje no aparelho
    const pares = await AsyncStorage.multiGet([
        CHAVES.xp,
        CHAVES.licoes,
        CHAVES.streak,
        CHAVES.ultimoDia,
        CHAVES.minutos,
        CHAVES.dono,
    ]);
    const guardado = Object.fromEntries(pares);

    // 2) Cópia de segurança (só na primeira vez)
    const backupExistente = await AsyncStorage.getItem(CHAVES.backup);
    if (!backupExistente) {
        await AsyncStorage.setItem(
            CHAVES.backup,
            JSON.stringify({ ...guardado, feitoEm: new Date().toISOString() }),
        );
    }

    // 3) Se o progresso do aparelho é de OUTRA conta, não misturamos com esta
    const dono = guardado[CHAVES.dono];
    const deOutraConta = dono && dono !== idUsuario;

    const local = deOutraConta
        ? { xp: 0, licoes: [], streak: 0, ultimoDia: null, minutos: 0 }
        : {
            xp: lerNumero(guardado[CHAVES.xp]),
            licoes: lerLista(guardado[CHAVES.licoes]),
            streak: lerNumero(guardado[CHAVES.streak]),
            ultimoDia: dataParaBanco(guardado[CHAVES.ultimoDia]),
            minutos: lerNumero(guardado[CHAVES.minutos]),
        };

    // 4) O que existe na nuvem para esta conta
    const { data: perfil, error: erroPerfil } = await supabase
        .from("perfis")
        .select("xp, streak, ultimo_dia_ativo, minutos_estudados")
        .eq("id", idUsuario)
        .maybeSingle();
    if (erroPerfil) throw erroPerfil;

    const { data: licoesNuvem, error: erroLicoes } = await supabase
        .from("licoes_concluidas")
        .select("trilha, modulo")
        .eq("usuario_id", idUsuario);
    if (erroLicoes) throw erroLicoes;

    // 5) Concilia: nada diminui
    const xp = Math.max(local.xp, perfil?.xp ?? 0);
    const minutos = Math.max(local.minutos, perfil?.minutos_estudados ?? 0);

    const idsLicoes = new Set([
        ...local.licoes,
        ...(licoesNuvem || []).map((l) => `${l.trilha}:${l.modulo}`),
    ]);

    // Sequência de dias: vale o lado com o dia de uso mais recente
    const diaNuvem = perfil?.ultimo_dia_ativo ?? null;
    const diaLocal = local.ultimoDia;
    let streak;
    let ultimoDia;
    if (diaNuvem && (!diaLocal || diaNuvem > diaLocal)) {
        streak = perfil.streak;
        ultimoDia = diaNuvem;
    } else if (diaLocal && (!diaNuvem || diaLocal > diaNuvem)) {
        streak = local.streak;
        ultimoDia = diaLocal;
    } else {
        streak = Math.max(local.streak, perfil?.streak ?? 0);
        ultimoDia = diaLocal ?? diaNuvem;
    }

    // 6) Grava na nuvem (se falhar, o erro sobe e NADA é reivindicado nem apagado)
    const { error: erroGravarPerfil } = await supabase.from("perfis").upsert({
        id: idUsuario,
        xp,
        streak,
        ultimo_dia_ativo: ultimoDia,
        minutos_estudados: minutos,
    });
    if (erroGravarPerfil) throw erroGravarPerfil;

    const linhas = [...idsLicoes].map((id) => {
        const posicao = id.indexOf(":");
        return { usuario_id: idUsuario, trilha: id.slice(0, posicao), modulo: id.slice(posicao + 1) };
    });
    if (linhas.length > 0) {
        const { error: erroGravarLicoes } = await supabase
            .from("licoes_concluidas")
            .upsert(linhas, { onConflict: "usuario_id,trilha,modulo", ignoreDuplicates: true });
        if (erroGravarLicoes) throw erroGravarLicoes;
    }

    // 7) A nuvem confirmou: agora o aparelho passa a refletir a conta
    await AsyncStorage.multiSet([
        [CHAVES.xp, String(xp)],
        [CHAVES.licoes, JSON.stringify([...idsLicoes])],
        [CHAVES.streak, String(streak)],
        [CHAVES.minutos, String(minutos)],
        [CHAVES.dono, idUsuario],
    ]);
    if (ultimoDia) {
        await AsyncStorage.setItem(CHAVES.ultimoDia, dataParaAparelho(ultimoDia));
    } else {
        await AsyncStorage.removeItem(CHAVES.ultimoDia);
    }

    console.log("🔄 Sincronizado:", { xp, streak, minutos, licoes: idsLicoes.size });
}

// Pergunta ao Supabase quem está logado (usa o login guardado no aparelho, sem internet)
async function idDoUsuarioLogado() {
    const { data } = await supabase.auth.getSession();
    return data.session?.user?.id ?? null;
}

// Envia o XP atual para a nuvem (se falhar, só avisa no terminal e o app segue normal)
export async function enviarXp(xp) {
    try {
        const id = await idDoUsuarioLogado();
        console.log("☁️ enviarXp chamada. XP:", xp, "| usuário:", id);
        if (!id) return;
        const { data, error } = await supabase.from("perfis").update({ xp }).eq("id", id).select();
        console.log("☁️ enviarXp resultado:", { linhasAtualizadas: data?.length, error });
        if (error) throw error;
    } catch (erro) {
        console.log("Não foi possível enviar o XP agora:", erro);
    }
}

// Registra uma lição concluída, no formato "Trilha:modulo" (ex: "Python:py11")
export async function enviarLicaoConcluida(idDaLicao) {
    try {
        const id = await idDoUsuarioLogado();
        if (!id) return;
        const posicao = idDaLicao.indexOf(":");
        const { error } = await supabase.from("licoes_concluidas").upsert(
            {
                usuario_id: id,
                trilha: idDaLicao.slice(0, posicao),
                modulo: idDaLicao.slice(posicao + 1),
            },
            { onConflict: "usuario_id,trilha,modulo", ignoreDuplicates: true },
        );
        if (error) throw error;
    } catch (erro) {
        console.log("Não foi possível enviar a lição concluída agora:", erro);
    }
}

// Envia a sequência de dias e o último dia de uso (o dia vem como "Tue Jul 28 2026")
export async function enviarSequencia(streak, ultimoDiaTexto) {
    try {
        const id = await idDoUsuarioLogado();
        if (!id) return;
        const { error } = await supabase
            .from("perfis")
            .update({ streak, ultimo_dia_ativo: dataParaBanco(ultimoDiaTexto) })
            .eq("id", id);
        if (error) throw error;
    } catch (erro) {
        console.log("Não foi possível enviar a sequência agora:", erro);
    }
}

// Envia o total de minutos estudados
export async function enviarMinutos(minutos) {
    try {
        const id = await idDoUsuarioLogado();
        if (!id) return;
        const { error } = await supabase.from("perfis").update({ minutos_estudados: minutos }).eq("id", id);
        if (error) throw error;
    } catch (erro) {
        console.log("Não foi possível enviar os minutos agora:", erro);
    }
}