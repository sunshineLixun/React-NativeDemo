import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default class DiscoverDetail extends React.Component{

    static navigationOptions =({navigation})=>({
        title:`${navigation.state.params.name}`,
        headerBackTitle: '返回',
        headerStyle:{
            backgroundColor: 'red',
        },
    });

    render(){
        return (
            <View style={{backgroundColor:'#deb887',flex:1}}>
            </View>
        )
    }
}