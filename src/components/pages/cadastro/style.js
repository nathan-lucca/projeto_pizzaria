import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundo: {
    flex: 1,
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
    // marginTop: 5,
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  title: {
    color: "black",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginRight: 230,
    fontSize: 20,
  },
  button: {
    position: "absolute",
    backgroundColor: "#9A2E00",
    borderRadius: 20,
    width: "60%",
    padding: 15,
    alignSelf: "center",
    bottom: "-30%",
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
});

export default styles;
