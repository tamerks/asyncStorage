import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  changeCity,  
} from '../redux/citySlice';

import {
  changeUniversity
} from '../redux/universitySlice'

import { useDispatch, useSelector } from 'react-redux';

function Input({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [routeData, setRouteData] = useState("");
  const [routeSecondData, setRouteSecondData] = useState("");

  const city = useSelector((state) => state.cityReducer.cityName);
  const university = useSelector((state) => state.universityReducer.universityName);

  const dispatch = useDispatch();

  const handleCityChange = (value) => {
    dispatch(changeCity(value));
  };
  const handleUniversityChange = (value) => {
    dispatch(changeUniversity(value));
  };

  
  const setDataAsync = async () => {
    try {
      const user = {
        Name: name,
        Surname: surname,
        Age: age
      }
      await AsyncStorage.setItem('UserData', JSON.stringify(user));
      navigation.navigate('Info', {        
        paramData: routeData,
        paramSecondData: routeSecondData
      });
    } catch (error) {
      console.warn(error);
    }
  }

  const signOut = () => {
    firebase.auth().signOut();
    AsyncStorage.clear();
  }

  return (
    <View style={styles.container} >
      <TouchableOpacity
        style={styles.button}
        onPress={() => signOut()}
      >
        <Text>
          Sign Out
        </Text>
      </TouchableOpacity>
      <View style={styles.output}>
        <TextInput
          placeholder="name"
          onChangeText={(value) => setName(value)} />
        <TextInput
          placeholder="surname"
          onChangeText={(value) => setSurname(value)} />
        <TextInput
          placeholder="age"
          onChangeText={(value) => setAge(value)}
        />
        <TextInput
          placeholder="param"
          onChangeText={(value) => setRouteData(value)}
        />
        <TextInput
          placeholder="param2"
          onChangeText={(value) => setRouteSecondData(value)}
        />
        <TextInput
          placeholder="city"
          value={city}
          onChangeText={handleCityChange}
        />  
        <TextInput
          placeholder="university"
          value={university}
          onChangeText={handleUniversityChange}
        />           
      </View>
      <TouchableOpacity
        style={styles.saveBtn}
        onPress={() => setDataAsync()}>
        <Text style={{ color: 'white', fontWeight: 'bold', alignSelf: 'center' }}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center'
  },
  output: {
    margin: 20,
    width: 250,
    alignSelf: 'center',
  },
  button: {
    width: 100,
    alignSelf: 'flex-end'
  },
  textInput: {
    borderWidth: 0.4,
    width: 200,
    height: 50,
    borderRadius: 10,
    margin: 10

  },
  saveBtn: {
    alignSelf: 'flex-end',
    marginRight: 25,
    backgroundColor: '#1eb900',
    width: 100,
    borderRadius: 10,
    opacity: 0.75
  }

})