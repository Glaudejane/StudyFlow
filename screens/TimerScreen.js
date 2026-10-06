import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert, Modal, Animated, Easing } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAudioPlayer, AudioSource } from "expo-audio";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TimerScreen({ navigation }) {
    const s = styles;

    const [currentMode, setCurrentMode] = useState("foco");
    const [secondsLeft, setSecondsLeft] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [focoMinutos, setFocoMinutos] = useState(25);
    const [pausaMinutos, setPausaMinutos] = useState(5);
    const [configVisivel, setConfigVisivel] = useState(false);
    const [ciclosFoco, setCiclosFoco] = useState(0); // Contador de ciclos de foco concluídos
    const CICLOS_ATE_PARAR = 4; // Número de ciclos de foco antes de uma pausa longa
    const [avisoVisivel, setAvisoVisivel] = useState(false);
    const [avisoConteudo, setAvisoConteudo] = useState({
        titulo: "",
        subtitulo: "",
        icone: "robot-happy",
        cor: "#6C5CE7",
    });

    // 🤖 "Controles remotos" da animação do robô
    const escalaMascote = useRef(new Animated.Value(0)).current;
    const opacidadeMascote = useRef(new Animated.Value(0)).current;
    const flutuarMascote = useRef(new Animated.Value(0)).current;
    // 🎵 NOVA MANEIRA: Criando os players de áudio nativos e modernos
    // Eles já carregam os arquivos locais da pasta assets perfeitamente!
    const alarmPlayer = useAudioPlayer(require("../assets/alarm.mp3"));
    const lofiPlayer = useAudioPlayer(require("../assets/lofi.mp3"));

    // Configura o seu Lo-Fi para tocar em loop eterno de fundo
    lofiPlayer.loop = true;
    lofiPlayer.volume = 0.4; // Volume confortável

    useEffect(() => {
        const carregarConfiguracoes = async () => {
            try {
                const focoSalvo = await AsyncStorage.getItem("@studyflow:focoMinutos");
                const pausaSalva = await AsyncStorage.getItem("@studyflow:pausaMinutos");
                const focoCarregado = focoSalvo ? parseInt(focoSalvo, 10) : 25;
                const pausaCarregada = pausaSalva ? parseInt(pausaSalva, 10) : 5;
                setFocoMinutos(focoCarregado);
                setPausaMinutos(pausaCarregada);
                setSecondsLeft(focoCarregado * 60);
            } catch (error) {
                console.log("Erro ao carregar configuracoes do timer:", error);
            }
        };

        carregarConfiguracoes();
    }, []);

    // 1. CORAÇÃO DO CRONÔMETRO (só cuida de contar os segundos)
    // ⏱️ Soma o tempo de um bloco de foco concluído ao total guardado

    const registrarTempoEstudado = async () => {
        try {
            const minutosSalvos = await AsyncStorage.getItem("@studyflow:tempoEstudadoMinutos");
            const totalAtual = minutosSalvos ? parseInt(minutosSalvos, 10) : 0;
            const novoTotal = totalAtual + focoMinutos; // cada bloco de foco vale 25 minutos
            await AsyncStorage.setItem("@studyflow:tempoEstudadoMinutos", novoTotal.toString());
        } catch (error) {
            console.log("Erro ao salvar tempo estudado:", error);
        }
    };
    useEffect(() => {
        if (!isActive || secondsLeft <= 0) return;

        const interval = setInterval(() => {
            setSecondsLeft((seconds) => seconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isActive, secondsLeft]);

    const mostrarAviso = (titulo, subtitulo, icone, cor) => {
        setAvisoConteudo({ titulo, subtitulo, icone, cor });
        setAvisoVisivel(true);

        // Reseta a animação antes de começar, caso o robô apareça de novo rapidinho
        escalaMascote.setValue(0);
        opacidadeMascote.setValue(0);

        // 🐇 Entrada: o robô "salta" na tela (efeito elástico/mola)
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

        // 🎈 Flutuação contínua, enquanto ele estiver na tela
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

        // 👋 Some suavemente depois de um tempinho
        setTimeout(() => {
            Animated.timing(opacidadeMascote, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setAvisoVisivel(false));
        }, 2700);
    };;
    // 2. QUANDO O TEMPO ZERA (só vigia secondsLeft, evitando disparo duplo)
    useEffect(() => {
        if (secondsLeft !== 0) return;

        setIsActive((wasActive) => {
            if (!wasActive) return false; // já tinha sido tratado, não faz nada de novo

            // 🔔 Toca o alarme moderno!
            alarmPlayer.play();

            let continuarAutomaticamente = true;

            if (currentMode === "foco") {
                registrarTempoEstudado(); // Registra o tempo estudado ao concluir um bloco de foco

                const novoCiclo = ciclosFoco + 1;

                if (novoCiclo >= CICLOS_ATE_PARAR) {
                    continuarAutomaticamente = false;
                    setCiclosFoco(0);
                } else {
                    setCiclosFoco(novoCiclo);
                }
            }
            // Alterna entre foco e pausa automaticamente
            setCurrentMode((prevMode) => (prevMode === "foco" ? "pausa" : "foco"));
            setSecondsLeft((prevSegundos) => (currentMode === "foco" ? pausaMinutos * 60 : focoMinutos * 60));

            // 🔔 Mostra um aviso rápido, que some sozinho (sem precisar tocar em nada)
            if (currentMode === "foco") {
                if (continuarAutomaticamente) {
                    mostrarAviso("🔥 Bloco concluído!", "Hora de uma pausa curta.", "robot-excited");
                } else {
                    mostrarAviso(
                        "🎉 Ciclo completo!",
                        `Você completou ${CICLOS_ATE_PARAR} blocos de foco! Reinicie quando estiver pronta para a pausa longa.`,
                        "robot-love",
                        "#FFD700",
                    );
                }
            } else {
                mostrarAviso("☕ Pausa terminada!", "Hora de voltar ao fluxo de foco!", "robot-happy", "#00BA4A");
            }

            return continuarAutomaticamente; // Se for false, o cronômetro para e espera ação do usuário
        });
    }, [secondsLeft]);
    const formatTime = () => {
        const mins = Math.floor(secondsLeft / 60);
        const secs = secondsLeft % 60;
        return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    };

    const handleModeChange = (mode) => {
        setIsActive(false);
        setCurrentMode(mode);
        if (mode === "foco") {
            setSecondsLeft(mode === "foco" ? focoMinutos * 60 : pausaMinutos * 60);
        } else {
            setSecondsLeft(pausaMinutos * 60);
        }
    };

    const salvarConfiguracao = async (tipo, valor) => {
        try {
            if (tipo === "foco") {
                setFocoMinutos(valor);
                await AsyncStorage.setItem("@studyflow:focoMinutos", valor.toString());
                if (currentMode === "foco" && !isActive) {
                    setSecondsLeft(valor * 60);
                }
            } else {
                setPausaMinutos(valor);
                await AsyncStorage.setItem("@studyflow:pausaMinutos", valor.toString());
                if (currentMode === "pausa" && !isActive) {
                    setSecondsLeft(valor * 60);
                }
            }
        } catch (error) {
            console.log("Erro ao salvar configuracao do timer:", error);
        }
    };

    // 🎵 4. NOVA FUNÇÃO DA MÚSICA DE FOCO (PLAY / PAUSE SIMPLIFICADO)
    const toggleFocusMusic = () => {
        if (lofiPlayer.playing) {
            lofiPlayer.pause(); // Se estava tocando, pausa!
        } else {
            lofiPlayer.play(); // Se estava pausado, dá play!
        }
    };

    return (
        <SafeAreaView style={s.container}>
            {avisoVisivel && (
                <Animated.View
                    style={[
                        s.avisoMascoteContainer,
                        {
                            opacity: opacidadeMascote,
                            transform: [{ scale: escalaMascote }, { translateY: flutuarMascote }],
                        },
                    ]}
                >
                    <View
                        style={[s.mascoteGlow, { backgroundColor: avisoConteudo.cor, shadowColor: avisoConteudo.cor }]}
                    >
                        <MaterialCommunityIcons name={avisoConteudo.icone} size={48} color="#FFF" />
                    </View>

                    <View style={s.avisoTextoFundo}>
                        <Text style={s.avisoTitulo}>{avisoConteudo.titulo}</Text>
                        <Text style={s.avisoSubtitulo}>{avisoConteudo.subtitulo}</Text>
                    </View>
                </Animated.View>
            )}
            {/* Header */}
            <View style={s.header}>
                <TouchableOpacity style={s.backButton} onPress={() => navigation.navigate("Início")}>
                    <Text style={s.backText}>←</Text>
                </TouchableOpacity>
                <Text style={s.headerTitle}>Foco Pomodoro</Text>
                <TouchableOpacity style={s.settingsButton} onPress={() => setConfigVisivel(true)}>
                    <Text style={s.settingsText}>⚙️</Text>
                </TouchableOpacity>
            </View>

            {/* Abas */}
            <View style={s.tabContainer}>
                <TouchableOpacity
                    style={[s.tab, currentMode === "foco" && s.activeTab]}
                    onPress={() => handleModeChange("foco")}
                >
                    <Text style={currentMode === "foco" ? s.activeTabText : s.tabText}>Foco</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[s.tab, currentMode === "pausa" && s.activeTab]}
                    onPress={() => handleModeChange("pausa")}
                >
                    <Text style={currentMode === "pausa" ? s.activeTabText : s.tabText}>Pausa</Text>
                </TouchableOpacity>
            </View>

            {/* Círculo do Cronômetro */}
            <View
                style={[
                    s.timerOuterCircle,
                    currentMode === "pausa" && { borderColor: "#4CD137", shadowColor: "#4CD137" },
                ]}
            >
                <View style={s.timerInnerCircle}>
                    <Text style={s.timeText}>{formatTime()}</Text>
                    <Text style={s.subTimeText}>{currentMode === "foco" ? "Tempo de foco" : "Tempo de descanso"}</Text>
                    <Text style={s.leafIcon}>{currentMode === "foco" ? "🍃" : "☕"}</Text>
                </View>
            </View>

            {/* Card de Música de Foco */}
            <TouchableOpacity style={s.musicCard} onPress={toggleFocusMusic} activeOpacity={0.7}>
                <View style={s.musicInfo}>
                    <Text style={s.musicIcon}>🎵</Text>
                    <View>
                        <Text style={s.musicTitle}>Música de foco</Text>
                        <Text style={s.musicSubtitle}>Lo-fi Beats</Text>
                    </View>
                </View>
                <View style={s.playIconButton}>
                    {/* lofiPlayer.playing nos diz em tempo real se o som está rolando! */}
                    <Text style={s.playIconText}>{lofiPlayer.playing ? "⏸" : "▶"}</Text>
                </View>
            </TouchableOpacity>

            {/* Botão Principal */}
            <TouchableOpacity
                style={[s.mainButton, isActive && { backgroundColor: "#CC3333" }]}
                onPress={() => setIsActive(!isActive)}
                activeOpacity={0.8}
            >
                <Text style={s.mainButtonText}>{isActive ? "Pausar foco" : "Iniciar foco"}</Text>
                <Text style={s.mainButtonIcon}>{isActive ? "⏸" : "▶"}</Text>
            </TouchableOpacity>

            <Modal
                visible={configVisivel}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setConfigVisivel(false)}
            >
                <View style={s.modalOverlay}>
                    <View style={s.modalContent}>
                        <View style={s.modalHeader}>
                            <Text style={s.modalTitle}>⚙️ Configurar Timer</Text>
                            <TouchableOpacity onPress={() => setConfigVisivel(false)}>
                                <Text style={{ color: "#FFF", fontSize: 20 }}>✕</Text>
                            </TouchableOpacity>
                        </View>

                        <Text style={s.modalLabel}>Duração do foco</Text>
                        <View style={s.opcoesRow}>
                            {[15, 25, 45].map((valor) => (
                                <TouchableOpacity
                                    key={valor}
                                    style={[s.opcaoChip, focoMinutos === valor && s.opcaoChipSelecionada]}
                                    onPress={() => salvarConfiguracao("foco", valor)}
                                >
                                    <Text style={[s.opcaoTexto, focoMinutos === valor && s.opcaoTextoSelecionado]}>
                                        {valor} min
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>

                        <Text style={s.modalLabel}>Duração da pausa</Text>
                        <View style={s.opcoesRow}>
                            {[5, 10, 15].map((valor) => (
                                <TouchableOpacity
                                    key={valor}
                                    style={[s.opcaoChip, pausaMinutos === valor && s.opcaoChipSelecionada]}
                                    onPress={() => salvarConfiguracao("pausa", valor)}
                                >
                                    <Text style={[s.opcaoTexto, pausaMinutos === valor && s.opcaoTextoSelecionado]}>
                                        {valor} min
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A", paddingHorizontal: 24 },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    backButton: { paddingRight: 20 },
    backText: { color: "#FFFFFF", fontSize: 24 },
    headerTitle: { color: "#FFFFFF", fontSize: 18, fontWeight: "600" },
    settingsButton: { paddingLeft: 20 },
    settingsText: { fontSize: 20 },
    tabContainer: { flexDirection: "row", backgroundColor: "#15162E", borderRadius: 25, padding: 4, marginBottom: 40 },
    tab: { flex: 1, paddingVertical: 10, alignItems: "center", borderRadius: 21 },
    activeTab: { backgroundColor: "#221F4D", borderWidth: 1, borderColor: "#6C5CE7" },
    activeTabText: { color: "#FFFFFF", fontWeight: "600" },
    tabText: { color: "#8E8EA9" },
    timerOuterCircle: {
        alignSelf: "center",
        width: 280,
        height: 280,
        borderRadius: 140,
        borderWidth: 15,
        borderColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 40,
        shadowColor: "#6C5CE7",
        shadowOpacity: 0.4,
        shadowRadius: 15,
    },
    timerInnerCircle: { alignItems: "center" },
    timeText: { color: "#FFFFFF", fontSize: 48, fontWeight: "bold" },
    subTimeText: { color: "#8E8EA9", fontSize: 12, marginTop: 4 },
    leafIcon: { fontSize: 18, marginTop: 10 },
    musicCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#15162E",
        borderRadius: 16,
        padding: 16,
        marginBottom: 40,
        width: "100%",
    },
    musicInfo: { flexDirection: "row", alignItems: "center", gap: 12 },
    musicIcon: { fontSize: 20 },
    musicTitle: { color: "#8E8EA9", fontSize: 12 },
    musicSubtitle: { color: "#FFFFFF", fontSize: 14, fontWeight: "500" },
    playIconButton: { padding: 4 },
    playIconText: { color: "#6C5CE7", fontSize: 16, fontWeight: "bold" },
    mainButton: {
        backgroundColor: "#6C5CE7",
        borderRadius: 30,
        paddingVertical: 18,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        position: "absolute",
        bottom: 40,
        left: 24,
        right: 24,
    },
    mainButtonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "bold" },
    mainButtonIcon: { color: "#FFFFFF", fontSize: 12 },

    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
        justifyContent: "flex-end",
    },
    modalContent: {
        backgroundColor: "#15162E",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
    },
    modalHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24,
    },
    modalTitle: { color: "#FFF", fontSize: 18, fontWeight: "bold" },
    modalLabel: { color: "#8E8EA9", fontSize: 13, fontWeight: "bold", marginBottom: 10 },
    opcoesRow: { flexDirection: "row", gap: 10, marginBottom: 24 },
    opcaoChip: {
        flex: 1,
        backgroundColor: "#221F4D",
        borderRadius: 12,
        paddingVertical: 12,
        alignItems: "center",
        borderWidth: 1.5,
        borderColor: "#221F4D",
    },
    avisoMascoteContainer: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        alignItems: "center",
        zIndex: 10,
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
    opcaoChipSelecionada: { borderColor: "#6C5CE7", backgroundColor: "#6C5CE7" },
    opcaoTexto: { color: "#8E8EA9", fontWeight: "bold" },
    opcaoTextoSelecionado: { color: "#FFF" },
});
