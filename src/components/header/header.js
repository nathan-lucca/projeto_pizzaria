import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import Cart from "../menu-cart/cart.js";
import styles from "./style.js";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    global.storage
      .load({
        key: "infosUsuario",
      })
      .then((data) => {
        setUsuario(data);
      })
      .catch((err) => {
        console.warn(err.message);
      });

    fetchCartCount;

    const intervalId = setInterval(fetchCartCount, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const fetchCartCount = async () => {
    try {
      const response = await fetch(
        `http://192.168.100.14:8080/cart/listar/${usuario.idUsers}`,
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

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const shouldDisplayCart = isCartOpen && cartCount >= 1;

  return (
    <View>
      <StatusBar />
      <View style={styles.header}>
        <View style={styles.logoHeader} onPress={toggleCart}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logo}
          ></Image>
          <Text style={styles.logoText}>Pizzaria dos Monkeys</Text>
        </View>

        <TouchableOpacity style={styles.menuOpener} onPress={toggleCart}>
          <Text style={styles.cartCount}>{cartCount}</Text>
          <Text>🛒</Text>
        </TouchableOpacity>
      </View>
      {shouldDisplayCart && <Cart isVisible={isCartOpen} onClose={closeCart} />}
    </View>
  );
}
