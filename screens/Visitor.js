import React, { useState, useEffect, useCallback, createContext } from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, TextInput, FlatList } from 'react-native';
import * as Contacts from 'expo-contacts';
import { VisitorContext } from '../context/Contexts'
import VisitorForm from '../components/VisitorForm'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const Visitor = ({ route, navigation }) => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [phoneWork, setPhoneWork] = useState("")
    const [contactEmail, setContactEmail] = useState([])
    const [contactModal, setContactModal] = useState(false)
    const [receiver, setReceiver] = useState({ name: null, email: null })

    const visitorContext = {
        firstname: firstname,
        setFirstname: setFirstname,
        lastname: lastname,
        setLastname: setLastname,
        email: email,
        setEmail: setEmail,
        phone: phone,
        setPhone: setPhone,
        phoneWork: phoneWork,
        setPhoneWork: setPhoneWork,
    }

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Emails]
                });
                if (data.length > 0) {
                    const emailData = data.filter(item => item.emails)
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
                <VisitorContext.Provider value={visitorContext}>
                    <VisitorForm />
                </VisitorContext.Provider>
                <Text>Send this form to {receiver.name} at {receiver.email}</Text>
                <TouchableOpacity
                    onPress={() => setContactModal(true)}
                >
                    <Text>Get Contacts</Text>
                </TouchableOpacity>
            </View>
            <View style={[
                styles.contactModal,
                contactModal
                    ? styles.contactModalOpen
                    : styles.contactModalClosed
            ]}>
                <FlatList
                    data={contactEmail}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={{ backgroundColor: "#888888", padding: 10, marginBottom: 10, borderRadius: 10 }}
                            onPress={() => {
                                setReceiver({ name: item.firstName + " " + item.lastName, email: item.emails[0].email })
                                setContactModal(false)
                            }}
                        >
                            <Text style={{ color: "white" }}>{item.firstName} {item.lastName}</Text>
                            {
                                item.emails
                                    ? item.emails.map((email) => (
                                        <Text style={{ color: "white" }} key={email.id}>{email.email}</Text>
                                    ))
                                    : null
                            }
                        </TouchableOpacity>
                    )}
                />
                <TouchableOpacity
                    onPress={() => setContactModal(false)}
                >
                    <Text>Back</Text>
                </TouchableOpacity>
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
    contactModal: {
        position: 'absolute',
        padding: 30,
        width: screenWidth - 10,
        left: 5,
        height: screenHeight - 80,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#999",
        zIndex: 5
    },
    contactModalClosed: {
        bottom: screenHeight
    },
    contactModalOpen: {
        bottom: 0
    }
})