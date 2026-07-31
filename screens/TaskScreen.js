// screens/TasksScreen.js
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { semanasIngles } from "./WeeksScreen";
import { modulosPython } from "./PythonWeeksScreen";
import { modulosIA } from "./AIWeeksScreen";
import { projetos } from "./BuildAppsScreen";
export default function TasksScreen({ navigation }) {
    // 📚 LISTA DE TRILHAS FORMATADA PARA O DESIGN PREMIUM
    const trilhas = [
        {
            id: "Ingles",
            titulo: "Inglês para Tech",
            subtitulo: "Foco em Tecnologia & Autonomia",
            tags: ["Essencial", "Conversação"],
            corBorda: "#6C5CE7",
            icone: () => <FontAwesome5 name="graduation-cap" size={22} color="#6C5CE7" />,
            chaveProgresso: "Ingles",
            rota: "Weeks", // Vai para a tela de semanas de inglês
        },
        {
            id: "IA",
            titulo: "Inteligência Artificial",
            subtitulo: "Prompts, LLMs e Engenharia de Código",
            tags: ["Inovação", "Produtividade"],
            corBorda: "#A855F7",
            icone: () => <MaterialCommunityIcons name="robot-outline" size={24} color="#A855F7" />,
            chaveProgresso: "IA",
            rota: "AIWeeks", // Vai para a trilha de IA que criamos
        },
        {
            id: "Python",
            titulo: "Dominando Python",
            subtitulo: "Lógica, Estrutura de Dados e Sintaxe do Zero",
            tags: ["Back-End", "Lógica"],
            corBorda: "#FFD700",
            icone: () => <FontAwesome5 name="python" size={24} color="#FFD700" />,
            chaveProgresso: "Python",
            rota: "PythonWeeks",
        },
        {
            id: "AppsIA",
            titulo: "Criando Apps Práticos",
            subtitulo: "Desenvolvimento mobile mão na massa para iniciantes",
            tags: ["Projetos", "Iniciante"],
            corBorda: "#00BA4A",
            icone: () => <MaterialCommunityIcons name="application-cog-outline" size={24} color="#00BA4A" />,
            chaveProgresso: "BuildApps",
            rota: "BuildApps", // 🌟 Aponta para a tela que mostra TODOS os módulos
        },
    ];
const TOTAL_LICOES = {
    Ingles: semanasIngles.length,
    Python: modulosPython.length,
    IA: modulosIA.length,
    BuildApps: projetos.length,
};

const [progressoPorTrilha, setProgressoPorTrilha] = useState({
    Ingles: 0,
    Python: 0,
    IA: 0,
    BuildApps: 0,
});

const carregarProgresso = useCallback(async () => {
    try {
        const salvasStr = await AsyncStorage.getItem("@studyflow:completedLessons");
        const licoesConcluidas = salvasStr ? JSON.parse(salvasStr) : [];

        const calcularPercentual = (trilha) => {
            const concluidas = licoesConcluidas.filter((id) => id.startsWith(`${trilha}:`)).length;
            return Math.round((concluidas / TOTAL_LICOES[trilha]) * 100);
        };

        setProgressoPorTrilha({
            Ingles: calcularPercentual("Ingles"),
            Python: calcularPercentual("Python"),
            IA: calcularPercentual("IA"),
            BuildApps: calcularPercentual("BuildApps"),
        });
    } catch (error) {
        console.log("Erro ao carregar progresso das trilhas:", error);
    }
}, []);

useFocusEffect(
    useCallback(() => {
        carregarProgresso();
    }, [carregarProgresso]),
);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* HEADER DA TELA */}
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Central de Estudos</Text>
                    <Text style={styles.headerSubtitle}>Escolha uma trilha e continue evoluindo</Text>
                </View>

                {/* SEÇÃO PRINCIPAL DE TRILHAS */}
                <Text style={styles.sectionTitle}>Suas Trilhas de Conhecimento</Text>

                <View style={styles.trilhasContainer}>
                    {trilhas.map((trilha) => {
const isEmBreve = false; // nenhuma trilha bloqueada no momento
const percentual = progressoPorTrilha[trilha.chaveProgresso] ?? 0;
                        return (
                            <TouchableOpacity
                                key={trilha.id}
                                style={[
                                    styles.trilhaCard,
                                    { borderLeftColor: trilha.corBorda },
                                    isEmBreve && styles.trilhaCardDesabilitado,
                                ]}
                                activeOpacity={0.7}
                                disabled={isEmBreve}
                                onPress={() => {
                                    if (trilha.id === "AppsIA") {
                                        navigation.navigate("BuildApps");
                                    } else {
                                        navigation.navigate(trilha.rota);
                                    }
                                }}
                            >
                                <View style={styles.trilhaTopRow}>
                                    <View style={styles.iconContainerBg}>{trilha.icone()}</View>

                                    <View style={styles.trilhaTexts}>
                                        <Text style={styles.trilhaTitleText}>{trilha.titulo}</Text>
                                        <Text style={styles.trilhaSub} numberOfLines={1}>
                                            {trilha.subtitulo}
                                        </Text>
                                    </View>
                                </View>

                                {/* BARRA DE PROGRESSO REAL */}
                                <View style={styles.progressBarTrack}>
                                    <View
                                        style={[
                                            styles.progressBarFill,
                                            { width: `${percentual}%`, backgroundColor: trilha.corBorda },
                                        ]}
                                    />
                                </View>
                                <Text style={styles.progressText}>{percentual}% concluído</Text>

                                {/* TAGS E STATUS */}
                                <View style={styles.trilhaFooter}>
                                    <View style={styles.tagsRow}>
                                        {trilha.tags.map((tag, idx) => (
                                            <View key={idx} style={styles.tagBadge}>
                                                <Text style={styles.tagText}>{tag}</Text>
                                            </View>
                                        ))}
                                    </View>

                                    <View style={styles.statusZone}>
                                        {isEmBreve ? (
                                            <View style={styles.lockBadge}>
                                                <Feather name="lock" size={12} color="#8E8EA9" />
                                                <Text style={styles.lockText}>Em breve</Text>
                                            </View>
                                        ) : (
                                            <View style={styles.arrowBadge}>
                                                <Text style={styles.entrarText}>Estudar</Text>
                                                <Feather name="arrow-right" size={12} color="#FFF" />
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    scrollContent: { padding: 20 },

    // HEADER
    header: { marginBottom: 28, paddingTop: 10 },
    headerTitle: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
    headerSubtitle: { color: "#8E8EA9", fontSize: 13, marginTop: 4 },

    // SEÇÃO Title
    sectionTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold", marginBottom: 16, letterSpacing: 0.3 },

    // TRILHAS CONTAINER & CARDS
    trilhasContainer: { gap: 16 },
    trilhaCard: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 18,
        borderWidth: 1,
        borderColor: "#221F4D",
        borderLeftWidth: 4,
    },
    trilhaCardDesabilitado: { opacity: 0.5, borderColor: "#1F1F38" },
    trilhaTopRow: { flexDirection: "row", alignItems: "center", gap: 14 },
    iconContainerBg: {
        width: 46,
        height: 46,
        borderRadius: 14,
        backgroundColor: "#090A1A",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    trilhaTexts: { flex: 1 },
    trilhaTitleText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    trilhaSub: { color: "#8E8EA9", fontSize: 12, marginTop: 4 },

    // FOOTER DO CARD
    trilhaFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
        paddingTop: 14,
        borderTopWidth: 1,
        borderColor: "#221F4D",
    },
    tagsRow: { flexDirection: "row", gap: 6 },
    tagBadge: { backgroundColor: "#221F4D", paddingVertical: 4, paddingHorizontal: 8, borderRadius: 8 },
    tagText: { color: "#CBD5E1", fontSize: 10, fontWeight: "600" },

    // BADGES DE STATUS
    statusZone: { flexDirection: "row", alignItems: "center" },
    lockBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#090A1A",
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    lockText: { color: "#8E8EA9", fontSize: 11, fontWeight: "500" },
    arrowBadge: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        backgroundColor: "#6C5CE7",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    entrarText: { color: "#FFF", fontSize: 11, fontWeight: "bold" },

    progressBarTrack: {
        height: 6,
        backgroundColor: "#221F4D",
        borderRadius: 3,
        marginTop: 12,
        overflow: "hidden",
    },
    progressBarFill: {
        height: "100%",
        borderRadius: 3,
    },
    progressText: {
        color: "#8E8EA9",
        fontSize: 11,
        marginTop: 6,
    },
});
