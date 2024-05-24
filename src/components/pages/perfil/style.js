import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#f0f0f0",
  },
  innerContainer: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "100%", // Ocupa 100% da largura da janela
    maxWidth: 400, // Limite máximo de largura
    marginHorizontal: 10,
    marginBottom: 20, // Adiciona margem inferior para separar os campos de perfil dos dados
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#dfdfdf",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#FBB039",
    textAlign: "center", // Alinha ao centro
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center", // Alinha ao centro
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    width: "100%", // Ocupa 100% da largura do container
  },
  profileDetails: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default styles;
