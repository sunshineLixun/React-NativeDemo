import React, { Component } from 'react';
import { AppRegistry,View,Text,ListView,StyleSheet,TouchableOpacity,AlertIOS } from 'react-native';

export default class listViewClass extends Component{
    constructor(props){
        super(props);
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
          this.state = {
              dataSource: ds.cloneWithRows(['row1','row2','row3','row4']),
          };
    }

    render(){
        return(
            <View style={{flex:1,marginTop:20}}>
                <ListView 
                dataSource={this.state.dataSource} 
                renderRow={this._renderRow.bind(this)} 
                renderSeparator={this._renderSeparator.bind(this)}
                renderHeader={this._renderHeader.bind(this)}
                renderFooter={this._renderFooter.bind(this)}>
                </ListView>
            </View>
        );

    }

    _renderRow(rowData, sectionID, rowID, highlightRow){
        return( 
            <TouchableOpacity  onPress={()=>{
               if (rowID == 0) {
                AlertIOS.alert(rowID);
                highlightRow(sectionID,rowID) 
               }else if (rowID == 1) {
                AlertIOS.alert("标题",rowID,[
                    {text:'取消',onPress:this._cancleButton.bind(this),style:'cancle'},
                    {text:'确定',onPress:this._successButoon.bind(this),style:'default'}
                ]);
               }else if (rowID == 2) {
                   //带有输入框的alert
                AlertIOS.prompt('标题',rowID,[
                     {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancle'},
                     {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
                ],'secure-text');
               }else{
                AlertIOS.prompt('标题',rowID,[
                    {text:'取消',onPress:()=>console.log('点击了取消'),style:'cancle'},
                    {text:'确定',onPress:()=>console.log('点击了确定'),style:'default'}
                ],'plain-text',rowID);
               }
            }}>
                <View style={{flex:1,justifyContent:'center',height:50,alignItems:'center'}}>
                                <Text style={{fontSize:15}}>{rowData}</Text>
                 </View>
            </TouchableOpacity>
        );
    }

    _cancleButton(){
        console.log('点击了取消');
    }
        
    _successButoon(){
        console.log('点击了确定');
    }

     _renderSeparator(sectionID, rowID, adjacentRowHighlighted)  {
        console.log(sectionID,rowID,adjacentRowHighlighted);
        return (
            <View style={{height:1,backgroundColor:'#c0c0c0'}}></View>
        )
    }

    _renderHeader(){
        return(
            <View>
                <Text>头部视图</Text>
            </View>
        )
    }

    _renderFooter(){
        return(
            <View style={{marginTop:5,height:50,flex:1,justifyContent:'center'}}>
                <Text style={{fontSize:20}}>尾部视图</Text>
            </View>
        )
    }
}