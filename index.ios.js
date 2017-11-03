/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';

import MainIndex from './App/Main/MainIndex'
export default class App extends Component {
    render() {
        return <MainIndex/>;
    }
}

AppRegistry.registerComponent('react_gudu', () => App);
