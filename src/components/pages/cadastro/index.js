import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {Text,TextInput,TouchableOpacity,View, ImageBackground} from "react-native";
import * as Animatable from "react-native-animatable";

export default function BemVindo() {
  const navigation = useNavigation();

  // Estados para armazenar os valores dos campos
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.fundo} source ={require('../../../../assets/images/fundo_projeto.png')} >
      <View>
        <Animatable.Image
          animation="flipInY"
          source={require("../../../../assets/images/logo.png")}
          style={{ width: "100%", marginTop: "10%"}}
          resizeMode="contain"
        />
      </View>

      <Animatable.View
        delay={600}
        animation="fadeInLeft"
        style={styles.containerForm}
      >
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        style={[styles.containerForm]}>
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
          onPress={() => navigation.navigate("")} 
        >
          <Text style={styles.buttonText}> Cadastrar</Text>
        </TouchableOpacity>
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
      flex: 1

  
    },
    containerForm:{
      marginTop: "3%",
      width: "80%",
      alignSelf: "center",
    },
    input:{
      color: "white",
      backgroundColor: "#000",
      padding: 15,
      borderRadius: 30,
      width: "100%",
      alignSelf: "center",
      textAlign: 'center',

    },
  
    title: {
      color:"black",
      fontWeight:"bold",
      alignSelf: "center",
      marginRight: "85%",
      marginTop: "10%",
      
    },
  
    button: {
      position: "absolute",
      backgroundColor: "#9A2E00",
      borderRadius: 20,
      width: "60%",
      padding: 15,
      alignSelf: "center",
      bottom: "-45%",
      alignItems: "center",
      justifyContent: "center",
    },
    buttonText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
    message: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
      paddingLeft:"5%",
      marginTop: "10%"
    },
  });
