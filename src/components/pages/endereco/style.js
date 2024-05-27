import { StyleSheet, Dimensions } from "react-native";

const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerForm: {
    marginTop: "3%",
    width: "80%",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    marginTop: windowHeight * 0.02, // Ajuste o valor conforme necessário
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  input2: {
    backgroundColor: "#000",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 30,
    marginTop: windowHeight * 0.04, // Ajuste o valor conforme necessário
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    alignSelf: "flex-start",
    fontSize: 18,
    marginTop: windowHeight * 0.1, // Ajuste o valor conforme necessário
  },
  button: {
    backgroundColor: "green",
    borderRadius: 20,
    width: "60%",
    padding: 15,
    alignSelf: "center",
    marginTop: 20, // Ajuste o valor conforme necessário
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  Titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 26,
  },
  T2: {
    textAlign: "center",
    fontWeight: "bold",
    color: "red",
  },
  gifContainer: {
    alignItems: "center",
    marginTop: -windowHeight * 0.05, // Ajuste o valor conforme necessário
    marginBottom: -350, // Ajuste o valor conforme necessário
  },
});

export default styles;
