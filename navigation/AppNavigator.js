import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack"; // 1. IMPORTAMOS O STACK
import { NavigationContainer } from "@react-navigation/native";
import { SimpleLineIcons, Feather } from "@expo/vector-icons";
import WeeksScreen from "../screens/WeeksScreen";

// Importação das Telas
import HomeScreen from "../screens/HomeScreen";
import TimerScreen from "../screens/TimerScreen";
import TaskScreen from "../screens/TaskScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LearnScreen from "../screens/LearnScreen"; // 2. IMPORTAMOS A LEARN SCREEN

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // 3. INSTANCIAMOS O STACK

// 4. CRIAMOS O COMPONENTE DAS ABAS INFERIORES
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

// 5. O NAVEGADOR PRINCIPAL AGORA GERENCIA O FLUXO GLOBAL
export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* A primeira tela da pilha são as nossas abas inferiores */}
                <Stack.Screen name="MainTabs" component={TabNavigator} />

                {/* A LearnScreen fica no topo da pilha, pronta para ser chamada por qualquer card */}
                <Stack.Screen
                    name="Learn"
                    component={LearnScreen}
                    options={{
                        headerShown: true, // Mostra a setinha de voltar automática!
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}