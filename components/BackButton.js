import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

const BackButton = (props) => {
    return (
        <TouchableOpacity
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityRole="button"
            style={styles.headerIcon}
            onPress={props.goBack}
        >
            <AntDesign name="arrowleft" size={36} color={props.color} />
        </TouchableOpacity>
    )

}

export default BackButton;

const styles = StyleSheet.create({
    headerIcon: {
        // position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        top: 45,
        left: 20,
        width: 50,
        height: 50,
        zIndex: 5,
    }
})