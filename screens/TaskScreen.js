import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
    Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TaskScreen() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [loading, setLoading] = useState(true);

    // Chaves secretas do banco local
    const ASYNC_STORAGE_KEY = "@studyflow:tasks";
    const XP_KEY = "@studyflow:xp";
    const LEVEL_KEY = "@studyflow:level";

    // 1. CARREGAR DADOS AO ABRIR A TELA
    useEffect(() => {
        loadTasks();
    }, []);

    // 2. SALVAR AS TAREFAS AUTOMATICAMENTE QUANDO ELAS MUDAREM
    useEffect(() => {
        if (!loading) {
            saveTasks(tasks);
        }
    }, [tasks, loading]);

    // Carrega as tarefas salvas
    const loadTasks = async () => {
        try {
            const savedTasks = await AsyncStorage.getItem(ASYNC_STORAGE_KEY);
            if (savedTasks !== null) {
                setTasks(JSON.parse(savedTasks));
            } else {
                const defaultTasks = [
                    { id: "1", text: "📘 Murphy: Unit 1 & 2 (Present Continuous)", completed: true },
                    { id: "2", text: "🤖 Praticar Prompts de IA em inglês", completed: false },
                    { id: "3", text: "📘 Murphy: Unit 3 (Present Simple)", completed: false },
                    { id: "4", text: "🗣️ Aula de conversação na semana", completed: false },
                ];
                setTasks(defaultTasks);
            }
        } catch (error) {
            console.log("Erro ao carregar as metas:", error);
        } finally {
            setLoading(false);
        }
    };

    const saveTasks = async (tasksToSave) => {
        try {
            await AsyncStorage.setItem(ASYNC_STORAGE_KEY, JSON.stringify(tasksToSave));
        } catch (error) {
            console.log("Erro ao salvar as metas:", error);
        }
    };

    // FUNÇÃO COMPLEMENTAR: Atualiza e calcula o XP/Nível do usuário no banco
    const updateTaskXP = async (isGainingXP) => {
        try {
            // Pega o progresso atual do celular (ou começa do zero se não achar)
            const currentXpSaved = await AsyncStorage.getItem(XP_KEY);
            const currentLevelSaved = await AsyncStorage.getItem(LEVEL_KEY);

            let currentXp = currentXpSaved ? parseInt(currentXpSaved) : 0;
            let currentLevel = currentLevelSaved ? parseInt(currentLevelSaved) : 1;

            const XP_BONUS = 25; // Pontos por tarefa feita
            let newXp = isGainingXP ? currentXp + XP_BONUS : Math.max(0, currentXp - XP_BONUS);
            let newLevel = currentLevel;

            // Lógica Pedagógica de Evolução (sobe a cada level * 500)
            if (isGainingXP && newXp >= currentLevel * 500) {
                newLevel = currentLevel + 1;
                Alert.alert("⭐ EVOLUÇÃO!", `Meta cumprida e você subiu para o Nível ${newLevel}! Fantástico! 🚀`);
            }

            // Se desmarcou a tarefa e o XP caiu abaixo do nível anterior (segurança)
            if (!isGainingXP && currentLevel > 1 && newXp < (currentLevel - 1) * 500) {
                newLevel = currentLevel - 1;
            }

            // Grava os novos valores recalculados
            await AsyncStorage.setItem(XP_KEY, newXp.toString());
            await AsyncStorage.setItem(LEVEL_KEY, newLevel.toString());
        } catch (error) {
            console.log("Erro ao atualizar o XP da tarefa:", error);
        }
    };

    const addTask = () => {
        if (newTask.trim() === "") return;

        const item = {
            id: Date.now().toString(),
            text: newTask,
            completed: false,
        };

        setTasks([...tasks, item]);
        setNewTask("");
    };

    // MODIFICADO: Função inteligente que altera o estado e atualiza o XP
    const toggleTask = (id) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                const nextCompletedState = !task.completed;

                // Dispara a nossa função de pontuação: true ganha, false perde
                updateTaskXP(nextCompletedState);

                return { ...task, completed: nextCompletedState };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <View style={styles.content}>
                    <Text style={styles.headerTitle}>Minhas Metas</Text>
                    <Text style={styles.headerSubtitle}>Organize seus blocos de foco diários</Text>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Adicionar nova meta de estudo..."
                            placeholderTextColor="#8E8EA9"
                            value={newTask}
                            onChangeText={setNewTask}
                        />
                        <TouchableOpacity style={styles.addButton} onPress={addTask}>
                            <Feather name="plus" size={24} color="#FFF" />
                        </TouchableOpacity>
                    </View>

                    {loading ? (
                        <ActivityIndicator size="large" color="#6C5CE7" style={{ marginTop: 40 }} />
                    ) : (
                        <FlatList
                            data={tasks}
                            keyExtractor={(item) => item.id}
                            showsVerticalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <View style={styles.taskCard}>
                                    <TouchableOpacity style={styles.checkContainer} onPress={() => toggleTask(item.id)}>
                                        <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
                                            {item.completed && <Feather name="check" size={14} color="#FFF" />}
                                        </View>
                                        <Text style={[styles.taskText, item.completed && styles.taskTextCompleted]}>
                                            {item.text}
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => deleteTask(item.id)}>
                                        <Feather name="trash-2" size={18} color="#E17055" />
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    )}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#090A1A",
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    headerTitle: {
        color: "#FFF",
        fontSize: 28,
        fontWeight: "bold",
    },
    headerSubtitle: {
        color: "#8E8EA9",
        fontSize: 14,
        marginTop: 4,
        marginBottom: 24,
    },
    inputContainer: {
        flexDirection: "row",
        marginBottom: 24,
    },
    input: {
        flex: 1,
        backgroundColor: "#15162E",
        borderRadius: 12,
        paddingHorizontal: 16,
        color: "#FFF",
        fontSize: 14,
        borderWidth: 1,
        borderColor: "#221F4D",
        height: 54,
    },
    addButton: {
        backgroundColor: "#6C5CE7",
        width: 54,
        height: 54,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 12,
    },
    taskCard: {
        backgroundColor: "#15162E",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    checkContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    checkbox: {
        width: 22,
        height: 22,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: "#6C5CE7",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 14,
    },
    checkboxChecked: {
        backgroundColor: "#6C5CE7",
        borderColor: "#6C5CE7",
    },
    taskText: {
        color: "#FFF",
        fontSize: 14,
        fontWeight: "500",
        flex: 1,
    },
    taskTextCompleted: {
        color: "#8E8EA9",
        textDecorationLine: "line-through",
    },
});