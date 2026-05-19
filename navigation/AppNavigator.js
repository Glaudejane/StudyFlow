import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../screens/ProfileScreen";
import TaskScreen from "../screens/TaskScreen";

// Mudamos a importação para garantir compatibilidade com a SDK do Expo
import { SimpleLineIcons, Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import TimerScreen from "../screens/TimerScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
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
                            // Um ícone de linha fina lindo para a Home
                            <SimpleLineIcons name="home" color={color} size={size ? size : 20} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Foco"
                    component={TimerScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            // Ícone de cronômetro do estilo Feather/Lucide (traço fino)
                            <Feather name="clock" color={color} size={size ? size : 20} />
                        ),
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
        </NavigationContainer>
    );
}
