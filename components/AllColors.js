import * as React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useValue } from './ValueContext';

export default function AllColors() {

  const [text, onChangeText] = React.useState("Useless Text");
  const [brand, setBrand] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const { useEffect, useState } = React;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const { currentValue } = useValue();
  const DATA = currentValue;



  // useEffect(() => {
  //   // https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish

  //   Axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish").then(response => {
  //     console.log(response)
  //     const data = {}

  //     response.data.forEach(brand => {
  //       if (brand["brand"] == "undefined") {
  //         pass
  //       }
  //       else if (brand["brand"] in data) {
  //         data[brand["brand"]] = data[brand["brand"]].concat((brand["product_colors"])).filter(function (e) { return e != null; });
  //       } else {
  //         data[brand["brand"]] = [].concat((brand["product_colors"])).filter(function (e) { return e != null; });

  //         // console.log(data[brand])
  //       }
  //     })

  //     console.log(data)

  //   })

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, [])

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  var bg = generateColor();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lavender' }}>


      <View style={styles.container}>
        <FlatList
          style={{ width: "100%", height: '100%'}}
          data={DATA}
          renderItem={({ item }) => (
            <View style={[styles.item, { backgroundColor: bg = generateColor(), width: '100%' , flex:1}]}>
              
              <Text style={styles.title}>
                {bg}
                {item.backgroundColor}
              </Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',

  }, circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Futura',
  },


});
