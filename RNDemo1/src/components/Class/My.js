import React, { Component } from 'react';
import {View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class My extends React.Component{

     static navigationOptions = ({navigation})=>({
        tabBarLabel: '我的',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./source/我的@2x.png')}  
              selectedImage={require('./source/我的-选中@2x.png')}  
            />  
        ),
    });

    render(){
        return <View style={{backgroundColor:'#f5f5dc',flex:1}}></View>
    }
}