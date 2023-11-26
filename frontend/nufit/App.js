import { createStackNavigator } from "@react-navigation/stack";
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import Navigation from './navigations';
import { DateProvider } from "./context/DateContext";



const Stack = createStackNavigator();

export default function App() {
  const fetchFonts = () => {
    return Font.loadAsync({
      
      "Pretendard-Light": require("./assets/fonts/Pretendard-Light.otf"),
      "Pretendard-Black": require("./assets/fonts/Pretendard-Black.otf"),
      "Pretendard-Bold": require("./assets/fonts/Pretendard-Bold.otf"),
      "Pretendard-ExtraBold": require("./assets/fonts/Pretendard-ExtraBold.otf"),
      "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.otf"),
      "Pretendard-ExtraLight": require("./assets/fonts/Pretendard-ExtraLight.otf"),
      "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.otf"),
      "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.otf"),
      "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.otf"),
    });
  };

  const preload = async () => {
   return await fetchFonts(); 
  }

  
  useEffect(()=> {
    preload().then((context)=> {
      SplashScreen.hideAsync();
    });
  }, []); 


  return (
    <DateProvider>
    <Navigation/>
    </DateProvider>
    
  );
}
