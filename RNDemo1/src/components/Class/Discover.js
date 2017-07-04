import React, { Component } from 'react';
import {View,Text,Image,StyleSheet,TouchableOpacity,ListView} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

export default class Discover extends React.Component{

    constructor(props) {
        super(props);
         var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.state = {
              dataSource: ds.cloneWithRows(['row1','row2','row3','row4','row5','row6','row7']),
          };
    }

    static navigationOptions = ({navigation})=>({
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
        headerLeft:(
            <TouchableOpacity onPress={()=>
                    navigation.navigate('FriendsList')
                }>
                <View style={{width:70, height:44, justifyContent:'center',alignItems:'center'}}>
                     <Text style={{color:'blue',fontSize:15}}>好友</Text>
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
            <View style={{backgroundColor:'white',flex:1}}>
                <ListView 
                dataSource={this.state.dataSource} 
                renderRow={this._renderRow.bind(this)} 
                renderSeparator={this._renderSeparator.bind(this)}>
                </ListView>
            </View>
        )
    };


    _renderRow(rowData, sectionID, rowID, highlightRow){
        return( 
            <View style={{flex:1,height:100,alignItems:'center',flexDirection:'row',}}>
                <Image source={require('./source/Merry.jpg')}
                style={styles.imagStyle}></Image>
                <Text style={styles.titleStyle}>标题</Text>
                <Text style={styles.textStyle}>{rowData}</Text>
            </View>
        );
    };

    _renderSeparator(sectionID, rowID, adjacentRowHighlighted)  {
        console.log(sectionID,rowID,adjacentRowHighlighted);
        return (
            <View style={{height:1,backgroundColor:'#c0c0c0'}}></View>
        )
    };
    
}

const styles = StyleSheet.create({
    imagStyle: {
        width: 50,
        height: 50,
        marginLeft: 20
    },
    textStyle: {
        fontSize:15,
        marginLeft:10
    },
    titleStyle: {
        fontSize: 20,
        marginLeft: 10
    }
})