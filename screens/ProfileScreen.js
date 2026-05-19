import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Cabeçalho de Perfil */}
                <View style={styles.profileHeader}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={{
                                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
                            }}
                            style={styles.avatar}
                        />
                        <View style={styles.levelBadge}>
                            <Text style={styles.levelText}>12</Text>
                        </View>
                    </View>
                    <Text style={styles.userName}>Glaudejane</Text>
                    <Text style={styles.userBio}>Estudante Focada - StudyFlow Premium ✨</Text>

                    {/* Frase Motivacional */}
                    <View style={styles.quoteCard}>
                        <Text style={styles.quoteText}>
                            "Pequenos passos todos os dias levam a grandes conquistas." ⭐
                        </Text>
                    </View>
                </View>

                {/* Grid de Estatísticas Gerais */}
                <View style={styles.statsGrid}>
                    <View style={styles.statCard}>
                        <MaterialCommunityIcons name="clock-outline" size={24} color="#6C5CE7" />
                        <Text style={styles.statNumber}>42h</Text>
                        <Text style={styles.statLabel}>Foco Total</Text>
                    </View>
                    <View style={styles.statCard}>
                        <MaterialCommunityIcons name="book-open-page-variant" size={24} color="#00B894" />
                        <Text style={styles.statNumber}>12</Text>
                        <Text style={styles.statLabel}>Units Murphy</Text>
                    </View>
                    <View style={styles.statCard}>
                        <MaterialCommunityIcons name="fire" size={24} color="#E17055" />
                        <Text style={styles.statNumber}>15</Text>
                        <Text style={styles.statLabel}>Dias Seguidos</Text>
                    </View>
                </View>

                {/* Seção de Conquistas (Badges) */}
                <Text style={styles.sectionTitle}>Conquistas Recentes</Text>
                <View style={styles.badgesContainer}>
                    <View style={styles.badgeItem}>
                        <View style={[styles.badgeCircle, { backgroundColor: "#15162E" }]}>
                            <Text style={styles.badgeEmoji}>🇬🇧</Text>
                        </View>
                        <Text style={styles.badgeLabel}>Grammar King</Text>
                    </View>
                    <View style={styles.badgeItem}>
                        <View style={[styles.badgeCircle, { backgroundColor: "#15162E" }]}>
                            <Text style={styles.badgeEmoji}>🤖</Text>
                        </View>
                        <Text style={styles.badgeLabel}>IA Explorer</Text>
                    </View>
                    <View style={styles.badgeItem}>
                        <View style={[styles.badgeCircle, { backgroundColor: "#15162E" }]}>
                            <Text style={styles.badgeEmoji}>⚡</Text>
                        </View>
                        <Text style={styles.badgeLabel}>Fast Learner</Text>
                    </View>
                </View>

                {/* Histórico de Atividade */}
                <Text style={styles.sectionTitle}>Histórico de hoje</Text>

                <View style={styles.historyItem}>
                    <View style={styles.historyIconContainer}>
                        <Text style={styles.historyEmoji}>📘</Text>
                    </View>
                    <View style={styles.historyInfo}>
                        <Text style={styles.historyTitle}>English Grammar In Use</Text>
                        <Text style={styles.historySubtitle}>Unit 1 & 2 - Present Continuous</Text>
                    </View>
                    <Text style={styles.historyTime}>25 min</Text>
                </View>

                <View style={styles.historyItem}>
                    <View style={styles.historyIconContainer}>
                        <Text style={styles.historyEmoji}>🤖</Text>
                    </View>
                    <View style={styles.historyInfo}>
                        <Text style={styles.historyTitle}>Inteligência Artificial</Text>
                        <Text style={styles.historySubtitle}>Prompt Engineering em Inglês</Text>
                    </View>
                    <Text style={styles.historyTime}>50 min</Text>
                </View>

                {/* Espaçamento final */}
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A",
    },
    scrollContent: {
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    profileHeader: {
        alignItems: "center",
        marginBottom: 32,
    },
    avatarContainer: {
        position: "relative",
        marginBottom: 16,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#6C5CE7",
    },
    levelBadge: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#6C5CE7",
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#090A1A",
    },
    levelText: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 14,
    },
    userName: {
        color: "#FFF",
        fontSize: 24,
        fontWeight: "bold",
    },
    userBio: {
        color: "#8E8EA9",
        fontSize: 14,
        marginTop: 4,
    },
    quoteCard: {
        backgroundColor: "#15162E",
        borderRadius: 12,
        padding: 12,
        marginTop: 16,
        borderWidth: 1,
        borderColor: "#221F4D",
        width: "100%",
    },
    quoteText: {
        color: "#8E8EA9",
        fontSize: 13,
        textAlign: "center",
        fontStyle: "italic",
    },
    statsGrid: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    statCard: {
        backgroundColor: "#15162E",
        flex: 1,
        marginHorizontal: 4,
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    statNumber: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
    statLabel: {
        color: "#8E8EA9",
        fontSize: 10,
        textTransform: "uppercase",
        marginTop: 2,
    },
    sectionTitle: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 16,
    },
    badgesContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32,
    },
    badgeItem: {
        alignItems: "center",
        flex: 1,
    },
    badgeCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    badgeEmoji: {
        fontSize: 24,
    },
    badgeLabel: {
        color: "#8E8EA9",
        fontSize: 11,
        textAlign: "center",
    },
    historyItem: {
        backgroundColor: "#15162E",
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    historyIconContainer: {
        backgroundColor: "#221F4D",
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
    },
    historyEmoji: {
        fontSize: 20,
    },
    historyInfo: {
        flex: 1,
    },
    historyTitle: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "600",
    },
    historySubtitle: {
        color: "#8E8EA9",
        fontSize: 12,
    },
    historyTime: {
        color: "#6C5CE7",
        fontWeight: "bold",
        fontSize: 12,
    },
});
