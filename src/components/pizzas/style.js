import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        width: "100%",
    },
    pizzaItem: {
        alignItems: "center",
        marginBottom: 80,
    },
    pizzaImage: {
        width: 210,
        height: 210,
        borderRadius: 100,
        marginBottom: 10,
    },
    pizzaName: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginBottom: 5,
    },
    pizzaPrice: {
        fontSize: 15,
        color: "white",
    },
    pizzaDesc: {
        fontSize: 13,
        color: "white",
        marginTop: 10,
        textAlign: "center",
    },
    textTittle: {
        fontSize: 40,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 35,
        color: "white",
    },
    pizzaAdd: {
        width: 50,
        height: 50,
        lineHeight: 50,
        borderRadius: 25,
        backgroundColor: "#343433",
        textAlign: "center",
        color: "#FFF",
        marginTop: -30,
    },
});

export default style;
