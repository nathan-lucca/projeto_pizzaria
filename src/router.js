import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../src/components/pages/home";
import BemVindo from "../src/components/pages/bemvindo";
import Login from "../src/components/pages/login/login.js";
import Cadastro from "../src/components/pages/cadastro";
import NovaSenha from "../src/components/pages/novasenha";
import Perfil from "../src/components/pages/perfil";
import Historico from "../src/components/pages/historico";
import AguardandoPagamento from "./components/pages/aguardandopagamento/index.js";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFF",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#FFA638",
          borderTopWidth: 0, //tamanho da borda
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          headerShown: false,
          name: "Início",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HistoricoTab"
        component={Historico}
        options={{
          headerShown: false,
          name: "Histórico",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "receipt" : "receipt-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PerfilTab"
        component={Perfil}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BemVindo"
        component={BemVindo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NovaSenha"
        component={NovaSenha}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AguardandoPagamento"
        component={AguardandoPagamento}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
