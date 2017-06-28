import React, {Component} from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

//组件传值
class SonComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            money:0
        };
    }

    receiveMoney(money){
        this.setState({
            money:money
        });
    }

    render(){
        return(
            <View style={styles.sonViewStyle}>  
                <Text style={{fontSize:15,color:'red'}}>{this.props.name}的直播间</Text>
                <Text style={{fontSize:15,color:'red'}}>总共收到{this.state.money}元的生活费</Text>
            </View>
        )
    }
}

class FatherComponent extends Component{
    render(){
        return(
            
            <View style={{flex:1}}>
                <SonComponent name={this.props.name} />
            </View>
            
        );
    }
}

export default class componentByValue extends Component{
    render(){
        return(
            <FatherComponent name="lx" />
        );
    }
}

const styles = StyleSheet.create({
    sonViewStyle:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        marginTop:20
    }
});