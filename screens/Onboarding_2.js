import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';

const Onboarding_2 = ({ route, navigation }) => {
    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text>Back</Text>
            </TouchableOpacity>
            <Text>Onboarding_2</Text>
        </SafeAreaView>
    )
}

export default Onboarding_2;