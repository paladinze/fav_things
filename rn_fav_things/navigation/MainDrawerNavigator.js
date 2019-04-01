import React from 'react';
import { Platform, Text, View } from 'react-native';
import { DrawerItems, createDrawerNavigator } from 'react-navigation'
import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';

import Colors from '../constants/Colors';

import MovieScreen from '../screens/MovieScreen';
import BookScreen from '../screens/BookScreen';
import GameScreen from '../screens/GameScreen';
import SettingScreen from '../screens/SettingsScreen';

import tabs from './MainTabNavigator';


const DrawerContent = (props) => (
  <View>
    <View
      style={{
        backgroundColor: '#473be7',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 30 }}>
        Favortite Things
      </Text>
    </View>
    <DrawerItems {...props} />
  </View>
)

export default createDrawerNavigator(
  {
    tabs,
    SettingScreen
  }, {
    contentComponent: DrawerContent
  }
);
