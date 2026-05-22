import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function TaskScreen({ navigation }) {
    const [totalXp, setTotalXp] = useState(0);

    const [missions, setMissions] = useState([
        {
            id: "1",
            type: "diaria",
            title: "Foco Inicial",
            desc: "Conclua 1 bloco de Pomodoro hoje",
            xpReward: 50,
            progress: "1/1",
            completed: true,
            claimed: false,
        },
        {
            id: "2",
            type: "diaria",
            title: "Cérebro Ativo",
            desc: "Acerte 1 Quiz na trilha de Inglês",
            xpReward: 50,
            progress: "0/1",
            completed: false,
            claimed: false,
        },
        {
            id: "3",
            type: "semanal",
            title: "Maratonista",
            desc: "Estude 3 semanas da trilha de Inglês",
            xpReward: 200,
            progress: "1/3",
            completed: false,
            claimed: false,
        },
        {
            id: "4",
            type: "semanal",
            title: "Inabalável",
            desc: "Mantenha 3 dias de sequência (Streak)",
            xpReward: 150,
            progress: "3/3",
            completed: true,
            claimed: false,
        },
    ]);

    const loadXP = useCallback(async () => {
        try {
            const savedXP = await AsyncStorage.getItem("@studyflow:xp");
            if (savedXP !== null) setTotalXp(parseInt(savedXP, 10));
        } catch (error) {
            console.log("Erro ao carregar XP:", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadXP();
        }, [loadXP]),
    );

    const claimReward = async (id, xpReward) => {
        try {
            const currentXPValue = await AsyncStorage.getItem("@studyflow:xp");
            let currentXP = currentXPValue ? parseInt(currentXPValue, 10) : 0;
            const newXP = currentXP + xpReward;
            await AsyncStorage.setItem("@studyflow:xp", newXP.toString());

            setMissions((prevMissions) =>
                prevMissions.map((mission) => (mission.id === id ? { ...mission, claimed: true } : mission)),
            );
            setTotalXp(newXP);
            Alert.alert("🎉 Recompensa Resgatada!", `Sua dedicação rendeu +${xpReward} XP!`);
        } catch (error) {
            console.log("Erro ao resgatar recompensa:", error);
        }
    };

    // 🏛️ HEADER DA LISTA: AGORA AS TRILHAS DE ESTUDO FICAM NO TOPO!
    const renderHeaderComponent = () => (
        <View style={styles.topContainer}>
            <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Trilhas de Estudo</Text>
                <View style={styles.titleLine} />
            </View>

            <View style={styles.trilhasContainer}>
                {/* CARD DE INGLÊS */}
                <TouchableOpacity
                    style={styles.trilhaCard}
                    onPress={() => navigation.navigate("Weeks")}
                    activeOpacity={0.7}
                >
                    <View style={[styles.trilhaBadge, { backgroundColor: "#221F4D" }]}>
                        <Text style={styles.trilhaIcon}>📚</Text>
                    </View>
                    <Text style={styles.trilhaTitle}>Inglês</Text>
                    <Text style={styles.trilhaProgress}>1 / 20 sem.</Text>
                </TouchableOpacity>

                {/* CARD DE INTELIGÊNCIA ARTIFICIAL */}
                <TouchableOpacity
                    style={styles.trilhaCard}
                    onPress={() => navigation.navigate("AIWeeks")}
                    activeOpacity={0.7}
                >
                    <View style={[styles.trilhaBadge, { backgroundColor: "#004B23" }]}>
                        <Text style={styles.trilhaIcon}>🤖</Text>
                    </View>
                    <Text style={styles.trilhaTitle}>Inteligência{"\n"}Artificial</Text>
                    <Text style={styles.trilhaProgress}>0 / 30 aulas</Text>
                </TouchableOpacity>
            </View>

            {/* TÍTULO DAS MISSÕES ABAIXO */}
            <View style={[styles.sectionHeader, { marginTop: 32 }]}>
                <Text style={styles.sectionTitle}>Minhas Missões Ativas</Text>
                <View style={styles.titleLine} />
            </View>
        </View>
    );

    const renderMissionItem = ({ item }) => (
        <View style={styles.taskCard}>
            <View style={styles.taskHeader}>
                <View style={[styles.badge, item.type === "diaria" ? styles.badgeDiaria : styles.badgeSemanal]}>
                    <Text style={styles.badgeText}>{item.type.toUpperCase()}</Text>
                </View>
                <Text style={styles.xpRewardText}>+{item.xpReward} XP</Text>
            </View>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text style={styles.taskDesc}>{item.desc}</Text>
            <View style={styles.taskFooter}>
                <Text style={styles.progressText}>Progresso: {item.progress}</Text>
                {!item.completed && (
                    <View style={[styles.statusBtn, styles.btnIncompleto]}>
                        <Text style={styles.btnIncompletoText}>Em andamento</Text>
                    </View>
                )}
                {item.completed && !item.claimed && (
                    <TouchableOpacity
                        style={[styles.statusBtn, styles.btnClaim]}
                        onPress={() => claimReward(item.id, item.xpReward)}
                    >
                        <Feather name="gift" size={14} color="#FFF" />
                        <Text style={styles.btnClaimText}>Resgatar XP</Text>
                    </TouchableOpacity>
                )}
                {item.claimed && (
                    <View style={[styles.statusBtn, styles.btnClaimed]}>
                        <Feather name="check-circle" size={14} color="#8E8EA9" />
                        <Text style={styles.btnClaimedText}>Concluído</Text>
                    </View>
                )}
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{ flex: 1, paddingRight: 8 }}>
                    <Text style={styles.headerTitle}>Central de Estudos</Text>
                    <Text style={styles.headerSubtitle}>Acesse conteúdos e missões</Text>
                </View>
                <View style={styles.xpBadgeContainer}>
                    <Text style={styles.xpBadgeValue}>{totalXp} XP</Text>
                </View>
            </View>

            <FlatList
                data={missions}
                keyExtractor={(item) => item.id}
                renderItem={renderMissionItem}
                ListHeaderComponent={renderHeaderComponent} // Renderiza Trilhas em cima
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    header: {
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: "#221F4D",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
    },
    headerTitle: { color: "#FFF", fontSize: 24, fontWeight: "bold" },
    headerSubtitle: { color: "#CBD5E1", fontSize: 13, marginTop: 4 },
    xpBadgeContainer: {
        backgroundColor: "#221F4D",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#6C5CE7",
        minWidth: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    xpBadgeValue: { color: "#FFF", fontWeight: "bold", fontSize: 13 },
    listContainer: { padding: 24, paddingBottom: 40 },

    // LINHA E SEÇÃO DE TÍTULO
    sectionHeader: { marginBottom: 16 },
    sectionTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold", letterSpacing: 0.5 },
    titleLine: { height: 2, backgroundColor: "#221F4D", width: 40, marginTop: 6, borderRadius: 1 },

    topContainer: { marginBottom: 16 },
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
        width: 40,
        height: 40,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 12,
    },
    trilhaIcon: { fontSize: 18 },
    trilhaTitle: { color: "#FFF", fontSize: 15, fontWeight: "bold", lineHeight: 20 },
    trilhaProgress: { color: "#8E8EA9", fontSize: 11, marginTop: 8 },

    taskCard: {
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    taskHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
    badge: { paddingVertical: 4, paddingHorizontal: 8, borderRadius: 6 },
    badgeDiaria: { backgroundColor: "#221F4D" },
    badgeSemanal: { backgroundColor: "#004B23" },
    badgeText: { color: "#FFF", fontSize: 10, fontWeight: "bold" },
    xpRewardText: { color: "#6C5CE7", fontWeight: "bold", fontSize: 14 },
    taskTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    taskDesc: { color: "#94A3B8", fontSize: 13, marginTop: 4, lineHeight: 18 },
    taskFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 16,
        paddingTop: 12,
        borderTopWidth: 1,
        borderColor: "#221F4D",
    },
    progressText: { color: "#8E8EA9", fontSize: 12, fontWeight: "500" },
    statusBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    btnIncompleto: { backgroundColor: "#221F4D" },
    btnIncompletoText: { color: "#8E8EA9", fontSize: 12, fontWeight: "600" },
    btnClaim: { backgroundColor: "#6C5CE7" },
    btnClaimText: { color: "#FFF", fontSize: 12, fontWeight: "bold" },
    btnClaimed: { backgroundColor: "#1F203B" },
    btnClaimedText: { color: "#8E8EA9", fontSize: 12, fontWeight: "600" },
});
