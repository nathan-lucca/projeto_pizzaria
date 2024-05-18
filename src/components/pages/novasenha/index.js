import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import styles from "./style";

export default function NovaSenha() {
  const navigation = useNavigation();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.fundo}
        source={require("../../../../assets/images/fundo_projeto.png")}
      >
        <View>
          <Animatable.Image
            animation="flipInY"
            source={require("../../../../assets/images/logo.png")}
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
            placeholder="Digite seu CPF"
            placeholderTextColor="#a1a1a1"
            style={styles.input}
            value={cpf}
            onChangeText={(text) => {
              const numericValue = text.replace(/[^0-9]/g, "");

              const limitedValue = numericValue.slice(0, 11);

              setCpf(limitedValue);
            }}
            keyboardType="numeric"
          />

          <Text style={styles.title}>NOVA SENHA</Text>
          <TextInput
            placeholder="Digite sua nova senha"
            placeholderTextColor="#a1a1a1"
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />

          <Text style={styles.title}>CONFIRMAR SENHA</Text>
          <TextInput
            placeholder="Confirme sua nova senha"
            placeholderTextColor="#a1a1a1"
            style={styles.input}
            value={senha}
            onChangeText={(text) => setSenha(text)}
            secureTextEntry={true}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.login}>ALTERAR</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}
