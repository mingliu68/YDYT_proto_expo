import React, { useState, useEffect, useCallback, createContext } from 'react';
import { Platform, Dimensions, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button, TextInput, FlatList, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { VisitorContext } from '../context/Contexts'
import VisitorForm from '../components/VisitorForm'
import * as MailComposer from 'expo-mail-composer';
import PDFHelper from '../helper/PDFHelper';
import VisitorForms from '../forms/VisitorForms'


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
    const [receiver, setReceiver] = useState({ name: null, email: [] })
    const [sentAlert, setSentAlert] = useState(false)

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

    useEffect(() => {
        setTimeout(() => {
            setSentAlert(false)
        }, 1000)
    }, [sentAlert])

    const sendEmail = useCallback(async (email, subject, body, attachment) => {
        const isAvailable = await MailComposer.isAvailableAsync();
        if (!isAvailable) {
            Alert.alert('Email Error', 'Email is not available\nMake sure your email client is setup.', [{ text: 'OK', style: 'cancel' }])
        } else {
            const pdfHTML = await VisitorForms.communicationPlan(attachment)
            const pdfForm = await PDFHelper.CreatePDF(pdfHTML);
            console.log(email, subject, body, pdfForm)
            const status = await MailComposer.composeAsync({
                recipients: [email],
                subject, subject,
                body: body,
                attachments: [pdfForm.uri]
            })
            console.log(status)
            {
                Platform.OS === 'ios' && status.status === 'sent'
                    ? setSentAlert(true)
                    : null
            }
        }
    })

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
                {
                    receiver.email.length > 0
                        ? <Text>Send this form to {receiver.name} at {receiver.email}</Text>

                        : null
                }
                <TouchableOpacity
                    onPress={() => setContactModal(true)}
                >
                    <Text>Get Contacts</Text>
                </TouchableOpacity>
                {
                    receiver.email.length > 0
                        ? <TouchableOpacity
                            onPress={() => sendEmail(
                                receiver.email,
                                "test subject",
                                'test body',
                                {
                                    name: firstname + " " + lastname,
                                    phone: phone,
                                    workphone: phoneWork,
                                    email: email
                                }
                            )}
                        >
                            <Text>Send Form</Text>
                        </TouchableOpacity>
                        : null
                }
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
            <View style={[
                styles.sentAlert,
                sentAlert
                    ? styles.sentAlertOpen
                    : styles.sentAlertClosed
            ]}>
                <Text>Email Sent</Text>
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
    },
    sentAlert: {
        position: 'absolute',
        padding: 30,
        width: screenWidth - 10,
        left: 5,
        height: 200,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "#999",
        zIndex: 5
    },
    sentAlertOpen: {
        bottom: 0,
    },
    sentAlertClosed: {
        bottom: screenHeight,
    }

})