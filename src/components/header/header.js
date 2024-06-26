import React, { useEffect, useState } from "react";
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Cart from "../menu-cart/cart.js";
import styles from "./style.js";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [usuario, setUsuario] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [isFetchingOrderId, setIsFetchingOrderId] = useState(false);

  useEffect(() => {
    global.storage
      .load({
        key: "infosUsuario",
      })
      .then((data) => {
        setUsuario(data);
        setInterval(() => {
          atualizarQuantiaCarrinho(data.idUsers);
        }, 1000);
      })
      .catch((err) => {
        console.warn(err.message);
      });
  }, []);

  const atualizarQuantiaCarrinho = async (userId) => {
    if (!userId) {
      return;
    }

    try {
      const response = await fetch(
        `http://192.168.100.14:8080/cart/listar/${Number(userId)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const cartItems = await response.json();
      const totalItems = cartItems.length;

      setCartCount(totalItems);
    } catch (error) {
      console.error("Erro ao buscar o total de itens no carrinho:", error);
    }
  };

  const toggleCart = async () => {
    setIsCartOpen(!isCartOpen);

    if (!isCartOpen && !isFetchingOrderId) {
      setIsFetchingOrderId(true);

      try {
        const response = await fetch(
          `http://192.168.100.14:8080/order/user/${usuario.idUsers}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        for (var i = 0; i < data.length; i++) {
          if (data[i].statusPedido === "Pendente") {
            setOrderId(data[i].idOrders);
            break;
          }
        }
      } catch (error) {
        console.error("Erro ao buscar o ID do pedido:", error);
      } finally {
        setIsFetchingOrderId(false);
      }
    }
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const shouldDisplayCart = isCartOpen && cartCount >= 1;

  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.logoHeader} onPress={toggleCart}>
            <Image
              source={require("../../../assets/images/LOGO.png")}
              style={styles.logo}
            ></Image>
            <Text style={styles.logoText}>Pizzaria dos Monkeys</Text>
          </View>

          <TouchableOpacity style={styles.menuOpener} onPress={toggleCart}>
            <Text style={styles.cartCount}>{cartCount}</Text>
            <Text>🛒</Text>
          </TouchableOpacity>
        </View>
        {shouldDisplayCart && (
          <Cart isVisible={isCartOpen} onClose={closeCart} orderId={orderId} />
        )}
      </SafeAreaView>
    </>
  );
}
