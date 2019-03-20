import React, { Component } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
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
        return this.state.weathers.map(weather => <ForecastWeatherItem key={weather.weather[0].id} weather={weather} />);
    }

    render() {
        const { weatherListContainer } = styles;

        if (this.state.loading) {
            return (
                <ActivityIndicator size="large" color="#03A9F4" />
            );
        }

        return (
            <View style={weatherListContainer}>
                {this.renderWeatherList()}
            </View>
        );
    }
}

const styles = {
    weatherListContainer: {
        flex: 1,
    }
};
