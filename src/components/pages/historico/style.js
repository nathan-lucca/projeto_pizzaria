import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "85%",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    padding: 15,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    marginVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  imageDetalhe: {
    width: 100,
    height: 100,
  },
  infoDetalhe: {
    flex: 1,
    padding: 10,
    justifyContent: "space-around",
    fontSize: 20,
  },
  titleDetalhe: {
    fontWeight: "bold",
    fontSize: 16,
  },
  priceDetalhe: {
    color: "green",
    fontSize: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  totalDetalhe: {
    marginTop: 20,
    textAlign: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 15,
  },
  totalTextDetalhe: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginLeft: 15,
  },
  totalTextValueDetalhe: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginRight: 15,
  },
  contentContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  titleHistory: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
  }
});

export default styles;
