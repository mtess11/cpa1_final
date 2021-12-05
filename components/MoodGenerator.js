import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button, SafeAreaView, TextInput} from 'react-native';
import { Card } from 'react-native-paper';

export default function MoodGenerator() {
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
      {/* <Text style = {{fontWeight: 'bold', color: 'pink', fontSize: 30}}> Choose your brand: </Text> */}
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
        <View style={(styles.menu, {borderRadius:'20'})}>

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
    flex: 1
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
  }, 
  
});
