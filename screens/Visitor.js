import React, { useState, useEffect, useCallback, createContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';

const VisitorContext = React.createContext()

const Visitor = ({ route, navigation }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneWork, setPhoneWork] = useState("")
    const [contactEmail, setContactEmail] = useState([])

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails]
                });
                if (data.length > 0) {
                    const emailData = data.filter(item => item.emails)

                    // console.log(data)
                    setContactEmail(emailData)
                }
            }
        })();
    }, [])

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

                <FlatList
                    data={contactEmail}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <View style={{ backgroundColor: "#ccc", padding: 10, marginBottom: 10 }}>
                            <Text>{item.firstName} {item.lastName}</Text>
                            {
                                item.emails
                                    ? item.emails.map((email) => (
                                        <Text key={email.id}>{email.email}</Text>
                                    ))
                                    : null
                            }
                        </View>
                    )}
                />

            </View>



        </SafeAreaView >
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