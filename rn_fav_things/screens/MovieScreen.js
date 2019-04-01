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

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: '最喜欢的电影',
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/robot-dev.png')} />
                <Body>
                  <Text>侏罗纪公园</Text>
                  <Text note>斯皮尔伯格</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/images/launch.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
          <Button rounded light
            onPress={() => this.props.navigation.push('Game', {
              itemId: 86,
              otherParam: 'anything you want here',
            })}
          >
            <Text>Go to Setting</Text>
          </Button>
          <Button rounded light
            onPress={() => this.props.navigation.toggleDrawer()}
          >
            <Text>toggle drawer</Text>
          </Button>
      </Container>
    );
  }
}
