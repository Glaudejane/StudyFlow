// screens/WeeksScreen.js
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import { lessonsData } from "./lessonsData";

export default function WeeksScreen({ navigation }) {
    const weeksList = Object.values(lessonsData);

    const renderWeekItem = ({ item }) => (
        <TouchableOpacity
            style={styles.weekCard}
            onPress={() => navigation.navigate("Learn", { weekId: item.id })}
            activeOpacity={0.7}
        >
            <View style={styles.infoContainer}>
                <Text style={styles.moduleText}>{item.module.toUpperCase()}</Text>
                <Text style={styles.weekTitle}>{item.title}</Text>
                <Text style={styles.weekSubtitle} numberOfLines={1}>
                    {item.subtitle}
                </Text>
            </View>
            <View style={styles.arrowContainer}>
                <Text style={styles.arrow}>➔</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            {/* CABEÇALHO COM BOTÃO DE VOLTAR */}
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()} // <--- FAZ VOLTAR PARA A HOME!
                    activeOpacity={0.7}
                >
                    <Text style={styles.backButtonText}>← Voltar</Text>
                </TouchableOpacity>

                <Text style={styles.headerTitle}>Trilha de Inglês</Text>
                <Text style={styles.headerSubtitle}>Selecione a semana para praticar</Text>
            </View>

            <FlatList
                data={weeksList}
                keyExtractor={(item) => item.id}
                renderItem={renderWeekItem}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A",
    },
    header: {
        padding: 24,
        paddingTop: 16, // Ajuste para não colar no topo
        borderBottomWidth: 1,
        borderColor: "#221F4D",
    },
    backButton: {
        marginBottom: 16,
        alignSelf: "flex-start", // Garante que o clique seja apenas no tamanho do texto
    },
    backButtonText: {
        color: "#6C5CE7",
        fontSize: 16,
        fontWeight: "600",
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    headerSubtitle: {
        color: "#CBD5E1",
        fontSize: 16,
        marginTop: 4,
    },
    listContainer: {
        padding: 24,
        paddingBottom: 40,
    },
    weekCard: {
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: "#221F4D",
        flexDirection: "row",
        alignItems: "center",
    },
    infoContainer: {
        flex: 1,
        paddingRight: 8,
    },
    moduleText: {
        color: "#6C5CE7",
        fontSize: 11,
        fontWeight: "bold",
        marginBottom: 4,
        letterSpacing: 1,
    },
    weekTitle: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
    weekSubtitle: {
        color: "#94A3B8",
        fontSize: 14,
        marginTop: 4,
    },
    arrowContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    arrow: {
        color: "#6C5CE7",
        fontSize: 20,
        fontWeight: "bold",
    },
});
