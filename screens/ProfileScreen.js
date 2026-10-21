// screens/ProfileScreen.js

import { supabase } from "../services/supabase";
import { AVATARES } from "./WelcomeSetupScreen";
import { semanasIngles } from "./WeeksScreen";
import { modulosPython } from "./PythonWeeksScreen";
import { modulosIA } from "./AIWeeksScreen";
import { projetos } from "./BuildAppsScreen";
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Modal, TextInput, Alert, ActivityIndicator } from "react-native";
import { Feather, FontAwesome5, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

// 💬 Banco de mensagens motivacionais — uma é escolhida automaticamente por dia
const MENSAGENS_DO_DIA = [
    {
        frase: "Seu futuro está sendo construído agora.",
        complemento: "Acredite no processo, cada pequeno passo conta.",
    },
    {
        frase: "Constância vence intensidade.",
        complemento: "Um pouco todo dia é melhor do que muito de vez em quando.",
    },
    {
        frase: "Você não precisa ser perfeita, só consistente.",
        complemento: "Cada lição concluída é um tijolo na sua nova carreira.",
    },
    {
        frase: "O erro de hoje é o aprendizado de amanhã.",
        complemento: "Programadoras experientes também erram — a diferença é persistir.",
    },
    {
        frase: "Progresso não é sempre visível, mas é real.",
        complemento: "Seu cérebro está se reorganizando a cada estudo, mesmo sem perceber.",
    },
    {
        frase: "Comece onde você está, com o que você tem.",
        complemento: "Ninguém começa sabendo tudo — todo mundo começa em algum lugar.",
    },
    {
        frase: "Você está mais perto hoje do que ontem.",
        complemento: "Olhe para trás de vez em quando — o caminho já percorrido importa.",
    },
    {
        frase: "Mudar de carreira é um ato de coragem.",
        complemento: "Cada linha de código aprendida hoje constrói o seu novo amanhã."
    },
    {
        frase: "Ninguém nasce sabendo programar.",
        complemento: "O domínio vem da prática diária, da paciência e da persistência."
    },
    {
        frase: "Seu histórico traz uma bagagem única.",
        complemento: "Sua experiência de vida é o seu grande diferencial na tecnologia."
    },
    {
        frase: "Um erro no código é apenas um aprendizado.",
        complemento: "Corrigir bugs faz parte da jornada de qualquer grande desenvolvedor."
    },
    {
        frase: "Sua idade ou trajetória anterior não definem o seu limite.",
        complemento: "A tecnologia acolhe quem tem sede de aprender."
    },
    {
        frase: "Não se compare com quem já está no mercado há anos.",
        complemento: "Compare o seu progresso de hoje com quem você era ontem."
    },
    {
        frase: "A consistência supera o talento.",
        complemento: "Estudar um pouco todos os dias levará você mais longe do que imagina."
    },
    {
        frase: "Aprender algo novo exige sair da zona de conforto.",
        complemento: "Sinta orgulho de ter dado o primeiro passo rumo à transformação."
    },
    {
        frase: "Grandes projetos começam com um simples 'Hello World'.",
        complemento: "Valorize o início e comemore cada pequena conquista."
    },
    {
        frase: "O mercado de tecnologia precisa da sua perspectiva.",
        complemento: "A diversidade de vivências enriquece a criação de soluções."
    },
    {
        frase: "A frustração de hoje é a lógica compreendida de amanhã.",
        complemento: "Não desista quando algo parecer difícil; seu cérebro está se adaptando."
    },
    {
        frase: "Aprender a programar é aprender a pensar de uma nova forma.",
        complemento: "Dê tempo a si mesmo para absorver essa nova linguagem."
    },
    {
        frase: "A síndrome do impostor tenta nos fazer parar.",
        complemento: "Lembre-se de quanta coisa você já superou para chegar até aqui."
    },
    {
        frase: "A tecnologia muda rápido, mas a sua capacidade de aprender é infinita.",
        complemento: "Aja como um eterno aprendiz e as portas se abrirão."
    },
    {
        frase: "Reinventar-se é dar uma nova chance aos seus sonhos.",
        complemento: "Você está exatamente onde precisa estar para recomeçar."
    },
    {
        frase: "Cada conceito absorvido é um degrau rumo à sua independência.",
        complemento: "Continue focado no seu objetivo final."
    },
    {
        frase: "A dúvida faz parte da transição.",
        complemento: "Mantenha a fé na sua escolha e no impacto que ela trará."
    },
    {
        frase: "Sua dedicação atual determinará as suas oportunidades futuras.",
        complemento: "Semeie hoje com disciplina para colher o sucesso amanhã."
    },
    {
        frase: "Desafios técnicos são apenas quebra-cabeças esperando por uma solução.",
        complemento: "Respire fundo, analise com calma e siga em frente."
    },
    {
        frase: "Você não está começando do zero, está começando da experiência.",
        complemento: "Tudo o que você viveu até hoje soma à sua inteligência emocional."
    },
    {
        frase: "O conhecimento é o único bem que ninguém pode te tirar.",
        complemento: "Invista tempo em você e no seu desenvolvimento contínuo."
    },
    {
        frase: "Conectar lógica e criatividade é a chave do futuro.",
        complemento: "Confie na sua capacidade de criar coisas incríveis através da tecnologia."
    },
    {
        frase: "A jornada de reinvenção é sua e o ritmo também.",
        complemento: "Respeite o seu tempo, mas nunca pare de caminhar."
    }
];

export default function ProfileScreen({ navigation }) {
    const [xp, setXp] = useState(725);
    const [streak, setStreak] = useState(1);
    const [modalConquistasVisivel, setModalConquistasVisivel] = useState(false);
    const [modalEdicaoVisivel, setModalEdicaoVisivel] = useState(false); // ✏️ Modal de edição
    const [tempoEstudadoFormatado, setTempoEstudadoFormatado] = useState("0h 0m");
    const [nomeUsuario, setNomeUsuario] = useState("Aluno");
    const [avatarUsuario, setAvatarUsuario] = useState(AVATARES[0]);

    // Estados temporários para o formulário de edição
    const [novoNome, setNovoNome] = useState("");
    const [novoAvatar, setNovoAvatar] = useState(AVATARES[0]);
    const [salvando, setSalvando] = useState(false);

    const level = Math.floor(xp / 100) + 1;

    // 📅 Escolhe uma mensagem diferente a cada dia
    const diaDoAno = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const mensagemDeHoje = MENSAGENS_DO_DIA[diaDoAno % MENSAGENS_DO_DIA.length];
    const xpNoNivelAtual = xp % 100;

    const TOTAL_LICOES = {
        Ingles: semanasIngles.length,
        Python: modulosPython.length,
        IA: modulosIA.length,
        BuildApps: projetos.length,
    };

    const [trilhasConcluidas, setTrilhasConcluidas] = useState(0);

    const loadProfileData = useCallback(async () => {
        try {
            const nomeGuardado = await AsyncStorage.getItem("@studyflow:userName");
            if (nomeGuardado) {
                setNomeUsuario(nomeGuardado);
                setNovoNome(nomeGuardado);
            }

            const avatarGuardado = await AsyncStorage.getItem("@studyflow:userAvatar");
            if (avatarGuardado) {
                const avatarEncontrado = AVATARES.find((a) => a.id === avatarGuardado);
                if (avatarEncontrado) {
                    setAvatarUsuario(avatarEncontrado);
                    setNovoAvatar(avatarEncontrado);
                }
            }
            const savedXp = await AsyncStorage.getItem("@studyflow:xp");
            if (savedXp !== null) setXp(parseInt(savedXp, 10));

            const savedStreak = await AsyncStorage.getItem("@studyflow:streak");
            if (savedStreak !== null) setStreak(parseInt(savedStreak, 10));

            const salvasStr = await AsyncStorage.getItem("@studyflow:completedLessons");
            const licoesConcluidas = salvasStr ? JSON.parse(salvasStr) : [];

            const calcularPercentual = (trilha) => {
                const concluidas = licoesConcluidas.filter((id) => id.startsWith(`${trilha}:`)).length;
                return Math.round((concluidas / TOTAL_LICOES[trilha]) * 100);
            };

            const trilhas = ["Ingles", "Python", "IA", "BuildApps"];
            const totalCompletas = trilhas.filter((trilha) => calcularPercentual(trilha) === 100).length;
            setTrilhasConcluidas(totalCompletas);

            const minutosSalvos = await AsyncStorage.getItem("@studyflow:tempoEstudadoMinutos");
            const totalMinutos = minutosSalvos ? parseInt(minutosSalvos, 10) : 0;
            const horas = Math.floor(totalMinutos / 60);
            const minutosRestantes = totalMinutos % 60;
            setTempoEstudadoFormatado(`${horas}h ${minutosRestantes}m`);
        } catch (error) {
            console.log("Erro ao carregar dados do perfil:", error);
        }
    }, []);

    // ✏️ Função para salvar as alterações do Perfil localmente e na nuvem
    const salvarAlteracoesPerfil = async () => {
        if (!novoNome.trim()) {
            Alert.alert("Aviso", "O nome não pode ficar vazio.");
            return;
        }

        try {
            setSalvando(true);
            const { data: { user } } = await supabase.auth.getUser();

            // 1. Salvar no AsyncStorage
            await AsyncStorage.setItem("@studyflow:userName", novoNome.trim());
            await AsyncStorage.setItem("@studyflow:userAvatar", novoAvatar.id);

            // 2. Salvar no Supabase (se houver usuário logado)
            if (user) {
                const { error } = await supabase
                    .from("perfis")
                    .upsert({
                        id: user.id,
                        nome: novoNome.trim(),
                        avatar: novoAvatar.id,
                        updated_at: new Date().toISOString(),
                    });

                if (error) {
                    console.error("Erro ao atualizar no Supabase:", error);
                }
            }

            // Atualiza o estado local da tela
            setNomeUsuario(novoNome.trim());
            setAvatarUsuario(novoAvatar);
            setModalEdicaoVisivel(false);
            Alert.alert("Sucesso", "Perfil atualizado com sucesso!");
        } catch (error) {
            console.log("Erro ao salvar perfil:", error);
            Alert.alert("Erro", "Não foi possível salvar as alterações.");
        } finally {
            setSalvando(false);
        }
    };

    const sair = async () => {
        try {
            await supabase.auth.signOut();
            await AsyncStorage.multiRemove(["@studyflow:userName", "@studyflow:userAvatar"]);
        } catch (error) {
            console.log("Erro ao sair:", error);
        }
    };

    const confirmarSair = () => {
        Alert.alert("Sair da conta", "Tem certeza de que deseja sair?", [
            { text: "Cancelar", style: "cancel" },
            { text: "Sair", style: "destructive", onPress: sair },
        ]);
    };

    useFocusEffect(
        useCallback(() => {
            loadProfileData();
        }, [loadProfileData]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* 1. TOPO: AVATAR NEON E INFORMAÇÕES (Com gatilho para editar) */}
                <View style={styles.topUserRow}>
                    <TouchableOpacity
                        style={styles.avatarOuterRing}
                        onPress={() => setModalEdicaoVisivel(true)}
                        activeOpacity={0.8}
                    >
                        <View style={styles.avatarInnerBg}>
                            {avatarUsuario ? (
                                avatarUsuario.lib === "material" ? (
                                    <MaterialCommunityIcons
                                        name={avatarUsuario.icone}
                                        size={36}
                                        color={avatarUsuario.cor}
                                    />
                                ) : (
                                    <FontAwesome5 name={avatarUsuario.icone} size={36} color={avatarUsuario.cor} />
                                )
                            ) : (
                                <FontAwesome5 name="user-astronaut" size={36} color="#6C5CE7" />
                            )}
                        </View>
                        <View style={styles.editPencilBadge}>
                            <Feather name="edit-2" size={10} color="#FFF" />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.userMainInfo}>
                        <TouchableOpacity onPress={() => setModalEdicaoVisivel(true)}>
                            <Text style={styles.profileUserName}>{nomeUsuario} 👋</Text>
                        </TouchableOpacity>
                        <Text style={styles.profileUserBio}>Construindo sua nova carreira na tecnologia 🚀</Text>
                        <View style={styles.locationRow}>
                            <Ionicons name="location-outline" size={14} color="#8E8EA9" />
                            <Text style={styles.locationText}>Brasil</Text>
                        </View>
                    </View>

                    <View style={styles.topStreakCard}>
                        <Text style={styles.streakEmoji}>🔥</Text>
                        <Text style={styles.topStreakValue}>{streak}</Text>
                        <Text style={styles.topStreakLabel}>dias em{"\n"}sequência</Text>
                    </View>
                </View>

                {/* 2. O GRANDE CARD DE NÍVEL (GAMIFICADO) */}
                <View style={styles.levelMainCard}>
                    <View style={styles.levelCardTop}>
                        <View style={styles.hexagonShield}>
                            <Text style={styles.hexagonSubText}>NÍVEL</Text>
                            <Text style={styles.hexagonMainNumber}>{level}</Text>
                        </View>

                        <View style={styles.levelTexts}>
                            <Text style={styles.levelTitle}>Estudante Focado 👑</Text>
                            <Text style={styles.levelSubtitle}>Você está no caminho certo!</Text>
                            <Text style={styles.xpProgressNumbers}>{xpNoNivelAtual} / 100 XP para o próximo nível</Text>
                        </View>

                        <View style={styles.circularProgressSimulated}>
                            <Text style={styles.circularPercentText}>{xpNoNivelAtual}%</Text>
                        </View>
                    </View>

                    <View style={styles.horizontalTrackContainer}>
                        <View style={[styles.horizontalBarFill, { width: `${xpNoNivelAtual}%` }]} />
                        <Text style={styles.horizontalPercentLabel}>{xpNoNivelAtual}%</Text>
                    </View>

                    <TouchableOpacity
                        style={styles.continueButton}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate("Tarefas")}
                    >
                        <Text style={styles.continueButtonText}>Continuar evoluindo</Text>
                        <Feather name="chevron-right" size={16} color="#6C5CE7" />
                    </TouchableOpacity>
                </View>

                {/* 3. MENSAGEM DO DIA */}
                <View style={styles.messageDayCard}>
                    <View style={styles.robotContainerBg}>
                        <MaterialCommunityIcons name="robot-happy-outline" size={28} color="#6C5CE7" />
                    </View>
                    <View style={styles.messageContent}>
                        <Text style={styles.messageTag}>✨ Mensagem do dia</Text>
                        <Text style={styles.messageBody}>"{mensagemDeHoje.frase}"</Text>
                        <Text style={styles.messageSubBody}>{mensagemDeHoje.complemento}</Text>
                    </View>
                    <FontAwesome5 name="star" size={24} color="#FFD700" style={styles.starFloating} />
                </View>

                {/* 4. QUANTUM GRID DE STATUS (4 CARDS) */}
                <View style={styles.quadGrid}>
                    <View style={styles.quadBox}>
                        <Feather name="clock" size={18} color="#6C5CE7" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>{tempoEstudadoFormatado}</Text>
                        <Text style={styles.quadLabel}>Tempo total estudado</Text>
                    </View>
                    <View style={styles.quadBox}>
                        <MaterialCommunityIcons name="fire" size={20} color="#FF5C5C" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>{streak}</Text>
                        <Text style={styles.quadLabel}>Sequência atual</Text>
                    </View>
                    <View style={styles.quadBox}>
                        <Feather name="check-circle" size={18} color="#00BA4A" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>{trilhasConcluidas}/4</Text>
                        <Text style={styles.quadLabel}>Trilhas concluídas</Text>
                    </View>
                    <View style={styles.quadBox}>
                        <Feather name="award" size={18} color="#FFD700" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>Top 18%</Text>
                        <Text style={styles.quadLabel}>Ranking pessoal</Text>
                    </View>
                </View>

                {/* 5. SEÇÃO: CONQUISTAS */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionMainTitle}>Conquistas</Text>
                    <TouchableOpacity onPress={() => setModalConquistasVisivel(true)}>
                        <Text style={styles.verTodasText}>Ver todas</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalBadges}>
                    <View style={[styles.badgeItem, { borderColor: "#FFD700" }]}>
                        <FontAwesome5 name="trophy" size={20} color="#FFD700" />
                        <Text style={styles.badgeItemName} allowFontScaling={false}>Primeira{"\n"}semana</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]} allowFontScaling={false}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, { borderColor: "#A855F7" }]}>
                        <MaterialCommunityIcons name="bolt" size={22} color="#A855F7" />
                        <Text style={styles.badgeItemName} allowFontScaling={false}>10h de foco</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]} allowFontScaling={false}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, { borderColor: "#3B82F6" }]}>
                        <FontAwesome5 name="brain" size={20} color="#3B82F6" />
                        <Text style={styles.badgeItemName} allowFontScaling={false}>Mestre da{"\n"}lógica</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]} allowFontScaling={false}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, { borderColor: "#FF7A00" }]}>
                        <FontAwesome5 name="rocket" size={18} color="#FF7A00" />
                        <Text style={styles.badgeItemName} allowFontScaling={false}>Início em IA</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]} allowFontScaling={false}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, styles.badgeItemLocked]}>
                        <Feather name="lock" size={18} color="#41415C" />
                        <Text style={[styles.badgeItemName, { color: "#8E8EA9" }]} allowFontScaling={false}>30 dias de{"\n"}foco</Text>
                        <Text style={[styles.badgeStatusText, { color: "#8E8EA9" }]} allowFontScaling={false}>0 / 30</Text>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.sairButton} onPress={confirmarSair} activeOpacity={0.8}>
                    <Feather name="log-out" size={16} color="#FF5C5C" />
                    <Text style={styles.sairText}>Sair da conta</Text>
                </TouchableOpacity>
            </ScrollView>

            {/* 🏆 MODAL DE TODAS AS CONQUISTAS */}
            <Modal
                visible={modalConquistasVisivel}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalConquistasVisivel(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>🏆 Todas as Conquistas</Text>
                            <TouchableOpacity onPress={() => setModalConquistasVisivel(false)}>
                                <Feather name="x" size={24} color="#FFF" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={styles.modalBadgeRow}>
                                <FontAwesome5 name="trophy" size={22} color="#FFD700" />
                                <View style={styles.modalBadgeTexts}>
                                    <Text style={styles.modalBadgeName}>Primeira semana</Text>
                                    <Text style={styles.modalBadgeDesc}>Complete sua primeira semana estudando no app.</Text>
                                </View>
                                <Text style={styles.modalBadgeStatusOk}>✓</Text>
                            </View>

                            <View style={styles.modalBadgeRow}>
                                <MaterialCommunityIcons name="bolt" size={24} color="#A855F7" />
                                <View style={styles.modalBadgeTexts}>
                                    <Text style={styles.modalBadgeName}>10h de foco</Text>
                                    <Text style={styles.modalBadgeDesc}>Acumule 10 horas de estudo usando o Timer.</Text>
                                </View>
                                <Text style={styles.modalBadgeStatusOk}>✓</Text>
                            </View>

                            <View style={styles.modalBadgeRow}>
                                <FontAwesome5 name="brain" size={22} color="#3B82F6" />
                                <View style={styles.modalBadgeTexts}>
                                    <Text style={styles.modalBadgeName}>Mestre da lógica</Text>
                                    <Text style={styles.modalBadgeDesc}>Acerte 5 quizzes seguidos sem errar.</Text>
                                </View>
                                <Text style={styles.modalBadgeStatusOk}>✓</Text>
                            </View>

                            <View style={styles.modalBadgeRow}>
                                <FontAwesome5 name="rocket" size={20} color="#FF7A00" />
                                <View style={styles.modalBadgeTexts}>
                                    <Text style={styles.modalBadgeName}>Início em IA</Text>
                                    <Text style={styles.modalBadgeDesc}>Complete a primeira lição da trilha de IA.</Text>
                                </View>
                                <Text style={styles.modalBadgeStatusOk}>✓</Text>
                            </View>

                            <View style={styles.modalBadgeRow}>
                                <Feather name="lock" size={20} color="#8E8EA9" />
                                <View style={styles.modalBadgeTexts}>
                                    <Text style={[styles.modalBadgeName, { color: "#8E8EA9" }]}>30 dias de foco</Text>
                                    <Text style={styles.modalBadgeDesc}>Estude por 30 dias seguidos sem quebrar a sequência.</Text>
                                </View>
                                <Text style={styles.modalBadgeStatusLocked}>0/30</Text>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal>

            {/* ✏️ MODAL DE EDIÇÃO DE NOME E AVATAR */}
            <Modal
                visible={modalEdicaoVisivel}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalEdicaoVisivel(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>✏️ Editar Perfil</Text>
                            <TouchableOpacity onPress={() => setModalEdicaoVisivel(false)}>
                                <Feather name="x" size={24} color="#FFF" />
                            </TouchableOpacity>
                        </View>

                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Text style={styles.labelInput}>Seu Nome:</Text>
                            <TextInput
                                style={styles.textInput}
                                value={novoNome}
                                onChangeText={setNovoNome}
                                placeholder="Digite seu nome"
                                placeholderTextColor="#8E8EA9"
                            />

                            <Text style={styles.labelInput}>Escolha seu Avatar:</Text>
                            <View style={styles.gridAvatares}>
                                {AVATARES.map((item) => {
                                    const selecionado = novoAvatar.id === item.id;
                                    return (
                                        <TouchableOpacity
                                            key={item.id}
                                            style={[
                                                styles.avatarOption,
                                                selecionado && styles.avatarOptionSelected,
                                            ]}
                                            onPress={() => setNovoAvatar(item)}
                                        >
                                            {item.lib === "material" ? (
                                                <MaterialCommunityIcons name={item.icone} size={28} color={item.cor} />
                                            ) : (
                                                <FontAwesome5 name={item.icone} size={26} color={item.cor} />
                                            )}
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>

                            <TouchableOpacity
                                style={styles.botaoSalvarModal}
                                onPress={salvarAlteracoesPerfil}
                                disabled={salvando}
                            >
                                {salvando ? (
                                    <ActivityIndicator color="#FFF" />
                                ) : (
                                    <Text style={styles.textoBotaoSalvarModal}>Salvar Alterações</Text>
                                )}
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    scrollContent: { paddingHorizontal: 20, paddingTop: 20, paddingBottom: 40 },

    topUserRow: { flexDirection: "row", alignItems: "center", marginBottom: 24, gap: 12 },
    avatarOuterRing: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 2,
        borderColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    avatarInnerBg: {
        width: 66,
        height: 66,
        borderRadius: 33,
        backgroundColor: "#15162E",
        justifyContent: "center",
        alignItems: "center",
    },
    editPencilBadge: {
        position: "absolute",
        bottom: 2,
        right: 2,
        backgroundColor: "#6C5CE7",
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#090A1A",
    },
    userMainInfo: { flex: 1 },
    profileUserName: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
    profileUserBio: { color: "#CBD5E1", fontSize: 12, marginTop: 4, lineHeight: 16 },
    locationRow: { flexDirection: "row", alignItems: "center", gap: 4, marginTop: 6 },
    locationText: { color: "#8E8EA9", fontSize: 11 },
    topStreakCard: {
        backgroundColor: "#15162E",
        padding: 10,
        borderRadius: 16,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#221F4D",
        minWidth: 75,
    },
    streakEmoji: { fontSize: 18, marginBottom: 2 },
    topStreakValue: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    topStreakLabel: { color: "#8E8EA9", fontSize: 9, textAlign: "center", marginTop: 2 },

    levelMainCard: {
        backgroundColor: "#15162E",
        borderRadius: 24,
        padding: 20,
        borderWidth: 1,
        borderColor: "#221F4D",
        marginBottom: 16,
        borderLeftWidth: 3,
        borderLeftColor: "#6C5CE7",
    },
    levelCardTop: { flexDirection: "row", alignItems: "center", gap: 12 },
    hexagonShield: {
        width: 50,
        height: 55,
        backgroundColor: "#221F4D",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#6C5CE7",
    },
    hexagonSubText: { color: "#8E8EA9", fontSize: 8, fontWeight: "bold" },
    hexagonMainNumber: { color: "#FFF", fontSize: 22, fontWeight: "bold", marginTop: -2 },
    levelTexts: { flex: 1 },
    levelTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    levelSubtitle: { color: "#8E8EA9", fontSize: 11, marginTop: 2 },
    xpProgressNumbers: { color: "#CBD5E1", fontSize: 11, marginTop: 8 },
    circularProgressSimulated: {
        width: 46,
        height: 46,
        borderRadius: 23,
        borderWidth: 3,
        borderColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
    },
    circularPercentText: { color: "#FFF", fontSize: 10, fontWeight: "bold" },
    horizontalTrackContainer: {
        height: 6,
        backgroundColor: "#221F4D",
        borderRadius: 3,
        marginTop: 14,
        position: "relative",
        overflow: "hidden",
    },
    horizontalBarFill: { height: "100%", backgroundColor: "#6C5CE7", borderRadius: 3 },
    horizontalPercentLabel: { display: "none" },
    continueButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        backgroundColor: "#090A1A",
        borderRadius: 14,
        paddingVertical: 10,
        marginTop: 16,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    continueButtonText: { color: "#FFF", fontSize: 13, fontWeight: "600" },

    messageDayCard: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 16,
        flexDirection: "row",
        gap: 14,
        borderWidth: 1,
        borderColor: "#221F4D",
        marginBottom: 16,
        position: "relative",
    },
    robotContainerBg: {
        width: 44,
        height: 44,
        borderRadius: 14,
        backgroundColor: "#221F4D",
        justifyContent: "center",
        alignItems: "center",
    },
    messageContent: { flex: 1 },
    messageTag: { color: "#A855F7", fontSize: 11, fontWeight: "bold" },
    messageBody: { color: "#FFF", fontSize: 13, fontStyle: "italic", fontWeight: "600", marginTop: 4 },
    messageSubBody: { color: "#8E8EA9", fontSize: 11, marginTop: 2 },
    starFloating: { position: "absolute", right: 16, top: 24, opacity: 0.8 },

    quadGrid: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginBottom: 24 },
    quadBox: {
        width: "48.5%",
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 14,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    quadIcon: { marginBottom: 8 },
    quadValue: { color: "#FFF", fontSize: 15, fontWeight: "bold" },
    quadLabel: { color: "#8E8EA9", fontSize: 11, marginTop: 4, lineHeight: 14 },

    sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
    sectionMainTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    verTodasText: { color: "#A855F7", fontSize: 12, fontWeight: "600" },
    horizontalBadges: { flexDirection: "row", marginBottom: 20 },
    badgeItem: {
        width: 96,
        minHeight: 108,
        backgroundColor: "#15162E",
        borderRadius: 16,
        borderWidth: 1.5,
        paddingVertical: 12,
        paddingHorizontal: 8,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    badgeItemLocked: { borderColor: "#41415C", opacity: 0.6 },
    badgeItemName: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8,
        lineHeight: 15,
    },
    badgeStatusText: { fontSize: 14, fontWeight: "bold", marginTop: 4 },

    sairButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#15162E",
        borderRadius: 14,
        padding: 14,
        borderWidth: 1,
        borderColor: "#221F4D",
        marginTop: 10,
    },
    sairText: { color: "#FF5C5C", fontSize: 14, fontWeight: "600" },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "#15162E",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 20,
        maxHeight: "75%",
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    modalTitle: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
    modalBadgeRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1F2044",
        borderRadius: 14,
        padding: 14,
        marginBottom: 10,
    },
    modalBadgeTexts: { flex: 1, marginLeft: 14 },
    modalBadgeName: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
    modalBadgeDesc: { color: "#8E8EA9", fontSize: 12, marginTop: 2 },
    modalBadgeStatusOk: { color: "#00BA4A", fontSize: 18, fontWeight: "bold" },
    modalBadgeStatusLocked: { color: "#8E8EA9", fontSize: 12, fontWeight: "bold" },

    // Estilos do Modal de Edição
    labelInput: { color: "#8E8EA9", fontSize: 13, marginBottom: 8, marginTop: 12 },
    textInput: {
        backgroundColor: "#090A1A",
        borderWidth: 1,
        borderColor: "#221F4D",
        borderRadius: 12,
        padding: 12,
        color: "#FFF",
        fontSize: 15,
    },
    gridAvatares: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 12,
        justifyContent: "space-between",
        marginVertical: 10,
    },
    avatarOption: {
        width: 55,
        height: 55,
        borderRadius: 28,
        backgroundColor: "#090A1A",
        borderWidth: 1.5,
        borderColor: "#221F4D",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarOptionSelected: {
        borderColor: "#6C5CE7",
        backgroundColor: "#1E1F3D",
        borderWidth: 2,
    },
    botaoSalvarModal: {
        backgroundColor: "#6C5CE7",
        borderRadius: 14,
        padding: 14,
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    textoBotaoSalvarModal: { color: "#FFF", fontSize: 15, fontWeight: "bold" },
});