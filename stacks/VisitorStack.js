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
            />
            <VisitorStack.Screen
                name="VisitorLocation"
                component={VisitorLocation}
            />
        </VisitorStack.Navigator>
    )
}

export default VisitorStackScreen;