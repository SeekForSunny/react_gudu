/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Index from './App/Main/MainIndex'
export default class App extends Component {
  render() {
    return ( <Index/> );
  }
}

AppRegistry.registerComponent('react_gudu', () => App);
