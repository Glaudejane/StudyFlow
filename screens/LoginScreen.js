import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { supabase } from "../services/supabase";

// Traduz os erros do Supabase para mensagens amigáveis em português
function traduzirErro(error) {
    const codigo = error?.code || "";
    const mensagem = (error?.message || "").toLowerCase();

    if (codigo === "invalid_credentials" || mensagem.includes("invalid login credentials")) {
        return "E-mail ou senha incorretos.";
    }
    if (codigo === "user_already_exists" || mensagem.includes("already registered")) {
        return "Este e-mail já está cadastrado. Tente entrar.";
    }
    if (codigo === "weak_password" || mensagem.includes("password should be")) {
        return "A senha é fraca demais. Use pelo menos 6 caracteres.";
    }
    if (codigo === "email_not_confirmed" || mensagem.includes("email not confirmed")) {
        return "Confirme seu e-mail antes de entrar.";
    }
    if (codigo === "email_address_invalid" || mensagem.includes("invalid email")) {
        return "Digite um e-mail válido.";
    }
    if (mensagem.includes("rate limit") || codigo.includes("rate_limit")) {
        return "Muitas tentativas. Aguarde um pouco e tente de novo.";
    }
    if (mensagem.includes("network")) {
        return "Sem conexão. Confira sua internet e tente de novo.";
    }
    return "Algo deu errado. Tente novamente.";
}

export default function LoginScreen() {
    const [modo, setModo] = useState("entrar"); // "entrar" ou "criar"
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState("");
    const [aviso, setAviso] = useState("");

    const criandoConta = modo === "criar";

    const trocarModo = () => {
        setModo(criandoConta ? "entrar" : "criar");
        setErro("");
        setAviso("");
    };

    const enviar = async () => {
        setErro("");
        setAviso("");

        const emailLimpo = email.trim().toLowerCase();

        if (!emailLimpo || !senha) {
            setErro("Preencha o e-mail e a senha.");
            return;
        }
        if (criandoConta && senha.length < 6) {
            setErro("A senha precisa ter pelo menos 6 caracteres.");
            return;
        }
        if (criandoConta && senha !== confirmarSenha) {
            setErro("As senhas não são iguais.");
            return;
        }

        setCarregando(true);
        try {
            if (criandoConta) {
                const { data, error } = await supabase.auth.signUp({
                    email: emailLimpo,
                    password: senha,
                });
                if (error) {
                    setErro(traduzirErro(error));
                } else if (!data.session) {
                    // A confirmação de e-mail está ligada: a pessoa ainda não pode entrar
                    setAviso("Conta criada! Enviamos um e-mail para confirmar o seu cadastro.");
                }
                // Se veio uma sessão, o AuthContext percebe sozinho e o app muda de tela
            } else {
                const { error } = await supabase.auth.signInWithPassword({
                    email: emailLimpo,
                    password: senha,
                });
                if (error) {
                    setErro(traduzirErro(error));
                }
            }
        } catch (e) {
            setErro(traduzirErro(e));
        } finally {
            setCarregando(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
                <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                    <View style={styles.robotGlow}>
                        <MaterialCommunityIcons name="robot-happy" size={44} color="#FFF" />
                    </View>
                    <Text style={styles.marca}>StudyFlow</Text>
                    <Text style={styles.lema}>Seu fluxo. Seu foco. Seu futuro.</Text>

                    <Text style={styles.titulo}>{criandoConta ? "Criar minha conta" : "Bem-vindo de volta!"}</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                        placeholderTextColor="#8E8EA9"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        placeholderTextColor="#8E8EA9"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    {criandoConta && (
                        <TextInput
                            style={styles.input}
                            placeholder="Confirme sua senha"
                            placeholderTextColor="#8E8EA9"
                            value={confirmarSenha}
                            onChangeText={setConfirmarSenha}
                            secureTextEntry
                            autoCapitalize="none"
                            autoCorrect={false}
                        />
                    )}

                    {erro ? <Text style={styles.erro}>{erro}</Text> : null}
                    {aviso ? <Text style={styles.aviso}>{aviso}</Text> : null}

                    <TouchableOpacity
                        style={[styles.botao, carregando && styles.botaoDesabilitado]}
                        onPress={enviar}
                        disabled={carregando}
                    >
                        <Text style={styles.botaoTexto}>
                            {carregando ? "Aguarde..." : criandoConta ? "Criar conta" : "Entrar"}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={trocarModo} disabled={carregando}>
                        <Text style={styles.trocar}>
                            {criandoConta ? "Já tenho uma conta. Entrar" : "Não tem conta? Criar conta"}
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#090A1A" },
    content: { flexGrow: 1, padding: 24, justifyContent: "center" },
    robotGlow: {
        alignSelf: "center",
        width: 84,
        height: 84,
        borderRadius: 42,
        backgroundColor: "#6C5CE7",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
        shadowColor: "#6C5CE7",
        shadowOpacity: 0.6,
        shadowRadius: 20,
        elevation: 10,
    },
    marca: { color: "#FFF", fontSize: 26, fontWeight: "bold", textAlign: "center" },
    lema: { color: "#8E8EA9", fontSize: 13, textAlign: "center", marginTop: 4, marginBottom: 28 },
    titulo: { color: "#FFF", fontSize: 20, fontWeight: "bold", marginBottom: 16 },
    input: {
        backgroundColor: "#15162E",
        borderRadius: 12,
        padding: 14,
        color: "#FFF",
        fontSize: 16,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#221F4D",
    },
    erro: { color: "#FF5C5C", fontSize: 13, marginBottom: 12 },
    aviso: { color: "#00BA4A", fontSize: 13, marginBottom: 12 },
    botao: {
        backgroundColor: "#6C5CE7",
        borderRadius: 14,
        padding: 16,
        alignItems: "center",
        marginTop: 4,
        marginBottom: 16,
    },
    botaoDesabilitado: { backgroundColor: "#302D5C" },
    botaoTexto: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
    trocar: { color: "#A855F7", fontSize: 14, textAlign: "center" },
});