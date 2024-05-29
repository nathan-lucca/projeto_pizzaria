import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";

import styles from "./style";

export default function Endereco() {
  const navigation = useNavigation();

  const [endereco, setEndereco] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../../assets/images/LOGO.png")}
          style={{ width: "100%", marginTop: "10%" }}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.Titulo}>PIZZARIA DOS MONKEYS</Text>
      <Text style={styles.T2}>
        Para continuar, informe o endereço da entrega
      </Text>

      <View style={styles.gifContainer}>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../../assets/images/motoboy2.gif")}
          style={{ width: "20%", marginTop: "-55%" }}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInUp"
        style={[styles.containerForm]}
      >
        <Text style={styles.title}>Endereço</Text>
        <TextInput
          placeholder="Digite seu Endereço"
          placeholderTextColor="#a1a1a1"
          style={styles.input}
          value={endereco}
          onChangeText={(text) => setEndereco(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("AguardandoPagamento")}
        >
          <Text style={styles.buttonText}> Pagar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
