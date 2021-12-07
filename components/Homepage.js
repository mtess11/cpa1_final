import * as React from 'react';
import { Text, View, StyleSheet, Image, StatusBar, Button, TextInput, useState, useEffect, useContext, createContext} from 'react-native';
import {useValue} from './ValueContext';



export default function Homepage({navigation})  {

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [user, setUser] = React.useState();
  const { useEffect, useState } = React;

  const [eAdd,setEAdd] = useState("");
  const  {currentValue,setCurrentValue} = useValue

//   const Login = () => {
    
//     return(
//        <View>
//           <TextInput
//                placeholder="What's your email address? "
//                value={currentValue.email}
//                onChangeText={text =>{
 
//                   setCurrentValue(
//                      {name:currentValue.name,
//                       email:text})
//                    }}
//           />
//           <Text style={{fontSize:50}}>
//             your email is: {eAdd}
//           </Text>
//        </View>
//     )
//  }

  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     const foundUser = JSON.parse(loggedInUser);
  //     setUser(foundUser);
  //   }
  // }, []);

  // logout the user
  // const handleLogout = () => {
  //   setUser({});
  //   setUsername("");
  //   setPassword("");
  //   localStorage.clear();
  // };

  // // login the user
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   const user = { username, password };
  //   // send the username and password to the server
  //   const response = await axios.post(
  //     "/api/login",
  //     user
  //   );
  //   // set the state of the user
  //   setUser(response.data);
  //   // store the user in localStorage
  //   localStorage.setItem("user", JSON.stringify(response.data));
  // };

  // if there's a user show the message below
  // if (user) {
  //   return (
  //     <div>
  //       {user.name} is loggged in
  //       <button onClick={handleLogout}>logout</button>
  //     </div>
  //   );
  // }


  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'lightblue'}}>
      {/* <Text style = {homeStyles.aboutTitle}>Home Screen</Text> */}
      <View style={homeStyles.container}>

      <StatusBar style="auto" />
      <Image
        style={homeStyles.circle}
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/02/19/15/34/orange-1210522_1280.png',
        }}
      />
      <View >
        
        <View style={(homeStyles.menu, {borderRadius: 20, backgroundColor: 'white'})}>
          <Text style={homeStyles.title}>
            pic-a-color
          </Text>

          <Text style={homeStyles.subtitle}>
            Your Personal Color Picker
          </Text>

          

          {/* <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          value={username}
          placeholder="enter a username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <div>
          <label htmlFor="password">password: </label>
          <input
            type="password"
            value={password}
            placeholder="enter a password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div> */}

    {/* <View>
         <TextInput
              placeholder="What's your email address? "
              value={username}
              onChangeText={(username) => setUsername(username)}
         />
         <Text style={{fontSize:50}}>
           your email is: {eAdd}
         </Text>
      </View> */}
    
          

          <TextInput
              style={homeStyles.input}
              onChangeText={(username) => setUsername(username)}
              value={username}
              placeholder="Username"

            />

            <TextInput
              style={homeStyles.input}
              secureTextEntry={true}
              placeholder="Password"
              secureTextEntry = {true}
              onChangeText={(password) => setPassword(password)}
              

            />
          
          <Button style={(homeStyles.button, {borderRadius: 20, fontFamily: 'Avenir Next'})}
            title="Log In"
            onPress={() =>
              navigation.navigate('Menu')
            }
            type = "submit"
            color='darkblue'
            alignItems='center'
            backgroundColor='#fff'
          />

      
        </View>
      
      </View>
      
     </View>

     <View style={{bottom: 25, backgroundColor: 'C4F5FC', alignSelf: 'stretch', backgroundColor: 'white'}}>
        <Button
        title="About"
        onPress={() =>
          navigation.navigate('About')}
        color='navy'
         />
      </View>
    </View>
  );
}

const homeStyles = StyleSheet.create ({

  circle: {
    resizeMode: "contain",
    height: 150,
    width: 150,
    margin: 40,
    
  }, 
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    
  }, 
  subtitle: {
    margin: 20,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    fontStyle: 'italic',
    
  }, 
  aboutTitle: {
    fontSize: 24,

  }, menu: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    color: 'orangered',
    marginTop: 0,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Avenir Next',
  },
  button: {
    backgroundColor:'#1E6738',
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