import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { VisitorContext } from '../context/Contexts'

const VisitorForm = (props) => {
    const {
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        phone,
        setPhone,
        phoneWork,
        setPhoneWork,
    } = useContext(VisitorContext);

    return (
        <View>
            <TextInput
                style={styles.inputField}
                placeholder="firstname"
                value={firstname}
                onChangeText={setFirstname}
            />
            <TextInput
                style={styles.inputField}
                placeholder="lastname"
                value={lastname}
                onChangeText={setLastname}
            />
            <TextInput
                style={styles.inputField}
                placeholder="email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.inputField}
                placeholder="phone number"
                value={phone}
                onChangeText={setPhone}
            />
            <TextInput
                style={styles.inputField}
                placeholder="work phone number"
                value={phoneWork}
                onChangeText={setPhoneWork}
            />
        </View>
    )
}

export default VisitorForm;

const styles = StyleSheet.create({
    inputField: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18
    },
})