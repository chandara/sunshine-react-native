import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { name as appName } from './app.json';
import Header from './src/components/Header';
import TodayWeather from './src/components/TodayWeather';
import ForecastWeather from './src/components/ForecastWeather';

export default class App extends Component {
    render() {
        return (
            <View>
                <Header />
                <TodayWeather />
                <ForecastWeather />
            </View>
        );
    }
}

AppRegistry.registerComponent(appName, () => App);
