import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';

export default class WeatherDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
            </View>
        );
    }
}
