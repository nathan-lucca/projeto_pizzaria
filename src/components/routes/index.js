import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from "../pages/bemvindo/index.js";
import Login from "../pages/login/login.js";
import Cadastro from "../pages/cadastro/index.js";
import Novasenha from "../pages/novasenha/index.js";
import Home from "../pages/home/index.js";


const Stack = createNativeStackNavigator();

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
        name="Novasenha"
        component={Novasenha}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
