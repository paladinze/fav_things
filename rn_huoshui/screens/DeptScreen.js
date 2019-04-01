import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import DeptGrid from '../components/DeptGrid'

export default class BookScreen extends React.Component {
  static navigationOptions = {
    title: '逛逛',
  };

  render() {
    return (
      <DeptGrid />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
