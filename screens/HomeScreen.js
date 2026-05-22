import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
    // ---- ESTADOS DE PROGRESSO UNIFICADOS ----
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [streak, setStreak] = useState(1);

    const XP_KEY = "@studyflow:xp";
    const LEVEL_KEY = "@studyflow:level";

    // Dados da semana atual (Exemplo: Segunda a Domingo)
    // No futuro, podemos gerar esses números dinamicamente com base na data real!
    const diasDaSemana = [
        { id: 1, nome: "SEG", numero: "18", estudou: true, hoje: false },
        { id: 2, nome: "TER", numero: "19", estudou: true, hoje: false },
        { id: 3, nome: "QUA", numero: "20", estudou: false, hoje: false },
        { id: 4, nome: "QUI", numero: "21", estudou: true, hoje: false },
        { id: 5, nome: "SEX", numero: "22", estudou: false, hoje: true }, // Dia atual
        { id: 6, nome: "SÁB", numero: "23", estudou: false, hoje: false },
        { id: 7, nome: "DOM", numero: "24", estudou: false, hoje: false },
    ];

    const loadUserData = useCallback(async () => {
        try {
            const savedXp = await AsyncStorage.getItem(XP_KEY);
            const savedLevel = await AsyncStorage.getItem(LEVEL_KEY);

            if (savedXp !== null) setXp(parseInt(savedXp, 10));
            if (savedLevel !== null) setLevel(parseInt(savedLevel, 10));
        } catch (error) {
            console.log("Erro ao carregar dados do usuário:", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadUserData();
        }, [loadUserData]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Olá, Glaudejane! 👋</Text>
                        <Text style={styles.subWelcomeText}>Pronta para entrar no seu fluxo?</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Feather name="bell" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {/* 📅 NOVO COMPONENTE: CALENDÁRIO SEMANAL HORIZONTAL (COMPACTO) */}
                <View style={styles.semanaContainer}>
                    <Text style={styles.semanaTitle}>Foco Semanal</Text>
                    <View style={styles.diasRow}>
                        {diasDaSemana.map((dia) => (
                            <View
                                key={dia.id}
                                style={[
                                    styles.diaCard,
                                    dia.hoje && styles.diaHojeCard, // Destaca o dia de hoje
                                ]}
                            >
                                <Text style={[styles.diaNome, dia.hoje && styles.textoHoje]}>{dia.nome}</Text>
                                <View
                                    style={[
                                        styles.numeroCirculo,
                                        dia.estudou && styles.circuloEstudou, // Pinta de roxo se estudou
                                        dia.hoje && !dia.estudou && styles.circuloHoje,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.diaNumero,
                                            dia.estudou && styles.textoEstudou,
                                            dia.hoje && styles.textoHojeNumero,
                                        ]}
                                    >
                                        {dia.numero}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Card de Frase Motivacional */}
                <View style={styles.quoteCard}>
                    <Text style={styles.quoteText}>"Pequenos passos todos os dias levam a grandes conquistas."</Text>
                    <Text style={styles.quoteIcon}>⭐</Text>
                </View>

                {/* Seção Seu Progresso */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Seu progresso em tempo real</Text>
                </View>

                {/* Grid de Status */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🔥</Text>
                        <Text style={styles.statValue}>{streak}</Text>
                        <Text style={styles.statLabel}>Dias em{"\n"}sequência</Text>
                    </View>

                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>⭐</Text>
                        <Text style={styles.statValue}>{xp} XP</Text>
                        <Text style={styles.statLabel}>XP{"\n"}acumulado</Text>
                    </View>

                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🏆</Text>
                        <Text style={styles.statValue}>Nível {level}</Text>
                        <Text style={styles.statLabel}>Estudante{"\n"}Focada</Text>
                    </View>
                </View>

                {/* Trilhas de Estudo */}
                <View style={[styles.sectionHeader, { marginTop: 30 }]}>
                    <Text style={styles.sectionTitle}>Trilhas de estudo</Text>
                </View>

                <View style={styles.trilhasContainer}>
                    {/* CARD DE INGLÊS */}
                    <TouchableOpacity
                        style={styles.trilhaCard}
                        onPress={() => navigation.navigate("Weeks")}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.trilhaBadge, { backgroundColor: "#221F4D" }]}>
                            <Text style={styles.trilhaBadgeText}>EN</Text>
                        </View>
                        <Text style={styles.trilhaTitle}>Inglês</Text>
                        <Text style={styles.trilhaProgress}>1 / 20 semanas</Text>
                    </TouchableOpacity>

                    {/* CARD DE INTELIGÊNCIA ARTIFICIAL */}
                    <TouchableOpacity
                        style={styles.trilhaCard}
                        onPress={() =>
                            Alert.alert(
                                "Módulo de IA",
                                "O módulo estruturado de Inteligência Artificial será desbloqueado em breve! Continue focada.",
                            )
                        }
                        activeOpacity={0.7}
                    >
                        <View style={[styles.trilhaBadge, { backgroundColor: "#004B23" }]}>
                            <Text style={styles.trilhaBadgeText}>AI</Text>
                        </View>
                        <Text style={styles.trilhaTitle}>Inteligência{"\n"}Artificial</Text>
                        <Text style={styles.trilhaProgress}>0 / 30 aulas</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    scrollContent: { paddingHorizontal: 24, paddingTop: 20 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 24 },
    welcomeText: { color: "#FFFFFF", fontSize: 22, fontWeight: "bold" },
    subWelcomeText: { color: "#8E8EA9", fontSize: 14, marginTop: 4 },
    notificationButton: { backgroundColor: "#15162E", padding: 10, borderRadius: 12 },

    // ESTILOS DA RECORRÊNCIA SEMANAL (SLIM)
    semanaContainer: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    semanaTitle: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 12,
    },
    diasRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    diaCard: {
        alignItems: "center",
        flex: 1,
        paddingVertical: 6,
        borderRadius: 10,
    },
    diaHojeCard: {
        backgroundColor: "#221F4D", // Fundo diferenciado para o dia atual
    },
    diaNome: {
        color: "#8E8EA9",
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 6,
    },
    textoHoje: {
        color: "#6C5CE7", // Nome do dia em roxo se for hoje
    },
    numeroCirculo: {
        width: 28,
        height: 28,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    circuloEstudou: {
        backgroundColor: "#6C5CE7", // Roxo se cumpriu a meta do dia
    },
    circuloHoje: {
        borderWidth: 1.5,
        borderColor: "#6C5CE7", // Apenas uma borda roxa se for hoje mas não estudou ainda
    },
    diaNumero: {
        color: "#FFFFFF",
        fontSize: 13,
        fontWeight: "600",
    },
    textoEstudou: {
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    textoHojeNumero: {
        color: "#FFF",
    },

    quoteCard: {
        backgroundColor: "#221F4D",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },
    quoteText: { color: "#E6E6F2", fontSize: 13, fontStyle: "italic", flex: 1, paddingRight: 10, lineHeight: 18 },
    quoteIcon: { fontSize: 18 },
    sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    sectionTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold", letterSpacing: 0.5 },
    statsContainer: { flexDirection: "row", justifyContent: "space-between", gap: 10 },
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
    statIcon: { fontSize: 22, marginBottom: 8 },
    statValue: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
    statLabel: { color: "#8E8EA9", fontSize: 11, textAlign: "center", marginTop: 4, lineHeight: 14 },
    trilhasContainer: { flexDirection: "row", justifyContent: "space-between", gap: 14 },
    trilhaCard: {
        flex: 1,
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    trilhaBadge: {
        width: 36,
        height: 36,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    trilhaBadgeText: { color: "#FFF", fontWeight: "bold", fontSize: 12 },
    trilhaTitle: { color: "#FFF", fontSize: 15, fontWeight: "bold", lineHeight: 20 },
    trilhaProgress: { color: "#8E8EA9", fontSize: 12, marginTop: 8 },
});
