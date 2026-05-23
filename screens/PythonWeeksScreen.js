// screens/PythonWeeksScreen.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

export default function PythonWeeksScreen({ navigation }) {
    // 🐍 MÓDULOS DE PYTHON (Pedagógico e 100% Liberado para Testes)
    const modulosPython = [
        {
            id: "py1",
            numero: "MÓDULO 1",
            titulo: "Primeiros Passos com Python",
            descricao: "Instalação, variáveis e os conceitos mais básicos de como o computador armazena informações.",
            status: "liberado",
            aulas: ["Configurando o Ambiente", "Variáveis e Tipos de Dados"],
        },
        {
            id: "py2",
            numero: "MÓDULO 2",
            titulo: "Tomada de Decisões (Estruturas Condicionais)",
            descricao: "Aprenda a fazer seu código pensar usando as estruturas clássicas If, Elif e Else.",
            status: "liberado",
            aulas: ["Operadores Lógicos", "O poder do IF e ELSE"],
        },
        {
            id: "py3",
            numero: "MÓDULO 3",
            titulo: "Estruturas de Repetição (Loops)",
            descricao: "Faça o computador executar tarefas repetitivas sem cansar usando os comandos For e While.",
            status: "liberado",
            aulas: ["Dominando o Loop For", "Entendendo o While"],
        },
        {
            id: "py4",
            numero: "MÓDULO 4",
            titulo: "Listas e Dicionários",
            descricao: "Como organizar e manipular coleções de dados complexas dentro do seu programa.",
            status: "liberado",
            aulas: ["Manipulação de Listas", "Chave e Valor com Dicionários"],
        },
    ];

    const renderModulo = ({ item, index }) => {
        return (
            <View style={styles.timelineRow}>
                {/* Linha vertical decorativa (Estilo Trilha do Protótipo) */}
                <View style={styles.leftTimelineContainer}>
                    <View style={styles.timelineDot}>
                        <Feather name="play" size={12} color="#FFF" />
                    </View>
                    {index !== modulosPython.length - 1 && <View style={styles.timelineLine} />}
                </View>

                {/* Card do Módulo */}
                <TouchableOpacity
                    style={styles.moduloCard}
                    activeOpacity={0.7}
                    // 🚀 Passa o tipoTrilha como "Python" e o id do módulo correspondente!
                    onPress={() => navigation.navigate("Learn", { tipoTrilha: "Python", moduloId: item.id })}
                >
                    <View style={styles.moduloHeader}>
                        <Text style={styles.moduloBadgeText}>{item.numero}</Text>
                        <View style={styles.xpBadge}>
                            <Text style={styles.xpBadgeText}>+150 XP</Text>
                        </View>
                    </View>

                    <Text style={styles.moduloTitle}>{item.titulo}</Text>
                    <Text style={styles.moduloDesc}>{item.descricao}</Text>

                    {/* Footer do Card */}
                    <View style={styles.moduloFooter}>
                        <View style={styles.aulasCountRow}>
                            <Feather name="book-open" size={14} color="#8E8EA9" />
                            <Text style={styles.aulasCountText}>{item.aulas.length} lições práticas</Text>
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
                    <Text style={styles.headerTitle}>Dominando Python</Text>
                    <Text style={styles.headerSubtitle}>Sintaxe, Lógica e Algoritmos</Text>
                </View>
                <View style={styles.topIconBg}>
                    <FontAwesome5 name="python" size={20} color="#FFD700" />
                </View>
            </View>

            {/* LISTA DOS MÓDULOS EM TIMELINE */}
            <FlatList
                data={modulosPython}
                keyExtractor={(item) => item.id}
                renderItem={renderModulo}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
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
        borderColor: "#FFD700",
    },
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
    },
    timelineLine: { width: 2, flex: 1, backgroundColor: "#221F4D", marginTop: -2, marginBottom: -2 },
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
