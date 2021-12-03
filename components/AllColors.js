import * as React from 'react';
import { Text, View, StyleSheet, TextInput, SectionList, Item, PropTypes} from 'react-native';
import { Card } from 'react-native-paper';
import Axios from 'axios'
import {useState, useEffect, useContext, createContext} from 'react';



export default function AllColors() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [brand, setBrand] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const { useEffect, useState } = React;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  

  useEffect(() => {
    // https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish

    Axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish").then(response => {
        console.log(response)
        const data = {}

        response.data.forEach(brand => {
            if (brand["brand"] in data){
                data[brand["brand"]] = data[brand["brand"]].concat((brand["product_colors"]))
            } else {
                data[brand["brand"]] = [].concat((brand["product_colors"]))
                // data[brand["brand"]] = [brand["product_colors"]]
                // data[brand["brand"]].push(brand["product_colors"])
                console.log(data[brand])
            }
        })
        
        console.log(data) 


        }) 

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, [])


  const Item = ({item}) => {
      const hex_value = item.hex_value;
      const color = item.colour_name;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'lavender' }}>
        <Text style = {{fontSize: 20}}> {data[0]} "also heres" </Text>
        {/* <SectionList
        
            data = {data[brand]}
            
            />

             */}

        
    </View>
  );
}

// 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  },
  
});
