import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import ForecastWeatherItem from './ForecastWeatherItem';
import axios from 'axios';

export default class TodayWeather extends Component {

    state = { loading: true,
        weathers: [] };

    componentWillMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=c92fa45d89678eeb650bfe7d57c9ce78')
        .then((response) => {
            console.log(response.data);
            this.setState({
                loading: false,
                weathers: response.data.list,
                });
        });
    }

    renderWeatherList() {
        this.state.weathers.map(weather => <ForecastWeatherItem weather={weather} />);
    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator size="large" color="#03A9F4" />
            );
        }

        return (
            <View>
                {this.renderWeatherList()}
            </View>
        );
    }
}
