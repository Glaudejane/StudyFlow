// screens/TasksScreen.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";

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
            progresso: "100%", // Desbloqueado para testes
            rota: "Weeks", // Vai para a tela de semanas de inglês
        },
        {
            id: "IA",
            titulo: "Inteligência Artificial",
            subtitulo: "Prompts, LLMs e Engenharia de Código",
            tags: ["Inovação", "Produtividade"],
            corBorda: "#A855F7",
            icone: () => <MaterialCommunityIcons name="robot-outline" size={24} color="#A855F7" />,
            progresso: "100%",
            rota: "AIWeeks", // Vai para a trilha de IA que criamos
        },
        {
            id: "Python",
            titulo: "Dominando Python",
            subtitulo: "Lógica, Estrutura de Dados e Sintaxe do Zero",
            tags: ["Back-End", "Lógica"],
            corBorda: "#FFD700",
            icone: () => <FontAwesome5 name="python" size={24} color="#FFD700" />,
            progresso: "100%",
            rota: "PythonWeeks",
        },
        {
            id: "AppsIA",
            titulo: "Criando Apps Práticos",
            subtitulo: "Desenvolvimento mobile mão na massa para iniciantes",
            tags: ["Projetos", "Iniciante"],
            corBorda: "#00BA4A",
            icone: () => <MaterialCommunityIcons name="application-cog-outline" size={24} color="#00BA4A" />,
            progresso: "100%",
            rota: "BuildApps", // 🌟 Aponta para a tela que mostra TODOS os módulos
        },
    ];

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
                        const isEmBreve = trilha.progresso === "Em breve";

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
                                        <Text style={styles.trilhaSSubtitulo} numberOfLines={1}>
                                            {trilha.subtitulo}
                                        </Text>
                                    </View>
                                </View>

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
});
