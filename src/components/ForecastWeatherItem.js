import React from 'react';
import { View, Text, Image } from 'react-native';

const ForecastWeatherItem = (props) => {
    const { mainContainer, icon, forecastContainer, temperatureContainer } = styles;
    
    return (
        <View style={mainContainer}>
            <Image style={icon} source={require('../images/ic_logo.png')} />
            <View style={forecastContainer}>
                <Text>Tomorrow</Text>
                <Text>{props.weather.weather.main}</Text>
            </View>
            <View style={temperatureContainer}>
                <Text>{props.weather.main.temp_max}</Text>
                <Text>{props.weather.main.temp_min}</Text>
            </View>
        </View>
    );

};

const styles = {
    mainContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    icon: {
        flex: 1,
    },
    forecastContainer: {
        flex: 3,
    },
    temperatureContainer: {
        flex: 1,
    },
};

export default ForecastWeatherItem;
