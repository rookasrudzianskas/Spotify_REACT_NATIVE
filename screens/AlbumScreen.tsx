import React, {useEffect} from 'react';
import {View, Text, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import AlbumComponent from "../components/Album";


const AlbumScreen = () => {

    const route = useRoute();



    useEffect(() => {
        console.log(route);
    }, []);

    return (
        <View>

            <FlatList data={albumDetails.songs} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} renderItem={({item}) => <SongListItem  song={item}/>} keyExtractor={( item ) => item.id}/>
        </View>
    );
};

export default AlbumScreen;
