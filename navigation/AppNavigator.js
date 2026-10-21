import { supabase } from "../services/supabase";
import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WeeksScreen from "../screens/WeeksScreen";
import PythonWeeksScreen from "../screens/PythonWeeksScreen";
import BuildAppsScreen from "../screens/BuildAppsScreen";
import WelcomeSetupScreen from "../screens/WelcomeSetupScreen";
import LoginScreen from "../screens/LoginScreen";
import { useAuth } from "../context/AuthContext";

// Importação das Telas
import HomeScreen from "../screens/HomeScreen";
import TimerScreen from "../screens/TimerScreen";
import TaskScreen from "../screens/TaskScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LearnScreen from "../screens/LearnScreen";
import AIWeeksScreen from "../screens/AIWeeksScreen";
import { sincronizarAoEntrar } from "../services/sincronizacao";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// COMPONENTE DAS ABAS INFERIORES
function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#6C5CE7",
                tabBarInactiveTintColor: "#8E8EA9",
                tabBarLabelStyle: {
                    fontSize: 11,
                    fontWeight: "500",
                    marginTop: -4,
                },
                tabBarStyle: {
                    backgroundColor: "#15162E",
                    borderTopWidth: 0,
                    height: 65,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
            }}
        >
            <Tab.Screen
                name="Início"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="home" color={color} size={size ? size : 20} />
                    ),
                }}
            />
            <Tab.Screen
                name="Foco"
                component={TimerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="clock" color={color} size={size ? size : 20} />,
                }}
            />
            <Tab.Screen
                name="Tarefas"
                component={TaskScreen}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="check-square" size={24} color={color} />,
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
                }}
            />
        </Tab.Navigator>
    );
}

// O NAVEGADOR PRINCIPAL GERENCIA O FLUXO GLOBAL
export default function AppNavigator() {
    // 🔐 Pergunta ao "guarda" de login: tem alguém logado? Ainda está conferindo?
    const { sessao, carregando: carregandoLogin } = useAuth();
    const idUsuario = sessao?.user?.id ?? null;

    const [nomeSalvo, setNomeSalvo] = useState(null);
    const [perfilBuscadoPara, setPerfilBuscadoPara] = useState(null);

    useEffect(() => {
        // Sem login: não há perfil para buscar
        if (!idUsuario) {
            setNomeSalvo(null);
            setPerfilBuscadoPara(null);
            return;
        }

        let cancelado = false;

        const buscarPerfil = async () => {
            // 🔄 Concilia o progresso do aparelho com o da nuvem (sem travar o app se falhar)
            try {
                await sincronizarAoEntrar(idUsuario);
            } catch (erroSync) {
                console.log("Não foi possível sincronizar agora:", erroSync);
            }

            try {
                const { data, error } = await supabase
                    .from("perfis")
                    .select("nome, avatar")
                    .eq("id", idUsuario)
                    .maybeSingle();

                if (error) throw error;

                if (data && data.nome) {
                    // A nuvem manda: guarda uma cópia no aparelho
                    await AsyncStorage.setItem("@studyflow:userName", data.nome);
                    if (data.avatar) {
                        await AsyncStorage.setItem("@studyflow:userAvatar", data.avatar);
                    }
                    if (!cancelado) setNomeSalvo(data.nome);
                } else {
                    // Conta sem perfil na nuvem: limpa o que sobrou de outra pessoa e pede nome e avatar
                    await AsyncStorage.multiRemove(["@studyflow:userName", "@studyflow:userAvatar"]);
                    if (!cancelado) setNomeSalvo(null);
                }
            } catch (erro) {
                // Sem internet ou outro erro: usa o que estiver guardado no aparelho
                console.log("Erro ao buscar perfil na nuvem:", erro);
                const nomeLocal = await AsyncStorage.getItem("@studyflow:userName");
                if (!cancelado) setNomeSalvo(nomeLocal);
            } finally {
                if (!cancelado) setPerfilBuscadoPara(idUsuario);
            }
        };

        buscarPerfil();

        return () => {
            cancelado = true;
        };
    }, [idUsuario]);

    // ⏳ Espera: o login carregar e, se houver login, o perfil dessa conta ser buscado
    const aguardandoPerfil = idUsuario && perfilBuscadoPara !== idUsuario;
    if (carregandoLogin || aguardandoPerfil) {
        return null;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!sessao ? (
                    // 🚪 Sem login: só existe a tela de Entrar / Criar conta
                    <Stack.Screen name="Login" component={LoginScreen} />
                ) : (
                    // ✅ Com login: tudo o que já existia continua igual
                    <>
                            {!nomeSalvo && <Stack.Screen name="WelcomeSetup" component={WelcomeSetupScreen} />}
                            {/* A primeira tela da pilha são as nossas abas inferiores */}
                            <Stack.Screen name="MainTabs" component={TabNavigator} />

                            {/* A LearnScreen fica no topo da pilha, pronta para ser chamada por qualquer card */}
                            <Stack.Screen
                                name="Learn"
                                component={LearnScreen}
                                options={{
                                    headerShown: true,
                                    title: "Lição Interativa",
                                    headerStyle: { backgroundColor: "#090A1A", borderBottomWidth: 0, shadowOpacity: 0 },
                                    headerTintColor: "#FFF",
                                    headerTitleStyle: { fontWeight: "bold" },
                                }}
                            />

                            <Stack.Screen
                                name="Weeks"
                                component={WeeksScreen}
                                options={{ title: "Cronograma", headerShown: false }}
                            />

                            {/* 👇 ROTA DE INTELIGÊNCIA ARTIFICIAL 👇 */}
                            <Stack.Screen
                                name="AIWeeks"
                                component={AIWeeksScreen}
                                options={{ title: "Trilha de IA", headerShown: false }}
                            />
                            {/* 👇 ROTA DE PYTHON 👇 */}
                            <Stack.Screen
                                name="PythonWeeks"
                                component={PythonWeeksScreen}
                                options={{ title: "Trilha de Python", headerShown: false }}
                            />
                            {/* 👇 ROTA DE BUILD APPS 👇 */}
                            <Stack.Screen
                                name="BuildApps"
                                component={BuildAppsScreen}
                                options={{ title: "Criar Apps Práticos", headerShown: false }}
                            />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}