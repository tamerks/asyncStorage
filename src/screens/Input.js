import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Input({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState(""); 
 
  const setDataAsync = async () => {
    try {
      var user = {
        Name: name,
        Surname: surname,
        Age: age
      }
      await AsyncStorage.setItem('UserData', JSON.stringify(user));
      navigation.navigate('Info',{
        paramName: name,
        paramSurname: surname,
        paramAge: age
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