/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Text, Button, StyleSheet, Colors} from 'react-native';


export default class Profile extends Component {

    static navigationOptions = {
        title: 'Profile',
    };


    render() {
        const {navigate} = this.props.navigation;

        return (
            <Button
                color="#841584"
                title="Go to Jane's Hello"
                style={styles.btn}
                onPress={() => navigate('Hello')}
            />
        );
    }


}
const styles = StyleSheet.create({

    body: {
        backgroundColor: 'white',
    },
    btn: {
        fontWeight: '700',
        color: 'red',
        backgroundColor : 'green'
    },
});
