import React, { useState } from "react";
import {
    Text,
    TextInput,
    View,
    Image,
    StyleSheet,
    Alert,
    Dimensions,
    TouchableOpacity,
    SafeAreaView
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window"); // Obtém a largura da janela

export default function Perfil() {
    const [selectedImage, setSelectedImage] = useState(
        require("../../../../assets/images/perfil11.png")
    );

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");

    const pickImage = async () => {
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!permissionResult.granted) {
            Alert.alert(
                "Permissão necessária",
                "Permissão para acessar a galeria é necessária!"
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            setSelectedImage({ uri: result.assets[0].uri });
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <Image source={selectedImage} style={styles.image} />
                <TouchableOpacity onPress={pickImage}>
                    <Ionicons name="camera" size={35} />
                </TouchableOpacity>
            </View>
            <View style={styles.profileDetails}>
                <Text style={styles.title}>Meu Perfil</Text>
                <Text style={styles.subtitle}>Meus Dados</Text>

                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome"
                />

                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.input}
                    value={cpf}
                    onChangeText={setCpf}
                    placeholder="Digite seu CPF"
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#f0f0f0",
    },
    innerContainer: {
        alignItems: "center",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: "100%", // Ocupa 100% da largura da janela
        maxWidth: 400, // Limite máximo de largura
        marginHorizontal: 10,
        marginBottom: 20, // Adiciona margem inferior para separar os campos de perfil dos dados
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "#dfdfdf",
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#FBB039",
        textAlign: "center", // Alinha ao centro
    },
    subtitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        textAlign: "center", // Alinha ao centro
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 12,
        marginBottom: 20,
        width: "100%", // Ocupa 100% da largura do container
    },
    profileDetails: {
        width: "100%",
        paddingHorizontal: 20,
    },
});