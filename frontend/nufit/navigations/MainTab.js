import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Home, MyPage, Temp, StatisticsRecord } from '../screens';

const Tab = createBottomTabNavigator();

const homeIcon = require('../assets/home.png');
const homeIconFocused = require('../assets/home-focused.png');
const graphIcon = require('../assets/graph.png');
const graphIconFocused = require('../assets/graph-focused.png');
const liveIcon = require('../assets/live.png');
const liveIconFocused = require('../assets/live-focused.png');
const myIcon = require('../assets/my.png');
const myIconFocused = require('../assets/my-focused.png');


const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: { marginBottom: 10, backgroundColor: '#fff' },
        tabBarActiveTintColor: 'black',
        tabBarStyle: { height: 75 },
        tabBarIcon: ({ focused }) => {
          let iconName;
          

          if (route.name === 'Home') {
            iconName = focused ?  homeIconFocused : homeIcon;
          } else if (route.name === 'Graph') {
            iconName = focused ? graphIconFocused : graphIcon;
          } else if (route.name === 'Temp') {
            iconName = focused ? liveIconFocused : liveIcon;
          } else if (route.name === 'MyPage') {
            iconName = focused ? myIconFocused : myIcon;
          }

          return  <Image source={iconName} style={{ width: 24, height: 24 }} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel : '홈'}}/>
      <Tab.Screen name="Graph" component={StatisticsRecord} options={{tabBarLabel : '기록 및 통계'}}/>
      <Tab.Screen name="Temp" component={Temp} options={{tabBarLabel : '라이브'}}/>
      <Tab.Screen name="MyPage" component={MyPage} options={{tabBarLabel : '마이'}}/>
    </Tab.Navigator>
  )
}

export default MainTab

const styles = StyleSheet.create({})