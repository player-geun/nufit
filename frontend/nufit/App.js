import React from 'react';
import { NavigationContainer } from "@react-navigation/native"; 
import { createStackNavigator } from "@react-navigation/stack";
import CaloriesResult from './screens/CaloriesResult';
import ChooseSearch from './screens/ChooseSearch';
import NutResult from './screens/NutResult';
import Search from './screens/Search';
import SearchDetail from './screens/SearchDetail';
import SetGoal from './screens/SetGoal';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChooseSearch" component={ChooseSearch} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchDetail" component={SearchDetail} />
        <Stack.Screen name="SetGoal" component={SetGoal} />
        <Stack.Screen name="CaloriesResult" component={CaloriesResult} />
        <Stack.Screen name="NutResult" component={NutResult} />
      </Stack.Navigator> 
    </NavigationContainer>
  );
}
