import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style.js';

const PizzaItem = ({ pizza, closeModal }) => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={closeModal}>
        <Text>❌</Text>
      </TouchableOpacity>
      <View style={styles.pizzaWindowBody}>
        <View style={styles.pizzaBig}>
          <Image source={pizza.img} style={styles.pizzaImage} />
        </View>
        <View style={styles.pizzaInfo}>
          <Text style={styles.pizzaTitle}>{pizza.name}</Text>
          <Text style={styles.pizzaInfoDesc}>{pizza.description}</Text>
          <Text style={styles.pizzaInfoSector}>Tamanho</Text>
          <View style={styles.pizzaInfoSizes}>
            {pizza.sizes.map((size, index) => (
              <TouchableOpacity key={index} style={styles.pizzaInfoSize}>
                <Text>{size.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.pizzaInfoPriceArea}>
          <Text style={styles.pizzaInfoSector}>Preço</Text>
          <View style={styles.pizzaInfoPrice}>
            <Text style={styles.pizzaInfoActualPrice}>R$ {pizza.price.toFixed(2)}</Text>
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
        </View>
        <TouchableOpacity
          style={styles.pizzaInfoAddButton}
          onPress={() => {
            closeModal();
          }}
        >
          <Text style={styles.pizzaInfoAddButtonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PizzaItem;
