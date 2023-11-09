import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import {Linking} from 'react-native'
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import * as Linking from 'expo-linking'

const Navigation = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

//     const prefix = Linking.createURL('/');

//     const linking = {
//       prefixes: [prefix],
//       config: {
//           initialRouteName: "LoginScreen",  
//           screens: {
//               LoginScreen: 'login',
//               SetGoal: 'setgoal',
//               CaloriesResult: 'calorie',
//               
//       },
//       subscribe(listener) {
//           const onReceiveURL = ({ url }) => {
//               console.log(`Received URL: ${url}`); 
//               listener(url);
//           };
          
//           const urlSubscription = Linking.addEventListener('url', onReceiveURL);
          
//           Linking.getInitialURL().then((initialUrl) => {
//               if (initialUrl) {
//                   console.log(`Initial URL: ${initialUrl}`); // 초기 URL 로그
//               }
//           }).catch(err => console.error('An error occurred', err));
          
//           return () => {

//               urlSubscription.remove();
//           };
//       },
//   };
    

    return (
      <NavigationContainer>
        {isLoggedIn ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    );
  };
  
  export default Navigation;