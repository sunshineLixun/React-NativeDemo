import React, { Component } from 'react';
import { AppRegistry,View,Text,ListView,StyleSheet } from 'react-native';

export default class listViewClass extends Component{

    constructor(props){
        super(props);
          var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

          this.state = {
              dataSource: ds.cloneWithRows(['row 1', 'row 2']),
          };
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ListView dataSource={this.state.dataSource} renderRow={this._renderRow.bind(this)}>
                </ListView>
            </View>
        );

    }

    _renderRow(rowData, sectionID, rowID, highlightRow){
        console.log(rowData,sectionID,rowID,highlightRow);
        return(
            <View>
                <Text>{rowData}</Text>
            </View>
        );
    }


}