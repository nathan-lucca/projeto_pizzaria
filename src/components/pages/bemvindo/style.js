import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6d351a",
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#6d351a",
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    backgroundColor: "black",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12,
    color: "white",
  },
  text: {
    color: "#a1a1a1",
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
    backgroundColor: "#9A2E00",
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
});

export default styles;
