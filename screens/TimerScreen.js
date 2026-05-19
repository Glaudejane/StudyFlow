import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";

// Adicionamos { navigation } aqui dentro dos parênteses para permitir voltar de tela
export default function TimerScreen({ navigation }) {
    const s = styles;

    // Criamos um estado para saber se estamos no modo "Foco" ou "Pausa"
    const [currentMode, setCurrentMode] = useState("foco"); // Pode ser 'foco' ou 'pausa'
    const [secondsLeft, setSecondsLeft] = useState(25 * 60); // Começa com 25:00 padrão do Pomodoro
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft((seconds) => seconds - 1);
            }, 1000);
        } else if (secondsLeft === 0) {
            setIsActive(false);
            // Se o tempo acabar, você pode adicionar um alerta sonoro aqui no futuro!
        }
        return () => clearInterval(interval);
    }, [isActive, secondsLeft]);

    const formatTime = () => {
        const mins = Math.floor(secondsLeft / 60);
        const secs = secondsLeft % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    // Função para mudar o modo do cronômetro de forma limpa
    const handleModeChange = (mode) => {
        setIsActive(false); // Pausa o tempo atual antes de mudar
        setCurrentMode(mode);
        if (mode === "foco") {
            setSecondsLeft(25 * 60); // 25 minutos de Foco
        } else {
            setSecondsLeft(5 * 60); // 5 minutos de Pausa
        }
    };

    return (
        <SafeAreaView style={s.container}>
            {/* Header com o botão Voltar funcionando */}
            <View style={s.header}>
                <TouchableOpacity
                    style={s.backButton}
                    onPress={() => navigation.navigate("Início")} // Faz voltar para a HomeScreen!
                >
                    <Text style={s.backText}>←</Text>
                </TouchableOpacity>
                <Text style={s.headerTitle}>Foco Pomodoro</Text>
                <TouchableOpacity style={s.settingsButton}>
                    <Text style={s.settingsText}>⚙️</Text>
                </TouchableOpacity>
            </View>

            {/* Abas Superiores Inteligentes e Dinâmicas */}
            <View style={s.tabContainer}>
                <TouchableOpacity
                    style={[s.tab, currentMode === "foco" && s.activeTab]}
                    onPress={() => handleModeChange("foco")}
                >
                    <Text style={currentMode === "foco" ? s.activeTabText : s.tabText}>Foco</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[s.tab, currentMode === "pausa" && s.activeTab]}
                    onPress={() => handleModeChange("pausa")}
                >
                    <Text style={currentMode === "pausa" ? s.activeTabText : s.tabText}>Pausa</Text>
                </TouchableOpacity>
            </View>

            {/* Círculo do Cronômetro */}
            <View
                style={[
                    s.timerOuterCircle,
                    currentMode === "pausa" && { borderColor: "#4CD137", shadowColor: "#4CD137" },
                ]}
            >
                <View style={s.timerInnerCircle}>
                    <Text style={s.timeText}>{formatTime()}</Text>
                    <Text style={s.subTimeText}>{currentMode === "foco" ? "Tempo de foco" : "Tempo de descanso"}</Text>
                    <Text style={s.leafIcon}>{currentMode === "foco" ? "🍃" : "☕"}</Text>
                </View>
            </View>

            {/* Card de Música de Foco */}
            <View style={s.musicCard}>
                <View style={s.musicInfo}>
                    <Text style={s.musicIcon}>🎵</Text>
                    <View>
                        <Text style={s.musicTitle}>Música de foco</Text>
                        <Text style={s.musicSubtitle}>Lo-fi Beats</Text>
                    </View>
                </View>
                <TouchableOpacity style={s.playIconButton}>
                    <Text style={s.playIconText}>▶</Text>
                </TouchableOpacity>
            </View>

            {/* Botão Principal Iniciar Foco / Pausar */}
            <TouchableOpacity
                style={[s.mainButton, isActive && { backgroundColor: "#CC3333" }]}
                onPress={() => setIsActive(!isActive)}
                activeOpacity={0.8}
            >
                <Text style={s.mainButtonText}>{isActive ? "Pausar foco" : "Iniciar foco"}</Text>
                <Text style={s.mainButtonIcon}>{isActive ? "⏸" : "▶"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A",
        paddingHorizontal: 24,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    backButton: {
        paddingRight: 20, // Aumenta a área de clique para ficar mais fácil de apertar
    },
    backText: {
        color: "#FFFFFF",
        fontSize: 24,
    },
    headerTitle: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "600",
    },
    settingsText: {
        fontSize: 20,
    },
    tabContainer: {
        flexDirection: "row",
        backgroundColor: "#15162E",
        borderRadius: 25,
        padding: 4,
        marginBottom: 40,
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 21,
    },
    activeTab: {
        backgroundColor: "#221F4D",
        borderWidth: 1,
        borderColor: "#6C5CE7",
    },
    activeTabText: {
        color: "#FFFFFF",
        fontWeight: "600",
    },
    tabText: {
        color: "#8E8EA9",
    },
    timerOuterCircle: {
        alignSelf: "center",
        width: 260,
        height: 260,
        borderRadius: 130,
        borderWidth: 6,
        borderColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
        shadowColor: "#6C5CE7",
        shadowOpacity: 0.3,
        shadowRadius: 15,
    },
    timerInnerCircle: {
        alignItems: "center",
    },
    timeText: {
        color: "#FFFFFF",
        fontSize: 48,
        fontWeight: "bold",
    },
    subTimeText: {
        color: "#8E8EA9",
        fontSize: 12,
        marginTop: 4,
    },
    leafIcon: {
        fontSize: 18,
        marginTop: 10,
    },
    musicCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 16,
        marginBottom: 40,
    },
    musicInfo: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    musicIcon: {
        fontSize: 20,
    },
    musicTitle: {
        color: "#8E8EA9",
        fontSize: 12,
    },
    musicSubtitle: {
        color: "#FFFFFF",
        fontSize: 14,
        fontWeight: "500",
    },
    playIconButton: {
        padding: 4,
    },
    playIconText: {
        color: "#6C5CE7",
        fontSize: 16,
    },
    mainButton: {
        backgroundColor: "#6C5CE7",
        borderRadius: 30,
        paddingVertical: 16,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        position: "absolute",
        bottom: 40,
        left: 24,
        right: 24,
    },
    mainButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    mainButtonIcon: {
        color: "#FFFFFF",
        fontSize: 12,
    },
});