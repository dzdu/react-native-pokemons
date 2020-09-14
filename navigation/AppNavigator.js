import React from 'react';
import {createAppContainer, createSwitchNavigator, createStackNavigator} from 'react-navigation';
import BottomTabNavigator from './BottomTabNavigator';
import HomePage from '../screens/HomeScreen';

export default createAppContainer(
    createSwitchNavigator({
        Main: BottomTabNavigator
    })
);

