import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import TimerScreen from "./screens/TimerScreen"; // Importa a tela do Pomodoro

export default function App() {
    return (
        // Definimos o fundo escuro aqui também para não dar "piscada" clara ao abrir
        <SafeAreaView style={styles.container}>
            {/* Deixa os ícones da bateria e hora do celular brancos para combinar com o tema escuro */}
            <StatusBar barStyle="light-content" backgroundColor="#090A1A" />

            {/* Exibe a tela do Pomodoro */}
            <TimerScreen />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A", // Cor de fundo idêntica à do seu protótipo
    },
});
