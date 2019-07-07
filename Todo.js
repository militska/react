/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react';
import {Alert, Text, View, TextInput, Button, FlatList} from 'react-native';

export default class Hello extends Component {

    static navigationOptions = {
        title: 'App',
    };

    constructor(props) {
        super(props);
        this.state = {
            currentItem: '',
            items: [],
        };
    }

    addItem = () => {
        let buff = [...this.state.items];
        buff.push({key: this.state.currentItem});
        this.setState({items: buff});
        this.setState({currentItem: ''});
    };


    clearList = () => {
        this.setState({items: []});
    };

    render() {
        return (
            <View>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(text) => this.setState({currentItem: text})}
                    value={this.state.currentItem}
                />

                <Button
                    color="#841584"
                    title="Добавить"
                    onPress={this.addItem}
                />
                <Button
                    color="#841584"
                    title="Очистить список"
                    onPress={this.clearList}
                />

                <FlatList
                    // style={styles.container}
                    data={this.state.items}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                />
            </View>
        );
    }
};
