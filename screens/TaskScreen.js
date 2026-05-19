import React, { useState } from "react";
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
} from "react-native";
import { Feather } from "@expo/vector-icons";

export default function TaskScreen() {
    // Lista inicial de tarefas baseada no seu roteiro real de estudos!
    const [tasks, setTasks] = useState([
        { id: "1", text: "📘 Murphy: Unit 1 & 2 (Present Continuous)", completed: true },
        { id: "2", text: "🤖 Praticar Prompts de IA em inglês", completed: false },
        { id: "3", text: "📘 Murphy: Unit 3 (Present Simple)", completed: false },
        { id: "4", text: "🗣️ Aula de conversação na semana", completed: false },
    ]);

    const [newTask, setNewTask] = useState("");

    // Função para adicionar uma nova tarefa
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

    // Função para marcar/desmarcar a tarefa como concluída
    const toggleTask = (id) => {
        setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
    };

    // Função para deletar uma tarefa
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <View style={styles.content}>
                    <Text style={styles.headerTitle}>Minhas Metas</Text>
                    <Text style={styles.headerSubtitle}>Organize seus blocos de foco diários</Text>

                    {/* Campo de Entrada para Nova Tarefa */}
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

                    {/* Lista de Tarefas */}
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
