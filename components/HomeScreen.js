import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = { isLoading: true }
    }

    componentDidMount() {
        return fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json')
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson)
            this.setState({
                isLoading: false,
                dataSource: resJson.rounds
            }, function() {

            })
        })
        .catch((err) => {
            console.error(err)
        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <Text>Home Screen</Text>

                <Button title="Go to Details" onPress={() => this.props.navigation.navigate('Details')} />
            </View>
        );
    }
}

export default HomeScreen;