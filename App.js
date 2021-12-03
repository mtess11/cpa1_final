import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
 //import Homepage from './components/Homepage';
 import MainStackNavigator from './components/MainStackNavigator';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App () {
  return(
    <MainStackNavigator></MainStackNavigator>
  )
};
