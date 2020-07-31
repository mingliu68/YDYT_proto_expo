import React, { useState, useEffect, useCallback, createContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, TextInput } from 'react-native';

const VisitorContext = React.createContext()

const Visitor = ({ route, navigation }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneWork, setPhoneWork] = useState("")


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "transparent" }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Visitor</Text>

                <Button
                    title="Find a location"
                    onPress={() => navigation.navigate("VisitorLocation")}
                />
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



        </SafeAreaView>
    )
}

export default Visitor;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "salmon",
        borderRadius: 40,
        paddingTop: 20,
        paddingHorizontal: 20,
        bottom: 0,
        marginHorizontal: 10,
        overflow: "hidden"
    },
    inputField: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18
    },
})