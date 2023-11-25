import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CaloriesResult, CameraScreen, ChooseSearch, Home, LoginScreen, MealDetail, MyPage, NutResult, RegisterFoodName, RegisterFoodNutrition, RegisterFoodQuantity, Search, SearchDetail, SetGoal, SplashScreen} from '../screens';
import MainTab from './MainTab';
import MainStack from './MainStack';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='MainStack' component={MainStack} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default AuthStack;
