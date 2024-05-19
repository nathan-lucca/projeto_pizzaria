import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundo: {
    flex: 1,
  },
  containerForm: {
    width: "80%",
    alignSelf: "center",
  },
  input: {
    color: "white",
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 30,
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
  },

  title: {
    color: "black",
    fontWeight: "bold",
    marginRight: "50%",
    marginTop: "10%",
    flexWrap: "nowrap",
    padding: "3.5%",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "20%",
  },
  button: {
    backgroundColor: "#9A2E00",
    borderRadius: 20,
    padding: 15,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  buttonlogin: {
    backgroundColor: "black",
    borderRadius: 50,
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
  },
  login: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
  message: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: "5%",
    marginTop: "10%",
  },
});

export default styles;