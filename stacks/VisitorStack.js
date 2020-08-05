import React from 'react';
import { createStackNavigator, TransitionSpecs } from '@react-navigation/stack';
import VisitorNew from '../screens/VisitorNew';
import VisitorLocationNew from '../screens/VisitorLocationNew';
import Visitor from '../screens/Visitor'
import VisitorLocation from '../screens/VisitorLocation';
import VisitorForm from '../screens/VisitorForm';


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
                name="VisitorNew"
                component={VisitorNew}
                options={{
                    headerShown: false,

                }}
            />
            <VisitorStack.Screen
                name="VisitorLocationNew"
                component={VisitorLocationNew}
                options={{
                    headerShown: false,
                }}
            />
            <VisitorStack.Screen
                name="VisitorForm"
                component={VisitorForm}
                options={{
                    headerShown: false,
                }}
            />
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