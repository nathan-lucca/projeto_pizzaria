import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function BemVindo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../../assets/images/LOGO.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={styles.containerForm}
      >
        <Text style={styles.title}>
          Venha conhecer a melhor Pizzaria dos Macacos de Caruaru
        </Text>
        <Text style={styles.text}>
          Faça seu cadastro e comece a fazer os pedidos
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Cadastro")}
          >
            <Text style={styles.buttonText}>Fazer cadastro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonlogin}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.login}>Já possuo uma conta</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
