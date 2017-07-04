import React, { Component } from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

export default class FriendsList extends Component{
    static navigationOptions = {
    drawerLabel: '小明',
  };
    render(){
        return(
             <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    //点击关闭侧滑
                    this.props.navigation.navigate('DrawerDemo')
                }}>
                    <Text>关闭侧滑栏</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
});
