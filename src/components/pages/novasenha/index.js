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

export default function BemVindo() {
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
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonlogin}
              onPress={() => navigation.navigate("")}
            >
              <Text style={styles.login}>ALTERAR</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </ImageBackground>
    </View>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundo: {
    flex: 1,
  },
  containerForm: {
    width: "80%",
    alignSelf: "center",
  },
  input: {
    color: "white",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
  },

  title: {
    color: "black",
    fontWeight: "bold",
    marginRight: "50%",
    marginTop: "10%",
    flexWrap: "nowrap",
    padding: "3.5%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20%",
  },
  button: {
    backgroundColor: "#9A2E00",
    borderRadius: 20,
    padding: 15,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonlogin: {
    backgroundColor: "black",
    borderRadius: 50,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  message: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "5%",
    marginTop: "10%",
  },
});
