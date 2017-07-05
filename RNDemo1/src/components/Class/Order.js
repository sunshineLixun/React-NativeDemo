import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class Order extends React.Component{
    static navigationOptions = ({navigation}) => ({
        // tabBarLabel: '订单',
        title: '订单',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./source/订单@2x.png')}  
              selectedImage={require('./source/订单-选中@2x.png')}  
            />  
        ),
    })

    render(){
            return <View style={{backgroundColor:'#6495ed',flex:1}}></View>
    }    
}