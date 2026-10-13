import React, { createContext, useContext, useState, useRef } from "react";
import { View, Text, Animated, Easing, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AvisoContext = createContext(null);

export function AvisoProvider({ children }) {
    const [avisoVisivel, setAvisoVisivel] = useState(false);
    const [avisoConteudo, setAvisoConteudo] = useState({
        titulo: "",
        subtitulo: "",
        icone: "robot-happy",
        cor: "#6C5CE7",
    });

    const escalaMascote = useRef(new Animated.Value(0)).current;
    const opacidadeMascote = useRef(new Animated.Value(0)).current;
    const flutuarMascote = useRef(new Animated.Value(0)).current;

    const mostrarAviso = (titulo, subtitulo, icone, cor) => {
        setAvisoConteudo({ titulo, subtitulo, icone, cor });
        setAvisoVisivel(true);

        escalaMascote.setValue(0);
        opacidadeMascote.setValue(0);

        Animated.parallel([
            Animated.spring(escalaMascote, {
                toValue: 1,
                friction: 4,
                tension: 80,
                useNativeDriver: true,
            }),
            Animated.timing(opacidadeMascote, {
                toValue: 1,
                duration: 250,
                useNativeDriver: true,
            }),
        ]).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(flutuarMascote, {
                    toValue: -8,
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(flutuarMascote, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ]),
        ).start();

        setTimeout(() => {
            Animated.timing(opacidadeMascote, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setAvisoVisivel(false));
        }, 2700);
    };

    return (
        <AvisoContext.Provider value={{ mostrarAviso }}>
            {children}

            {avisoVisivel && (
                <Animated.View
                    style={[
                        styles.avisoMascoteContainer,
                        {
                            opacity: opacidadeMascote,
                            transform: [{ scale: escalaMascote }, { translateY: flutuarMascote }],
                        },
                    ]}
                    pointerEvents="none"
                >
                    <View
                        style={[
                            styles.mascoteGlow,
                            { backgroundColor: avisoConteudo.cor, shadowColor: avisoConteudo.cor },
                        ]}
                    >
                        <MaterialCommunityIcons name={avisoConteudo.icone} size={48} color="#FFF" />
                    </View>

                    <View style={styles.avisoTextoFundo}>
                        <Text style={styles.avisoTitulo}>{avisoConteudo.titulo}</Text>
                        <Text style={styles.avisoSubtitulo}>{avisoConteudo.subtitulo}</Text>
                    </View>
                </Animated.View>
            )}
        </AvisoContext.Provider>
    );
}

export function useAviso() {
    return useContext(AvisoContext);
}

const styles = StyleSheet.create({
    avisoMascoteContainer: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 999,
    },
    mascoteGlow: {
        width: 84,
        height: 84,
        borderRadius: 42,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        shadowOpacity: 0.6,
        shadowRadius: 20,
        elevation: 10,
    },
    avisoTextoFundo: {
        backgroundColor: "#15162ECC",
        borderRadius: 14,
        paddingHorizontal: 16,
        paddingVertical: 8,
        alignItems: "center",
    },
    avisoTitulo: { color: "#FFF", fontWeight: "bold", fontSize: 14 },
    avisoSubtitulo: { color: "#8E8EA9", fontSize: 12, marginTop: 4, textAlign: "center" },
});
