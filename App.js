import React from "react";
import { StatusBar } from "react-native";
import Storage from "react-native-storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/router";

const storage = new Storage({
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24,
    enableCache: true,
});

global.storage = storage;

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#111111" barStyle="light-content" />
            <Routes />
        </NavigationContainer>
    );
}
