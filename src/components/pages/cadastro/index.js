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

export default function Cadastro() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [isTirarfoco, setTirarfoco] = useState(false);

  function limparCampos() {
    setName("");
    setCpf("");
    setSenha("");
    setTirarfoco(false);
  }

  async function realizarCadastro() {
    try {
      const response = await fetch(
<<<<<<< HEAD
        `http://10.0.0.187:8080/usuario/cadastro`,
=======
        `http://192.168.100.14:8080/usuario/cadastro`,
>>>>>>> f2ec9adae0f32b57955657266ce5b972d1245480
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeUsers: `${name}`,
            cpfUsers: `${cpf}`,
            senhaUsers: `${senha}`,
            repetirSenhaUsers: `${senha}`,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        Alert.alert("Cadastrado com sucesso!", data.message, [
          {
            text: "OK",
            onPress: () => {
              limparCampos();

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

        Alert.alert("Erro ao cadastrar!", errorText);
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
        <Text style={styles.Titulo}>PIZZARIA DOS MONKEYS</Text>

        <Animatable.View
          delay={600}
          animation="fadeInUp"
          style={[styles.containerForm]}
        >
          <Text style={styles.title}>Nome</Text>
          <TextInput
            placeholder="Digite seu nome"
            placeholderTextColor="#a1a1a1"
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.title}>CPF</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor="#a1a1a1"
            value={cpf}
            onChangeText={(text) => setCpf(formatCpf(text))}
            placeholder={isTirarfoco ? "" : "Digite seu CPF"}
            onFocus={() => setTirarfoco(true)}
            onBlur={() => setTirarfoco(false)}
          />

          <Text style={styles.title}>Senha</Text>
          <TextInput
            placeholder="Sua senha"
            placeholderTextColor="#a1a1a1"
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={() => realizarCadastro()}
          >
            <Text style={styles.buttonText}> Cadastrar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}
