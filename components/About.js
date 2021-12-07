import * as React from 'react';
import { Text, SafeAreaView, StyleSheet} from 'react-native';

export default function About({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <Text style = {(styles.aboutDescription, {margin: 20, flex:-1, textAlign: 'center'})}>
          This is app will be designed to generate a HEXh color
          suggestion for the user by randomly suggesting colors visually and letting 
          the use copy the HEX# and save it for reference.
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
  