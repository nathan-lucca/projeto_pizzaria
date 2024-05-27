import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { formatCpf } from "../../../functions/formatCpf";
import styles from "./style";

export default function Login() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [isTirarfoco, setTirarfoco] = useState(false);

  function limparCampos() {
    setCpf("");
    setSenha("");
    setTirarfoco(false);
  }

  async function realizarLogin() {
    try {
<<<<<<< HEAD
      const response = await fetch(`http://10.0.0.187:8080/usuario/login`, {
=======
      const response = await fetch(`http://192.168.100.14:8080/usuario/login`, {
>>>>>>> f2ec9adae0f32b57955657266ce5b972d1245480
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpfUsers: `${cpf}`,
          senhaUsers: `${senha}`,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        Alert.alert("Logado com sucesso!", data.message, [
          {
            text: "OK",
            onPress: () => {
              limparCampos();

              const infos_usuario = data.dados;

              global.storage.save({
                key: "infosUsuario",
                data: infos_usuario,
              });

              navigation.navigate("Home", { infos_usuario });
            },
          },
          {
            text: "Cancelar",
            style: "cancel",
          },
        ]);
      } else {
        const errorText = await response.text();

        Alert.alert("Erro ao logar!", errorText);
      }
    } catch (error) {
      console.error(`Erro ao realizar a consulta: ${error}`);
    }
  }

  return (
    <Pressable style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../../../../assets/images/FUNDO PROJETO.png")}
      >
        <View>
          <Animatable.Image
            animation="flipInY"
            source={require("../../../../assets/images/LOGO.png")}
            style={{ width: "100%", marginTop: "10%" }}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.Titulo}>PIZZARIA DOS MONKEYS</Text>

        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={styles.Containerform}
        >
          <Text style={styles.textodoinput}>CPF</Text>
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

          <Text style={styles.textodoinput}>Senha</Text>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
            placeholderTextColor="#fff"
            placeholder="Digite sua senha"
          ></TextInput>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => realizarLogin()}
            >
              <Text style={styles.textbotao}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("NovaSenha")}
            >
              <Text style={styles.textbotao}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>

        <View style={styles.line} />

        <Text style={styles.footer}>
          <Text>Não possui Login?</Text>{" "}
          <Text style={styles.branco}>Cadastre-se</Text>
        </Text>
      </ImageBackground>
    </Pressable>
  );
}
