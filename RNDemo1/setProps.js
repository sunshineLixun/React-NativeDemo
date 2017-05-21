import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

class Hello extends Component{
    render(){
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>Hello {this.props.name}</Text>
            </View>
        );
    }
}

export default class setUpProps extends Component {
    render() {
        return (
            <Hello name='Sunshine' />
        );
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        backgroundColor:'#b8860b',
        flex:1
    },
    textStyle:{
        marginTop:20,
        fontSize:12
    }
})