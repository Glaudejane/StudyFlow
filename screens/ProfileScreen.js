import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ProfileScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Cabeçalho de Perfil */}
                <View style={styles.profileHeader}>
                    {/* Foto e Informações de Lado */}
                    <View style={styles.headerInfoContainer}>
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

                        <View style={styles.userInfoText}>
                            <Text style={styles.userName}>Glaudejane</Text>
                            <Text style={styles.userBio}>Estudante Focada • Premium ✨</Text>
                        </View>
                    </View>

                    {/* Sua Mensagem Diária mantida e bem posicionada embaixo! */}
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
    // Modificado: Removemos o alignItem: 'center'
    profileHeader: {
        marginBottom: 32,
        marginTop: 24, // Um pouco mais de espaço no topo
    },
    // Novo estilo: Organiza a foto e o texto lado a lado (Row)
    headerInfoContainer: {
        flexDirection: "row",
        alignItems: "center", // Centraliza os elementos na vertical dentro da linha
    },
    // Modificado: Ajustado o margin
    avatarContainer: {
        position: "relative",
        marginRight: 20, // Espaço entre a foto e o texto
    },
    avatar: {
        width: 90, // Levemente menor para equilibrar com o texto lateral
        height: 90,
        borderRadius: 45,
        borderWidth: 3,
        borderColor: "#6C5CE7",
    },
    levelBadge: {
        position: "absolute",
        bottom: -5, // Ajustado para a nova imagem menor
        right: -5,
        backgroundColor: "#6C5CE7",
        width: 32,
        height: 32,
        borderRadius: 16,
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
    // Novo estilo: Container para os textos laterais
    userInfoText: {
        flex: 1, // Ocupa o espaço restante na linha
        justifyContent: "center",
    },
    // Modificado: Alinhamento para a esquerda e tamanho menor
    userName: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 2,
    },
    // Modificado: Alinhamento para a esquerda
    userBio: {
        color: "#8E8EA9",
        fontSize: 12, // Diminuímos de 14 para 12 para caber perfeitamente
        marginTop: 4,
        flexWrap: "wrap", // Se mesmo assim for grande, ele quebra a linha em vez de sumir da tela
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
    // Novo estilo: Título do Nível
    userLevelTitle: {
        color: "#6C5CE7",
        fontSize: 12,
        fontWeight: "600",
        textTransform: "uppercase",
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
