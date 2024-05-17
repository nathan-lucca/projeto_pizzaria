import React, { useState } from "react";
import { View, Text, TouchableOpacity, StatusBar, Image } from "react-native";
import Cart from "../menu-cart/cart.js";
import styles from "./style.js";
import cartJson from "../cartData.js";

export default function Header() {
  const [cartCount, setCartCount] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

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
