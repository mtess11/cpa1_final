import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Homepage from './Homepage';
import About from './About';
import BrandScreen from './BrandScreen';
import Menu from './Menu'
import RandomGenerator from './RandomGenerator';
import AllColors from './AllColors';
import YourColors from './YourColors';

import Pomodoros from './Pomodoros';

const Stack = createNativeStackNavigator();


export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={About} options={{
          headerShown: true, headerTransparent: true,
          headerBlurEffect: 'systemThickMaterialLight',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="BrandScreen" component={BrandScreen} options={{
          headerShown: true, headerTransparent: true,
          headerBlurEffect: 'systemThickMaterialLight',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
        <Stack.Screen name="RandomGenerator" component={RandomGenerator} options={{
          headerShown: true, headerTransparent: true,
          headerBlurEffect: 'systemThickMaterialLight',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="AllColors" component={AllColors} options={{
          headerShown: true, headerTransparent: false,
          headerBlurEffect: 'systemThickMaterialLight',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen
          name="YourColors"
          component={YourColors}
          options={{

            headerTransparent: false,
            headerBlurEffect: 'systemThickMaterialLight',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }
          }
        />

        <Stack.Screen name="Pomodoros" component={Pomodoros} options={{
          headerShown: true, headerTransparent: true,
          headerBlurEffect: 'systemThickMaterialLight',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}