import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/auth/LoginScreen';
import RegisterScreen from './src/auth/RegisterScreen';
import MainHomeScreen from './src/HomeScreen/MainHomeScreen';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'
        drawerPosition="left"
        screenOptions={{
          headerShown: false,
          freezeOnBlur: true
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="MainHomeScreen" component={MainHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
