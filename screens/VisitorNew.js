import React from "react";
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from "react-native";
import MapView from 'react-native-maps';
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import Card from "../components/Card";

const screenHeight = Dimensions.get("window").height;
const screenWidth = Dimensions.get("window").width;

const VisitorNew = ({ route, navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={styles.topContainer}>
                    <MapView style={styles.mapStyle} />
                    <View style={styles.searchContainer}>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="Find a location"
                        />
                        <View
                            style={styles.searchIcon}
                        >
                            <AntDesign name="search1" size={30} color="black" style={{ marginTop: 5 }} />
                        </View>
                    </View>
                </View>
                <View style={styles.headerContainer}>
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityRole="button"
                        style={styles.headerIcon}
                        onPress={() => navigation.goBack()}
                    >
                        <AntDesign name="close" size={36} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.cardContainerTitle}>Fill and Send a Form</Text>

                    <ScrollView horizontal={true} style={{ paddingLeft: 20 }}>

                        <View style={{ flexDirection: "row" }}>
                            <Card
                                title="Communication Plan"
                                img='https://us.123rf.com/450wm/microone/microone1902/microone190200584/124965659-isometric-business-meeting-or-conference-with-info-desk-vector-illustration-conference-isometric-man.jpg?ver=6'
                                caption="A form for all members of an IRT"
                                subtitle="Includes contact information and create a plan for how everyone will stay updated on the job seeker's progress"
                            />
                            <Card
                                title="Action Plan"
                                img='https://us.123rf.com/450wm/microone/microone1902/microone190200584/124965659-isometric-business-meeting-or-conference-with-info-desk-vector-illustration-conference-isometric-man.jpg?ver=6'
                                caption="Keep track of what is agreed upon at a meeting"
                                subtitle="It outlines who will be completing different tasks and a timeline"
                            />
                            {/* <View style={styles.card} />
                        <View style={styles.card} /> */}
                        </View>
                    </ScrollView>
                    <ScrollView horizontal={true} style={{ paddingLeft: 20 }}>

                        <View style={{ flexDirection: "row" }}>
                            <Card
                                title="Communication Plan"
                                img='https://us.123rf.com/450wm/microone/microone1902/microone190200584/124965659-isometric-business-meeting-or-conference-with-info-desk-vector-illustration-conference-isometric-man.jpg?ver=6'
                                caption="A form for all members of an IRT"
                                subtitle="Includes contact information and create a plan for how everyone will stay updated on the job seeker's progress"
                            />
                            <Card
                                title="Action Plan"
                                img='https://us.123rf.com/450wm/microone/microone1902/microone190200584/124965659-isometric-business-meeting-or-conference-with-info-desk-vector-illustration-conference-isometric-man.jpg?ver=6'
                                caption="Keep track of what is agreed upon at a meeting"
                                subtitle="It outlines who will be completing different tasks and a timeline"
                            />
                            {/* <View style={styles.card} />
                        <View style={styles.card} /> */}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default VisitorNew;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginTop: 45,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        height: 50
    },
    headerIcon: {
        position: "absolute",
        left: 20,
        width: 50,
        height: 50
    },
    headerTitle: {
        alignItems: "center",
        justifyContent: "center",
    },
    topContainer: {
        backgroundColor: "salmon",
        position: "absolute",
        top: 0,
        height: screenHeight * 0.5,
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
        fontSize: 14
    },
    searchIcon: {
        height: "100%",
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
        paddingHorizontal: 30,
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 10
    },
    bottomContainer: {
        marginBottom: 30,
        position: "absolute",
        top: screenHeight * 0.5,
        paddingTop: 60,
        paddingBottom: 30,
        flex: 1,
        borderWidth: 1,
        borderColor: "red"
    },
})