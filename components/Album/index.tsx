import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import styles from "./styles";
import { Album } from "../../types";
import {useNavigation} from "@react-navigation/native";

export type AlbumProps = {
    album: Album,
}

const AlbumComponent = (props: AlbumProps) => {

    const navigation = useNavigation();


    const onPress = () => {
        navigation.navigate("AlbumScreen", {id: props.album.id})
    }

    return (
        <View style={styles.container}>

            <TouchableWithoutFeedback onPress={onPress}>
                <View>
                    <Image source={{uri: props.album.imageUri}} style={styles.image} />
            {/*// @ts-ignore*/}
                    <Text  style={styles.text}>{props.album.artistsHeadline}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default AlbumComponent;
