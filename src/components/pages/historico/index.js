import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import moment from "moment";

const HistoryScreen = () => {
  moment.locale("pt-br");

  const [historico, setHistorico] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const dadosUsuario = async () => {
      global.storage
        .load({
          key: "infosUsuario",
        })
        .then((data) => {
          setUsuario(data);
          setInterval(() => {
            fetchHistorico(data.idUsers);
          }, 1000);
        })
        .catch((err) => {
          console.warn(err.message);
        });
    };

    dadosUsuario();
  }, []);

  const fetchHistorico = async (userId) => {
    if (!userId) {
      return;
    }

    try {
      const response = await fetch(
        `http://192.168.100.14:8080/order/user/${Number(userId)}`
      );
      const data = await response.json();

      setHistorico(data);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateToOrderDetails = (order) => {
    setSelectedOrder(order);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToOrderDetails(item)}>
      <View style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.title}>Pedido ID: {item.idOrders}</Text>
          <Text>
            Data do Pedido: {moment(item.dataPedido).format("DD/MM/YYYY")}
          </Text>
          <Text>Status do Pedido: {item.statusPedido}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const groupOrderItemsByPizza = (orderItems) => {
    const groupedItems = {};

    orderItems.forEach((item) => {
      if (!groupedItems[item.pizza.nomePizza]) {
        groupedItems[item.pizza.nomePizza] = {
          pizza: item.pizza,
          sizes: [],
        };
      }
      groupedItems[item.pizza.nomePizza].sizes.push({
        tamanho: item.tamanhoPizza,
        quantidade: item.quantPizza,
        valor: item.valortotalItem,
      });
    });

    return Object.values(groupedItems);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleHistory}>SEUS PEDIDOS</Text>
      <View style={styles.contentContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={historico}
          renderItem={renderItem}
          keyExtractor={(item) => item.idOrders.toString()}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={{ backgroundColor: "#FBB039" }}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 20 }}>
                ❌
              </Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Detalhes do Pedido</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              {selectedOrder && (
                <>
                  {groupOrderItemsByPizza(selectedOrder?.orderItems).map(
                    (groupedItem) => (
                      <View style={styles.card} key={groupedItem.pizza.idPizza}>
                        <Image
                          source={{
                            uri: `data:image/png;base64,${groupedItem.pizza.imagemPizza}`,
                          }}
                          style={styles.imageDetalhe}
                          resizeMode="contain"
                        />
                        <View style={styles.infoDetalhe}>
                          <Text style={styles.titleDetalhe}>
                            Pizza: {groupedItem.pizza.nomePizza}
                            {"\n"}
                          </Text>
                          {groupedItem.sizes.map((size, index) => (
                            <View key={index}>
                              <Text>
                                ({size.quantidade}x {size.tamanho}) -{" "}
                                <Text style={styles.priceDetalhe}>
                                  R${size.valor.toFixed(2)}
                                </Text>
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    )
                  )}
                </>
              )}
            </ScrollView>
            <View style={styles.totalDetalhe}>
              <Text style={styles.totalTextDetalhe}>Total:</Text>
              <Text style={styles.totalTextValueDetalhe}>
                R${" "}
                {selectedOrder?.orderItems
                  .reduce(
                    (total, orderItem) =>
                      total + (orderItem?.valortotalItem || 0),
                    0
                  )
                  .toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default HistoryScreen;
