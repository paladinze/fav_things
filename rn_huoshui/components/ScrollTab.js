import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import ReviewCard from './ReviewCard'
export default class TabsScrollableExample extends Component {
  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="最新评价">
            <ReviewCard />
          </Tab>
          <Tab heading="热门评价">
            <ReviewCard />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
