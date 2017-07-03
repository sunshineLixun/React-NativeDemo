import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class Discover extends React.Component{

    static navigationOptions =({navigation})=>({
        // tabBarLabel: '发现',
        // headerTitle: '发现',
        title: '发现',
        headerRight:(
            <TouchableOpacity onPress={()=>
                    navigation.navigate('DiscoverDetail',{'name': 'Sunshine'})
                }>
                <View style={{width:70, height:44, justifyContent:'center',alignItems:'center'}}>
                     <Text style={{color:'blue',fontSize:15}}>详情</Text>
                </View>
            </TouchableOpacity>
        ),
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./source/发现@2x.png')}  
              selectedImage={require('./source/发现-选中@2x.png')}  
            />  
            ),
    });

    render(){
        return (
            <View style={{backgroundColor:'#deb887',flex:1}}>
            </View>
        )
    }
}

