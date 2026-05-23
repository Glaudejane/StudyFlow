// screens/BuildAppsScreen.js
import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

export default function BuildAppsScreen({ navigation }) {
    // Lista dos projetos práticos com seus respectivos IDs do banco de dados
    const projetos = [
        {
            id: "app1",
            title: "Botões Estilizados",
            icon: "mouse-pointer",
            desc: "Aprenda o poder do clique e feedbacks.",
        },
        { id: "app2", title: "Tela de Login", icon: "lock", desc: "Segurança e campos de texto mascarados." },
        { id: "app3", title: "Formulários", icon: "file-alt", desc: "Coleta de dados e validações com useState." },
        { id: "app4", title: "Calculadora", icon: "calculator", desc: "Lógica matemática e grids com Flexbox." },
        { id: "app5", title: "Calendário", icon: "calendar-alt", desc: "Manipulação de datas e seletores nativos." },
        { id: "app6", title: "Jogo Matemático", icon: "gamepad", desc: "Gamificação e números aleatórios." },
    ];

    return (
        <SafeAreaView style={styles.container}>
            {/* HEADER SUPERIOR */}
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Feather name="arrow-left" size={22} color="#FFF" />
                </TouchableOpacity>
                <View style={styles.headerTitleContainer}>
                    <Text style={styles.headerTitle}>Criar Apps Práticos</Text>
                    <Text style={styles.headerSubtitle}>Mão na massa para Iniciantes</Text>
                </View>
                <View style={styles.topIconBg}>
                    <FontAwesome5 name="code" size={18} color="#DEFF9A" />
                </View>
            </View>

            {/* LINHA DO TEMPO / LISTA DE PROJETOS */}
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {projetos.map((projeto, index) => (
                    <TouchableOpacity
                        key={projeto.id}
                        style={styles.card}
                        onPress={() =>
                            navigation.navigate("Learn", {
                                tipoTrilha: "BuildApps", // Avisa a LearnScreen que a trilha é esta
                                moduloId: projeto.id, // Passa o ID do projeto (app1, app2...)
                            })
                        }
                    >
                        <View style={styles.cardIndexContainer}>
                            <Text style={styles.cardIndex}>0{index + 1}</Text>
                            <View style={styles.line} />
                        </View>

                        <View style={styles.cardContent}>
                            <View style={styles.titleRow}>
                                <FontAwesome5 name={projeto.icon} size={18} color="#6C5CE7" style={styles.cardIcon} />
                                <Text style={styles.cardTitle}>{projeto.title}</Text>
                            </View>
                            <Text style={styles.cardDesc}>{projeto.desc}</Text>
                        </View>

                        <Feather name="chevron-right" size={20} color="#6C5CE7" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
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
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderColor: "#15162E",
    },
    backButton: {
        padding: 10,
        backgroundColor: "#15162E",
        borderRadius: 12,
        marginRight: 15,
    },
    headerTitleContainer: { flex: 1 },
    headerTitle: { color: "#FFF", fontSize: 20, fontWeight: "bold" },
    headerSubtitle: { color: "#6C5CE7", fontSize: 13, fontWeight: "600" },
    topIconBg: {
        width: 40,
        height: 40,
        backgroundColor: "rgba(222, 255, 154, 0.1)",
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
    },
    scrollContainer: { padding: 20, paddingBottom: 40 },
    card: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    cardIndexContainer: { alignItems: "center", marginRight: 15 },
    cardIndex: { color: "#6C5CE7", fontWeight: "bold", fontSize: 14 },
    line: { width: 2, height: 20, backgroundColor: "#221F4D", marginTop: 4 },
    cardContent: { flex: 1 },
    titleRow: { flexDirection: "row", alignItems: "center", marginBottom: 4 },
    cardIcon: { marginRight: 8 },
    cardTitle: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    cardDesc: { color: "#CBD5E1", fontSize: 13 },
});
