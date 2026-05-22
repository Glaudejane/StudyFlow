import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
// 1. IMPORTAÇÃO DO SAFE AREA VIEW CORRETO (Trocou a origem para a nova biblioteca)
import { SafeAreaView } from "react-native-safe-area-context";
import { lessonsData } from "./lessonsData";
// No topo do arquivo, junto com os outros imports, adicione:
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LearnScreen({ route, navigation }) {
    // Captura segura dos parâmetros da rota
    const weekId = route?.params?.weekId || "semana_1";
    const currentLesson = lessonsData[weekId];

    const [viewMode, setViewMode] = useState("lesson");
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizAnswered, setQuizAnswered] = useState(false);

    if (!currentLesson) {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={{ color: "#FFF", padding: 24 }}>Ops! Conteúdo desta semana não encontrado.</Text>
            </SafeAreaView>
        );
    }

    // ... O restante das funções (handleOptionPress, handleCheckAnswer) e o seu return continuam exatamente iguais!

    const handleOptionPress = (optionId) => {
        if (quizAnswered) return;
        setSelectedOption(optionId);
    };

    const handleCheckAnswer = async () => {
        if (!selectedOption) {
            Alert.alert("Ops!", "Por favor, selecione uma opção antes de verificar.");
            return;
        }
        setQuizAnswered(true);

        // SE ACERTOU O QUIZ
        if (selectedOption === currentLesson.quiz.correctId) {
            try {
                // 1. Buscamos o XP atual que está salvo no celular
                const currentXPValue = await AsyncStorage.getItem("@studyflow:xp");

                // Se já existir XP, convertemos para número. Se não existir (primeira vez), começa com 0.
                let currentXP = currentXPValue ? parseInt(currentXPValue, 10) : 0;

                // 2. Somamos os 50 pontos da vitória!
                const newXP = currentXP + 50;

                // 3. Gravamos o novo total de volta no "banco de dados de bolso"
                await AsyncStorage.setItem("@studyflow:xp", newXP.toString());

                Alert.alert("🎉 Parabéns!", "Você acertou e ganhou +50 XP!");
            } catch (error) {
                console.log("Erro ao salvar o XP:", error);
            }
        } else {
            Alert.alert(
                "Reflexão Pedagógica",
                "Não foi dessa vez! Dê uma olhada na explicação abaixo para entender o conceito.",
            );
        }
    };

    const handleResetQuiz = () => {
        setSelectedOption(null);
        setQuizAnswered(false);
        setViewMode("lesson");
        navigation.goBack(); // Volta para a Home após concluir!
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                {/* TROCAMOS lessonData POR currentLesson EM TODOS OS TEXTOS ABAIXO */}
                <Text style={styles.title}>{currentLesson.title}</Text>
                <Text style={styles.subtitle}>{currentLesson.subtitle}</Text>

                {viewMode === "lesson" ? (
                    <View>
                        <Text style={styles.bodyText}>{currentLesson.content}</Text>

                        <View style={styles.iaBox}>
                            <Text style={styles.iaText}>{currentLesson.iaInsight}</Text>
                        </View>

                        <TouchableOpacity style={styles.mainButton} onPress={() => setViewMode("quiz")}>
                            <Text style={styles.buttonText}>Ir para o Desafio 🚀</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <Text style={styles.questionText}>{currentLesson.quiz.question}</Text>

                        {currentLesson.quiz.options.map((option) => {
                            let optionStyle = styles.optionButton;
                            let textStyle = styles.optionText;

                            if (selectedOption === option.id) {
                                optionStyle = [styles.optionButton, styles.optionSelected];
                            }

                            if (quizAnswered) {
                                if (option.id === currentLesson.quiz.correctId) {
                                    optionStyle = [styles.optionButton, styles.optionCorrect];
                                } else if (selectedOption === option.id) {
                                    optionStyle = [styles.optionButton, styles.optionIncorrect];
                                }
                            }

                            return (
                                <TouchableOpacity
                                    key={option.id}
                                    style={optionStyle}
                                    onPress={() => handleOptionPress(option.id)}
                                    activeOpacity={0.7}
                                >
                                    <Text style={textStyle}>
                                        {option.id}) {option.text}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}

                        {!quizAnswered ? (
                            <TouchableOpacity style={styles.mainButton} onPress={handleCheckAnswer}>
                                <Text style={styles.buttonText}>Verificar Resposta ✔️</Text>
                            </TouchableOpacity>
                        ) : (
                            <View style={styles.explanationBox}>
                                <Text style={styles.explanationTitle}>Explicação Pedagógica:</Text>
                                <Text style={styles.explanationText}>{currentLesson.quiz.explanation}</Text>

                                <TouchableOpacity
                                    style={[styles.mainButton, { backgroundColor: "#221F4D", marginTop: 20 }]}
                                    onPress={handleResetQuiz}
                                >
                                    <Text style={styles.buttonText}>Concluir Módulo 🏁</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

// ... Os seus estilos (StyleSheet.create) continuam exatamente iguais lá embaixo!
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    scroll: { padding: 24, paddingBottom: 40 },
    title: { color: "#FFF", fontSize: 26, fontWeight: "bold" },
    subtitle: { color: "#6C5CE7", fontSize: 16, fontWeight: "600", marginBottom: 25 },
    bodyText: { color: "#CBD5E1", fontSize: 18, lineHeight: 28, marginBottom: 20 },
    iaBox: {
        backgroundColor: "#15162E",
        padding: 20,
        borderRadius: 16,
        marginVertical: 15,
        borderLeftWidth: 5,
        borderLeftColor: "#DEFF9A",
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    iaText: { color: "#DEFF9A", fontSize: 16, lineHeight: 24 },
    mainButton: { backgroundColor: "#6C5CE7", padding: 18, borderRadius: 30, alignItems: "center", marginTop: 25 },
    buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
    questionText: { color: "#FFF", fontSize: 20, fontWeight: "600", marginBottom: 25, lineHeight: 28 },
    optionButton: {
        backgroundColor: "#15162E",
        padding: 18,
        borderRadius: 16,
        marginBottom: 14,
        borderWidth: 2,
        borderColor: "#221F4D",
    },
    optionText: { color: "#CBD5E1", fontSize: 16, lineHeight: 22 },
    optionSelected: { borderColor: "#6C5CE7", backgroundColor: "rgba(108, 92, 231, 0.1)" },
    optionCorrect: { borderColor: "#4CD137", backgroundColor: "rgba(76, 209, 55, 0.15)" },
    optionIncorrect: { borderColor: "#FF4757", backgroundColor: "rgba(255, 71, 87, 0.15)" },
    explanationBox: {
        backgroundColor: "#15162E",
        padding: 20,
        borderRadius: 16,
        marginTop: 25,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    explanationTitle: { color: "#4CD137", fontSize: 18, fontWeight: "bold", marginBottom: 10 },
    explanationText: { color: "#CBD5E1", fontSize: 16, lineHeight: 24 },
});
