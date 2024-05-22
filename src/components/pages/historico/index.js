// HistoryScreen.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator, Image } from "react-native";
import styles from "./style.js";

const HistoryScreen = () => {
    const [historico, setHistorico] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHistorico = async () => {
            try {
                // simulando um delay de carregamento
                await new Promise((resolve) => setTimeout(resolve, 1000));

                // simulando ids
                // alterar depois
                const data = [
                    {
                        id: 1,
                        type: "Chocolate",
                        price: 21.5,
                        quantity: 2,
                        size: "(P)",
                        imageUrl:
                            "https://forneriaoriginal.com/wp-content/uploads/2020/06/chocolate-ao-leite1.png",
                    },
                    {
                        id: 2,
                        type: "Calabresa",
                        price: 18.99,
                        quantity: 1,
                        size: "(M)",
                        imageUrl:
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ12EWyknP-zAXRVy-gIi9wA22qn6BBRFbmcLN37LQttA&s",
                    },
                    {
                        id: 3,
                        type: "Bacon",
                        price: 22.0,
                        quantity: 3,
                        size: "(G)",
                        imageUrl:
                            "https://s3-sa-east-1.amazonaws.com/superimg/img.produtos/6455573/645/img_1200_1.png",
                    },
                    {
                        id: 4,
                        type: "portuguesa",
                        price: 22.0,
                        quantity: 8,
                        size: "(G)",
                        imageUrl:
                            "https://forneriaoriginal.com/wp-content/uploads/2020/06/chocolate-ao-leite1.png",
                    },
                ];

                setHistorico(data);
            } catch (error) {
                setError("Algo deu errado");
            } finally {
                setLoading(false);
            }
        };

        fetchHistorico();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.title}>Pizza: {item.type}</Text>
                <Text>Quantidade: {item.quantity}</Text>
                <Text>Tamanho: {item.size}</Text>
                <Text style={styles.price}>
                    Preço: R${item.price.toFixed(2)}
                </Text>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#f7bb06" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleHistory}>SEUS PEDIDOS</Text>
            <View style={styles.contentContainer}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={historico}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};

export default HistoryScreen;
