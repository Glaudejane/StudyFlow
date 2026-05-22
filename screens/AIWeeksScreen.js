// screens/AIWeeksScreen.js
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function AIWeeksScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            {/* Botão Voltar */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={24} color="#FFF" />
                <Text style={styles.backText}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.content}>
                <Text style={styles.icon}>🤖</Text>
                <Text style={styles.title}>Trilha de Inteligência Artificial</Text>
                <Text style={styles.subtitle}>
                    O módulo prático e pedagógico de IA está sendo estruturado. Em breve, você aprenderá a dominar
                    comandos, prompts e integrações aqui!
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A", padding: 24 },
    backButton: { flexDirection: "row", alignItems: "center", gap: 8, marginTop: 20 },
    backText: { color: "#FFF", fontSize: 16, fontWeight: "500" },
    content: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 20 },
    icon: { fontSize: 64, marginBottom: 20 },
    title: { color: "#FFF", fontSize: 22, fontWeight: "bold", textAlign: "center" },
    subtitle: { color: "#8E8EA9", fontSize: 14, textAlign: "center", marginTop: 12, lineHeight: 22 },
});
