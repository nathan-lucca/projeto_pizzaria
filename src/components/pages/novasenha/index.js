import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { formatCpf } from "../../../functions/formatCpf";
import styles from "./style";

export default function NovaSenha() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [isTirarfoco, setTirarfoco] = useState(false);

  async function realizarTrocaSenha() {
    try {
      const response = await fetch(
        `http://10.0.0.187:8080/usuario/trocar_senha`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            cpfUsers: `${cpf}`,
            senhaUsers: `${senha}`,
            repetirSenhaUsers: `${senha}`,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        Alert.alert("Senha Alterada com sucesso!", data.message, [
          {
            text: "OK",
            onPress: () => {
              navigation.navigate("Login");
            },
          },
          {
            text: "Cancelar",
            style: "cancel",
          },
        ]);
      } else {
        const errorText = await response.text();

        Alert.alert("Erro ao trocar a senha!", errorText);
      }
    } catch (error) {
      console.error(`Erro ao realizar a consulta: ${error}`);
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../../../../assets/images/fundo_projeto.png")}
      >
        <View>
          <Animatable.Image
            animation="flipInY"
            source={require("../../../../assets/images/LOGO.png")}
            style={{ width: "100%", marginTop: "10%" }}
            resizeMode="contain"
          />
        </View>

        <Animatable.View
          delay={600}
          animation="fadeInLeft"
          style={styles.containerForm}
        ></Animatable.View>

        <Animatable.View animation="fadeInUp" style={[styles.containerForm]}>
          <Text style={styles.title}>CPF</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="#fff"
            value={cpf}
            onChangeText={(text) => setCpf(formatCpf(text))}
            placeholder={isTirarfoco ? "" : "Digite seu CPF"}
            onFocus={() => setTirarfoco(true)}
            onBlur={() => setTirarfoco(false)}
          ></TextInput>

          <Text style={styles.title}>NOVA SENHA</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
            placeholderTextColor="#fff"
            placeholder="Digite sua nova senha"
          ></TextInput>

          <Text style={styles.title}>CONFIRMAR SENHA</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
            placeholderTextColor="#fff"
            placeholder="Confirme sua nova senha"
          ></TextInput>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => realizarTrocaSenha()}
            >
              <Text style={styles.alterar}>ALTERAR</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}
