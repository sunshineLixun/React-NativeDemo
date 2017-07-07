import React, { Component } from 'react';
import { View } from 'react-native';



export default class SettingDetail extends React.Component{

    static navigationOptions = ({navigation}) => ({
        title:`${navigation.state.params.name}`,
        headerBackTitle: '返回',
        headerBackTitleStyle:{
            color:'black'
        }
    })

    render(){
        return(
            <View style={{flex: 1,backgroundColor: 'white',}} />
        )
    };
}