import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './style.js';
import pizzaJson from '../pizzaData.js';

const Cart = ({ isVisible, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateSubtotal();
  }, []);

  useEffect(() => {
    if (isVisible) {
      calculateSubtotal();
    }
  }, [isVisible]);

  const calculateSubtotal = () => {
    let total = 0;
    pizzaJson.forEach(pizzaItem => {
      total += pizzaItem.price * quantity;
    });
    setSubtotal(total);
    applyDiscount(total);
  };

  const applyDiscount = (subtotal) => {
    const discountAmount = subtotal * 0.1;
    const discountedTotal = subtotal - discountAmount;
    setDiscount(discountAmount);
    setTotal(discountedTotal);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleModalClose = () => {
    setQuantity(1); 
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleModalClose}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.menuCloser} onPress={handleModalClose}>
          <Text>❌</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Suas Pizzas</Text>
        <View style={styles.cart}>
          {pizzaJson.map(pizzaItem => (
            <View key={pizzaItem.id} style={styles.cartItem}>
              <Image source={pizzaItem.img} style={styles.pizzaImage} />
              <View style={styles.pizzaDetails}>
                <Text style={styles.pizzaName}>{pizzaItem.name}</Text>
                <Text style={styles.pizzaLabel}>({pizzaItem.sizes[0].label[0]})</Text>
              </View>
              <View style={styles.pizzaInfoQtArea}>
                <TouchableOpacity onPress={decreaseQuantity}>
                  <Text style={styles.pizzaInfoQtButton}>-</Text>
                </TouchableOpacity>
                <Text style={styles.pizzaInfoQt}>{quantity}</Text>
                <TouchableOpacity onPress={increaseQuantity}>
                  <Text style={styles.pizzaInfoQtButton}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.cartDetails}>
          <View style={styles.cartTotalItem}>
            <Text style={styles.cartTotalItemText}>Subtotal</Text>
            <Text style={styles.cartTotalItemValue}>R$ {subtotal.toFixed(2)}</Text>
          </View>
          <View style={styles.cartTotalItem}>
            <Text style={styles.cartTotalItemText}>Desconto (-10%)</Text>
            <Text style={styles.cartTotalItemValue}>R$ {discount.toFixed(2)}</Text>
          </View>
          <View style={[styles.cartTotalItem, styles.totalBig]}>
            <Text style={styles.cartTotalItemText}>Total</Text>
            <Text style={styles.cartTotalItemValue}>R$ {total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.cartFinalizar}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Finalizar a compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default Cart;
