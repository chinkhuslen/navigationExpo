import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import FlatListView from "./components/flatlist";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FlatListView from "./components/flatlist";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FlatListView />
    </SafeAreaView>
  );
}
function ContactScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Screen</Text>
      <Button
        title="Go to Contact... again"
        onPress={() => navigation.push("Contact")}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          return <Ionicons name="add" size={24} color="black" />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Button onPress={() => alert("STFU!")} title="LOL" color="black" />
          ),
          headerTitle: (props) => <Text>HOMIE</Text>,
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="black"
            />
          ),
        }}
      />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Button
                onPress={() => alert("STFU!")}
                title="LOL"
                color="black"
              />
            ),
            headerTitle: (props) => <Text>HOMIE</Text>,
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="black"
              />
            ),
          }}
        />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator> */}
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Contact" component={ContactScreen} />
      </Drawer.Navigator> */}
      {/* <MyTabs /> */}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  itemImg: {
    width: 100,
    height: 100,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
});

export default App;
