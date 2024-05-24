import React from "react";
import { Text, View, Button, Image } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const AguardandoPagamento = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../../../assets/images/LOGO.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>AGUARDANDO PAGAMENTO!</Text>
      <Text style={styles.text}>
        Eba! Falta pouco para você encher o bucho! Copie a chave pix e faça o
        pagamento, depois basta anexar o comprovante e aguardar sua pizza
        chegar!{" "}
      </Text>

      <Image
        source={require("../../../../assets/images/LOGO.png")} // modificar ao decorrer do projeto
        style={styles.image}
      ></Image>
      <Text style={styles.chavepix}> Chave pix: 138.182.xxx-xx</Text>
      <Text style={styles.chavepix}> Nome: pizzaria@hotmail.com</Text>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Copiar chave"
              onPress={() => navigation.navigate("HistoryScreen")}
              color="#FFA638"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Comprovante"
              onPress={() => navigation.navigate("comprovante")}
              color="#FFA638"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AguardandoPagamento;
