import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// 🎨 As 6 opções de avatar disponíveis
export const AVATARES = [
    { id: "robo", icone: "robot-outline", lib: "material", cor: "#A855F7" },
    { id: "foguete", icone: "rocket", lib: "fontawesome", cor: "#FF7A00" },
    { id: "cerebro", icone: "brain", lib: "fontawesome", cor: "#3B82F6" },
    { id: "raio", icone: "lightning-bolt", lib: "material", cor: "#FFD700" },
    { id: "alvo", icone: "target", lib: "material", cor: "#00BA4A" },
    { id: "cobra", icone: "leaf", lib: "material", cor: "#FF5C5C" }, // ícone temporário, ajustamos já já
];

export default function WelcomeSetupScreen({ navigation }) {
    const [nome, setNome] = useState("");
    const [avatarSelecionado, setAvatarSelecionado] = useState(null);

    const podeContiunar = nome.trim().length > 0 && avatarSelecionado !== null;

    const salvarContinuar = async () => {
        try {
            await AsyncStorage.setItem("@studyflow:userName", nome.trim());
            await AsyncStorage.setItem("@studyflow:userAvatar", avatarSelecionado);
            navigation.reset({
                index: 0,
                routes: [{ name: "MainTabs" }],
            });
        } catch (error) {
            console.log("Erro ao salvar dados de boas-vindas:", error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.titulo}>Bem-vinda(o) ao StudyFlow! 👋</Text>
                <Text style={styles.subtitulo}>Vamos personalizar sua experiência</Text>

                <Text style={styles.label}>Como podemos te chamar?</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    placeholderTextColor="#8E8EA9"
                    value={nome}
                    onChangeText={setNome}
                />

                <Text style={styles.label}>Escolha seu avatar</Text>
                <View style={styles.avatarGrid}>
                    {AVATARES.map((avatar) => {
                        const selecionado = avatarSelecionado === avatar.id;
                        return (
                            <TouchableOpacity
                                key={avatar.id}
                                style={[
                                    styles.avatarCircle,
                                    { borderColor: avatar.cor },
                                    selecionado && { backgroundColor: avatar.cor },
                                ]}
                                onPress={() => setAvatarSelecionado(avatar.id)}
                            >
                                {avatar.lib === "material" ? (
                                    <MaterialCommunityIcons
                                        name={avatar.icone}
                                        size={28}
                                        color={selecionado ? "#FFF" : avatar.cor}
                                    />
                                ) : (
                                    <FontAwesome5
                                        name={avatar.icone}
                                        size={24}
                                        color={selecionado ? "#FFF" : avatar.cor}
                                    />
                                )}
                            </TouchableOpacity>
                        );
                    })}
                </View>

                <TouchableOpacity
                    style={[styles.botaoContinuar, !podeContiunar && styles.botaoDesabilitado]}
                    disabled={!podeContiunar}
                    onPress={salvarContinuar}
                >
                    <Text style={styles.botaoTexto}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    content: { flex: 1, padding: 24, justifyContent: "center" },
    titulo: { color: "#FFF", fontSize: 24, fontWeight: "bold", textAlign: "center" },
    subtitulo: { color: "#8E8EA9", fontSize: 14, textAlign: "center", marginTop: 8, marginBottom: 32 },
    label: { color: "#FFF", fontSize: 14, fontWeight: "bold", marginBottom: 10 },
    input: {
        backgroundColor: "#15162E",
        borderRadius: 12,
        padding: 14,
        color: "#FFF",
        fontSize: 16,
        marginBottom: 28,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    avatarGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 14,
        marginBottom: 36,
    },
    avatarCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#15162E",
    },
    botaoContinuar: {
        backgroundColor: "#6C5CE7",
        borderRadius: 14,
        padding: 16,
        alignItems: "center",
    },
    botaoDesabilitado: { backgroundColor: "#302D5C" },
    botaoTexto: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});
