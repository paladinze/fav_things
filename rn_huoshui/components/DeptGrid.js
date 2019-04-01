import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
export default class LayoutExample extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Col>
            <Thumbnail large source={require("../assets/images/dept/art.png")} />
          </Col>
          <Col>
            <Thumbnail large source={require("../assets/images/dept/biker.png")} />
          </Col>
          <Col>
            <Thumbnail large source={require("../assets/images/dept/check.png")} />
          </Col>
        </Grid>
      </Container>
    );
  }
}
