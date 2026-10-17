// screens/AIWeeksScreen.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, FlatList } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

// 🗺️ ESTRUTURAÇÃO PEDAGÓGICA DOS MÓDULOS DE IA
    export const modulosIA = [
        {
            id: "m1",
            numero: "MÓDULO 1",
            titulo: "Fundamentos sem Mistério",
            descricao: "O que é e como pensa uma Inteligência Artificial? Entenda as engrenagens por trás dos LLMs.",
            status: "liberado", // liberado, concluido, bloqueado
            aulas: ["Como a IA prevê códigos", "O fenômeno das Alucinações"],
        },
        {
            id: "m2",
            numero: "MÓDULO 2",
            titulo: "Engenharia de Prompts para Programação",
            descricao:
                "Aprenda a anatomia de um prompt perfeito para receber códigos exatos e sem respostas genéricas.",
            status: "liberado",
            aulas: ["Anatomia do Prompt Perfeito", "Persona Prompting para Devs"],
        },
        {
            id: "m3",
            numero: "MÓDULO 3",
            titulo: "IA como seu Tutor de Código Pessoal",
            descricao:
                "Use o ChatGPT e o Gemini para te explicar códigos complexos linha por linha e gerar desafios de lógica.",
            status: "liberado",
            aulas: ['Método "Explique-me como se eu tivesse 10 anos"', "Gerador de Quizzes Automáticos"],
        },
        {
            id: "m4",
            numero: "MÓDULO 4",
            titulo: "Depuração e Resolução de Erros",
            descricao:
                "Aprenda a decifrar erros assustadores do terminal usando IA sem precisar copiar o código pronto.",
            status: "liberado",
            aulas: ["Lendo logs de erro com IA", "Refatoração Guiada"],
        },
        {
            id: "m5",
            numero: "MÓDULO 5",
            titulo: "Assistentes Inline (GitHub Copilot)",
            descricao:
                "Como funcionam as ferramentas do mercado de trabalho real para acelerar sua digitação de código.",
            status: "liberado",
            aulas: ["Guiando a IA por comentários", "Autonomia vs Dependência"],
        },
        {
            id: "m6",
            numero: "MÓDULO 6",
            titulo: "Projeto Prático Integrado",
            descricao:
                "Consolide tudo conectando uma API de Inteligência Artificial em um gerador de frases automatizado.",
            status: "liberado",
            aulas: ["Entendendo APIs de IA", "Construindo o App do Zero"],
        },
        {
            id: "m7",
            numero: "MÓDULO 7",
            titulo: "Tokens, Contexto e Custos em LLMs",
            descricao: "Entenda como a IA lê texto em tokens, o que é a janela de contexto e por que isso afeta o custo.",
            status: "liberado",
            aulas: ["O que são Tokens", "Janela de Contexto e Custos"],
        },
        {
            id: "m8",
            numero: "MÓDULO 8",
            titulo: "Modelos Open-Source vs Proprietários",
            descricao: "Compare modelos abertos e fechados e aprenda a escolher o certo para cada projeto.",
            status: "liberado",
            aulas: ["Abertos vs Fechados", "Como escolher o modelo certo"],
        },
        {
            id: "m9",
            numero: "MÓDULO 9",
            titulo: "Engenharia de Prompt: System, User e Assistant",
            descricao: "Conheça os três papéis de uma conversa com a IA e use cada um a seu favor.",
            status: "liberado",
            aulas: ["O papel do System Prompt", "User e Assistant na prática"],
        },
        {
            id: "m10",
            numero: "MÓDULO 10",
            titulo: "O Problema das Alucinações em IA",
            descricao: "Entenda por que a IA inventa respostas com segurança e como reduzir esse risco.",
            status: "liberado",
            aulas: ["Por que a IA alucina", "Técnicas para checar respostas"],
        },
        {
            id: "m11",
            numero: "MÓDULO 11",
            titulo: "RAG (Retrieval-Augmented Generation)",
            descricao: "Dê à IA acesso aos seus próprios documentos para respostas mais precisas e atualizadas.",
            status: "liberado",
            aulas: ["Como funciona o RAG", "Quando usar RAG"],
        },
        {
            id: "m12",
            numero: "MÓDULO 12",
            titulo: "Bancos de Dados Vetoriais e Embeddings",
            descricao: "Descubra como textos viram números que a IA consegue comparar e buscar por significado.",
            status: "liberado",
            aulas: ["O que são Embeddings", "Busca por similaridade"],
        },
        {
            id: "m13",
            numero: "MÓDULO 13",
            titulo: "Function Calling e Tool Use",
            descricao: "Ensine a IA a usar ferramentas e funções do seu app para realizar ações de verdade.",
            status: "liberado",
            aulas: ["IA chamando funções", "Ferramentas e ações"],
        },
        {
            id: "m14",
            numero: "MÓDULO 14",
            titulo: "Agentes de IA e Multi-Agent Systems",
            descricao: "Veja como agentes planejam e executam tarefas, sozinhos ou em equipe.",
            status: "liberado",
            aulas: ["O que é um Agente", "Vários agentes trabalhando juntos"],
        },
        {
            id: "m15",
            numero: "MÓDULO 15",
            titulo: "Streaming de Respostas em Tempo Real",
            descricao: "Mostre a resposta da IA aparecendo aos poucos, como no ChatGPT, para um app mais fluido.",
            status: "liberado",
            aulas: ["Como funciona o Streaming", "Respostas em tempo real no app"],
        },
        {
            id: "m16",
            numero: "MÓDULO 16",
            titulo: "Segurança: Prompt Injection e Moderação",
            descricao: "Aprenda a proteger seu app contra instruções maliciosas e a moderar conteúdo.",
            status: "liberado",
            aulas: ["O que é Prompt Injection", "Moderação de conteúdo"],
        },
        {
            id: "m17",
            numero: "MÓDULO 17",
            titulo: "Fine-Tuning (Ajuste Fino de Modelos)",
            descricao: "Entenda quando vale ajustar um modelo com seus próprios dados e quando não vale.",
            status: "liberado",
            aulas: ["O que é Fine-Tuning", "Fine-Tuning vs Prompt vs RAG"],
        },
        {
            id: "m18",
            numero: "MÓDULO 18",
            titulo: "Visão Computacional e Modelos Multimodais",
            descricao: "Explore modelos que entendem imagens, áudio e texto juntos.",
            status: "liberado",
            aulas: ["IA que enxerga imagens", "Modelos multimodais"],
        },
        {
            id: "m19",
            numero: "MÓDULO 19",
            titulo: "Avaliação de Modelos (LLM Evaluation & Tracing)",
            descricao: "Aprenda a medir se a IA está respondendo bem e a rastrear o que acontece por trás.",
            status: "liberado",
            aulas: ["Como avaliar respostas", "Tracing e observabilidade"],
        },
        {
            id: "m20",
            numero: "MÓDULO 20",
            titulo: "O Futuro dos Apps: Da IA Conversacional aos Agentes Autônomos",
            descricao: "Feche a trilha olhando para o futuro: da IA que conversa aos agentes autônomos.",
            status: "liberado",
            aulas: ["Da conversa à ação", "Agentes autônomos"],
        },
    ];

