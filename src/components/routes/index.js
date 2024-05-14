import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BemVindo from "../pages/bemvindo";
import Login from "../pages/cadastro";
import Novasenha from "../pages/novasenha";

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
        name="Cadastro"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Novasenha"
        component={Novasenha}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
