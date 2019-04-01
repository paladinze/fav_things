import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';

import Colors from '../constants/Colors';

import MovieScreen from '../screens/MovieScreen';
import BookScreen from '../screens/BookScreen';
import GameScreen from '../screens/GameScreen';
import SettingScreen from '../screens/SettingsScreen';

const MovieStack = createStackNavigator({
  Movie: MovieScreen,
  Game: GameScreen
}, {
  initialRouteName: "Movie"
});

MovieStack.navigationOptions = {
  tabBarLabel: 'movie',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="Feather" name="film"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};

const BookStack = createStackNavigator({
  Book: BookScreen,
});

BookStack.navigationOptions = {
  tabBarLabel: 'book',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="Feather" name="book-open"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};

const GameStack = createStackNavigator({
  Game: GameScreen,
});

GameStack.navigationOptions = {
  tabBarLabel: 'game',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="SimpleLineIcons" name="game-controller"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};


const SettingStack = createStackNavigator({
  Setting: SettingScreen,
});

SettingStack.navigationOptions = {
  tabBarLabel: 'setting',
  tabBarIcon: ({ focused }) => (
    <Icon
      type="MaterialCommunityIcons" name="face"
      style={ focused ? { color: Colors.tabIconSelected} : { color: Colors.tabIconDefault}}
    />
  ),
};


export default createBottomTabNavigator({
  MovieStack,
  BookStack,
  GameStack,
  SettingStack
},
{
  tabBarOptions: {
    showLabel: false,
  },
});
