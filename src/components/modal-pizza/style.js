import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  pizzaInfoDesc: {
    fontSize: 18,
    color: "#FFF",
    marginTop: 10,
  },
  pizzaInfoSector: {
    color: "#FBB039",
    textTransform: "uppercase",
    fontSize: 17,
    marginTop: 30,
    marginBottom: 10,
  },
  pizzaInfoSizes: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 15,
  },
  pizzaInfoSize: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 5,
  },
  selectedPizzaInfoSize: {
    backgroundColor: "#399ade",
    color: "#FFF",
  },
  selectedPizzaInfoSizeText: {
    color: "#D6D6D6",
    backgroundColor: "#399ade",
  },
  pizzaInfoPrice: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 280,
    marginBottom: 45,
  },
  pizzaInfoActualPrice: {
    fontSize: 28,
    color: "#FFF",
  },
  pizzaWindowBody: {
    flex: 1,
    padding: 20,
  },
  pizzaBig: {
    alignItems: "center",
  },
  pizzaImage: {
    width: 230,
    height: 230,
  },
  pizzaTitle: {
    marginTop: 25,
    fontSize: 25,
    fontWeight: "bold",
    color: "#FBB039",
  },
  pizzaInfoQtArea: {
    flexDirection: "row",
    width: 120,
    height: 50,
    backgroundColor: "#EEE",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pizzaInfoQtButton: {
    padding: 15,
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
  },
  pizzaInfoQt: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    color: "#000",
  },
  pizzaInfoAddButton: {
    margin: 20,
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: "#FBB039",
  },
  pizzaInfoAddButtonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeModalButton: {
    fontSize: 50,
    backgroundColor: "#33333380",
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default style;
