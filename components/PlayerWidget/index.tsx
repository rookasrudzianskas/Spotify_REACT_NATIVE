import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./styles";
import {Song} from "../../types";
import {AntDesign} from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import {Audio} from "expo-av";
import {Sound} from "expo-av/build/Audio/Sound";

//
// export type PlayerWidgetProps = {
//     song: Song
// }

const song = {
    id: '1',
    uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Rookas',
}

const PlayerWidget = () => {

    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);
    const [liked, setLiked] = useState<boolean>(false);
    // const {song} = props;
    // @ts-ignore
    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playCurrentSong = async () => {
        if(sound) {
            // one song at the time
            await sound.unloadAsync();
        }
        const {sound: newSound} = await Audio.Sound.createAsync({uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}, {shouldPlay: isPlaying}, onPlaybackStatusUpdate);
        setSound(newSound);
    }

    useEffect(() => {
        // play the song here
        playCurrentSong();
    }, []);

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }

        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if(sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    const onLiked = () => {
        setLiked(!liked);
    }
    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}   •</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        <TouchableOpacity onPress={onLiked}>
                        <AntDesign name={liked ? "heart" : "hearto"} size={30} color={liked ? "red" : "white"}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlayerWidget;
