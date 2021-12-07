import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button, SafeAreaView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';

export default function RandomGenerator() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [brand, pickBrand] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    return `#${randomColor}`;
  };

  const bg = generateColor();

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: bg }}>
      {/* <Text style = {{fontWeight: 'bold', color: 'pink', fontSize: 30}}> Choose your brand: </Text> */}
      <SafeAreaView>
        <View style={(styles.menu, { borderRadius: '20', backgroundColor: 'black' })}>
          <TouchableOpacity
            onPress={() => Clipboard.setString(bg)}
              >
            <Text
              style={{ color: "white", fontSize: 32, fontFamily: "Futura" }}
            > HEX: {bg} </Text>
            <Text style={{ color: 'white', fontFamily: 'Futura', textAlign: 'center' }}> Copy </Text>

          </TouchableOpacity>
        </View>
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
