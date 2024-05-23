import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import styles from "./style.js";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = ({ isVisible, onClose }) => {
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    global.storage
      .load({
        key: "infosUsuario",
      })
      .then((data) => {
        setUsuario(data);
        setInterval(() => {
          fetchCartItems(data.idUsers);
        }, 1000);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, [isVisible]);

  const fetchCartItems = async (userId) => {
    if (!userId) {
      return;
    }

    try {
      const response = await fetch(
        `http://192.168.0.18:8080/cart/listar/${Number(userId)}`
      );

      if (!response.ok) {
        throw new Error("Erro ao listar itens do carrinho");
      }

      const cartItems = await response.json();

      const groupedItems = cartItems.reduce((acc, item) => {
        const key = item.pizza.nomePizza;

        if (!acc[key]) {
          acc[key] = {
            ...item,
            quantPizza: { [item.tamanhoPizza]: item.quantPizza },
            valortotalItem: {
              [item.tamanhoPizza]: item.valortotalItem,
            },
          };
        } else {
          acc[key].quantPizza[item.tamanhoPizza] =
            (acc[key].quantPizza[item.tamanhoPizza] || 0) + item.quantPizza;
          acc[key].valortotalItem[item.tamanhoPizza] =
            (acc[key].valortotalItem[item.tamanhoPizza] || 0) +
            item.valortotalItem;
        }

        return acc;
      }, {});

      setCartItems(Object.values(groupedItems));

      setTotal(
        Object.values(groupedItems).reduce(
          (acc, item) =>
            acc +
            Object.values(item.valortotalItem).reduce(
              (acc, value) => acc + value,
              0
            ),
          0
        )
      );
    } catch (error) {
      console.error("Erro ao listar itens do carrinho:", error);
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleModalClose}
    >
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={styles.menuCloser}
            onPress={handleModalClose}
          >
            <Text>❌</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Seu Carrinho</Text>
          <SafeAreaView style={styles.cart}>
            {cartItems.map((cartItem, index) => (
              <SafeAreaView key={index} style={styles.cartItem}>
                <Image
                  source={{
                    uri: `data:image/png;base64,${cartItem.pizza.imagemPizza}`,
                  }}
                  style={styles.pizzaImage}
                />
                <SafeAreaView style={styles.pizzaDetails}>
                  <Text style={styles.pizzaName}>
                    {cartItem.pizza.nomePizza}
                  </Text>
                  {Object.entries(cartItem.quantPizza).map(
                    ([size, quantity]) => (
                      <Text key={size} style={styles.pizzaLabel}>
                        ({quantity}x {size})
                      </Text>
                    )
                  )}
                </SafeAreaView>
                <SafeAreaView style={styles.pizzaInfoQtArea}>
                  <Text style={styles.pizzaInfoQt}>
                    R${" "}
                    {Object.values(cartItem.valortotalItem)
                      .reduce((a, b) => a + b, 0)
                      .toFixed(2)}
                  </Text>
                </SafeAreaView>
              </SafeAreaView>
            ))}
          </SafeAreaView>
          <SafeAreaView style={styles.cartTotalItem}>
            <Text style={styles.cartTotalItemText}>Total:</Text>
            <Text style={styles.cartTotalItemValue}>R$ {total.toFixed(2)}</Text>
          </SafeAreaView>
          <TouchableOpacity style={styles.cartFinalizar}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Fazer pagamento
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  );
};

export default Cart;
