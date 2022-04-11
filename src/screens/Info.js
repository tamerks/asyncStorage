import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Info({ route }) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");

    useEffect(() => {
        getData();
    });

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        let user = JSON.parse(value);
                        setName(user.Name);
                        setSurname(user.Surname);
                        setAge(user.Age);
                    }
                })
        } catch (error) {
            console.warn(error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={name}
                placeholder='name'
                editable={false}
            />
            <TextInput
                style={styles.textInput}
                placeholder='surname'
                value={surname}
                editable={false}
            />
            <TextInput
                style={styles.textInput}
                placeholder='age'
                value={age}
                editable={false}
            />
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
    },
    textInput: {
        width: 200,
        height: 50,
        borderRadius: 10,
        margin: 10
    }
})