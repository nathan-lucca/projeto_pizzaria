import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  Modal,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PizzaItem from "../modal-pizza/modal.js";
import styles from "./style.js";

export default function Pizzas() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [dadosPizza, setDadosPizza] = useState([]);

  async function arrayPizzas() {
    try {
      const response = await fetch(`http://192.168.100.14:8080/pizza/listar`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();

        // Agrupando as pizzas pelo nome e descrição (PORQUE NO BANCO DE DADOS ESTÃO ARMAZENADOS A MESMA PIZZA 3 VEZES, O QUE MUDA É O TAMANHO E VALOR), por isso precisa AGRUPAR, pra não repetir a mesma pizza
        const pizzasAgrupadas = data.reduce((acc, item) => {
          // Uma chave única é criada para cada pizza usando o nomePizza e descricaoPizza
          const key = `${item.nomePizza}-${item.descricaoPizza}`;

          // Verificando para ver se a pizza já existe no objeto acumulador acc. Se não existir, um novo objeto é criado com as propriedades id, nome, descricao, imagem e tamanhos (que é um array vazio).
          if (!acc[key]) {
            acc[key] = {
              id: item.idPizza,
              nome: item.nomePizza,
              descricao: item.descricaoPizza,
              imagem: item.imagemPizza,
              tamanhos: [],
            };
          }

          // Novo objeto é adicionado ao array tamanhos da pizza
          acc[key].tamanhos.push({
            tamanho: item.tamanhoPizza,
            sigla: item.siglaPizza,
            valor: item.valorPizza,
          });
          return acc;
        }, {});

        // Transformando o objeto de pizzas agrupadas em um array
        const dadosTransformados = Object.values(pizzasAgrupadas);

        setDadosPizza(dadosTransformados);
      } else {
        const errorText = await response.text();
        Alert.alert("Erro ao carregar!", errorText);
      }
    } catch (error) {
      console.error(`Erro ao realizar a consulta: ${error}`);
    }
  }

  useEffect(() => {
    arrayPizzas();
  }, []);

  const escolherPizzaEspecifica = (pizza) => {
    // Enviando apenas as informações da pizza selecionada
    const selectedPizzaInfo = {
      id: pizza.id,
      nome: pizza.nome,
      imagem: pizza.imagem,
      tamanhos: pizza.tamanhos,
      descricao: pizza.descricao,
    };

    setSelectedPizza(selectedPizzaInfo);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.textTittle}>Pizzas</Text>
        {dadosPizza.map((pizza) => (
          <TouchableWithoutFeedback
            key={pizza.id}
            onPress={() => escolherPizzaEspecifica(pizza)}
          >
            <View style={styles.pizzaItem}>
              <Image
                source={{ uri: `${pizza.imagem}` }}
                style={styles.pizzaImage}
              />
              <Text style={styles.pizzaAdd}>+</Text>
              <Text style={styles.pizzaName}>{pizza.nome}</Text>
              <Text style={styles.pizzaDesc}>{pizza.descricao}</Text>
              <Text style={styles.pizzaPrice}>
                Tamanhos: {pizza.tamanhos.map((size) => size.sigla).join(", ")}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </SafeAreaView>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <PizzaItem pizza={selectedPizza} closeModal={closeModal} />
      </Modal>
    </ScrollView>
  );
}
