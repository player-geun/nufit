import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import {Linking} from 'react-native'
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import * as Linking from 'expo-linking'

const Navigation = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const prefix = Linking.createURL('exp://k0cehua.anonymous.19000.exp.direct');
    // const linking = {
    //   prefixes: [prefix],
    //   config: {
    //     screens: {
    //       LoginScreen: 'login',
    //     },
    //   },
    // };
  

    const prefix = Linking.createURL('/');
    

    const linking = {
      prefixes: [prefix],
      // prefixes: [Linking.createURL('/'), 'http://app.example.com'],
      config: {
          initialRouteName: "LoginScreen",  
          screens: {
              LoginScreen: 'login',
              SetGoal: 'setgoal',
              CaloriesResult: 'calorie',
              
      },
      // subscribe(listener) {
      //     const onReceiveURL = ({ url }) => {
      //         console.log(`Received URL: ${url}`); 
      //         listener(url);
      //     };
          
      //     const urlSubscription = Linking.addEventListener('url', onReceiveURL);
          
      //     Linking.getInitialURL().then((initialUrl) => {
      //         if (initialUrl) {
      //             console.log(`Initial URL: ${initialUrl}`); // 초기 URL 로그
      //         }
      //     }).catch(err => console.error('An error occurred', err));
          
      //     return () => {

      //         urlSubscription.remove();
      //     };
      // },
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