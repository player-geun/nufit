import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainTab' component={MainTab} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

export default MainStack;