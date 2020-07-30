import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';

const Visitor = ({ route, navigation }) => {
    return (
        <SafeAreaView>
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
        </SafeAreaView>
    )
}

export default Visitor;