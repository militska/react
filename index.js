/**
 * @format
 */
import React, {Component} from 'react';

import {AppRegistry} from 'react-native';
import Hello from './Hello';
import Profile from './Profile';
import {name as appName} from './app.json';

import {createStackNavigator, createAppContainer} from 'react-navigation';


const StackNavigator = createStackNavigator({
    Profile: {screen: Profile},
    Hello: {screen: Hello},
});

const AppContainer = createAppContainer(StackNavigator);

class App extends React.Component {
    render() {
        return <AppContainer/>;
    }
}

AppRegistry.registerComponent(appName, () => App);
