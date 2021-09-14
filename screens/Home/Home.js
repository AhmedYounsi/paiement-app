import React from "react";
import { Button, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaiementSMS from "../Paiement/PaiementSMS";
import Paiement from "../Paiement/Paiement";
import PaiementMail from "../Paiement/PaiementMail";
import PaiementCB from "../Paiement/PaiementCB";

function Home() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {  height: 40 },
    
    }}
    >
      <Stack.Screen
         
        name="Paiement"
        component={Paiement}
        options={{ headerShown: false,
 
        }}
      />
      <Stack.Screen options={{ title:"Paiement par SMS" }} name="PaiementparSMS" component={PaiementSMS} />
      <Stack.Screen  options={{ title:"Paiement par Mail" }}  name="Paiementpare-mail" component={PaiementMail} />
      <Stack.Screen  options={{ title:"Paiement par CB" }}  name="PaiementparCB" component={PaiementCB} />
    </Stack.Navigator>
  );
}

export default Home;
