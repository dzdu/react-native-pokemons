import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import HomePage from '../screens/HomeScreen';
import AboutPage from '../screens/AboutScreen';
import BrowsePage from '../screens/BrowseScreen'

const BottomTabNavigator = createBottomTabNavigator({
    Home: HomePage,
    Browse: BrowsePage,
    About: AboutPage
},{
    tabBarOptions: {
        showLabel: false,
      }
})

export default BottomTabNavigator