import * as React from 'react';
import { render } from 'react-dom';
import { Text, View, StyleSheet, Image, StatusBar, Button, SafeAreaView, TextInput, Alert, Modal, Dimensions, useState } from 'react-native';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width } = Dimensions.get("window");

export default function YourColors() {
  const [brand, pickBrand] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [state, setState] = React.useState("")
  const [isModalVisible, setModalVisible] = React.useState(false);

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
    setModalVisible(!isModalVisible);
  };


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


  const [HEX_Color, setHEX_Color] = React.useState("")
  const [comment, setComment] = React.useState("")
  const [pomodoros, setPomodoros] = React.useState([])

  // this loads in the data after the app has been rendered
  React.useEffect(() => { getData() }
    , [])

  const getData = async () => {
    try {
      // the '@profile_info' can be any string
      const jsonValue = await AsyncStorage.getItem('@pomodoros')
      let data = null
      if (jsonValue != null) {
        data = JSON.parse(jsonValue)
        setPomodoros(data)
        console.log('just set Info, Name and Email')
      } else {
        console.log('just read a null value from Storage')
        // this happens the first time the app is loaded
        // as there is nothing in storage...
        setPomodoros([])
        setHEX_Color("")
        setComment("")

      }
    } catch (e) {
      console.log("error in getData ")
      // this shouldn't happen, but its good practice
      // to check for errors!
      console.dir(e)
      // error reading value
    }
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@pomodoros', jsonValue)
      console.log('just stored ' + jsonValue)
    } catch (e) {
      console.log("error in storeData ")
      console.dir(e)
      // saving error
    }
  }

  const clearAll = async () => {
    try {
      console.log('in clearData')
      await AsyncStorage.clear()
    } catch (e) {
      console.log("error in clearData ")
      console.dir(e)
      // clear error
    }
  }


  // Each Pomorodo in the FlatList will be rendered as follows:
  const renderPomodoro = ({ item }) => {
    return (
      <View style={{ backgroundColor: item.HEX_Color, flexDirection: "row", alignContent: 'center', paddingVertical: 20 }}>
        <Text style={{ flex: 1, fontFamily: "Futura" }}>{item.HEX_Color}</Text>

        <Text style={{ flex: 2, fontFamily: "Futura" }}>{item.comment} </Text>
        {/* <Text>{item.result} </Text> */}
      </View>
    )
  }

  return (


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue' }}>


      <SafeAreaView style={(styles.screen, { flex: 1, backgroundColor: "white", width: "100%" })}>
        <StatusBar style="auto" />

        {/**  We are going to create a Modal with Text Input. */}
        <Button title="Add New Color" onPress={toggleModalVisibility} style={{ fontFamily: 'Futura' }} />
        <FlatList

          data={pomodoros.reverse()}
          renderItem={renderPomodoro}
          keyExtractor={item => item.HEX_Color}
          style={{ flex: 1, backgroundColor: "white", width: "100%" }}

        />


        <Button
          title={"Clear"}
          color="red"

          onPress={() => {
            clearAll()
            setPomodoros([])
          }} />


        {/** This is our modal component containing textinput and a button */}
        <Modal animationType="slide"
          transparent visible={isModalVisible}
          presentationStyle="overFullScreen"
          onRequestClose={() => { this.visibleModal(false); }}>
          <View style={styles.viewWrapper}>
            <View style={styles.modalView}>
              <Text style={{ fontSize: 20, fontFamily: 'Futura' }}>
                Add New HEX Color
              </Text>

              <TextInput
                style={styles.input}

                onChangeText={text => {
                  setHEX_Color(text);
                }}
                value={HEX_Color}
                placeholder="Enter HEX"

              />

              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setComment(text);
                }}
                value={comment}
                placeholder="Comments"


              />

              <View style={{ flexDirection: 'row', padding: 10 }}>

                {/** This button is responsible to close the modal */}
                <Button title="Close"
                  onPress={toggleModalVisibility}

                  color="darkblue"
                />
                <Button title="Save"
                  style={{ fontFamily: 'Avenir Next' }}
                  color="darkblue"
                  onPress={toggleModalVisibility, () => {
                    const newPomodoros =
                      pomodoros.concat(
                        {
                          'HEX_Color': HEX_Color,
                          'comment': comment,
                          'completed': new Date()
                        })
                    setPomodoros(newPomodoros)
                    storeData(newPomodoros)
                    setHEX_Color("")
                    setComment("")
                  }}

                />

              </View>
            </View>
          </View>

        </Modal>
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
    fontWeight: 'normal',
    fontFamily: 'Avenir Next',
    textAlign: 'center',
    color: 'black'
  },

});
