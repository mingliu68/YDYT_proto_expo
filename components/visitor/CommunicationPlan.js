import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";

const CommunicationPlan = (props) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [workPhone, setWorkPhone] = useState('')
    // array of objects of members (name, role, phone, email)
    const [members, setMembers] = useState([])
    const [comChannel, setComChannel] = useState(null)
    const [comTime, setComTime] = useState(null)
    const [comFrequency, setComFrequency] = useState(null)
    // array of next check in dates
    const [nextCheckInDate, setNextCheckInDate] = useState([])

    return (
        <View>
            <Text>Communication Plan</Text>
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
                value={workPhone}
                onChangeText={setWorkPhone}
            />
        </View>
    )
}

export default CommunicationPlan;

const styles = StyleSheet.create({
    inputField: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18
    },
})