import React, {Component} from 'react';
import {AppRegistry, Button, Text, TextInput, View, Alert} from 'react-native';


export default class StevensAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    _benassiButton() {
        Alert.alert('And then just touch me!');

    }

    render() {
        return (
            // Try setting `alignItems` to 'flex-start'
            // Try setting `justifyContent` to `flex-end`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'column',
                //justifyContent: 'flex-end',
                alignItems: 'flex-start',
            }}>
                <View>
                    <Text style={{padding: 10, fontSize: 24}}>
                        This is a React Native test app
                    </Text>
                </View>
                <Button
                    onPress={this._benassiButton()}
                    title="Push me!"
                />

                <TextInput
                    style={{height: 40, width: 250}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 24}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>

                <View style={{width: 50, height: 50, padding: 10, backgroundColor: 'powderblue'}}>
                    <Text>hi 1</Text>
                </View>
                <View style={{width: 50, height: 50, padding: 10, backgroundColor: 'skyblue'}}>
                    <Text>hi 2</Text>
                </View>
                <View style={{width: 50, height: 50, padding: 10, backgroundColor: 'steelblue'}}>
                    <Text>hi 3</Text>
                </View>
            </View>
        );
    }
};

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => StevensAppComponent);
