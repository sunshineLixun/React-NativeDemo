import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class Discover extends React.Component{

    static navigationOptions =({navigation})=>({
        tabBarLabel: '发现',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./source/发现@2x.png')}  
              selectedImage={require('./source/发现-选中@2x.png')}  
            />  
            )
    });

    render(){
        return <View style={{backgroundColor:'#deb887',flex:1}}></View>
    }
}
