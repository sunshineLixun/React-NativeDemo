

import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import setLayout from './src/components/setLayout';
import setProps from './src/components/setProps'
import componentByValue from './src/components/componentByValue'
import listViewClass from './src/components/listViewClass'
import NavigatiorDemo from './src/components/NavigatiorDemo'
import Login from './src/components/Demo/Login'

AppRegistry.registerComponent('RNDemo1', () => Login);
