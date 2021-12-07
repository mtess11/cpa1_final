import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, Image, requireNativeComponent } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
 //import Homepage from './components/Homepage';
 import MainStackNavigator from './components/MainStackNavigator';
 import ValueProvider from './components/ValueContext';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Fourth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Fifth Item',
  }, {
    id: '7',
    title: 'Fifth Item',
  }, {
    id: '8',
    title: 'Fifth Item',
  },{
    id: '9',
    title: 'Fifth Item',
  },

];

export default function App () {
  return(

    <ValueProvider value={DATA}>
         <MainStackNavigator></MainStackNavigator>
    </ValueProvider>
  )
};
