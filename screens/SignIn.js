import React, { useState, useEffect, useCallback, useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { users } from '../server_dummy/data';
import { AuthContext } from '../context/Contexts'
import * as SecureStore from 'expo-secure-store';

const Signin = ({ navigation, route }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [transition, setTransition] = useState(false)

    const { signIn } = useContext(AuthContext)

    const handleSignin = useCallback(async () => {
        for (let user of users) {
            if (user.username === username && user.password === password) {
                let token;
                try {
                    token = await SecureStore.setItemAsync('com.YDYT.ny', JSON.stringify({ username, password }))
                }
                catch (e) {
                    console.log(e)
                }
                setTransition(true)
                setTimeout(() => {
                    signIn(token)
                }, 1000)
                resetFields()
                return
            }
        }
        Alert.alert("No user found")
        resetFields()
    })

    const resetFields = () => {
        setUsername("")
        setPassword("")
    }

    return (
        <SafeAreaView style={transition == false ? { opacity: 1 } : { opacity: 0.4 }}>
            <Text>Signin</Text>
            <TextInput
                placeholder="username"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={setPassword}
            />
            <Button
                title="Sign in"
                onPress={handleSignin}
            />
            <TouchableOpacity style={{ alignItems: "center" }}>
                <Text style={{ color: "#999999" }}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.unauthContainer}>
                <Button
                    style={styles.button}
                    title="Sign up"
                    onPress={() => navigation.navigate("Onboarding")}
                />
                <Button
                    title="Visitor"
                    onPress={() => navigation.navigate("Visitor")}
                />
            </View>
        </SafeAreaView>
    )
}

export default Signin;

const styles = StyleSheet.create({
    unauthContainer: {
        flexDirection: "row",
        justifyContent: 'center',
        alignContent: 'space-between',
        paddingVertical: 20
    },
    button: {
        borderColor: "#999999",
        borderWidth: 1,
        borderStyle: 'solid',
        backgroundColor: 'pink'
    }
})