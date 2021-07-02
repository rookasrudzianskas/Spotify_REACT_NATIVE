import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import {API, graphqlOperation} from "aws-amplify";
import AlbumCategory from "../components/AlbumCategory";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from 'react-native';
import albumCategories from "../data/albumCategories";
import {listAlbumCategorys} from "../src/graphql/queries";
import {useEffect, useState} from "react";



export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const fetchAlbumCategories = async() => {
      try{
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        // @ts-ignore
        setCategories(data.data.listAlbumCategorys.items);
      } catch (e) {
        console.log(e);
      }
    }

    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
  {/*// @ts-ignore*/}
      <FlatList  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}  keyExtractor={(item) => item.id} data={categories}   renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums.items} />}/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
