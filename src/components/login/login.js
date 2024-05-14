import React from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, Pressable, Linking  } from 'react-native';
import { useState } from 'react';
import styles from './style';

export default function Formulario() {

    const [cpf, setCpf] = useState('');
    const [isTirarfoco, setTirarfoco] = useState(false);
    
    const formatCpf = (text) => {
        // Removendo  todos os caracteres não numéricos
        const removeText = text.replace(/[^\d]/g, '');
        
        // Limitando o texto a 11 caracteres
        const limitedText = removeText.slice(0, 11);
    
        // Adicionando os pontos e traço conforme o formato do CPF
        const formattedText = limitedText.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    
        // Atualizando o estado com o CPF formatado
        setCpf(formattedText);
    };
    

    // formulario

    return(

    <Pressable style={styles.container} >
        <ImageBackground style={styles.fundo}   source={require('../../assets/FUNDO PROJETO.png')} >

        <Image style={styles.imagemMacaco} source={require('../../assets/LOGO.png')}>
        </Image>
        <Text style={styles.Titulo}>PIZZARIA DOS MONKEYS</Text>

        <View style={styles.Containerform} >

            <Text style={styles.textodoinput}>CPF</Text>

            <TextInput 
            style={styles.input}
            keyboardType='numeric'
            placeholderTextColor='#fff'
            value={cpf}
            onChangeText={formatCpf}
            placeholder={isTirarfoco ? '' : '000.000.000-00'}
            onFocus={() => setTirarfoco(true)}
            onBlur={() => setTirarfoco(false)}
            ></TextInput>

            <Text style={styles.textodoinput}>Senha</Text>

            <TextInput 
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor='#fff'
            placeholder='*****'
            ></TextInput>

            <TouchableOpacity style={styles.botao}>
                <Text style={styles.textbotao}>ENTRAR</Text>
            </TouchableOpacity>

            <Text style={styles.esqueceusenha}>Esqueceu a senha?</Text>
        
        </View>
        
        <View style={styles.line} />

        <Text style={styles.footer}>

        <Text>Não possui Login ? </Text> <Text  style={styles.branco} onPress={() => {
            Linking.openURL('https://about.google/')
        }}>Cadastre-se</Text>
        
        </Text>

        </ImageBackground>


    </Pressable>
    )
     // formulario
}