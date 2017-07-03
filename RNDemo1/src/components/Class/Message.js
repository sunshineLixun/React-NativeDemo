import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class Message extends React.Component{
    static navigationOptions = ({navigation}) => ({
        // tabBarLabel: '消息',
        // headerTitle: '消息',
        title: '消息',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./source/消息@2x.png')}  
              selectedImage={require('./source/消息-选中@2x.png')}  
            />  
        ),
    })
    render(){
        return <View style={{flex:1,backgroundColor:'red'}}></View>
    }
}