import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, StatusBar, Button} from 'react-native';

export default function About({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style = {(styles.aboutDescription, {margin: 20, flex:-1, textAlign: 'center'})}>
          This is app will be designed to generate a nail polish color
          suggestion for the user by referencing a .JSON file that contains
          a list of nail polish colors by brand.
        </Text>

        <Text style = {(styles.aboutFooter, {flex: -1})}>
          <Text style = {{fontWeight: "bold"}}>
            Author: 
          </Text>
          {' '} Mariya Teslya
        </Text>

        <Text style = {(styles.aboutFooter, {flex: -1})}>
          <Text style = {{fontWeight: "bold"}}>
            COSI 153: 
          </Text>
          {' '} Mobile App Development
        </Text>

        <Text style = {(styles.aboutTitle, {flex:-1, fontWeight: "bold"})}>
          Fall 2021 
        </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
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
    
  });
  