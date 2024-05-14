import React from 'react';
import{ StatusBar } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/components/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#111111" barStyle="light-content"/> 
      <Routes />
    </NavigationContainer>
  );
}

