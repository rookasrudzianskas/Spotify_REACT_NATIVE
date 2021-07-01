import React from 'react';
import {View, Text, FlatList} from "react-native";
import { Album } from "../../types";
import styles from "./styles";
import AlbumComponent from "../Album";

export type AlbumCategoryProps = {
    title: string,
    albums: [Album],
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
        {/*    Title of category    */}
            <Text style={styles.title}>{props.title}</Text>
            <FlatList data={props.albums} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} renderItem={({item}) => <AlbumComponent  album={item}/>} keyExtractor={( item ) => item.id} horizontal/>
        {/*    The list of album */}
        </View>
    );
};

export default AlbumCategory;
