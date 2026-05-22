// screens/WeeksScreen.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

export default function WeeksScreen({ navigation }) {
    // 📚 ESTRUTURAÇÃO DAS SEMANAS DE INGLÊS (Todos com status 'liberado')
    const semanasIngles = [
        {
            id: "semana_1",
            numero: "SEMANA 1",
            titulo: "Grammar & Vocabulary",
            descricao: "Domine a estrutura essencial para conversação e expanda seu vocabulário base no Cambly.",
            status: "liberado",
            licoes: ["Verb to Be revisitado", "Vocabulário de Tecnologia"],
        },
        {
            id: "semana_2",
            numero: "SEMANA 2",
            titulo: "Present Continuous & Daily Routines",
            descricao: "Aprenda a descrever o que está acontecendo agora e fale sobre a sua rotina de estudos.",
            status: "liberado",
            licoes: ["Estrutura do ING", "Descrevendo o seu dia"],
        },
        {
            id: "semana_3",
            numero: "SEMANA 3",
            titulo: "Simple Past & Tech History",
            descricao: "Conte histórias no passado e aprenda a falar sobre marcos históricos da computação.",
            status: "liberado",
            licoes: ["Verbos Regulares e Irregulares", "Linha do tempo da Tech"],
        },
        {
            id: "semana_4",
            numero: "SEMANA 4",
            titulo: "Future Plans & Career Goals",
            descricao: "Prepare-se para entrevistas falando sobre as suas metas futuras e planos de carreira.",
            status: "liberado",
            licoes: ["Will vs Going to", "Sua biografia profissional"],
        },
    ];

    const renderSemana = ({ item, index }) => {
        // Como queremos tudo desbloqueado, o status sempre será tratado como liberado
        const isLiberado = item.status === "liberado";

        return (
            <View style={styles.timelineRow}>
                {/* Linha vertical decorativa (Estilo Trilha do Protótipo) */}
                <View style={styles.leftTimelineContainer}>
                    <View style={styles.timelineDot}>
                        <Feather name="play" size={12} color="#FFF" />
                    </View>
                    {index !== semanasIngles.length - 1 && <View style={styles.timelineLine} />}
                </View>

                {/* Card da Semana */}
                <TouchableOpacity
                    style={styles.moduloCard}
                    activeOpacity={0.7}
                    // 🚀 Crucial: Passa o tipoTrilha como "Ingles" e o id correto da semana!
                    onPress={() => navigation.navigate("Learn", { tipoTrilha: "Ingles", weekId: item.id })}
                >
                    <View style={styles.moduloHeader}>
                        <Text style={styles.moduloBadgeText}>{item.numero}</Text>
                        <View style={styles.xpBadge}>
                            <Text style={styles.xpBadgeText}>+150 XP</Text>
                        </View>
                    </View>

                    <Text style={styles.moduloTitle}>{item.titulo}</Text>
                    <Text style={styles.moduloDesc}>{item.descricao}</Text>

                    {/* Footer do Card com o contador de lições */}
                    <View style={styles.moduloFooter}>
                        <View style={styles.aulasCountRow}>
                            <Feather name="book-open" size={14} color="#8E8EA9" />
                            <Text style={styles.aulasCountText}>{item.licoes.length} lições práticas</Text>
                        </View>
                        <Feather name="arrow-right" size={16} color="#6C5CE7" />
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
                    <Text style={styles.headerTitle}>Trilha de Inglês</Text>
                    <Text style={styles.headerSubtitle}>Foco em Tecnologia & Autonomia</Text>
                </View>
                <View style={styles.topIconBg}>
                    <FontAwesome5 name="graduation-cap" size={20} color="#6C5CE7" />
                </View>
            </View>

            {/* LISTA DAS SEMANAS EM TIMELINE */}
            <FlatList
                data={semanasIngles}
                keyExtractor={(item) => item.id}
                renderItem={renderSemana}
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
    topIconBg: {
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
    timelineDot: {
        width: 24,
        height: 24,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 2,
        backgroundColor: "#6C5CE7",
        shadowColor: "#6C5CE7",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 5,
    },
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
});