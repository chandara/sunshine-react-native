import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import ForecastWeatherItem from './ForecastWeatherItem';
import axios from 'axios';

export default class TodayWeather extends Component {

    state = { loading: true,
        weathers: [] };

    componentDidMount() {
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=c92fa45d89678eeb650bfe7d57c9ce78')
        .then((response) => {
            console.log(response.data);
            this.setState({
                loading: false,
                weathers: response.data.list,
                });
        });
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
                <FlatList 
                    data={this.state.weathers}
                    renderItem={item => 
                    <ForecastWeatherItem 
                        key={item.item.weather[0].id} 
                        weather={item.item} 
                        onPressItem={() => this.props.onPressItem(this.props.weather)}
                    />}
                />
            </View>
        );
    }
}

const styles = {
    weatherListContainer: {
        flex: 1,
    }
};
