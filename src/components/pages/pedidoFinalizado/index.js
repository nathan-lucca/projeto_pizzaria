import React from "react";
import { Text, View, Button, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={require("../../../../assets/images/logo.png")}
                style={styles.logo}
            ></Image>
            <Text style={styles.title}>PEDIDO FINALIZADO!</Text>
            <Text style={styles.text}>
                Boas noticias! Seu pedido foi finalizado, clique no botão abaixo
                para ir ao seu histórico de pedidos e conferir as informaçoes do
                seu pedido! Desde já agradecemos por comprar conosco!{" "}
            </Text>
            <Button
                style={{ width: "60%" }}
                title="Abrir o historico "
                onPress={() => navigation.navigate("Historico de pedidos")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        marginBottom: 25,
        marginTop: 25,
        marginLeft: 40,
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        color: "#006C32",
    },
    text: {
        textAlign: "center",
        marginTop: 15,
        marginBottom: 30,
        fontSize: 15,
    },
});

export default HomeScreen;
