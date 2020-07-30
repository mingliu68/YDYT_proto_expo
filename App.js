// import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect, createContext, useMemo } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store';
// import Home from './screens/Home';
// import Visitor from './screens/Visitor';
// import VisitorLocation from './screens/VisitorLocation';
import Splash from './screens/Splash';
// import SignIn from './screens/SignIn';
import Onboarding from './screens/Onboarding';
import Onboarding_2 from './screens/Onboarding_2';

// import { State } from 'react-native-gesture-handler';
import { AuthContext } from './context/Contexts';

import AuthStackScreen from './stacks/AuthStack';
import SigninStackScreen from './stacks/SigninStack'
import VisitorStackScreen from './stacks/VisitorStack'

const RootStack = createStackNavigator();
// const AuthStack = createStackNavigator();
// const SigninStack = createStackNavigator();
// const VisitorStack = createStackNavigator();
const OnboardingStack = createStackNavigator();
// const AuthContext = createContext();

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

// const SigninStackScreen = () => {
//   return (
//     <SigninStack.Navigator>
//       <SigninStack.Screen
//         name="SignIn"
//         component={SignIn}
//       />
//     </SigninStack.Navigator>
//   )
// }

// const VisitorStackScreen = () => {
//   return (
//     <VisitorStack.Navigator>
//       <VisitorStack.Screen
//         name="Visitor"
//         component={Visitor}
//       />
//       <VisitorStack.Screen
//         name="VisitorLocation"
//         component={VisitorLocation}
//       />
//     </VisitorStack.Navigator>
//   )
// }

// const AuthStackScreen = () => {
//   return (
//     <AuthStack.Navigator
//       mode="card"
//     >
//       <AuthStack.Screen
//         name="Home"
//         component={Home}
//       />
//     </AuthStack.Navigator>
//   )
// }

export default function App({ navigation }) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignedout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignedout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignedout: false,
      userToken: null
    }
  );

  const authContext = useMemo(
    () => ({
      signIn: async data => {
        dispatch({ type: 'SIGN_IN', token: data })
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        dispatch({ type: 'SIGN_IN', token: data.token })
      },
    }),
    []
  );

  const getToken = useCallback(async () => {
    let token;
    try {
      token = await SecureStore.getItemAsync('com.YDYT.ny')
    }
    catch (e) {
      console.log(e)
    }
    dispatch({ type: 'RESTORE_TOKEN', token: token })
  })

  // initial loading, run once
  useEffect(() => {
    setTimeout(() => {
      getToken()
    }, 1000)
  }, [])

  return (

    <NavigationContainer>
      <AuthContext.Provider value={authContext}>
        <RootStack.Navigator
          mode="modal"
        >
          {
            state.isLoading === true
              ?
              <RootStack.Screen
                name="Splash"
                component={Splash}
              />
              :
              state.userToken === null
                ? <>
                  <RootStack.Screen
                    name="Unauth"
                    component={SigninStackScreen}
                    options={{ headerShown: false }}
                  />
                  <RootStack.Screen
                    name="Onboarding"
                    component={OnboardingStackScreen}
                    options={{ headerShown: false }}
                  />
                  <RootStack.Screen
                    name="Visitor"
                    component={VisitorStackScreen}
                    options={{ headerShown: false }}
                  />
                </>
                : (
                  <RootStack.Screen
                    name="Auth"
                    component={AuthStackScreen}
                    options={{ headerShown: false }}
                  />
                )
          }
        </RootStack.Navigator>
      </AuthContext.Provider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
