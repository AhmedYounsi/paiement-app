import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  CheckBox,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { Feather } from '@expo/vector-icons'; 

function Register(props) {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Selection, setSelection] = useState(false);
  const emailInput = (text) => {
    setEmail(text);
  };
  const passwordInput = (text) => {
    setPassword(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.login_container}>
          <Image
            style={styles.tinyLogo}
            resizeMode="contain"
            source={require("../../assets/logopay.png")}
          />
          <Text style={styles.loginTitle}> Créer un compte </Text>
          <TextInput
            placeholder="Entrer votre nom"
            placeholderTextColor="#737373"
            value={Nom}
            style={styles.input}
            onChangeText={(text) => setNom(text)}
          />
          <TextInput
            placeholder="Entrer votre prenom"
            placeholderTextColor="#737373"
            value={Prenom}
            style={styles.input}
            onChangeText={(text) => setPrenom(text)}
          />
          <TextInput
            placeholder="Entrer votre mail"
            placeholderTextColor="#737373"
            value={Email}
            style={styles.input}
            onChangeText={(text) => emailInput(text)}
          />

          <TextInput
            secureTextEntry={true}
            placeholder="Entrer votre mot de passe"
            placeholderTextColor="#737373"
            value={Password}
            style={styles.input}
            onChangeText={(text) => passwordInput(text)}
          />

          <TouchableOpacity style={styles.loginScreenButton}>
            <Text adjustsFontSizeToFit={true} style={styles.loginText}>
            <Feather style={styles.registericon} name="user-plus" size={24} color="white" />
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerAuth}>
          <TouchableOpacity onPress={()=> props.to_login()}>
            <Text style={styles.footerAuthText1}>Déja inscrit ?</Text>
          </TouchableOpacity>
          <Text style={styles.footerAuthText2}>
            Développer par : SOFIAVERA{" "}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    //       <ScrollView style={styles.scroll}>
    //   <View style={styles.container}>

    //   </View>
    // </ScrollView>
  );
}

export default Register;

const styles = StyleSheet.create({
    registericon:{
     marginRight:10
    }, 
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    paddingVertical: 20,
  },
  text: {
    fontSize: 42,
  },
  scroll: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  footerAuth: {
    marginTop: 10,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  footerAuthText1: {
    fontWeight: "400",
    textDecorationLine: "underline",
    paddingLeft: 10,
  },
  footerAuthText2: {
    fontWeight: "400",
    position: "absolute",
    right: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },
  loginTitle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "900",
    color: "#404040",
  },
  tinyLogo: {
    width: 240,
    height: 140,
  },
  login_container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    width: "80%",
    maxWidth: 500,
    paddingVertical: 30,
    borderRadius: 20,
  },
  loginScreenButton: {
    display: "flex",
    justifyContent: "center",
    height: 57,
    backgroundColor: "#233460",
    borderRadius: 30,
    borderWidth: 0,
    borderColor: "#fff",
    width: 200,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },

  input: {
    width: "90%",
    maxWidth: 400,
    color: "#000000",
    marginBottom: 15,
    textAlign: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
});