export default function AIWeeksScreen({ navigation }) {
    const renderModulo = ({ item, index }) => {
        const isBloqueado = item.status === "bloqueado";

        return (
            <View style={styles.timelineRow}>
                {/* Linha vertical decorativa (estilo trilha de jogo) */}
                <View style={styles.leftTimelineContainer}>
                    <View style={[styles.timelineDot, isBloqueado ? styles.dotBloqueado : styles.dotLiberado]}>
                        <Feather
                            name={isBloqueado ? "lock" : "play"}
                            size={12}
                            color={isBloqueado ? "#41415C" : "#FFF"}
                        />
                    </View>
                    {index !== modulosIA.length - 1 && <View style={styles.timelineLine} />}
                </View>

                {/* Card do Módulo */}
                <TouchableOpacity
                    style={[styles.moduloCard, isBloqueado && styles.moduloCardBloqueado]}
                    disabled={isBloqueado}
                    activeOpacity={0.7}
                    // 🚀 Procure por isso no seu AIWeeksScreen.js e substitua:
                    onPress={() => navigation.navigate("Learn", { tipoTrilha: "IA", moduloId: item.id })}
                >
                    <View style={styles.moduloHeader}>
                        <Text style={[styles.moduloBadgeText, isBloqueado && styles.textBloqueado]}>{item.numero}</Text>
                        {!isBloqueado && (
                            <View style={styles.xpBadge}>
                                <Text style={styles.xpBadgeText}>+150 XP</Text>
                            </View>
                        )}
                    </View>

                    <Text style={[styles.moduloTitle, isBloqueado && styles.textBloqueado]}>{item.titulo}</Text>

                    <Text style={[styles.moduloDesc, isBloqueado && styles.textBloqueado]}>{item.descricao}</Text>

                    {/* Footer do Card com o contador de aulas */}
                    <View style={styles.moduloFooter}>
                        <View style={styles.aulasCountRow}>
                            <Feather name="book-open" size={14} color={isBloqueado ? "#41415C" : "#8E8EA9"} />
                            <Text style={[styles.aulasCountText, isBloqueado && styles.textBloqueado]}>
                                {item.aulas.length} lições práticas
                            </Text>
                        </View>
                        {!isBloqueado && <Feather name="arrow-right" size={16} color="#6C5CE7" />}
                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER SUPERIOR */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={22} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Inteligência Artificial</Text>
                    <Text style={styles.headerSubtitle}>Trilha Prática e Pedagógica</Text>
                </View>
                <View style={styles.topRobotBg}>
                    <MaterialCommunityIcons name="robot-outline" size={24} color="#6C5CE7" />
                </View>
            </View>

            {/* LISTA DOS MÓDULOS EM TIMELINE */}
            <FlatList
                data={modulosIA}
                keyExtractor={(item) => item.id}
                renderItem={renderModulo}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },

    // HEADER STYLES
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: "#221F4D",
        gap: 14,
    },
    backButton: { backgroundColor: "#15162E", padding: 10, borderRadius: 12, borderWidth: 1, borderColor: "#221F4D" },
    headerTitleContainer: { flex: 1 },
    headerTitle: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
    headerSubtitle: { color: "#8E8EA9", fontSize: 12, marginTop: 2 },
    topRobotBg: {
        width: 42,
        height: 42,
        borderRadius: 12,
        backgroundColor: "#15162E",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#6C5CE7",
    },

    // TIMELINE E LISTA STYLES
    listContent: { paddingHorizontal: 20, paddingTop: 24, paddingBottom: 40 },
    timelineRow: { flexDirection: "row", gap: 12 },
    leftTimelineContainer: { alignItems: "center", width: 24 },
    timelineDot: { width: 24, height: 24, borderRadius: 12, justifyContent: "center", alignItems: "center", zIndex: 2 },
    dotLiberado: {
        backgroundColor: "#6C5CE7",
        shadowColor: "#6C5CE7",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
    dotBloqueado: { backgroundColor: "#15162E", borderWidth: 1, borderColor: "#221F4D" },
    timelineLine: { width: 2, flex: 1, backgroundColor: "#221F4D", marginTop: -2, marginBottom: -2 },

    // CARDS DE CONTEÚDO STYLES
    moduloCard: {
        flex: 1,
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#221F4D",
        marginBottom: 24,
    },
    moduloCardBloqueado: { opacity: 0.4 },
    moduloHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 },
    moduloBadgeText: { color: "#A855F7", fontSize: 10, fontWeight: "bold", letterSpacing: 0.5 },
    xpBadge: { backgroundColor: "#1A2E1F", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 8 },
    xpBadgeText: { color: "#00BA4A", fontSize: 10, fontWeight: "bold" },
    moduloTitle: { color: "#FFF", fontSize: 15, fontWeight: "bold", lineHeight: 20 },
    moduloDesc: { color: "#8E8EA9", fontSize: 12, marginTop: 6, lineHeight: 18 },
    moduloFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 14,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: "#221F4D",
    },
    aulasCountRow: { flexDirection: "row", alignItems: "center", gap: 6 },
    aulasCountText: { color: "#CBD5E1", fontSize: 12, fontWeight: "500" },

    // CORES TEXTOS BLOQUEADOS
    textBloqueado: { color: "#41415C" },
});