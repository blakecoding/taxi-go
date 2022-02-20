import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AuthScreen, ConfirmOTPScreen} from '../modules/auth';
import {ChatScreen, ChatsScreen} from '../modules/chat';

const Stack = createNativeStackNavigator();

const Route = () => {
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

export default Route;
