import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';

import Discover from './Class/Discover'
import Order from './Class/Order'
import Message from './Class/Message'
import My from './Class/My'
import DiscoverDetail from './Class/DiscoverDetail'

const MainScreenNavigator = TabNavigator(
    {
     Discover: {
        screen: Discover,
            },
     Order: {
        screen: Order
        },
    Message: {
        screen: Message
    },
     My: {
        screen: My,
        },
    },
    {
        tabBarOptions:{
            activeTintColor:'#A42102',
            activeBackgroundColor:'white',
            inactiveTintColor:'#B2B4B7',
            inactiveBackgroundColor:'white',
            labelStyle:{
                fontSize:10
            }
        }
    }
);

const MainSrceenStackNavigator = StackNavigator(
    {
        MainScreenNavigator: {screen: MainScreenNavigator},
        DiscoverDetail: {screen: DiscoverDetail},
    },
    {
        initialRouteName: 'MainScreenNavigator',
        mode:'card',
        headerMode:'float',
    }
);


export default class NavigationDemo extends React.Component{
    render(){
        return <MainSrceenStackNavigator />
    }
}



