import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button} from 'react-native';
import { Card } from 'react-native-paper';

export default function Homepage({navigation}) {
  
  return (
   
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'lightblue'}}>
      {/* <Text style = {homeStyles.aboutTitle}>Home Screen</Text> */}
      <View style={homeStyles.container}>

      <StatusBar style="auto" />
      <Image
        style={homeStyles.circle}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/02/19/15/34/orange-1210522_1280.png',
        }}
      />
      <View>
        
        <View style={homeStyles.menu, {borderRadius:'20', backgroundColor: 'white'}}>
          <Text style={homeStyles.title}>
            pic-a-color
          </Text>

          <Text style={homeStyles.subtitle}>
            Your Personal Nail Color Picker
          </Text>
          
          <Button style={homeStyles.button}
            title="START"
            
            onPress={() =>
              
              navigation.navigate('Menu')
            }
            color='darkblue'
            alignItems='center'
            backgroundColor='#fff'
          />

      
        </View>
      
      </View>
      
     </View>

     <View style={{bottom: 25, backgroundColor: 'C4F5FC', alignSelf: 'stretch', backgroundColor: 'white'}}>
        <Button
        title="About"
        onPress={() =>
          navigation.navigate('About')}
        color='navy'
         />
      </View>
    </View>
  );
}

const homeStyles = StyleSheet.create ({

  circle: {
    resizeMode: "contain",
    height: 150,
    width: 150,
    margin: 40,
    
  }, 
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  }, 
  subtitle: {
    margin: 20,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    
  }, 
  aboutTitle: {
    fontSize: 24,

  }, menu: {
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
  button: {
    backgroundColor:'#1E6738',
  }
});