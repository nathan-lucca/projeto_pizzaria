import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from './style.js';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/images/LOGO.png")}
        style={styles.logo}
      ></Image>

      <Text style={styles.title}>PEDIDO FINALIZADO!</Text>

      <Text style={styles.text}>
        Boas noticias! Seu pedido foi finalizado, clique no botão abaixo para ir
        ao seu histórico de pedidos e conferir as informaçoes do seu pedido!
        Desde já agradecemos por comprar conosco!{" "}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Abrir o historico "
          color={"#FFA638"}
          onPress={() => navigation.navigate("Historico de pedidos")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
