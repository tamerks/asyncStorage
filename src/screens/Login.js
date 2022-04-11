import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Image,
    TextInput,
    Button,
} from 'react-native'
import firebase from "firebase/compat/app";

function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            navigation.replace('TabBar');
        } catch (e) {
            alert(e.message);
        }
    };

    return (
        <View style={{ flex: 1, marginTop: 50 }}>
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={require('../images/shrek.png')}
                />
                <TextInput
                    style={styles.input}
                    label="Email"
                    placeholder="E-mail"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    label="Password"
                    placeholder="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.containerButtons}>
                <Button
                    style={styles.button}
                    title="Sign Up"
                    onPress={() => {
                        navigation.navigate('SignUp')
                    }}
                />
                <Button
                    style={styles.button}
                    title="Login"
                    onPress={() => login()}
                />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10
    },

    text: {
        fontSize: 15,
    },

    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 15
    },

    input: {
        width: 200,
        backgroundColor: 'white',
        borderColor: '#555',
        borderRadius: 5,
        borderWidth: 1,
        margin: 5,
        textAlign: 'center',
        fontSize: 20
    },

    button: {
        backgroundColor: 'gray',
        width: 100,
        borderRadius: 5,
        textAlign: 'center',
    }
})