import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { Audio } from "expo-av"; // 🎵 IMPORTANTE: Importamos o motor de áudio!

export default function HomeScreen() {
    const isFocused = useIsFocused();

    // ---- ESTADOS DO CRONÔMETRO ----
    const FOCUS_TIME_MINUTES = 25; // Duração do bloco de foco em minutos
    const [secondsLeft, setSecondsLeft] = useState(FOCUS_TIME_MINUTES * 60);
    const [isActive, setIsActive] = useState(false);
    const [sound, setSound] = useState(null); // 🎵 Estado para controlar o arquivo de som

    // ---- ESTADOS DE PROGRESSO DO ESTUDANTE ----
    const [xp, setXp] = useState(0);
    const [level, setLevel] = useState(1);
    const [streak, setStreak] = useState(1);

    const XP_KEY = "@studyflow:xp";
    const LEVEL_KEY = "@studyflow:level";

    // 1. CARREGAR DADOS DO BANCO SEMPRE QUE A HOME FICAR VISÍVEL
    useEffect(() => {
        if (isFocused) {
            loadUserData();
        }
    }, [isFocused]);

    // 2. CORAÇÃO DO CRONÔMETRO (O CONTADOR REGRESSIVO)
    useEffect(() => {
        let interval = null;

        if (isActive && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft((seconds) => seconds - 1);
            }, 1000);
        } else if (secondsLeft === 0 && isActive) {
            clearInterval(interval);
            setIsActive(false);
            handleFocusCompleted();
        }

        return () => clearInterval(interval);
    }, [isActive, secondsLeft]);

    // 🎵 3. LIMPEZA DE MEMÓRIA: Descarrega o som quando a tela fechar (boa prática!)
    useEffect(() => {
        return sound
            ? () => {
                  sound.unloadAsync();
              }
            : undefined;
    }, [sound]);

    // 🎵 4. FUNÇÃO MÁGICA: Carrega e toca o alarme
    const playAlarmSound = async () => {
        try {
            // Usando um som de sininho suave direto da internet para testarmos
            const { sound: playbackObject } = await Audio.Sound.createAsync(
                require("../assets/alarm.mp3"), // Substitua pelo caminho do seu arquivo de som local ou URL
            );
            setSound(playbackObject);
            await playbackObject.playAsync(); // Toca o som!
        } catch (error) {
            console.log("Erro ao tocar o som:", error);
        }
    };

    const loadUserData = async () => {
        try {
            const savedXp = await AsyncStorage.getItem(XP_KEY);
            const savedLevel = await AsyncStorage.getItem(LEVEL_KEY);

            if (savedXp !== null) setXp(parseInt(savedXp));
            if (savedLevel !== null) setLevel(parseInt(savedLevel));
        } catch (error) {
            console.log("Erro ao carregar dados de foco:", error);
        }
    };

    // Função executada quando o cronômetro zera com sucesso
    const handleFocusCompleted = async () => {
        // 🎵 Dispara o som do alarme imediatamente quando zerar!
        playAlarmSound();

        try {
            const newXp = xp + 100;
            let newLevel = level;

            if (newXp >= level * 500) {
                newLevel = level + 1;
                Alert.alert("🎉 PARABÉNS!", `Você evoluiu para o Nível ${newLevel}! Continue focada! ✨`);
            } else {
                Alert.alert("🔥 Bloco Concluído!", "Muito bem! Você ganhou +100 XP pelo seu foco de hoje.");
            }

            setXp(newXp);
            setLevel(newLevel);
            setSecondsLeft(FOCUS_TIME_MINUTES * 60);

            await AsyncStorage.setItem(XP_KEY, newXp.toString());
            await AsyncStorage.setItem(LEVEL_KEY, newLevel.toString());
        } catch (error) {
            console.log("Erro ao salvar progresso:", error);
        }
    };

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setIsActive(false);
        setSecondsLeft(FOCUS_TIME_MINUTES * 60);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const totalSeconds = FOCUS_TIME_MINUTES * 60;
    const progressPercentage = Math.round(((totalSeconds - secondsLeft) / totalSeconds) * 100);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.welcomeText}>Olá, Glaudejane! 👋</Text>
                        <Text style={styles.subWelcomeText}>Pronta para entrar no seu fluxo?</Text>
                    </View>
                    <TouchableOpacity style={styles.notificationButton}>
                        <Feather name="bell" size={22} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                {/* Card Foco Inteligente */}
                <View style={styles.focusCard}>
                    <View style={styles.focusInfo}>
                        <Text style={styles.focusTitle}>Bloco de Foco Atual</Text>
                        <Text style={styles.focusMinutes}>{formatTime(secondsLeft)}</Text>

                        <View style={styles.controlButtonsContainer}>
                            <TouchableOpacity style={styles.controlButton} onPress={toggleTimer}>
                                <Feather name={isActive ? "pause" : "play"} size={18} color="#FFF" />
                                <Text style={styles.controlButtonText}>{isActive ? "Pausar" : "Iniciar"}</Text>
                            </TouchableOpacity>

                            {isActive && (
                                <TouchableOpacity style={[styles.controlButton, styles.resetBtn]} onPress={resetTimer}>
                                    <Feather name="refresh-cw" size={14} color="#8E8EA9" />
                                </TouchableOpacity>
                            )}
                        </View>
                    </View>

                    <View style={styles.progressCircleContainer}>
                        <View style={styles.progressCircle}>
                            <Text style={styles.progressPercentage}>{progressPercentage}%</Text>
                        </View>
                    </View>
                </View>

                {/* Card de Frase Motivacional */}
                <View style={styles.quoteCard}>
                    <Text style={styles.quoteText}>"Pequenos passos todos os dias levam a grandes conquistas."</Text>
                    <Text style={styles.quoteIcon}>⭐</Text>
                </View>

                {/* Seção Seu Progresso */}
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Seu progresso em tempo real</Text>
                </View>

                {/* Grid de Status */}
                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🔥</Text>
                        <Text style={styles.statValue}>{streak}</Text>
                        <Text style={styles.statLabel}>Dias em{"\n"}sequência</Text>
                    </View>

                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>⭐</Text>
                        <Text style={styles.statValue}>{xp}</Text>
                        <Text style={styles.statLabel}>XP{"\n"}acumulado</Text>
                    </View>

                    <View style={styles.statBox}>
                        <Text style={styles.statIcon}>🏆</Text>
                        <Text style={styles.statValue}>Nível {level}</Text>
                        <Text style={styles.statLabel}>Estudante{"\n"}Focada</Text>
                    </View>
                </View>

                <View style={{ height: 30 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

// ... Os estilos (StyleSheet) continuam exatamente iguais ao código anterior!
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    scrollContent: { paddingHorizontal: 24, paddingTop: 20 },
    header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 30 },
    welcomeText: { color: "#FFFFFF", fontSize: 22, fontWeight: "bold" },
    subWelcomeText: { color: "#8E8EA9", fontSize: 14, marginTop: 4 },
    notificationButton: { backgroundColor: "#15162E", padding: 10, borderRadius: 12 },
    focusCard: {
        backgroundColor: "#15162E",
        borderRadius: 20,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    focusInfo: { flex: 1 },
    focusTitle: { color: "#8E8EA9", fontSize: 13, fontWeight: "500" },
    focusMinutes: {
        color: "#FFFFFF",
        fontSize: 34,
        fontWeight: "bold",
        marginVertical: 4,
        fontVariant: ["tabular-nums"],
    },
    controlButtonsContainer: { flexDirection: "row", alignItems: "center", marginTop: 8, gap: 8 },
    controlButton: {
        backgroundColor: "#6C5CE7",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 14,
        borderRadius: 10,
        gap: 6,
    },
    controlButtonText: { color: "#FFF", fontSize: 13, fontWeight: "bold" },
    resetBtn: { backgroundColor: "#221F4D", paddingHorizontal: 10 },
    progressCircleContainer: { justifyContent: "center", alignItems: "center" },
    progressCircle: {
        width: 76,
        height: 76,
        borderRadius: 38,
        borderWidth: 4,
        borderColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#221F4D",
    },
    progressPercentage: { color: "#FFFFFF", fontSize: 14, fontWeight: "bold" },
    quoteCard: {
        backgroundColor: "#221F4D",
        borderRadius: 16,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
    },
    quoteText: { color: "#E6E6F2", fontSize: 13, fontStyle: "italic", flex: 1, paddingRight: 10, lineHeight: 18 },
    quoteIcon: { fontSize: 18 },
    sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
    sectionTitle: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold", letterSpacing: 0.5 },
    statsContainer: { flexDirection: "row", justifyContent: "space-between", gap: 10 },
    statBox: {
        flex: 1,
        backgroundColor: "#15162E",
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    statIcon: { fontSize: 22, marginBottom: 8 },
    statValue: { color: "#FFFFFF", fontSize: 18, fontWeight: "bold" },
    statLabel: { color: "#8E8EA9", fontSize: 11, textAlign: "center", marginTop: 4, lineHeight: 14 },
});