import * as React from 'react';
import { Text, Alert, View, StyleSheet, Image, StatusBar, Button, SafeAreaView, TextInput, SectionList} from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Card, List, Colors } from 'react-native-paper';


export default function Menu({navigation}) {
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
    <SafeAreaView style={{ flex: 1 , backgroundColor: 'blue'}} contentContainerStyle={{ flexGrow: 1 }}>

      <View style = {styles.container, {padding: 20, paddingHorizontal: "10%"}}> 
        <Text style = {{fontFamily: "Futura", textAlign: 'center', fontSize: 35, fontWeight: '100', color: 'white', backgroundColor: "orange"}}> Main Menu </Text>
      </View>

      <ScrollView style = {{ paddingHorizontal: "10%", paddingTop: 10}}>
        <View style={styles.container, {backgroundColor: "white"}}>
            <TouchableOpacity 
              style={styles.menu, {alignContent: 'center', padding: 30, borderColor: "orange", borderWidth: 10}}
              onPress={() => navigation.navigate('RandomGenerator')}>
              <Text style = {styles.menuText}>
                Random Nail Color Generator
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container, {backgroundColor: "white"}}>
            <TouchableOpacity style={styles.menu, {alignContent: 'center', padding: 30, borderColor: "orangered", borderWidth: 10}}>
            <Text style = {styles.menuText}>
                Mood Generator
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container, {backgroundColor: "white"}}>
            <TouchableOpacity style={styles.menu, {alignContent: 'center', padding: 30, borderColor: "orange", borderWidth: 10}}>
              <Text style = {styles.menuText}>
                Color Match
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container, {backgroundColor: "white"}}>
            <TouchableOpacity style={styles.menu, {alignContent: 'center', padding: 30, borderColor: "orangered", borderWidth: 10}}
            onPress={() => navigation.navigate('AllColors')}>
              <Text style = {styles.menuText}>
              All Nail Colors
              </Text>
            </TouchableOpacity>
        </View>

        <View style={styles.container, {backgroundColor: "white"}}>
            <TouchableOpacity style={styles.menu, {alignContent: 'center', padding: 30, borderColor: "orange", borderWidth: 10}}>
              <Text style = {styles.menuText}>
                Saved Palletes
              </Text>
            </TouchableOpacity>
        </View>

      </ScrollView>
    
      
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flexDirection: "column",
    
    
    
  },
  menuText: {
    fontSize: 20,
    textAlign: "center",
    color: "orangered",
    fontFamily: "Futura",
    

  },
  button: {
    backgroundColor:'#1E6738',
  },

  menu: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    
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
 
  
});
