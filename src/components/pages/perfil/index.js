import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import { Ionicons } from "@expo/vector-icons";

import styles from "./style.js";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();

  const [selectedImage, setSelectedImage] = useState(
    require("../../../../assets/images/perfil11.png")
  );

  const [usuario, setUsuario] = useState({});
  const [contadorImagem, setContadorImagem] = useState(0);

  useEffect(() => {
    global.storage
      .load({
        key: "infosUsuario",
      })
      .then((data) => {
        setUsuario(data);
        setInterval(() => {
          if (data.imagemUsers) {
            setSelectedImage({
              uri: `data:image/jpeg;base64,${data.imagemUsers}`,
            });
          }
        }, 1000);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, [contadorImagem]);

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
      const base64Image = await FileSystem.readAsStringAsync(
        result.assets[0].uri,
        {
          encoding: FileSystem.EncodingType.Base64,
        }
      );

      await fetch(
        `http://192.168.100.14:8080/usuario/trocar_imagem/${Number(
          usuario.idUsers
        )}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            imagem: base64Image,
          }),
        }
      )
        .then(() => {
          setSelectedImage({ uri: result.assets[0].uri });
          setContadorImagem((prevCounter) => prevCounter + 1);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  async function sair() {
    global.storage
      .remove({
        key: "infosUsuario",
      })
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }

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
        <Text style={styles.input}>{usuario.nomeUsers}</Text>

        <Text style={styles.label}>CPF</Text>
        <Text style={styles.input}>{usuario.cpfUsers}</Text>
      </View>

      <TouchableOpacity style={styles.buttonSair} onPress={() => sair()}>
        <Text style={styles.textSair}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
