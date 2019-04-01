import React, { Component } from "react";
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ActionSheetIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: '最喜欢的游戏',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');


    return (
      <Container>
        <Header />

        <Content padder>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
          <Button
            onPress={() => this.props.navigation.push('Game')}
          >
            <Text>go to Game</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate('Movie')}
          >
            <Text>go to Movie</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.goBack()}
          >

            <Text>go back</Text>
          </Button>
          <Button
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
