import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { MaterialIcons, Entypo, FontAwesome, EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import AlbumScreen from "../screens/AlbumScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="home-filled" style={{ marginBottom: -3 }}  size={30} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <EvilIcons name="search" size={30} style={{ marginBottom: -3 }} color={color} />,
        }}
      />

        <BottomTab.Screen
            name="Your Library"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <Ionicons name="library-outline" size={30} style={{ marginBottom: -3 }} color={color} />,
            }}
        />

        <BottomTab.Screen
            name="Premium"
            component={TabTwoNavigator}
            options={{
                tabBarIcon: ({ color }) => <FontAwesome name="spotify" size={30} style={{ marginBottom: -3 }} color={color} />,
            }}
        />

    </BottomTab.Navigator>
  );
}


const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: 'Home' }}
      />

        <TabOneStack.Screen
            name="AlbumScreen"
            component={AlbumScreen}
            options={{ headerTitle: 'Album' }}
        />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}
