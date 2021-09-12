import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Login from './screens/Auth/Login';
import NotLogged from './screens/Auth/NotLogged';
import Register from './screens/Auth/Register';



export default function App() {

 const get = () =>{
   axios
   .get("http://192.168.42.177:5000/")
   .then((res) => {
      console.log(res.data)
   })
   .catch((err) => {
    console.log(err)
   });
 }

  return (
    
    <>
     <NotLogged />
    </>
    // <View style={styles.container}>
     
    //   <Button onPress={() => get()} title="Login" color="#b7521b" />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
