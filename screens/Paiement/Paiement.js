import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function Paiement(props) {
  const [Montant, setMontant] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Entrer le montant à payer"
        placeholderTextColor="#737373"
        value={Montant}
        style={styles.input}
        onChangeText={(text) => setMontant(text)}
      />
      <View style={styles.numbers}>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text style={styles.num}>1</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>2</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>3</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>+</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text style={styles.num}>4</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>5</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>6</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>/</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text style={styles.num}>7</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>8</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>9</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>-</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text style={styles.num}>,</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>0</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>/</Text>
          </View>
          <View style={styles.btn_num}>
            <Text style={styles.num}>X</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num_}>
            <Text style={styles.num}>=</Text>
          </View>
        </View>
      </View>
      <Text style={styles.textRegister}> ────── Moyens de paiement ──────</Text>
      <View style={styles.paiement_mode}>
        <TouchableOpacity
          style={styles.icon_content}
          onPress={() => props.navigation.navigate("PaiementparSMS")}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../../assets/sms-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon_content}
          onPress={() => props.navigation.navigate("Paiementpare-mail")}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../../assets/mail-icon.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icon_content}
          onPress={() => props.navigation.navigate("PaiementparCB")}
        >
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require("../../assets/credit-card.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Paiement;
const styles = StyleSheet.create({
  icon_content: {
    borderWidth: 2,
    borderColor: "#cccccc",
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  icon: {
    width: 70,
    height: 70,
  },
  paiement_mode: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    maxWidth: 400,
  },
  textRegister: {
    marginVertical: 20,
    fontWeight: "500",
  },
  num: {
    fontWeight: "800",
    color: "#5f5f5f",
    fontSize: 17,
  },
  numbers: {
    width: "80%",
    marginHorizontal: "auto",
    maxWidth: 300,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  btn_num: {
    backgroundColor: "#e4e4e4",
    fontSize: 20,
    fontWeight: "800",
    margin: 5,
    width: 50,
    height: 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    color: "#7d7d7d",
  },
  btn_num_: {
    backgroundColor: "#e4e4e4",
    fontSize: 20,
    fontWeight: "800",
    margin: 5,
    width: 50,
    height: 50,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    borderRadius: 10,
    color: "#7d7d7d",
    width: 235,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    marginVertical: 20,
    marginHorizontal: "auto",
    height: 40,
    width: "80%",
    textAlign: "center",
    maxWidth: 300,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#d0d0d0",
  },
});
