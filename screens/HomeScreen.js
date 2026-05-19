import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";

export default function HomeScreen() {
    const scheme = useColorScheme();
    const dark = scheme === "dark";
    const s = styles(dark);

    const cards = [
        { icon: "📋", label: "Tarefas", value: "3 pendentes", screen: "Tasks" },
        { icon: "🃏", label: "Flashcards", value: "12 para revisar", screen: "Flashcards" },
        { icon: "⏱️", label: "Pomodoro", value: "Iniciar sessão", screen: "Timer" },
    ];

    return (
        <ScrollView style={s.container} contentContainerStyle={s.content}>
            {/* Header */}
            <View style={s.header}>
                {/* Ajustado com muito orgulho para o seu nome! */}
                <Text style={s.greeting}>Olá, Glaudejane 👋</Text>
                <Text style={s.subtitle}>O que vamos estudar hoje?</Text>
            </View>

            {/* Cards */}
            <View style={s.grid}>
                {cards.map((card) => (
                    <TouchableOpacity
                        key={card.screen}
                        style={s.card}
                        activeOpacity={0.7}
                        onPress={() => console.log(`Navegar para a tela: ${card.screen}`)}
                    >
                        <Text style={s.cardIcon}>{card.icon}</Text>
                        <Text style={s.cardLabel}>{card.label}</Text>
                        <Text style={s.cardValue}>{card.value}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Sessão de hoje */}
            <View style={s.section}>
                <Text style={s.sectionTitle}>Sessão de hoje</Text>
                <View style={s.sessionBox}>
                    <Text style={s.sessionText}>⏱️ 0h estudadas</Text>
                    <Text style={s.sessionText}>✅ 0 tarefas concluídas</Text>
                    <Text style={s.sessionText}>🃏 0 flashcards revisados</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = (dark) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: dark ? "#0f0f0f" : "#f5f5f5",
        },
        content: {
            padding: 24,
            paddingTop: 60,
        },
        header: {
            marginBottom: 32,
        },
        greeting: {
            fontSize: 28,
            fontWeight: "bold",
            color: dark ? "#ffffff" : "#1a1a1a",
        },
        subtitle: {
            fontSize: 16,
            color: dark ? "#aaaaaa" : "#666666",
            marginTop: 4,
        },
        grid: {
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 32,
        },
        card: {
            flex: 1,
            minWidth: "28%",
            backgroundColor: dark ? "#1e1e1e" : "#ffffff",
            borderRadius: 16,
            padding: 16,
            alignItems: "center",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
        },
        cardIcon: {
            fontSize: 28,
            marginBottom: 8,
        },
        cardLabel: {
            fontSize: 13,
            fontWeight: "600",
            color: dark ? "#ffffff" : "#1a1a1a",
        },
        cardValue: {
            fontSize: 11,
            color: dark ? "#888888" : "#999999",
            marginTop: 4,
            textAlign: "center",
        },
        section: {
            marginBottom: 24,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: "700",
            color: dark ? "#ffffff" : "#1a1a1a",
            marginBottom: 12,
        },
        sessionBox: {
            backgroundColor: dark ? "#1e1e1e" : "#ffffff",
            borderRadius: 16,
            padding: 20,
            gap: 10,
        },
        sessionText: {
            fontSize: 15,
            color: dark ? "#cccccc" : "#444444",
        },
    });
