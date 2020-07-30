import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Visitor from '../screens/Visitor'
import VisitorLocation from '../screens/VisitorLocation'


const VisitorStack = createStackNavigator();

const VisitorStackScreen = () => {
    return (
        <VisitorStack.Navigator>
            <VisitorStack.Screen
                name="Visitor"
                component={Visitor}
                options={{ headerShown: false }}
            />
            <VisitorStack.Screen
                name="VisitorLocation"
                component={VisitorLocation}
                options={{ headerShown: false }}
            />
        </VisitorStack.Navigator>
    )
}

export default VisitorStackScreen;