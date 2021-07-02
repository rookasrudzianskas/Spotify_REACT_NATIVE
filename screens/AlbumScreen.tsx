import React, {useEffect, useState} from 'react';
import {View, Text, FlatList} from "react-native";
import {useRoute} from "@react-navigation/native";
import albumDetails from "../data/albumDetails";
import SongListItem from "../components/SongListItem";
import AlbumHeader from "../components/AlbumHeader";
import AlbumComponent from "../components/Album";
import {API, graphqlOperation} from "aws-amplify";
import {getAlbum} from "../src/graphql/queries";

const AlbumScreen = () => {

    const route = useRoute();

    // @ts-ignore
    const albumId = route.params.id;

    const [album, setAlbum] = useState(null);

    useEffect(() => {

        const fetAlbumDetails = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, {id: albumId}));
                setAlbum(data.data.getAlbum);

            } catch (e) {
                console.log(e);
            }
        }

        fetAlbumDetails();
    }, []);


    if(!album) {
        return <Text>Loading still, please think about something nice...</Text>
    }

    return (
        <View>
    {/*// @ts-ignore*/}
            <FlatList ListHeaderComponent={() => <AlbumHeader album={album} />} data={album.songs.items} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} renderItem={({item}) => <SongListItem  song={item}/>} keyExtractor={( item ) => item.id}/>
        </View>
    );
};

export default AlbumScreen;
