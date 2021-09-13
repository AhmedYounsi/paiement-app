import React from "react";
import { Button, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PaiementSMS from "../SMS/PaiementSMS";
import Paiement from "../Paiement/Paiement";

function Home() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Paiement}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Paiement par SMS" component={PaiementSMS} />
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default Home;
