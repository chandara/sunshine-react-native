import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header';
import TodayWeather from './TodayWeather';
import ForecastWeather from './ForecastWeather';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <TodayWeather />
                <ForecastWeather onPressItem={() => navigate('WeatherDetail')} />
            </View>
        );
    }
}
