import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

class Hello extends Component{

    timeUpdate(){
        var number = this.state.num;
        number ++;

        this.setState({
            num : number
        })
    }

     constructor(props){
            super(props);

            this.state = {
                num : 1,
            };

            setInterval(this.timeUpdate.bind(this), 1000);
        }

    render(){
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>欢迎来到 {this.props.name} 的直播间</Text>
                <Text style={styles.textStyle}>观众数量 {this.state.num} 人</Text>
            </View>
        );
    }
}

export default class setProps extends Component {
    render() {
        return (
            <Hello name='Sunshine' />
        );
    }
}

const styles=StyleSheet.create({
    viewStyle:{
        backgroundColor:'white',
        flex:1,
    },
    textStyle:{
        marginTop:20,
        alignSelf:'center',
        color:'red',
        fontSize:15,
    }
})