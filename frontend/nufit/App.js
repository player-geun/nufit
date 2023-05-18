import React from 'react';
import { StyleSheet} from 'react-native';

import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";

import SetGoal from './screens/SetGoal';
import CaloriesResult from './screens/CaloriesResult';
import NutResult from './screens/NutResult';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SetGoal" component={SetGoal} />
        <Stack.Screen name="CaloriesResult" component={CaloriesResult} />
        <Stack.Screen name="NutResult" component={NutResult} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

