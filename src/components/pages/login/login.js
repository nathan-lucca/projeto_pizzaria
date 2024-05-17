import React from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

export default function Formulario() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [isTirarfoco, setTirarfoco] = useState(false);

  const formatCpf = (text) => {
    // Removendo  todos os caracteres não numéricos
    const removeText = text.replace(/[^\d]/g, "");

    // Limitando o texto a 11 caracteres
    const limitedText = removeText.slice(0, 11);

    // Adicionando os pontos e traço conforme o formato do CPF
    const formattedText = limitedText.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/,
      "$1.$2.$3-$4"
    );

    // Atualizando o estado com o CPF formatado
    setCpf(formattedText);
  };

  // formulario

  return (
    <Pressable style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../../../../assets/images/FUNDO PROJETO.png")}
      >
        <View>
          <Animatable.Image
            animation="flipInY"
            source={require("../../../../assets/images/logo.png")}
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
            onChangeText={formatCpf}
            placeholder={isTirarfoco ? "" : "000.000.000-00"}
            onFocus={() => setTirarfoco(true)}
            onBlur={() => setTirarfoco(false)}
          ></TextInput>

          <Text style={styles.textodoinput}>Senha</Text>

          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor="#fff"
            placeholder="*****"
          ></TextInput>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.textbotao}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botao}
              onPress={() => navigation.navigate("Novasenha")}
            >
              <Text style={styles.textbotao}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        <View style={styles.line} />
        <Text style={styles.footer}>
          <Text>Não possui Login ? </Text>{" "}
          <Text style={styles.branco}>Cadastre-se</Text>
        </Text>
      </ImageBackground>
    </Pressable>
  );
  // formulario
}
