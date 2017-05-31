/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { NativeModules } from 'react-native';

var OutputVolume = NativeModules.ArTest

export default class ARToolReact extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Button
        onPress={onButtonPress}
        title="GOTO NATIVE"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const onButtonPress = () => {
  //alert('Button has been pressed!');
  OutputVolume.get();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ARToolReact', () => ARToolReact);
