import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const Header = () => {
        const { headerContainer } = styles;
        
        return (
            <View style={headerContainer}>
                <Text>Weather App</Text>
            </View>
        );
};
    
const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#03A9F4',
        height: 60,
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    },
});

export default Header;
