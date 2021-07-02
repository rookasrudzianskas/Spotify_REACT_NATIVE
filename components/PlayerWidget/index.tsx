import React from 'react';
import {View, Text, Image} from "react-native";
import styles from "./styles";
import {Song} from "../../types";
import {AntDesign} from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

//
// export type PlayerWidgetProps = {
//     song: Song
// }

const song = {
    id: '1',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Rokas Rudzianskas',
}

const PlayerWidget = () => {
    // const {song} = props;

    return (
        <View style={styles.container}>
        {/*    image cover */}
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}   •</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign size={30} color="lightgrey" name="hearto" />
                    <FontAwesome name="play" size={30} color="lightgrey" />
                </View>
            </View>
        </View>
    );
};

export default PlayerWidget;
