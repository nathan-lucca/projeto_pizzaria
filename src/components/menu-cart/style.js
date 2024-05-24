import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FBB039",
    textAlign: "center",
  },
  pizzaName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FBB039",
    marginBottom: 5,
  },
  pizzaLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 6,
  },
  cart: {
    marginBottom: 50,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    color: "#FFF",
  },
  pizzaImage: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  pizzaDetails: {
    width: "50%",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cartTotalItem: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#FBB039",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15,
  },
  cartTotalItemText: {
    fontWeight: "bold",
    color: "#FFF",
    fontSize: 25,
    marginLeft: 15,
  },
  cartTotalItemValue: {
    color: "#FFF",
    marginRight: 15,
    fontSize: 20,
  },
  cartFinalizar: {
    width: "100%",
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: "#FBB039",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  pizzaInfoQtArea: {
    flexDirection: "row",
    width: 100,
    height: 50,
    backgroundColor: "#EEE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  pizzaInfoQt: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
    color: "#000",
  },
});

export default styles;
