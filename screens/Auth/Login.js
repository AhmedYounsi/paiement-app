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
} from "react-native";

function Login() {
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
    <View style={styles.container}>
      <View style={styles.login_container}>
        <Image
          style={styles.tinyLogo}
          resizeMode="contain"
          source={require("../../assets/logopay.png")}
        />
        <Text style={styles.loginTitle}> connectez vous </Text>
        <TextInput
          placeholder="enter votre identifiant"
          placeholderTextColor="#737373"
          value={Email}
          style={styles.input}
          onChangeText={(text) => emailInput(text)}
        />
        <TextInput
        secureTextEntry={true} 
          placeholder="enter votre mot de passe"
          placeholderTextColor="#737373"
          value={Password}
          style={styles.input}
          onChangeText={(text) => passwordInput(text)}
        />

        <View style={styles.checkboxContainer}>
        <Text style={styles.label}>Se souvenir de moi ?</Text>
          <CheckBox
            value={Selection}
            onValueChange={setSelection}
            style={styles.checkbox}
            tintColors={{ true: '#233460' }}
          />
         
        </View>

        <TouchableOpacity style={styles.loginScreenButton}>
          <Text adjustsFontSizeToFit={true} style={styles.loginText}>
            Continuer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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
    fontWeight: "500",
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
textAlign:'center',
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    textAlign: "center",
  },
});
