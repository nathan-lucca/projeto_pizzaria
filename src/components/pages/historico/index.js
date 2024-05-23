import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import styles from "./style";
import PizzaHawaiian from "../../../../assets/images/pizzas/Hawaiian_Pizzaa.png";
import PizzaCalabresa from "../../../../assets/images/pizzas/pizza_calabresa.png";
import PizzaMargarita from "../../../../assets/images/pizzas/Pizza_Margarita.png";
import PizzaPeperon from "../../../../assets/images/pizzas/Pizza_Peperoni.png";

const HistoryScreen = () => {
  const [historico, setHistorico] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistorico = async () => {
      try {
        // simulando um delay de carregamento
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // ids das pizzas
        const data = [
          {
            id: 1,
            type: "Chocolate",
            price: 21.5,
            quantity: 2,
            size: "(P)",
            image: PizzaHawaiian,
          },
          {
            id: 2,
            type: "Calabresa",
            price: 18.99,
            quantity: 1,
            size: "(M)",
            image: PizzaCalabresa,
          },
          {
            id: 3,
            type: "Bacon",
            price: 22.0,
            quantity: 3,
            size: "(G)",
            image: PizzaMargarita,
          },
          {
            id: 4,
            type: "Portuguesa",
            price: 22.0,
            quantity: 8,
            size: "(G)",
            image: PizzaPeperon,
          },
        ];
        // caso houver erro aparecera essa msg
        setHistorico(data);
      } catch (error) {
        setError("Algo deu errado");
      } finally {
        setLoading(false);
      }
    };

    fetchHistorico();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>Pizza: {item.type}</Text>
        <Text>Quantidade: {item.quantity}</Text>
        <Text>Tamanho: {item.size}</Text>
        <Text style={styles.price}>Preço: R${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  if (loading) {
    // tela de carregamento
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#f7bb06" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleHistory}>SEUS PEDIDOS</Text>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historico}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default HistoryScreen;
