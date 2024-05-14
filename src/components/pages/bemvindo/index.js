import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

export default function BemVindo() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
                <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../../assets/images/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForm}>
                <Text style={styles.title}>Venha conhecer a melhor pizzaria dos macacos de caruaru</Text>
                <Text style={styles.text}>Faça seu cadastro e comece a fazer os pedidos</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Cadastro')}>
                        <Text style={styles.buttonText}>Fazer cadastro</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.buttonlogin}
                        onPress={() => navigation.navigate('Novasenha')}>
                        <Text style={styles.login}>Já possuo uma conta</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6d351a"
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#6d351a',
        justifyContent: 'center',
        alignItems: 'center'

    },
    containerForm: {
        flex: 1,
        backgroundColor: 'black',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%' 
    },
    title:{
        fontSize: 21,
        fontWeight:'bold',
        marginTop: 28,
        marginBottom: 12,
        color: 'white'
    },
    text:{
        color: '#a1a1a1'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: "20%"
    },
    button:{
        backgroundColor: "#9A2E00",
        borderRadius: 20,
        padding:15,
        width: '45%', 
        alignItems: 'center',
    },
    buttonText:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    buttonlogin:{
        backgroundColor: "#9A2E00",
        borderRadius: 50,
        width: '45%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    login:{
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    }
    
});
