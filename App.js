import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { AvisoProvider } from "./context/AvisoContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
    return (
        <AuthProvider>
            <AvisoProvider>
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content" backgroundColor="#090A1A" />
                    <AppNavigator />
                </SafeAreaView>
            </AvisoProvider>
        </AuthProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A",
    },
});