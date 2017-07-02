import React, { Component } from 'react';
import { AppRegistry,View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';


class Discover extends React.Component{
    render(){
        return <Text style={{justifyContent:'center',alignItems:'center',fontSize:20}}>ChatText</Text>
    }
}

class My extends React.Component{
    render(){
        return <Text style={{justifyContent:'center',alignItems:'center',fontSize:20}}>MyText</Text>
    }
}

const MainScreenNavigator = TabNavigator({
    Discover: {
        screen: Discover,
        navigationOptions:{
            tabBarLabel: '发现',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./../source/发现.png')} 
                style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
        tabBarOptions: {
                 activeTintColor: '#e91e63',
                 inactiveTintColor: 'red',
                 labelStyle: {
                    fontSize: 15,
                },
    },
        swipeEnabled:false,
    },

    My: {
        screen: My,
        navigationOptions:{
            tabBarLabel: '我的',
            tabBarIcon:({tintColor}) => (
                <Image source={require('./../source/我的.png')} 
                style={[styles.icon, {tintColor: tintColor}]}/>
            ),
        },
        swipeEnabled:false,
    },
});

export default class NavigationDemo extends React.Component{
    render(){
        return(
            <MainScreenNavigator>
                <View style={{flex:1}}></View>
            </MainScreenNavigator>
        )
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});