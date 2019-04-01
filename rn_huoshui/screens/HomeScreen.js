import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ReviewCard from '../components/ReviewCard'
import ScrollTab from '../components/ScrollTab'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '活水',
  };

  render() {
    return (
      <ScrollTab />
    );
  }
}
