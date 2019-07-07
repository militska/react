/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Text, Button, StyleSheet, Colors, View} from 'react-native';


export default class Profile extends Component {

    static navigationOptions = {
        title: 'Profile',
    };


    render() {
        const {navigate} = this.props.navigation;

        return (
            <View>
                <Text style={styles.red}>test</Text>

                <Button
                    color="#841584"
                    title="Go to Jane's Hello"
                    style={styles.btn}
                    onPress={() => navigate('Hello')}
                />
                <Button
                    color="#841584"
                    title="Todo"
                    style={styles.btn}
                    onPress={() => navigate('Todo')}
                />
            </View>
        );
    }


}
const styles = StyleSheet.create({
    red : {
        color : 'red'
    },

    body: {
        backgroundColor: 'white',
    },
    btn: {
        margin: '30%',
        fontWeight: '700',
        color: 'red',
        backgroundColor: 'green',
    },
});
