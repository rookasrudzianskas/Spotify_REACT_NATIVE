import * as React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import AlbumCategory from "../components/AlbumCategory";
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from 'react-native';
import albumCategories from "../data/albumCategories";



export default function HomeScreen() {
  return (
    <View style={styles.container}>
  {/*// @ts-ignore*/}
      <FlatList  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}  keyExtractor={(item) => item.id} data={albumCategories}   renderItem={({item}) => <AlbumCategory title={item.title} albums={item.albums} />}/>
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
