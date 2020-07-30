import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';

const Onboarding = ({ route, navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>Back</Text>
            </TouchableOpacity>
            <Text>Onboarding</Text>
            <Button
                title="Next"
                onPress={() => navigation.navigate("Onboarding_2")}
            />
        </SafeAreaView>
    )
}

export default Onboarding;