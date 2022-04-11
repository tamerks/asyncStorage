import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


import SignUp from './src/screens/SignUp'
import Input from './src/screens/Input'
import Login from './src/screens/Login';
import Google from './src/screens/Google';
import Info from './src/screens/Info';

const firebaseConfig = {
  apiKey: "AIzaSyBz0GW45-m1s2cdHDdQaJGAuj53n1SXpQM",
  authDomain: "fir-7e987.firebaseapp.com",
  projectId: "fir-7e987",
  storageBucket: "fir-7e987.appspot.com",
  messagingSenderId: "99773478579",
  appId: "1:99773478579:web:4fc5175a1eeb014ce4a2c6",
  measurementId: "G-HB402JR7C5"
};

firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabBar({ navigation }) {

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        navigation.navigate("Login");
      }
    })
  }, []);
  return (

    <Tab.Navigator
      initialRouteName='Input'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name == 'Input') {
            iconName = 'opera';
          } else if (route.name == 'Info') {
            iconName = 'info';
          } else if (route.name == 'Google') {
            iconName = 'google';
          }
          return (
            <FontAwesome5
              name={iconName} />
          )
        }
      })} >
      <Tab.Screen name="Input" component={Input} />
      <Tab.Screen name="Info" component={Info} />
      <Tab.Screen name="Google" component={Google} />
    </Tab.Navigator>

  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Navigator>
    </NavigationContainer>
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
