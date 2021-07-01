import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title: {
        color: "white",
        fontSize: 22,

    },
    artist: {
        color: "lightgrey",
        fontSize: 18,
    },
    image: {
        width: 65,
        height: 65,
    },

    container: {
        flexDirection: "row",
        margin: 10,
    },

    rightContainer: {
        justifyContent: "space-around",
        marginLeft: 15,
    }
});

export default styles;
