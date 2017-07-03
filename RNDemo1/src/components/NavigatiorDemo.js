import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';

import Discover from './Class/Discover'
import Order from './Class/Order'
import Message from './Class/Message'
import My from './Class/My'


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

export default class NavigationDemo extends React.Component{
    render(){
        return(
            <MainScreenNavigator>
                <View style={{flex:1}}></View>
            </MainScreenNavigator>
        )
    }
}



