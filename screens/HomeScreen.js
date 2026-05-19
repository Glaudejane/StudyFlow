import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Cabeçalho / Header */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Olá, Glaudejane! 👋</Text>
                        <Text style={styles.subWelcomeText}>Pronta para entrar no seu fluxo?</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Feather name="bell" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {/* Card Foco de Hoje */}
                <View style={styles.focusCard}>
                    <View style={styles.focusInfo}>
                        <Text style={styles.focusTitle}>Foco de hoje</Text>
                        <Text style={styles.focusMinutes}>
                            15 <Text style={styles.focusTotal}>/ 20 min</Text>
                        </Text>
                        <Text style={styles.focusSubtitle}>Tempo de foco</Text>
                    </View>
                    {/* Representação do Círculo de Progresso */}
                    <View style={styles.progressCircleContainer}>
                        <View style={styles.progressCircle}>
                            <Text style={styles.progressPercentage}>75%</Text>
                        </View>
                    </View>
                </View>

                {/* Card de Frase Motivacional */}
                <View style={styles.quoteCard}>
                    <Text style={styles.quoteText}>"Pequenos passos todos os dias levam a grandes conquistas."</Text>
                    <Text style={styles.quoteIcon}>⭐</Text>
                </View>

                {/* Seção Seu Progresso */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Seu progresso</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAllText}>Ver tudo</Text>
                    </TouchableOpacity>
                </View>

                {/* Grid de Status/Progresso (3 colunas) */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🔥</Text>
                        <Text style={styles.statValue}>12</Text>
                        <Text style={styles.statLabel}>Dias em{"\n"}sequência</Text>
                    </View>

                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>⭐</Text>
                        <Text style={styles.statValue}>850</Text>
                        <Text style={styles.statLabel}>XP{"\n"}acumulado</Text>
                    </View>

                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🏆</Text>
                        <Text style={styles.statValue}>Nível 7</Text>
                        <Text style={styles.statLabel}>Estudante{"\n"}Focado</Text>
                    </View>
                </View>

                {/* Espaço extra no final para o scroll não cortar embaixo por causa da barra */}
                <View style={{ height: 30 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A", // Fundo ultra escuro do StudyFlow
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 20,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    welcomeText: {
        color: "#FFFFFF",
        fontSize: 22,
        fontWeight: "bold",
    },
    subWelcomeText: {
        color: "#8E8EA9",
        fontSize: 14,
        marginTop: 4,
    },
    notificationButton: {
        backgroundColor: "#15162E",
        padding: 10,
        borderRadius: 12,
    },
    focusCard: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    focusInfo: {
        flex: 1,
    },
    focusTitle: {
        color: "#8E8EA9",
        fontSize: 13,
        fontWeight: "500",
    },
    focusMinutes: {
        color: "#FFFFFF",
        fontSize: 28,
        fontWeight: "bold",
        marginVertical: 6,
    },
    focusTotal: {
        color: "#8E8EA9",
        fontSize: 16,
        fontWeight: "normal",
    },
    focusSubtitle: {
        color: "#8E8EA9",
        fontSize: 12,
    },
    progressCircleContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    progressCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        borderWidth: 4,
        borderColor: "#6C5CE7", // Roxo neon
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#221F4D",
    },
    progressPercentage: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
    },
    quoteCard: {
        backgroundColor: "#221F4D", // Roxo mais azulado destacado
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    quoteText: {
        color: "#E6E6F2",
        fontSize: 13,
        fontStyle: "italic",
        flex: 1,
        paddingRight: 10,
        lineHeight: 18,
    },
    quoteIcon: {
        fontSize: 18,
    },
    sectionHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    sectionTitle: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
    seeAllText: {
        color: "#6C5CE7",
        fontSize: 13,
        fontWeight: "500",
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 10,
    },
    statBox: {
        flex: 1,
        backgroundColor: "#15162E",
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    statIcon: {
        fontSize: 22,
        marginBottom: 8,
    },
    statValue: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    statLabel: {
        color: "#8E8EA9",
        fontSize: 11,
        textAlign: "center",
        marginTop: 4,
        lineHeight: 14,
    },
});
