// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const AuthStack = () => {
//   return (
//     <View>
//       <Text>AuthStack</Text>
//     </View>
//   )
// }

// export default AuthStack

// const styles = StyleSheet.create({})

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CaloriesResult, NutResult, SetGoal } from '../screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='SetGoal' component={SetGoal} options={{ headerShown: false }}/>
      <Stack.Screen name='CaloriesResult' component={CaloriesResult} options={{ headerShown: false }}/>
      <Stack.Screen name='NutResult' component={NutResult} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
