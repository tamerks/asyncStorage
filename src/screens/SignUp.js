import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'

function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    try {
      const response = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      navigation.navigate('TabBar')
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.Input} >
        <TextInput
          label="Email"
          placeholder='E-mail'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Sign Up"
          onPress={() => createAccount()}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'flex-start',

  },

  button: {
    width: 100,
    marginTop: 10,
    marginRight: 40,
    alignSelf: 'flex-end'

  },

  Input: {
    margin: 20,
    width: 200,
    borderRadius: 10,
  }
})

export default SignUp