import React, { useState, useEffect, useCallback } from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from "react-native";
import MapView from 'react-native-maps';
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import Card from "../components/Card";
import CardNoCover from "../components/CardNoCover";
import CloseButton from '../components/CloseButton';
import { locations } from '../server_dummy/data';

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const VisitorNew = ({ route, navigation }) => {
    console.log(route.params)
    const visitorData = route.params
        ? route.params
        : undefined


    return (
        <View style={styles.container} >
            <StatusBar style="dark" />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, }}
            // style={{ marginTop: -95 }}
            >
                <View style={styles.topContainer}>
                    <MapView
                        style={styles.mapStyle}
                        initialRegion={{
                            latitude: 42.459042,
                            longitude: -76.472015,
                            latitudeDelta: 0.8,
                            longitudeDelta: 0.8,
                        }}
                    />
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Find a location"
                        />
                        <TouchableOpacity
                            style={styles.searchIcon}
                            accessible={true}
                            accessibilityLabel="Search"
                            accessibilityRole="button"
                            onPress={() => navigation.navigate("VisitorLocationNew")}
                        >
                            <AntDesign name="search1" size={30} color="black" accessibilityLabel="Search" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <Text style={styles.cardContainerTitle}>Fill and Send a Form</Text>

                    <ScrollView
                        // contentContainerStyle={{ paddingRight: 20 }}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    // style={{ paddingLeft: 0 }}
                    >

                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('VisitorForm', { title: "Communication Plan", visitorData: visitorData })}
                                accessible={true}
                                accessibilityLabel="Communication Plan"
                            >
                                <Card
                                    title="Communication Plan"
                                    img='https://us.123rf.com/450wm/microone/microone1902/microone190200584/124965659-isometric-business-meeting-or-conference-with-info-desk-vector-illustration-conference-isometric-man.jpg?ver=6'
                                    caption="A form for all members of an IRT"
                                    subtitle="Includes contact information and create a plan for how everyone will stay updated on the job seeker's progress"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate('VisitorForm', { title: "Action Plan" })}
                                accessible={true}
                                accessibilityLabel="Action Plan"
                            >
                                <Card
                                    title="Action Plan"
                                    img='https://us.123rf.com/450wm/microone/microone1902/microone190200584/124965659-isometric-business-meeting-or-conference-with-info-desk-vector-illustration-conference-isometric-man.jpg?ver=6'
                                    caption="Keep track of what is agreed upon at a meeting"
                                    subtitle="It outlines who will be completing different tasks and a timeline"
                                />
                            </TouchableOpacity>

                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
            <View style={{ position: 'absolute', zIndex: 5 }} accessible={true} accessibilityLabel="Close">
                <CloseButton goBack={() => navigation.goBack()} color={"black"} />
            </View>
        </View>
    )
}

export default VisitorNew;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // headerContainer: {
    //     position: "absolute",
    //     top: 45,
    //     paddingHorizontal: 20,
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     zIndex: 5,
    //     height: 50,
    //     backgroundColor: "transparent"
    // },
    // headerIcon: {
    //     position: "absolute",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     top: 45,
    //     left: 20,
    //     width: 50,
    //     height: 50,
    //     zIndex: 5,
    // },
    // headerTitle: {
    //     alignItems: "center",
    //     justifyContent: "center",
    // },
    topContainer: {
        backgroundColor: "salmon",
        position: "absolute",
        top: 0,
        height: screenHeight * 0.45,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    searchContainer: {
        position: "absolute",
        bottom: -30,
        backgroundColor: "white",
        width: "80%",
        height: 60,
        borderRadius: 8,
        shadowColor: "#000000",
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        elevation: 2,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingLeft: 20,
    },
    searchInput: {
        width: "80%",
        height: "100%",
        fontSize: 18
    },
    searchIcon: {
        padding: 15,
        width: "20%",
        borderLeftColor: "#ccc",
        borderLeftWidth: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    mapStyle: {
        width: "100%",
        height: "100%"
    },
    cardContainerTitle: {
        paddingHorizontal: 20,
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 0
    },
    bottomContainer: {
        // marginBottom: 30,
        // position: "absolute",
        marginTop: screenHeight * 0.45,
        paddingTop: 60,
        paddingBottom: 30,
        flex: 1,
    },
})