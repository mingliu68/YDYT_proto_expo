import React, { useState, useEffect, useCallback, useContext } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { VisitorComPlanContext } from "../../context/Contexts"

const screenWidth = Dimensions.get("window").width;
const RootFormDisplay = (props) => {
    const {
        firstname,
        lastname,
        email,
        phone,
        workPhone,
        members,
        comChannel,
        comTime,
        comFrequency,
        nextCheckInDate,
    } = useContext(VisitorComPlanContext);

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
            <View
                style={{ flexDirection: "row", flexWrap: "wrap", borderWidth: 0.5, borderColor: "#999999", width: 1000 }}
            >
                <View style={{ backgroundColor: "#cccccc", padding: 10, width: "100%", borderWidth: 0.5, borderColor: "#999999" }}><Text style={{ fontWeight: "bold" }}>JOB SEEKER</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Name</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Phone Number</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Work Phone</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Email</Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{firstname} {lastname}</Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{phone}</Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{workPhone}</Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{email}</Text></View>
                <View style={{ backgroundColor: "#cccccc", padding: 10, width: "100%", borderWidth: 0.5, borderColor: "#999999" }}><Text style={{ fontWeight: "bold" }}>IRT MEMBERS</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Name</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Role</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Phone Number</Text></View>
                <View style={{ backgroundColor: "#eeeeee", padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>Email</Text></View>
                {
                    members.length == 0
                        ? <>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                            <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>

                        </>
                        :
                        members.map(member => (
                            <>
                                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{member.name}</Text></View>
                                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{member.role}</Text></View>
                                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{member.phone}</Text></View>
                                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text>{member.email}</Text></View>
                            </>
                        ))
                }
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>
                <View style={{ padding: 10, width: "25%", borderWidth: 0.5, borderColor: "#999999" }}><Text></Text></View>


            </View>


        </ScrollView>
    )
}

export default RootFormDisplay;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        minHeight: 300,

    }
})