import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useSelector, useDispatch } from 'react-redux';
import store from '../redux/config/store';

function Info({ route }) {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [age, setAge] = useState("");   
    
    const {paramData} = route.params;
    const {paramSecondData} = route.params;

    const city = (useSelector((state) => state.cityReducer.cityName));
    const university = (useSelector((state) => state.universityReducer.universityName));

 
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
            {paramData && paramSecondData?(<><Text> {JSON.stringify(paramData)} </Text>
            <Text> {JSON.stringify(paramSecondData)} </Text></>):<Text>no data</Text>}

            <Text>{city}</Text>
            <Text> {university} </Text>
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