// import { StatusBar } from 'expo-status-bar';
import React, { useState, useCallback, useEffect, createContext, useMemo } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import * as SecureStore from 'expo-secure-store';

import Splash from './screens/Splash';

import { AuthContext } from './context/Contexts';

import AuthStackScreen from './stacks/AuthStack';
import SigninStackScreen from './stacks/SigninStack'
import VisitorStackScreen from './stacks/VisitorStack'
import OnboardingStackScreen from './stacks/OnboardingStack'

const RootStack = createStackNavigator();

// const AuthContext = createContext();

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
                options={{ headerShown: false }}
              />
              :
              state.userToken === null
                ? <>
                  <RootStack.Screen
                    name="Signin"
                    component={SigninStackScreen}
                    options={{ headerShown: false }}
                  />
                  <RootStack.Screen
                    name="Onboarding"
                    component={OnboardingStackScreen}
                    options={{
                      headerShown: false,
                      gestureEnabled: false
                    }}
                  />
                  <RootStack.Screen
                    name="Visitor"
                    component={VisitorStackScreen}
                    options={{
                      headerShown: false,
                      cardStyle: { backgroundColor: "transparent" },
                    }}
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
