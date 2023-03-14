import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackNavigator} from './navigation/AuthStackNavigator';

type RootStackParams = {
  AuthStack: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
