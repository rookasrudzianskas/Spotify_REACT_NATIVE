import React from 'react';
import {View, Text} from "react-native";
import {Album} from "../../types";

export type AlbumHeaderProps = {
    album: Album,
}

const AlbumHeader = (props: AlbumHeaderProps) => {
    return (
        <View>
            <Text style={{ color: "white" }}>Header</Text>
        </View>
    );
};

export default AlbumHeader;
