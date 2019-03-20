import React from 'react';
import { View, Text, Image } from 'react-native';

const ForecastWeatherItem = (props) => {
    const { mainContainer, icon, forecastContainer, temperatureContainer,
    dayText, maxTemperatureText, minTemperatureText } = styles;
    
    return (
        <View style={mainContainer}>
            <Image style={icon} source={{ uri: 'http://openweathermap.org/img/w/' + props.weather.weather[0].icon + '.png' }} />
            <View style={forecastContainer}>
                <Text style={dayText}>Tomorrow</Text>
                <Text>{props.weather.weather[0].main}</Text>
            </View>
            <View style={temperatureContainer}>
                <Text style={maxTemperatureText}>{`${props.weather.main.temp_max}\u00B0`}</Text>
                <Text style={minTemperatureText}>{`${props.weather.main.temp_min}\u00B0`}</Text>
            </View>
        </View>
    );

};

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

export default ForecastWeatherItem;
