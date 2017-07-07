import React, { Component } from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ListView,
    TouchableHighlight,
    ActivityIndicator,
    RefreshControl
} from 'react-native';
import {TabNavigator,StackNavigator} from 'react-navigation';
import TabBarItem from './TabBarItem'

const REQUEST_URL = 'http://www.imooc.com/api/teacher?type=4&num=30';

export default class Discover extends React.Component{

    constructor(props) {
        super(props);

          this.state = {
              ds: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
              load:false,
              refreshing:true
          };
        //   this._dataSource = [];
    };

    componentDidMount() {
        // this._dataSource = ['row1','row2','row3','row4','row5','row6','row7'];
        // this.setState({
        //     ds: this.state.ds.cloneWithRows(this._dataSource),
        // })
         this._getRequest()
    }

    _onRefresh(){
        this._getRequest()
    }

    _getRequest(){
        fetch(REQUEST_URL)
        .then((response)=>response.json())
        .then((jsonData)=>{
            this.setState({
                ds: this.state.ds.cloneWithRows(jsonData.data),
                load: true,
                //请求到数据之后，停止刷新 更新State状态
                refreshing:false
            })
        })
        .catch((error)=>{
            this.setState({
                load: true,
                refreshing: false
            })
            alert('请求失败');
        })
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
        if (!this.state.load) {
                return(
                    <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}> 
                        <ActivityIndicator 
                        size="large" 
                        color='red'
                        />
                    </View>
                    ) 
        }else{
            return (
            <View style={{backgroundColor:'white',flex:1}}>
                <ListView 
                dataSource={this.state.ds} 
                renderRow={this._renderRow.bind(this)} 
                renderSeparator={this._renderSeparator.bind(this)}
                refreshControl={
                    <RefreshControl 
                    title="Loading..."
                    refreshing={this.state.refreshing}
                    onRefresh={this._onRefresh.bind(this)}/>
                }>
                </ListView>
            </View>
            )
         }
        
    };

    _renderRow(rowData, sectionID, rowID, highlightRow){
        return( 
            <TouchableOpacity onPress={()=>{
                highlightRow(sectionID,rowID);
                }}>
            <View style={{flex:1,height:120,alignItems:'center',flexDirection:'row'}}>
                <Image 
                source={{uri: rowData.picSmall}}
                style={styles.imagStyle}></Image>
                <View style={styles.viewStyle}>
                    <Text style={styles.titleStyle} numberOfLines = {1}>{rowData.name}</Text>
                    <Text style={styles.textStyle} numberOfLines = {0}>{rowData.description}</Text>
                </View>
             </View>
            </TouchableOpacity>
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
    viewStyle: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imagStyle: {
        width: 100,
        height: 70,
        marginLeft: 20
    },
    textStyle: {
        fontSize:15,
        marginLeft:10,
        marginTop: 5,
    },
    titleStyle: {
        fontSize: 17,
        marginLeft: 10,
        color: '#f00',
        textAlign: 'center',
    }
})