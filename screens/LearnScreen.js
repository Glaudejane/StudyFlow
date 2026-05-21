import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from "react-native";

// Nossos dados pedagógicos (JSON)
const lessonData = {
    id: "eng_ia_1",
    title: "Present Continuous + IA",
    subtitle: "Descrevendo o Agora para a IA",
    content:
        "O Present Continuous (sujeito + am/is/are + verbo com -ING) é usado para falar sobre ações que estão acontecendo neste exato momento. Na tecnologia, usamos isso para dar o contexto atual do nosso sistema ou do nosso código para a Inteligência Artificial.",
    iaInsight:
        "💡 Conexão IA:\nQuando o seu código der erro, use o Present Continuous para explicar o cenário presente:\n\n'I am developing a React Native screen, but the button is not showing up. Can you help me?'",
    quiz: {
        question:
            "Imagine que você está programando e o simulador travou. Qual das opções abaixo usa o Present Continuous corretamente para explicar a situação atual para a IA?",
        options: [
            { id: "A", text: "I develop a screen and it stops working." },
            { id: "B", text: "I am developing a screen and it is not responding." },
            { id: "C", text: "I developed a screen and it work." },
            { id: "D", text: "I will develop a screen now." },
        ],
        correctId: "B",
        explanation:
            "Muito bem! 'I am developing' (estou desenvolvendo) e 'is not responding' (não está respondendo) mostram à IA o que está acontecendo exatamente agora.",
    },
};

export default function LearnScreen({ navigation }) {
    const [viewMode, setViewMode] = useState("lesson"); // 'lesson' ou 'quiz'
    const [selectedOption, setSelectedOption] = useState(null);
    const [quizAnswered, setQuizAnswered] = useState(false);

    const handleOptionPress = (optionId) => {
        if (quizAnswered) return; // Impede mudar a resposta depois de responder
        setSelectedOption(optionId);
    };

    const handleCheckAnswer = () => {
        if (!selectedOption) {
            Alert.alert("Ops!", "Por favor, selecione uma opção antes de verificar.");
            return;
        }
        setQuizAnswered(true);

        if (selectedOption === lessonData.quiz.correctId) {
            // Aqui no futuro vamos disparar a função de som e somar +50 XP!
            Alert.alert("🎉 Parabéns!", "Você acertou e ganhou +50 XP!");
        }
    };

    const handleResetQuiz = () => {
        setSelectedOption(null);
        setQuizAnswered(false);
        setViewMode("lesson");
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Text style={styles.title}>{lessonData.title}</Text>
                <Text style={styles.subtitle}>{lessonData.subtitle}</Text>

                {viewMode === "lesson" ? (
                    // TELA DA LIÇÃO
                    <View>
                        <Text style={styles.bodyText}>{lessonData.content}</Text>

                        <View style={styles.iaBox}>
                            <Text style={styles.iaText}>{lessonData.iaInsight}</Text>
                        </View>

                        <TouchableOpacity style={styles.mainButton} onPress={() => setViewMode("quiz")}>
                            <Text style={styles.buttonText}>Ir para o Desafio 🚀</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    // TELA DO QUIZ
                    <View>
                        <Text style={styles.questionText}>{lessonData.quiz.question}</Text>

                        {lessonData.quiz.options.map((option) => {
                            // Lógica de coloração dos botões do quiz
                            let optionStyle = styles.optionButton;
                            let textStyle = styles.optionText;

                            if (selectedOption === option.id) {
                                optionStyle = [styles.optionButton, styles.optionSelected];
                            }

                            if (quizAnswered) {
                                if (option.id === lessonData.quiz.correctId) {
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
                                <Text style={styles.explanationText}>{lessonData.quiz.explanation}</Text>

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
