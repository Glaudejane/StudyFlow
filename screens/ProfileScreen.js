// screens/ProfileScreen.js
import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { Feather, FontAwesome5, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

export default function ProfileScreen() {
    const [xp, setXp] = useState(725); // Pega o seu XP atual ou padrão
    const [level, setLevel] = useState(7);
    const [streak, setStreak] = useState(12);

    const loadProfileData = useCallback(async () => {
        try {
            const savedXp = await AsyncStorage.getItem("@studyflow:xp");
            const savedLevel = await AsyncStorage.getItem("@studyflow:level");
            if (savedXp !== null) setXp(parseInt(savedXp, 10));
            if (savedLevel !== null) setLevel(parseInt(savedLevel, 10));
        } catch (error) {
            console.log("Erro ao carregar dados do perfil:", error);
        }
    }, []);

    useFocusEffect(
        useCallback(() => {
            loadProfileData();
        }, [loadProfileData]),
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* 1. TOPO: AVATAR NEON E INFORMAÇÕES */}
                <View style={styles.topUserRow}>
                    <View style={styles.avatarOuterRing}>
                        <View style={styles.avatarInnerBg}>
                            <FontAwesome5 name="user-astronaut" size={36} color="#6C5CE7" />
                        </View>
                        <TouchableOpacity style={styles.editPencilBadge}>
                            <Feather name="edit-2" size={10} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.userMainInfo}>
                        <Text style={styles.profileUserName}>Glaudejane 👋</Text>
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
                        {/* Escudo de Nível em código puro */}
                        <View style={styles.hexagonShield}>
                            <Text style={styles.hexagonSubText}>NÍVEL</Text>
                            <Text style={styles.hexagonMainNumber}>{level}</Text>
                        </View>

                        <View style={styles.levelTexts}>
                            <Text style={styles.levelTitle}>Estudante Focado 👑</Text>
                            <Text style={styles.levelSubtitle}>Você está no caminho certo!</Text>
                            <Text style={styles.xpProgressNumbers}>850 / 1.000 XP para o próximo nível</Text>
                        </View>

                        {/* Simulação do Círculo de 82% */}
                        <View style={styles.circularProgressSimulated}>
                            <Text style={styles.circularPercentText}>82%</Text>
                        </View>
                    </View>

                    {/* Barra de progresso horizontal roxa */}
                    <View style={styles.horizontalTrackContainer}>
                        <View style={[styles.horizontalBarFill, { width: "82%" }]} />
                        <Text style={styles.horizontalPercentLabel}>82%</Text>
                    </View>

                    <TouchableOpacity style={styles.continueButton} activeOpacity={0.8}>
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
                        <Text style={styles.messageBody}>"Seu futuro está sendo construído agora."</Text>
                        <Text style={styles.messageSubBody}>Acredite no processo, cada pequeno passo conta.</Text>
                    </View>
                    <FontAwesome5 name="star" size={24} color="#FFD700" style={styles.starFloating} />
                </View>

                {/* 4. QUANTUM GRID DE STATUS (4 CARDS) */}
                <View style={styles.quadGrid}>
                    <View style={styles.quadBox}>
                        <Feather name="clock" size={18} color="#6C5CE7" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>37h 45m</Text>
                        <Text style={styles.quadLabel}>Tempo total estudado</Text>
                    </View>
                    <View style={styles.quadBox}>
                        <MaterialCommunityIcons name="fire" size={20} color="#FF5C5C" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>{streak}</Text>
                        <Text style={styles.quadLabel}>Sequência atual</Text>
                    </View>
                    <View style={styles.quadBox}>
                        <Feather name="check-circle" size={18} color="#00BA4A" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>8</Text>
                        <Text style={styles.quadLabel}>Trilhas concluídas</Text>
                    </View>
                    <View style={styles.quadBox}>
                        <Feather name="award" size={18} color="#FFD700" style={styles.quadIcon} />
                        <Text style={styles.quadValue}>Top 18%</Text>
                        <Text style={styles.quadLabel}>Ranking pessoal</Text>
                    </View>
                </View>

                {/* 5. SEÇÃO: CONQUISTAS (MEDALHAS ESTILIZADAS COM CÓDIGO) */}
                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionMainTitle}>Conquistas</Text>
                    <TouchableOpacity>
                        <Text style={styles.verTodasText}>Ver todas</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalBadges}>
                    <View style={[styles.badgeItem, { borderColor: "#FFD700" }]}>
                        <FontAwesome5 name="trophy" size={20} color="#FFD700" />
                        <Text style={styles.badgeItemName}>Primeira{"\n"}semana</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, { borderColor: "#A855F7" }]}>
                        <MaterialCommunityIcons name="bolt" size={22} color="#A855F7" />
                        <Text style={styles.badgeItemName}>10h de foco</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, { borderColor: "#3B82F6" }]}>
                        <FontAwesome5 name="brain" size={20} color="#3B82F6" />
                        <Text style={styles.badgeItemName}>Mestre da{"\n"}lógica</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, { borderColor: "#FF7A00" }]}>
                        <FontAwesome5 name="rocket" size={18} color="#FF7A00" />
                        <Text style={styles.badgeItemName}>Início em IA</Text>
                        <Text style={[styles.badgeStatusText, { color: "#00BA4A" }]}>Concluída</Text>
                    </View>
                    <View style={[styles.badgeItem, styles.badgeItemLocked]}>
                        <Feather name="lock" size={18} color="#41415C" />
                        <Text style={[styles.badgeItemName, { color: "#8E8EA9" }]}>30 dias de{"\n"}foco</Text>
                        <Text style={[styles.badgeStatusText, { color: "#8E8EA9" }]}>0 / 30</Text>
                    </View>
                </ScrollView>

                {/* 6. SEÇÃO: MEU FUTURO (PROGRESSO TÉCNICO) */}
                <View style={[styles.sectionHeaderRow, { marginTop: 16 }]}>
                    <Text style={styles.sectionMainTitle}>🎯 Meu futuro</Text>
                </View>
                <Text style={styles.objSubText}>
                    Objetivo: <Text style={{ color: "#A855F7", fontWeight: "bold" }}>Desenvolvedora Front-End</Text>
                </Text>

                <View style={styles.futureContainerCard}>
                    <View style={styles.skillsLeftColumn}>
                        {/* HTML */}
                        <View style={styles.skillProgressItem}>
                            <Text style={styles.skillLabelText}>HTML</Text>
                            <View style={styles.skillTrackBack}>
                                <View style={[styles.skillTrackFill, { width: "80%" }]} />
                            </View>
                            <Text style={styles.skillPercentValue}>80%</Text>
                        </View>
                        {/* CSS */}
                        <View style={styles.skillProgressItem}>
                            <Text style={styles.skillLabelText}>CSS</Text>
                            <View style={styles.skillTrackBack}>
                                <View style={[styles.skillTrackFill, { width: "60%" }]} />
                            </View>
                            <Text style={styles.skillPercentValue}>60%</Text>
                        </View>
                        {/* JavaScript */}
                        <View style={styles.skillProgressItem}>
                            <Text style={styles.skillLabelText}>JavaScript</Text>
                            <View style={styles.skillTrackBack}>
                                <View style={[styles.skillTrackFill, { width: "45%" }]} />
                            </View>
                            <Text style={styles.skillPercentValue}>45%</Text>
                        </View>
                        {/* React */}
                        <View style={styles.skillProgressItem}>
                            <Text style={styles.skillLabelText}>React</Text>
                            <View style={styles.skillTrackBack}>
                                <View style={[styles.skillTrackFill, { width: "30%" }]} />
                            </View>
                            <Text style={styles.skillPercentValue}>30%</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    scrollContent: { paddingHorizontal: 20, paddingTop: 20 },

    // 1. TOPO ESTILIZADO
    topUserRow: { flexDirection: "row", alignItems: "center", marginBottom: 24, gap: 12 },
    avatarOuterRing: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderVerticalWidth: 2,
        borderHorizontalWidth: 2,
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

    // 2. CARD DO NÍVEL 7
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
    horizontalPercentLabel: { display: "none" }, // Escondido pois já temos o círculo
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

    // 3. MENSAGEM DO DIA
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

    // 4. QUAD GRID STYLING
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

    // 5. CONQUISTAS SEÇÃO
    sectionHeaderRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
    sectionMainTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    verTodasText: { color: "#A855F7", fontSize: 12, fontWeight: "600" },
    horizontalBadges: { flexDirection: "row", marginBottom: 20 },
    badgeItem: {
        width: 88,
        height: 100,
        backgroundColor: "#15162E",
        borderRadius: 16,
        borderWidth: 1.5,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
    },
    badgeItemLocked: { borderColor: "#221F4D", opacity: 0.4 },
    badgeItemName: {
        color: "#FFF",
        fontSize: 10,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 8,
        lineHeight: 12,
    },
    badgeStatusText: { fontSize: 9, fontWeight: "bold", marginTop: 4 },

    // 6. MEU FUTURO PROGRESSO
    objSubText: { color: "#8E8EA9", fontSize: 12, marginTop: -8, marginBottom: 12 },
    futureContainerCard: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 16,
        flexDirection: "row",
        gap: 14,
        borderWidth: 1,
        borderColor: "#221F4D",
        marginBottom: 16,
    },
    skillsLeftColumn: { flex: 1.2, gap: 10 },
    skillProgressItem: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    skillLabelText: { color: "#FFF", fontSize: 11, width: 65, fontWeight: "500" },
    skillTrackBack: {
        flex: 1,
        height: 6,
        backgroundColor: "#221F4D",
        borderRadius: 3,
        marginHorizontal: 8,
        overflow: "hidden",
    },
    skillTrackFill: { height: "100%", backgroundColor: "#A855F7", borderRadius: 3 },
    skillPercentValue: { color: "#8E8EA9", fontSize: 11, fontWeight: "bold", width: 30, textAlign: "right" },
    trendRightBox: {
        flex: 0.8,
        backgroundColor: "#090A1A",
        borderRadius: 14,
        padding: 12,
        borderWidth: 1,
        borderColor: "#221F4D",
        alignItems: "center",
        justifyContent: "center",
    },
    trendMiniTitle: { color: "#8E8EA9", fontSize: 10, marginTop: 4 },
    trendValueText: { color: "#00BA4A", fontSize: 18, fontWeight: "bold", marginTop: 2 },
    trendSubText: { color: "#8E8EA9", fontSize: 9, textAlign: "center", marginTop: 2 },
    miniChartLineContainer: {
        width: "100%",
        height: 10,
        borderBottomWidth: 1.5,
        borderColor: "#221F4D",
        marginTop: 8,
        position: "relative",
    },
    chartLineNode: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: "#00BA4A",
        position: "absolute",
        bottom: -3,
        right: "20%",
    },

    // 7. CARD COACH IA
    coachIaCard: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "#221F4D",
        gap: 8,
    },
    coachLeftInfo: { flexDirection: "row", alignItems: "center", gap: 10, flex: 1 },
    coachAvatarIcon: {
        width: 36,
        height: 36,
        borderRadius: 12,
        backgroundColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
    },
    coachTexts: { flex: 1 },
    coachBadgeRow: { flexDirection: "row", alignItems: "center", gap: 6 },
    coachTitleName: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
    betaBadge: {
        backgroundColor: "#221F4D",
        paddingVertical: 2,
        paddingHorizontal: 6,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#A855F7",
    },
    betaText: { color: "#A855F7", fontSize: 8, fontWeight: "bold" },
    coachDescription: { color: "#8E8EA9", fontSize: 11, marginTop: 2, lineHeight: 14 },
    conversarBtn: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: "#221F4D",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#6C5CE7",
    },
    conversarBtnText: { color: "#FFF", fontSize: 11, fontWeight: "bold" },
});
