import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default class ForecastWeatherItem extends Component {
    
    onPress = () => {
        this.props.onPressItem(this.props.weather);
    };

    render() {
        const { mainContainer, icon, forecastContainer, temperatureContainer,
            dayText, maxTemperatureText, minTemperatureText } = styles;

        return (
            <TouchableOpacity onPress={this.onPress}>
            <View style={mainContainer}>
                <Image style={icon} source={{ uri: 'http://openweathermap.org/img/w/' + this.props.weather.weather[0].icon + '.png' }} />
                <View style={forecastContainer}>
                    <Text style={dayText}>Tomorrow</Text>
                    <Text>{this.props.weather.weather[0].main}</Text>
                </View>
                <View style={temperatureContainer}>
                    <Text style={maxTemperatureText}>{`${this.props.weather.main.temp_max}\u00B0`}</Text>
                    <Text style={minTemperatureText}>{`${this.props.weather.main.temp_min}\u00B0`}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}

const styles = {
    mainContainer: {
        flexDirection: 'row',
    },
    icon: {
        width: 50,
        height: 50,
    },
    forecastContainer: {
        flexDirection: 'column',
    },
    dayText: {
        fontSize: 20,
    },
    temperatureContainer: {
        position: 'absolute',
        right: 30,
        alignItems: 'center',
    },
    maxTemperatureText: {
        fontSize: 20,
    },
    minTemperatureText: {
        fontSize: 14,
    },
};

// export default ForecastWeatherItem;
