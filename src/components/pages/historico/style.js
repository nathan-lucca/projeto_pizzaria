import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    width: "85%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 3,
    padding: 15,
    marginLeft: 30,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    marginVertical: 4,
  },
  image: {
    width: 100,
    height: "96%",
  },
  info: {
    padding: 10,
    justifyContent: "space-around",
    fontSize: 20,
    marginLeft: 25,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  price: {
    color: "green",
    fontSize: 15,
  },
  itemTextContainer: {
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
  contentContainer: {
    flex: 1,
  },
});

export default styles;
