import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';

export default class TodayWeather extends Component {

    state = { loading: true,
        weather: {} };

    componentWillMount() {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=c92fa45d89678eeb650bfe7d57c9ce78')
        .then((response) => {
            console.log(response.data);
            this.setState({
                loading: false,
                weather: response.data,
                });
        });
    }

    render() {
        const { mainContainer, leftContainer, rightContainer, todayDateText, 
            todayMaxTemperatureText, todayMinTemperatureText, todayLocation, 
            todayWeatherStatusText, todayTemperatureContainer } = styles;
        
        if (this.state.loading) {
            return (
                <ActivityIndicator size="large" color="#03A9F4" />
            );
        }

        return (
            
            <View style={mainContainer}>
                <View style={leftContainer}>
                    <Text style={todayDateText}>Thursday, April 20</Text>
                    <View style={todayTemperatureContainer}>
                        <Text style={todayMaxTemperatureText}>{`${this.state.weather.main.temp_max}\u00B0`}</Text>
                        <Text style={todayMinTemperatureText}>{`${this.state.weather.main.temp_min}\u00B0`}</Text>
                    </View>
                    <Text style={todayLocation}>{this.state.weather.name}, UK</Text>
                </View>
                <View style={rightContainer}>
                    <Image style={{width: 100, height: 100}} source={{ uri: 'http://openweathermap.org/img/w/' + this.state.weather.weather[0].icon + '.png' }} />
                    <Text style={todayWeatherStatusText}>{this.state.weather.weather[0].main}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flexDirection: 'row',
        height: 300,
    },
    leftContainer: {
        backgroundColor: '#03A9F4',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 2,
        flexDirection: 'column',
        height: 300,
    },
    rightContainer: {
        backgroundColor: '#03A9F4',
        flex: 1,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    todayDateText: {
        color: '#FFF',
        fontSize: 24,
    },
    todayTemperatureContainer: {
        flexDirection: 'row',
    },
    todayMaxTemperatureText: {
        color: '#FFF',
        fontSize: 60,
    },
    todayMinTemperatureText: {
        color: '#FFF',
        fontSize: 24,
    },
    todayLocation: {
        color: '#FFF',
        fontSize: 24,
    },
    todayWeatherImage: {
    },
    todayWeatherStatusText: {
        color: '#FFF',
        fontSize: 24,
        position: 'absolute',
        bottom: 20,
    }
};
