import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../screens/Onboarding'
import Onboarding_2 from '../screens/Onboarding_2'



const OnboardingStack = createStackNavigator();

const OnboardingStackScreen = () => {
    return (
        <OnboardingStack.Navigator>
            <OnboardingStack.Screen
                name="Onboarding"
                component={Onboarding}
            />
            <OnboardingStack.Screen
                name="Onboarding_2"
                component={Onboarding_2}
            />
        </OnboardingStack.Navigator>
    )
}

export default OnboardingStackScreen;