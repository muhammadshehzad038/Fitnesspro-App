import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screen/HomeScreen';
import WorkOutScreen from '../Screen/WorkOutScreen';
import FitScreen from '../Screen/FitScreen';
import RestScreen from '../Screen/RestScreen';


const StackNavigation = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Work' component={WorkOutScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Fit' component={FitScreen} options={{headerShown: false}}/>
            <Stack.Screen name='Break' component={RestScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation