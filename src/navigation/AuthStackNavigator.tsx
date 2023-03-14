import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {RegistrationScreen} from '../screens/RegistrationScreen';
import {VerifyScreen} from '../screens/VerifyScreen';
import {WelcomeScreen} from '../screens/WelcomeScreen';

export type AuthStackParams = {
  Welcome: undefined;
  Registration: undefined;
  Verify: undefined;
};

export type Props = NativeStackScreenProps<AuthStackParams>;

const AuthStack = createNativeStackNavigator();

export function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={'Welcome'} component={WelcomeScreen} />
      <AuthStack.Screen name={'Registration'} component={RegistrationScreen} />
      <AuthStack.Screen name={'Verify'} component={VerifyScreen} />
    </AuthStack.Navigator>
  );
}
