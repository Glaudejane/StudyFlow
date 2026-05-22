import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator"; 

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#090A1A" />
          <AppNavigator />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A",
    },
});