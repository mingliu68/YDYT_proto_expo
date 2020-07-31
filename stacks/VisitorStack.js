import React from 'react';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import Visitor from '../screens/Visitor'
import VisitorLocation from '../screens/VisitorLocation';


const VisitorStack = createStackNavigator();

const TransitionScreen = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0]
                        })
                    },
                    {
                        translateX: next
                            ? next.progress.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -layouts.screen.width]
                            })
                            : 1
                    }
                ]
            },
            overlayStyle: {
                opacity: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5]
                })
            }
        };
    }
};

const CardOptions = {
    headerShown: false,
    // cardStyle: { backgroundColor: 'transparent' },
    ...TransitionScreen
};

const VisitorStackScreen = () => {
    return (
        <VisitorStack.Navigator>
            <VisitorStack.Screen
                name="Visitor"
                component={Visitor}
                options={CardOptions}
            />
            <VisitorStack.Screen
                name="VisitorLocation"
                component={VisitorLocation}
                options={CardOptions}
            />
        </VisitorStack.Navigator>
    )
}

export default VisitorStackScreen;