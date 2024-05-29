import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Image, Modal, ScrollView, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style.js";

const Cart = ({ isVisible, onClose, orderId }) => {
  const navigation = useNavigation();
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
          atualizarItensCarrinho(data.idUsers);
        }, 1000);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, [isVisible]);

  const atualizarItensCarrinho = async (userId) => {
    if (!userId) {
      return;
    }

    try {
      const response = await fetch(
        `http://192.168.100.14:8080/cart/listar/${Number(userId)}`
      );

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
      return;
    }
  };

  const handleModalClose = () => {
    onClose();
  };

  const removerItemCarrinho = async (userId, pizzaId, tamanho) => {
    try {
      const response = await fetch(
        `http://192.168.100.14:8080/cart/remover/${userId}/${pizzaId}/${tamanho}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        atualizarItensCarrinho(userId); // Atualizar os itens do carrinho
      } else {
        return;
      }
    } catch (error) {
      return;
    }
  };

  const calcularValorTotalItem = (valortotalItem) => {
    return Object.values(valortotalItem)
      .reduce((a, b) => a + b, 0)
      .toFixed(2);
  };

  const handleFinalizeOrder = async () => {
    try {
      const response = await fetch(
        "http://192.168.100.14:8080/order/finalizar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ordersId: orderId,
            userId: usuario.idUsers,
          }),
        }
      );

      if (response.ok) {
        navigation.navigate("Endereco");
      } else {
        console.error("Erro ao finalizar pedido");
      }
    } catch (error) {
      console.error("Erro ao finalizar pedido", error);
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleModalClose}
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={{ marginLeft: 15, marginTop: 15, fontSize: 25 }}
          onPress={handleModalClose}
        >
          <Text>❌</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Seu Carrinho</Text>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                        ({quantity}x {size}){" "}
                        <TouchableOpacity
                          onPress={() =>
                            removerItemCarrinho(
                              usuario.idUsers,
                              cartItem.pizza.idPizza,
                              size
                            )
                          }
                        >
                          <Text style={{ color: "#FFF" }}>Remover</Text>
                        </TouchableOpacity>
                      </Text>
                    )
                  )}
                </SafeAreaView>
                <SafeAreaView style={styles.pizzaInfoQtArea}>
                  <Text style={styles.pizzaInfoQt}>
                    R$ {calcularValorTotalItem(cartItem.valortotalItem)}
                  </Text>
                </SafeAreaView>
              </SafeAreaView>
            ))}
          </SafeAreaView>
        </ScrollView>
        <SafeAreaView style={styles.cartTotalItem}>
          <Text style={styles.cartTotalItemText}>Total:</Text>
          <Text style={styles.cartTotalItemValue}>R$ {total.toFixed(2)}</Text>
        </SafeAreaView>
        <TouchableOpacity
          style={styles.cartFinalizar}
          onPress={() => {
            handleModalClose();
            handleFinalizeOrder();
          }}
        >
          <Text
            style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}
          >
            Continuar
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
};

export default Cart;
