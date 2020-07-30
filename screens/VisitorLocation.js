import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const VisitorLocation = ({ route, navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>Back</Text>
            </TouchableOpacity>
            <Text>Visitor Location Search</Text>
        </SafeAreaView>
    )
}

export default VisitorLocation;