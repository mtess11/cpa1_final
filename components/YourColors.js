import * as React from 'react';
import { render } from 'react-dom';
import { Text, View, StyleSheet, Image, StatusBar, Button, SafeAreaView, TextInput, Alert, Modal, Dimensions, useState} from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';


const { width } = Dimensions.get("window");
export default function YourColors() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [brand, pickBrand] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

const [isModalVisible, setModalVisible] = React.useState(false);
  
    // This is to manage TextInput State
const [inputValue, setInputValue] = React.useState("");
  
    // Create toggleModalVisibility function that will
    // Open and close modal upon button clicks.
const toggleModalVisibility = () => {
        setModalVisible(!isModalVisible);
    };

    var colors = [];

  const showAlert = () =>
  Alert.alert(
    "Color Successfully Added!",
    " ",
    [
      {
        text: "Done",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
    }
  );


    const DATA = []

  const Item = ({ entry }) => (
      <View>
          <Text> {entry} </Text>
      </View>
  )

  const renderItem = ({ item }) => (
    <Item title = {item.title} />
);

fetchData() {
    this.setState({ refreshing: true });
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
        .then(res => res.json())
        .then(resJson => {
            this.setState({ data: resJson });
            this.setState({ refreshing: false });
        }).catch(e => console.log(e));
}

handleRefresh = () => {
    this.setState({ refreshing: false }, () => { this.fetchData() }); // call fetchCats after setting the state
}

  

  
    return (

       
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>
        
        <SafeAreaView style={styles.screen, {flex: 1, backgroundColor: "white", width: "80%"}}>
                <StatusBar style="auto" />
    
                {/**  We are going to create a Modal with Text Input. */}
                <Button title="Add New Color" onPress={toggleModalVisibility} />
    
                {/** This is our modal component containing textinput and a button */}
                <Modal animationType="slide" 
                    transparent visible={isModalVisible} 
                    presentationStyle="overFullScreen" 
                    onRequestClose={() => { this.visibleModal(false); } }>
                    <View style={styles.viewWrapper}>
                        <View style={styles.modalView}>
                            <Text style = {{fontSize: 20}}> 
                                Add New Polish Color
                            </Text>
    
                                    <TextInput
                                        style={styles.input}
                                        
                                        pickBrand={pickBrand}
                                        value={brand}
                                        placeholder="Enter Brand Name"

                                    />

                                    <TextInput
                                        style={styles.input}
                                        onChangeText={onChangeNumber}
                                        value={number}
                                        placeholder="Enter Color Name"
                                        
                                    />
                                    

                                    <View style = {{flexDirection: 'row', padding: 10}}> 

                                    {/** This button is responsible to close the modal */}
                                    <Button title="Close" 
                                    onPress={toggleModalVisibility}

                                    color = "darkblue"
                                    />
                                    <Button title = "Save"
                                        
                                        color= "darkblue"
                                        onPress={toggleModalVisibility}
                                        />

                                    </View>
                        </View>
                    </View>
                </Modal>

                <FlatList
                    data = {DATA}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id}
                />

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
    width: '200',
    height: '30',
    
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
},
viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",

},
modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, 
        { translateY: -90 }],
    height: 220,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  input: {
    height: 40,
    margin: 12,
    
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'lightgrey'
  }, 
  
});
