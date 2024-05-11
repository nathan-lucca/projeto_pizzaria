import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native';
import styles from './style.js';
import PizzaItem from '../modal-pizza/modal.js';
import pizzaJson from '../pizzaData.js';

export default function Pizzas({ }) {
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePizzaPress = (pizza) => {
    setSelectedPizza(pizza);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textTittle}>Pizzas</Text>
        {pizzaJson.map(pizza => (
          <TouchableWithoutFeedback
            key={pizza.id} 
            onPress={() => handlePizzaPress(pizza)}
          >
            <View style={styles.pizzaItem}>
              <Image source={pizza.img} style={styles.pizzaImage} />
              <Text style={styles.pizzaAdd}>+</Text>
              <Text style={styles.pizzaName}>{pizza.name}</Text>
              <Text style={styles.pizzaPrice}>R$ {pizza.price.toFixed(2)}</Text>
              <Text style={styles.pizzaDesc}>{pizza.description}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <PizzaItem 
          pizza={selectedPizza} 
          closeModal={closeModal} 
        />
      </Modal>
    </ScrollView>
  );
};
