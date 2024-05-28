import React, { useState } from "react";
import { Text, View, Button, Image, SafeAreaView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./STYLE";
import * as DocumentPicker from "expo-document-picker";
import * as Clipboard from "expo-clipboard";

const AguardandoPagamento = () => {
  const navigation = useNavigation();
  const [selectpdf, setselectpdf] = useState(null);
  const chavePix = "118.372.994-47";

  async function pickdocument() {
    let result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
      copyToCacheDirectory: true,
    });

    console.log(result);

    if (!result.canceled) {
      setselectpdf(result.assets[0].name);

      Alert.alert(
        "PDF Selecionado",
        `Você selecionou: ${result.assets[0].name}`
      );
    }
  }

  const copiarChavePix = () => {
    Clipboard.setString(chavePix);
    Alert.alert("Sucesso", "Chave Pix copiada para a área de transferência!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/LOGO.png")} style={styles.logo} />
      <Text style={styles.title}>AGUARDANDO PAGAMENTO!</Text>
      <Text style={styles.text}>
        Eba! Falta pouco para você encher o bucho! Copie a chave pix e faça o
        pagamento, depois basta anexar o comprovante e aguardar sua pizza
        chegar!
      </Text>
      <Image
        source={require("../../../assets/qrcode.png")} // modificar ao decorrer do projeto
        style={styles.image}
      />
      <Text style={styles.chavepix}> Chave pix: {chavePix}</Text>
      <Text style={styles.chavepix}> Nome: pizzaria@hotmail.com</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Copiar chave"
              onPress={copiarChavePix}
              color="#FFA638"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Comprovante"
              onPress={pickdocument}
              color="#FFA638"
            />
          </View>
        </View>
        <View>
  {selectpdf ? (
    <Button
      title="Concluir pedido"
      onPress={() => navigation.navigate("PedidoFinalizado")}
      color="#FFA638"
    />
  ) : null}
</View>

      </View>
      {selectpdf && <Text style={styles.selectedPdfText}>{selectpdf}</Text>}
    </SafeAreaView>
  );
};

export default AguardandoPagamento;