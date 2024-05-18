import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style.js";

const PizzaItem = ({ pizza, closeModal }) => {
  console.log(pizza); // Deixa esse console.log pra trabalhamos o array e pegarmos os valores das coisas retornadas

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(pizza.tamanhos[0]); // Selecionando por padrão o primeiro tamanho de PIZZA
  const [cart, setCart] = useState([]);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleSizePress = (size) => {
    setSelectedSize(size);
    setQuantity(1); // Redefinindo a quantidade da pizza conforme eu altero o tamanho da PIZZA
  };

  // Adicionando pizza ao carrinho temporariamente (DEIXA COMENTADO ISSO AQUI)
  // const addToCart = () => {
  //   setCart((prevCart) => {
  //     const newCart = [
  //       ...prevCart,
  //       {
  //         id: pizza.id,
  //         name: pizza.name,
  //         img: pizza.img,
  //         size: selectedSize,
  //         quantity: quantity,
  //       },
  //     ];

  //     console.log(newCart);

  //     return newCart;
  //   });
  // };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={closeModal}>
        <Text>❌</Text>
      </TouchableOpacity>
      <View style={styles.pizzaWindowBody}>
        <View style={styles.pizzaBig}>
          <Image
            source={{ uri: `${pizza.imagem}` }}
            style={styles.pizzaImage}
          />
        </View>
        <View style={styles.pizzaInfo}>
          <Text style={styles.pizzaTitle}>{pizza.nome}</Text>
          <Text style={styles.pizzaInfoDesc}>{pizza.descricao}</Text>
          <Text style={styles.pizzaInfoSector}>Tamanhos</Text>
          <View style={styles.pizzaInfoSizes}>
            {pizza.tamanhos.map((size, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.pizzaInfoSize,
                  selectedSize === size ? styles.selectedPizzaInfoSize : null,
                ]}
                onPress={() => handleSizePress(size)}
              >
                <Text>{size.tamanho}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.pizzaInfoPriceArea}>
          <Text style={styles.pizzaInfoSector}>Preço</Text>
          <View style={styles.pizzaInfoPrice}>
            <Text style={styles.pizzaInfoActualPrice}>
              {/* Multiplicando o valor da pizza, conforme eu escolho a quantia */}
              R$ {(selectedSize.valor * quantity).toFixed(2)}
            </Text>
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
        <TouchableOpacity style={styles.pizzaInfoAddButton}>
          <Text style={styles.pizzaInfoAddButtonText}>
            Adicionar ao carrinho
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PizzaItem;
