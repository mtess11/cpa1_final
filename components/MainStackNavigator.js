import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerItems from './constants/DrawerItems';

import Homepage from './Homepage'; 
import About from './About'; 
import BrandScreen from './BrandScreen'; 
import Menu from './Menu'
import RandomGenerator from './RandomGenerator';
import AllColors from './AllColors';
import YourColors from './YourColors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="BrandScreen" component={BrandScreen} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name= "RandomGenerator" component = {RandomGenerator} />
        <Stack.Screen name= "AllColors" component = {AllColors} />
        <Stack.Screen name= "YourColors" component = {YourColors} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}