import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../screens/SignIn'


const SigninStack = createStackNavigator();

const SigninStackScreen = () => {
    return (
        <SigninStack.Navigator>
            <SigninStack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
        </SigninStack.Navigator>
    )
}

export default SigninStackScreen;