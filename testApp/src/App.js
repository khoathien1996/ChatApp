import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {HomeStack} from './components/Router';

import Login from './components/screen/Login';

export default class App extends Component<{}> {
  render() {
    return (
      <HomeStack />
    );
  }
}

