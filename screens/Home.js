import React, { useState, useEffect, useCallback, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../context/Contexts';
import * as SecureStore from 'expo-secure-store';


const Home = ({ navigation, route }) => {
    const { signOut } = useContext(AuthContext);

    const handleSignout = useCallback(async () => {
        try {
            await SecureStore.deleteItemAsync('com.YDYT.ny')
        }
        catch (e) {
            console.log(e)
        }
        signOut()
    })

    return (
        <SafeAreaView>
            <Text>Home</Text>
            <Button
                title="Sign out"
                onPress={handleSignout}
            />
        </SafeAreaView>
    )
}

export default Home;