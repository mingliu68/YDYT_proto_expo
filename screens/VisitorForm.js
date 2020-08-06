import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import BackButton from '../components/BackButton';
import CommunicationPlan from '../components/visitor/CommunicationPlan';
import ActionPlan from '../components/visitor/ActionPlan';
import { StatusBar } from 'expo-status-bar';
import RootFormDisplay from '../components/formDisplay/RootFormDisplay';
import { VisitorComPlanContext } from '../context/Contexts';
import { FontAwesome } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const VisitorForm = ({ route, navigation }) => {
    let { title, visitorData } = route.params

    console.log(visitorData)
    const [firstname, setFirstname] = useState(visitorData ? visitorData.firstname : "")
    const [lastname, setLastname] = useState(visitorData ? visitorData.lastname : "")
    const [email, setEmail] = useState(visitorData ? visitorData.email : "")
    const [phone, setPhone] = useState(visitorData ? visitorData.phone : "")
    const [workPhone, setWorkPhone] = useState(visitorData ? visitorData.workPhone : "")
    // array of objects of members (name, role, phone, email)
    const [members, setMembers] = useState(visitorData ? visitorData.members : [])
    const [comChannel, setComChannel] = useState(visitorData ? visitorData.comChannel : null)
    const [comTime, setComTime] = useState(visitorData ? visitorData.comTime : null)
    const [comFrequency, setComFrequency] = useState(visitorData ? visitorData.comFrequency : null)
    // array of next check in dates
    const [nextCheckInDate, setNextCheckInDate] = useState(visitorData ? visitorData.nextCheckInDate : [])

    const visitorComPlanComplex = {
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
    }

    const getForm = (form) => {
        switch (form) {
            case "Action Plan":
                return <ActionPlan />
            case "Communication Plan":
                return (
                    <VisitorComPlanContext.Provider value={visitorComPlanComplex}>
                        <CommunicationPlan />
                    </VisitorComPlanContext.Provider>
                );
            default:
                return;
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
            <StatusBar style="light" />

            <View style={styles.header}>
                <BackButton
                    color="white"
                    goBack={() => navigation.navigate("VisitorNew", { firstname, lastname, email, phone, workPhone, members, comChannel, comTime, comFrequency, nextCheckInDate })}
                    style={styles.backButton}
                />
                <TouchableOpacity style={styles.headerIcon}>
                    <FontAwesome name="paper-plane-o" size={24} color="white" />
                </TouchableOpacity>


            </View>
            <View style={styles.topContainer}>
                <Text style={styles.formContainerTitle}>{title}</Text>
                <View style={styles.formContainer}>
                    {getForm(title)}
                </View>
            </View>
            <ScrollView style={styles.bottomContainer}>
                <VisitorComPlanContext.Provider value={{ firstname, lastname, email, phone, workPhone, members, comChannel, comTime, comFrequency, nextCheckInDate }}>
                    <RootFormDisplay />
                </VisitorComPlanContext.Provider>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default VisitorForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "salmon"
    },
    topContainer: {
        backgroundColor: "purple",
        position: "absolute",
        top: 0,
        height: screenHeight * 0.45,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
    },
    formContainer: {
        position: "absolute",
        top: 140,
        backgroundColor: "white",
        width: "85%",
        height: screenHeight * 0.4,
        borderRadius: 30,
        shadowColor: "#000000",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flexDirection: "row",
        padding: 30,
        zIndex: 5,
    },
    formContainerTitle: {
        position: "absolute",
        left: screenWidth * 0.075,
        top: 105,
        zIndex: 5,
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    },
    header: {
        flexDirection: "row",
        alignContent: "center",
        width: screenWidth,
        zIndex: 5
    },
    backButton: {
        position: "absolute",
        left: 0
    },
    headerTitle: {
        position: "absolute",
        top: 41, width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    headerTitleText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white"
    },
    bottomContainer: {
        backgroundColor: "white",
        width: screenWidth,
        marginTop: screenHeight * 0.4 + 120,
        zIndex: 1,
    },
    headerIcon: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        top: 44,
        right: 20,
        width: 50,
        height: 50,
        zIndex: 5,
    }

})