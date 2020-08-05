import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { VisitorComPlanContext } from "../../context/Contexts"

const CommunicationPlan = (props) => {

    const {
        firstname,
        setFirstname,
        lastname,
        setLastname,
        email,
        setEmail,
        phone,
        setPhone,
        workPhone,
        setWorkPhone,
        members,
        setMembers,
        comChannel,
        setComChannel,
        comTime,
        setComTime,
        comFrequency,
        setComFrequency,
        nextCheckInDate,
        setNextCheckInDate
    } = useContext(VisitorComPlanContext);

    return (
        <ScrollView>
            {/* <Text>Communication Plan</Text> */}
            <View
                style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between' }}
            >
                <TextInput
                    style={[styles.inputField, { width: "48%" }]}
                    placeholder="firstname"
                    value={firstname}
                    onChangeText={setFirstname}

                />
                <TextInput
                    style={[styles.inputField, { width: "48%" }]}
                    placeholder="lastname"
                    value={lastname}
                    onChangeText={setLastname}
                />
            </View>

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
        </ScrollView>
    )
}

export default CommunicationPlan;

const styles = StyleSheet.create({
    inputField: {
        padding: 15,
        backgroundColor: "#eeeeee",
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18
    },
})