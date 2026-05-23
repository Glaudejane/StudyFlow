import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function HomeScreen() {
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [streak, setStreak] = useState(1);

    const XP_KEY = "@studyflow:xp";
    const LEVEL_KEY = "@studyflow:level";

    // Valores fictícios de progresso para a Home exibir os indicadores
    const progressoIngles = 5; // Ex: 1 de 20 semanas = 5%
    const progressoIA = 0;

    // 📆 Obtém a data de hoje do sistema
    const hoje = new Date();
    const diaAtualSemana = hoje.getDay(); // Retorna 0 para Domingo, 1 para Segunda, etc.
    const diaAtualMes = hoje.getDate(); // Retorna o número do dia (ex: 23)

    // Criamos uma lista com os dias da semana retroativos/futuros baseados em hoje
    const nomesDias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

    const diasDaSemana = nomesDias.map((nome, index) => {
        // Descobre a diferença de dias em relação ao dia atual
        const diferenca = index - diaAtualSemana;
        const dataDoDia = new Date(hoje);
        dataDoDia.setDate(diaAtualMes + diferenca);

        return {
            id: index.toString(),
            nome: nome,
            numero: dataDoDia.getDate(), // O número correto do dia do mês
            hoje: index === diaAtualSemana, // Define true apenas para o dia atual real
            estudou: index < diaAtualSemana, // Exemplo: marca que estudou nos dias que já passaram
        };
    });

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
                        <Text style={styles.subWelcomeText}>Seu painel de evolução</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Feather name="bell" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {/* Calendário Semanal */}
                <View style={styles.semanaContainer}>
                    <Text style={styles.semanaTitle}>Foco Semanal</Text>
                    <View style={styles.diasRow}>
                        {diasDaSemana.map((dia) => (
                            <View key={dia.id} style={[styles.diaCard, dia.hoje && styles.diaHojeCard]}>
                                <Text style={[styles.diaNome, dia.hoje && styles.textoHoje]}>{dia.nome}</Text>
                                <View
                                    style={[
                                        styles.numeroCirculo,
                                        dia.estudou && styles.circuloEstudou,
                                        dia.hoje && !dia.estudou && styles.circuloHoje,
                                    ]}
                                >
                                    <Text
                                        style={[
                                            styles.diaNumero,
                                            dia.estudou && styles.textoEstudou,
                                            dia.hoje && styles.textoHoje,
                                        ]}
                                    >
                                        {dia.numero}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
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

                {/* 📊 INDICADORES DE EVOLUÇÃO (CARDS SEM TOQUE, APENAS VISUAIS) */}
                <View style={[styles.sectionHeader, { marginTop: 30 }]}>
                    <Text style={styles.sectionTitle}>Status de Conclusão</Text>
                </View>

                <View style={styles.statusCard}>
                    <View style={styles.statusInfoRow}>
                        <Text style={styles.statusCardTitle}>📚 EN</Text>
                        <Text style={styles.statusPercentage}>{progressoIngles}%</Text>
                    </View>
                    <View style={styles.progressTrack}>
                        <View
                            style={[styles.progressBar, { width: `${progressoIngles}%`, backgroundColor: "#6C5CE7" }]}
                        />
                    </View>
                </View>

                <View style={styles.statusCard}>
                    <View style={styles.statusInfoRow}>
                        <Text style={styles.statusCardTitle}>🤖 IA</Text>
                        <Text style={styles.statusPercentage}>{progressoIA}%</Text>
                    </View>
                    <View style={styles.progressTrack}>
                        <View style={[styles.progressBar, { width: `${progressoIA}%`, backgroundColor: "#004B23" }]} />
                    </View>
                </View>

                {/* Card de Frase Motivacional */}
                <View style={[styles.quoteCard, { marginTop: 10 }]}>
                    <Text style={styles.quoteText}>"Pequenos passos todos os dias levam a grandes conquistas."</Text>
                    <Text style={styles.quoteIcon}>⭐</Text>
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
    semanaContainer: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 16,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    semanaTitle: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold", marginBottom: 12 },
    diasRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
    diaCard: { alignItems: "center", flex: 1, paddingVertical: 6, borderRadius: 10 },
    diaHojeCard: { backgroundColor: "#221F4D" },
    diaNome: { color: "#8E8EA9", fontSize: 10, fontWeight: "bold", marginBottom: 6 },
    textoHoje: { color: "#6C5CE7" },
    numeroCirculo: { width: 28, height: 28, borderRadius: 14, justifyContent: "center", alignItems: "center" },
    circuloEstudou: { backgroundColor: "#6C5CE7" },
    circuloHoje: { borderWidth: 1.5, borderColor: "#6C5CE7" },
    diaNumero: { color: "#FFFFFF", fontSize: 13, fontWeight: "600" },
    textoEstudou: { color: "#FFFFFF", fontWeight: "bold" },
    textoHojeNumero: { color: "#FFF" },
    sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    sectionTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold", letterSpacing: 0.5 },
    statsContainer: { flexDirection: "row", justifyContent: "space-between", gap: 10, marginBottom: 10 },
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

    // ESTILOS DAS BARRAS DE PROGRESSO DA HOME
    statusCard: {
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    statusInfoRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 },
    statusCardTitle: { color: "#FFF", fontSize: 14, fontWeight: "600" },
    statusPercentage: { color: "#8E8EA9", fontSize: 13, fontWeight: "bold" },
    progressTrack: { height: 8, backgroundColor: "#221F4D", borderRadius: 4, overflow: "hidden" },
    progressBar: { height: "100%", borderRadius: 4 },

    quoteCard: {
        backgroundColor: "#221F4D",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    quoteText: { color: "#E6E6F2", fontSize: 13, fontStyle: "italic", flex: 1, paddingRight: 10, lineHeight: 18 },
    quoteIcon: { fontSize: 18 },
});