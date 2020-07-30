import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home'

const AuthStack = createStackNavigator();

const AuthStackScreen = () => {
    return (
        <AuthStack.Navigator
            mode="card"
        >
            <AuthStack.Screen
                name="Home"
                component={Home}
            />
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen;

