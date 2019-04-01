import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import DeptScreen from '../screens/DeptScreen';
import RankScreen from '../screens/RankScreen';
import SettingScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Game: RankScreen
}, {
  initialRouteName: "Home"
});

HomeStack.navigationOptions = {
  tabBarLabel: '活水',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="Feather" name="droplet"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};

const DeptStack = createStackNavigator({
  Book: DeptScreen,
});

DeptStack.navigationOptions = {
  tabBarLabel: '逛逛',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="Feather" name="compass"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};

const RankStack = createStackNavigator({
  Game: RankScreen,
});

RankStack.navigationOptions = {
  tabBarLabel: '榜单',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="Feather" name="bar-chart"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};


const SettingStack = createStackNavigator({
  Setting: SettingScreen,
});

SettingStack.navigationOptions = {
  tabBarLabel: '设置',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="Feather" name="settings"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};


export default createBottomTabNavigator({
  HomeStack,
  DeptStack,
},
{
  tabBarOptions: {
    showLabel: true
  },
});
