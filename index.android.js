/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  } from 'react-native';
import store from './store/index.js'
import { Provider } from 'react-redux'
import Route from './components/route.js';
import './ReactotronConfig'
import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBtfx6N8PowKZSJ1JwBN69GmpVE-SadAlo",
    authDomain: "doctorapp-168ee.firebaseapp.com",
    databaseURL: "https://doctorapp-168ee.firebaseio.com",
    projectId: "doctorapp-168ee",
    storageBucket: "doctorapp-168ee.appspot.com",
    messagingSenderId: "1036841866169"
  };
  firebase.initializeApp(config);

export default class doctorappfirebase extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}

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

AppRegistry.registerComponent('doctorappfirebase', () => doctorappfirebase);
