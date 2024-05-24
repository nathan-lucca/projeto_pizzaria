import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  Alert,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window"); // Obtém a largura da janela

import styles from "./style.js";

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
      console.log(result.assets[0].uri);
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
