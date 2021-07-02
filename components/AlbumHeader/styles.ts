import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
      width: 200,
      height: 200,
        margin: 15,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    creatorContainer: {
      flexDirection: "row",
        margin: 10,
    },
    creator: {
        color: "lightgrey",
        margin: 5,
        fontSize: 16,
        textTransform: "uppercase",
    },
    likes: {
        color: "lightgrey",
        margin: 5,
        fontSize: 16,
        textTransform: "uppercase",
    },
    button: {
        backgroundColor: "#1cd05d",
        height: 55,
        width: 175,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
      color: 'lightgrey',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default styles;
