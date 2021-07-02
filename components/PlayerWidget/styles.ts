import {StyleSheet} from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 64,
        backgroundColor: "#131313",
        flexDirection: "row",
        width: "100%",
        marginBottom: 15,
        borderBottomWidth: 2,
        borderColor: "black",
        alignItems: 'center',

    },
    image: {
        width: 65,
        height: 65,
        marginRight: 10,
    },
    rightContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",

    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: 100,
        justifyContent: "space-around",
    },
    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        margin: 10,

    },
    artist: {
        color: "lightgrey",
        fontSize: 16,
    },


});

export default styles;
