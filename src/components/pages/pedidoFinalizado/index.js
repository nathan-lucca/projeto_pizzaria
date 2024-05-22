
import React from 'react';
import {Text, View, Button, StyleSheet, Image, } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
    const navigation = useNavigation();
return (
    <View style={styles.container}>
        <Image  source={require('../../../../assets/images/LOGO.png')} style={styles.logo}></Image>
        <Text  style={styles.title} >PEDIDO FINALIZADO!</Text>
        <Text  style={styles.text}>Boas noticias! Seu pedido foi finalizado, clique no botão abaixo para ir ao seu histórico de pedidos e conferir as informaçoes do seu pedido! Desde já agradecemos por comprar conosco!{" "} </Text>
    <View style={styles.buttonContainer}>

        <Button
            title="Abrir o historico "
            color={'#FFA638'}
            onPress={() => navigation.navigate('Historico de pedidos')}
        />

    </View>
    
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flex: 1,
},
logo: {
    marginBottom:25,
    marginTop:25,
    marginLeft:40,
    
},
title: {
    textAlign:'center',
    fontSize:30,
    color:'#006C32',
},
text: {
    textAlign:'center',
    marginTop:15,
    marginBottom:30,
    fontSize:18,
},
buttonContainer: {
    width: '60%',
    alignSelf: 'center', 
},
});

export default HomeScreen;