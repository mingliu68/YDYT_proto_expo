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

    const transOpacity = transition == false ? { opacity: 1 } : { opacity: 0.4 }

    return (
        <SafeAreaView style={[transOpacity, { flex: 1 }]}>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputField}
                    placeholder="username"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.inputField}
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Onboarding")}
                        accessibilityLabel="Signing up for an account"
                    >
                        <Text style={styles.buttonText}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Visitor")}
                        accessibilityLabel="Use the app without signing up for an account"
                    >
                        <Text style={styles.buttonText}>Visitor</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Signin;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        flex: 1
    },
    inputField: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 10,
        marginVertical: 5,
        fontSize: 18
    },
    unauthContainer: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignContent: 'space-between',
        paddingVertical: 20,
        marginTop: 20
    },
    button: {
        marginHorizontal: 10,
        backgroundColor: '#888888',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        minWidth: 150,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    }
})