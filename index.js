import { AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import WeatherDetail from './src/components/WeatherDetail';


const navigation = createStackNavigator({
    Home: { screen: HomeScreen },
    WeatherDetail: { screen: WeatherDetail }
});

const App = createAppContainer(navigation);

// skip this line if using Create React Native App
AppRegistry.registerComponent('weather', () => App);
