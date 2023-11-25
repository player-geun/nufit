import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import {Linking} from 'react-native'
import * as Linking from 'expo-linking';
import AuthStack from './AuthStack';

const Navigation = () => {

    const prefix = Linking.createURL('/');

    const linking = {
      prefixes: [prefix],
      config: {
          initialRouteName: "LoginScreen",  
          screens: {
              LoginScreen: 'login',
              // SetGoal: 'setgoal',
              // CaloriesResult: 'calorie',
              
      },
  }
}
    

    return (
      <NavigationContainer linking={linking}>
        <AuthStack/>
        {/* {isLoggedIn ? <MainStack /> : <AuthStack />} */}
      </NavigationContainer>
    );
  };
  
  export default Navigation;