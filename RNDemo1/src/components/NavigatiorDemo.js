import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator,StackNavigator,DrawerNavigator} from 'react-navigation';

import Discover from './Class/Discover'
import Order from './Class/Order'
import Message from './Class/Message'
import My from './Class/My'
import DiscoverDetail from './Class/DiscoverDetail'
import FriendsList from './Class/FriendsList'

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
		lazy:true,
		animationEnabled:false,
		swipeEnabled:false,
		initialRouteName: 'Discover',	
        tabBarOptions:{
            activeTintColor: '#A42102',
            inactiveTintColor: '#B2B4B7',
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
        headerMode:'screen',
    }
);


export default class NavigationDemo extends React.Component{
    render(){
        return <MainSrceenStackNavigator />
    }
}




