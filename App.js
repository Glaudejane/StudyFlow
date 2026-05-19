import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator"; // Importa o navegador de abas (que junta a Home e o Timer)

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
          {/* Deixa os ícones da bateria e hora do celular brancos para combinar com o tema escuro */}
          <StatusBar barStyle="light-content" backgroundColor="#090A1A" />

          {/* 🚀 A CORREÇÃO ESTÁ AQUI: Agora quem manda no app é o Navegador! */}
          <AppNavigator />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A", // Cor de fundo idêntica à do seu protótipo
    },
});