import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CaloriesResult, CameraScreen, ChooseSearch, Home, MealDetail, MyPage, NutResult, RegisterFoodName, RegisterFoodNutrition, RegisterFoodQuantity, Search, SearchDetail, SetGoal } from '../screens';
import MainTab from './MainTab';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='MainTab' component={MainTab} options={{ headerShown: false }}/>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name='MealDetail' component={MealDetail} options={{ headerShown: false }}/>
      <Stack.Screen name='ChooseSearch' component={ChooseSearch} options={{ headerShown: false }}/>
      <Stack.Screen name='CameraScreen' component={CameraScreen} options={{ headerShown: false }}/>
      <Stack.Screen name='Search' component={Search} options={{ headerShown: false }}/>
      <Stack.Screen name='SearchDetail' component={SearchDetail} options={{ headerShown: false }}/>
      <Stack.Screen name='RegisterFoodName' component={RegisterFoodName} options={{ headerShown: false }}/>
      <Stack.Screen name='RegisterFoodQuantity' component={RegisterFoodQuantity} options={{ headerShown: false }}/>
      <Stack.Screen name='RegisterFoodNutrition' component={RegisterFoodNutrition} options={{ headerShown: false }}/>
      <Stack.Screen name='MyPage' component={MyPage} options={{ headerShown: false }}/>
      <Stack.Screen name='SetGoal' component={SetGoal} options={{ headerShown: false }}/>
      <Stack.Screen name='CaloriesResult' component={CaloriesResult} options={{ headerShown: false }}/>
      <Stack.Screen name='NutResult' component={NutResult} options={{ headerShown: false }}/>

    </Stack.Navigator>
  )
}

export default MainStack;