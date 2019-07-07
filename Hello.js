/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Text, AsyncStorage} from 'react-native';






export default class Hello extends Component {


    static navigationOptions = {
        title: 'App',
    };



    render() {
        return <Text>Привет App</Text>;
    }
}
