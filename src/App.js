/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import type {Node} from 'react';

import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthScreen, ConfirmOTPScreen} from './modules/auth';
import {ChatScreen, ChatsScreen} from './modules/chat';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="auth"
        screenOptions={{headerShown: false, statusBarStyle: 'light'}}>
        <Stack.Screen name="auth" component={AuthScreen} />
        <Stack.Screen name="otp" component={ConfirmOTPScreen} />
        <Stack.Screen name="chats" component={ChatsScreen} />
        <Stack.Screen name="chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
