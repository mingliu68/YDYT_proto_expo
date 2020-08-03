import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import MapView from 'react-native-maps'

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const VisitorLocation = ({ route, navigation }) => {


    return (
        <SafeAreaView style={{ flex: 1, backgroundcolor: "transparent" }}>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >

                    <Text>Back</Text>
                </TouchableOpacity>
                <Text>Visitor Location Search</Text>
                <View
                    style={styles.mapContainer}
                >

                    <MapView style={styles.mapStyle} />
                    <View
                        style={{ position: "absolute", top: 10, justifyContent: "center", alignItems: "center" }}
                    >
                        <TextInput
                            style={{ width: screenWidth * .8, padding: 15, backgroundColor: "white", borderRadius: 10 }}
                        />
                    </View>
                    <View
                        style={{ position: "absolute", bottom: 0, backgroundColor: "white", padding: 15, width: "100%", height: 200, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}
                    >

                    </View>



                </View>
            </View>


        </SafeAreaView>
    )
}

export default VisitorLocation;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "pink",
        borderRadius: 40,
        paddingTop: 20,
        paddingHorizontal: 20,
        bottom: 0,
        marginHorizontal: 10,
        overflow: "hidden"
    },
    mapContainer: {
        position: "absolute",
        width: screenWidth - 20,
        top: 70,
        height: screenHeight - 148,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapStyle: {
        // width: screenWidth,
        width: "100%",
        height: "100%",
    },
})