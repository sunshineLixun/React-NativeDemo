import React, { Component } from 'react';
import { AppRegistry,View,Text,ListView,StyleSheet } from 'react-native';

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
                renderSeparator={this._renderSeparator.bind(this)}>
                </ListView>
            </View>
        );

    }

    _renderRow(rowData, sectionID, rowID, highlightRow){
        console.log(rowData,sectionID,rowID,highlightRow);
        return(
            <View style={{flex:1,justifyContent:'center',height:50,alignItems:'center'}}>
                <Text style={{fontSize:15}}>{rowData}</Text>
            </View>
        );
    }

     _renderSeparator(sectionID, rowID, adjacentRowHighlighted)  {
        console.log(sectionID,rowID,adjacentRowHighlighted);
        return (
            <View style={{height:1,backgroundColor:'black'}}></View>
        )
    }


}
