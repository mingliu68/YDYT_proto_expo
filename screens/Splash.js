import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const Splash = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleText}>YDYT COMPANION APP</Text>
            <Text style={styles.text}>Provided for you by Tompkins County NY</Text>
        </SafeAreaView>
    )
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18
    },
    text: {
        fontSize: 14
    }
})