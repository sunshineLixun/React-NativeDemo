import React, { Component } from 'react';
import { AppRegistry,View,Text,Image,StyleSheet} from 'react-native';
import {TabNavigator,TabBarBottom} from 'react-navigation';


class Discover extends React.Component{

    static navigationOptions =({navigation})=>({
        tabBarLabel: '发现',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./../source/发现@2x.png')}  
              selectedImage={require('./../source/发现-选中@2x.png')}  
            />  
            )
    });

    render(){
        return <Text style={{justifyContent:'center',alignItems:'center',fontSize:20}}>ChatText</Text>
    }
}

class My extends React.Component{

     static navigationOptions = ({navigation})=>({
        tabBarLabel: '我的',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./../source/我的@2x.png')}  
              selectedImage={require('./../source/我的-选中@2x.png')}  
            />  
        ),
    });

    render(){
        return <Text style={{justifyContent:'center',alignItems:'center',fontSize:20}}>MyText</Text>
    }
}

class Order extends React.Component{
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '订单',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./../source/订单@2x.png')}  
              selectedImage={require('./../source/订单-选中@2x.png')}  
            />  
        ),
    })

    render(){
        return(
            <Text style={{justifyContent:'center',alignItems:'center',fontSize:20}}>MyText</Text>
        )
    }
}

class Message extends React.Component{
    static navigationOptions = ({navigation}) => ({
        tabBarLabel: '消息',
        tabBarIcon:({tintColor,focused}) => (
            <TabBarItem  
              tintColor={tintColor}  
              focused={focused}  
              normalImage={require('./../source/消息@2x.png')}  
              selectedImage={require('./../source/消息-选中@2x.png')}  
            />  
        ),
    })
    render(){
        return <View style={{flex:1,backgroundColor:'red'}}></View>
    }
}

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

//自定义组件
 class TabBarItem extends Component{
    render(){
        return(
            <Image source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
             style={[{tintColor:this.props.tintColor},styles.icon]}/>
        )
    }
}

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  },
});