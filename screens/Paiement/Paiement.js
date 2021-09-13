import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

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
            <Text>1</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>2</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>3</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>+</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text>4</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>5</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>6</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>/</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text>7</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>8</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>9</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>X</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.btn_num}>
            <Text>,</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>0</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>/</Text>
          </View>
          <View style={styles.btn_num}>
            <Text>X</Text>
          </View>
        </View>
      </View>
      <View>
        <Text>Mode de paiement</Text>
      </View>
      <Button
        onPress={() => props.navigation.navigate('Paiement par SMS')}
        title="Paiement par SMS"
      />
    </View>
  );
}

export default Paiement;
const styles = StyleSheet.create({
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
