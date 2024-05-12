import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    header: {
        position: "fixed",
        height: 60,
        flexDirection: "row",
        backgroundColor: "#FBB039",
        justifyContent: "space-between",
    },
    menuOpener: {
        height: 40,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: "black",
        paddingHorizontal: 20,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
    },
    cartCount: {
        marginRight: 10,
        color: "white",
    },
    logo: {
        width: 60,
        height: 60,
        resizeMode: "contain",
    },
    logoHeader: {
        height: 40,
        marginTop: 10,
        marginRight: 15,
        marginLeft: -15,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    logoText: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 18,
    },
});

export default style;
