import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, SafeAreaView, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// You can import from local files
import Homepage from './components/Homepage';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const HomeScreen= ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'lightblue'}}>
      <Text style = {styles.aboutTitle}>Home Screen</Text>
      <View style={styles.container}>

      <StatusBar style="auto" />
      <Image
        style={styles.circle}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/02/19/15/34/orange-1210522_1280.png',
        }}
      />
      <Card>
        <View style={styles.menu, {borderRadius:'20'}}>
          <Text style={styles.title}>
            pic-a-color
          </Text>

          <Text style={styles.subtitle}>
            Your Personal Nail Color Picker
          </Text>

          <Button
            title="START"
            onPress={() =>
              navigation.navigate('Brand Picker')
            }
            color='darkblue'
            alignItems='center'
          />

          <Text style={{color:'white'}}> 
            space
          </Text>
      
        </View>
      </Card>
      
     </View>

     <View style={{bottom: 25, backgroundColor: 'red', alignSelf: 'stretch'}}>
        <Button
        title="About"
        onPress={() =>
          navigation.navigate('About')}
        color='lightblue'
         />
      </View>
    </View>
  );
}

const AboutScreen= ({ navigation }) =>{
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style = {styles.aboutTitle}>About Screen</Text>
      <View style = {styles.menu, {backgroundColor: 'lavender'}}>
        <Card>
          <Text style = {styles.aboutDescription, {textAlign: 'center'}}> 
            This is app will be designed to generate a nail polish color
            suggestion for the user by referencing a .JSON file that contains
            a list of nail polish colors by brand.
          </Text>
          
        </Card>


        <View style = {{flex:2, flexDirection:'row', alignItems: 'flex-start', padding: '20', alignContent: 'space-around', justifyContent: 'center'}}> 

          <View>
            <Text style = {styles.aboutFooter}>
              Author: Mariya Teslya
              
            </Text>
            <Text style = {styles.aboutFooter}>
              COSI 153: Mobile App Development
              
            </Text>
          </View>
          <View style = {{margin: '200'}}>
            <Text style = {{fontWeight: 'bold'}}>
              Fall 2021 
            </Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}

const BrandScreen= ({ navigation }) =>{
  const [text, onChangeText] = React.useState("Useless Text");
  const [brand, pickBrand] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lavender' }}>
      <Text style = {{fontWeight: 'bold', color: 'pink', fontSize: 30}}> Choose your brand: <br/> </Text>
      <SafeAreaView>
      
      <TextInput
        style={styles.input}
        
        pickBrand={pickBrand}
        value={brand}
        placeholder="Type a Brand"
      />

      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Max Price"
        keyboardType="numeric"
      />

      <Card>
        <View style={styles.menu, {borderRadius:'20'}}>

          <Button
            title="Generate"
            onPress= {showAlert}
            color='darkblue'
            alignItems='center'
          />
      
        </View>
      </Card>


    </SafeAreaView>


    </View>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Brand Picker" component={BrandScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  },
  menu: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'orangered',
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    margin: 20,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  aboutTitle: {
    fontSize: 24,

  },
  aboutDescription: {
    alignContent: 'center',
    marginTop: 30,
    textAlign: 'center',
    width: '50%',

  },
  aboutFooter: {
    textAlign: 'left',
    borderRightWidth: 1,
    padding: 10

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightgrey'
  }, circle: {
    height: 150,
    width: 150,
    margin: 50,

  }
  
});
