import * as React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.essie}>
        nail polish
      </Text>

      <Text style={styles.subtitle}>
        Random Color Picker
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: 'blue',
  },

  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  essie: {
    margin: 24,
    color: 'white',
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: '100',
    width: '300',
  }
});