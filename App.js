import axios from "axios";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import Login from "./screens/Auth/Login";
import NotLogged from "./screens/Auth/NotLogged";
import Register from "./screens/Auth/Register";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Paiement from "./screens/Paiement/Paiement";
import Profile from "./screens/Profile/Profile";
import Historique from "./screens/Historique/Historique";
import Home from "./screens/Home/Home";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function App() {
  const Drawer = createDrawerNavigator();

  const get = () => {
    axios
      .get("http://192.168.42.177:5000/")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const CustomDrawer = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.logocontainer}>
            <Image
              style={styles.tinyLogo}
              resizeMode="contain"
              source={require("./assets/logopay.png")}
            />
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.logoutcontainer}>
          <MaterialIcons name="logout" size={30} color="#f44336" />
          <Text style={styles.logouttext}>Déconnexion</Text>
        </View>
      </View>
    );
  };


   const Logged = () => {
     return (
      <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#233460", height: 50 },
          headerTintColor: "#fff",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
        initialRouteName="Home"
      >
        <Drawer.Screen
          options={{
            drawerLabelStyle:{
          
            },
            drawerActiveTintColor: "#233460",
            drawerActiveBackgroundColor: "#eaeaea",
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="payment"
                size={30}
                color={focused ? "#233460" : "#233460"}
              />
            ),
          }}
          name="Paiement"
          component={Home}
        />
        <Drawer.Screen
          options={{
            drawerActiveTintColor: "#233460",
            drawerActiveBackgroundColor: "#eaeaea",
            drawerIcon: ({ focused, size }) => (
              <Feather
                name="user"
                size={30}
                color={focused ? "#233460" : "#233460"}
              />
            ),
          }}
          name="Profile"
          component={Profile}
        />
        <Drawer.Screen
          options={{
            drawerStyle: { fontSize: 40 },
            drawerActiveTintColor: "#233460",
            drawerActiveBackgroundColor: "#eaeaea",
            drawerIcon: ({ focused, size }) => (
              <FontAwesome
                name="history"
                size={30}
                color={focused ? "#233460" : "#233460"}
              />
            ),
          }}
          name="Historique"
          component={Historique}
        />
      </Drawer.Navigator>
    </NavigationContainer>
     )
   }

  return (
    <>
     <Logged />
      {/* <NotLogged /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 240,
    height: 130,
  },
  logocontainer: {
    borderBottomWidth: 1,
    borderColor: "#dedede",
    paddingVertical: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoutcontainer: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffbcbc",
    paddingLeft: 10,
  },
  logouttext: {
    color: "#f44336",
    marginLeft: 5,
    fontFamily: "sans-serif",
    fontSize: 20,
  },
});
