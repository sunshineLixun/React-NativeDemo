import React, { Component,PropTypes } from 'react';
import { Text,TouchableOpacity,StyleSheet } from 'react-native';

export default class Button extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func
    }

    render(){
        return(
            <TouchableOpacity style={styles.touchStyle}
                              onPress={()=>{
                                if (this.props.onPress) {
                                    this.props.onPress(this)
                                }
                              }}
            >
                <Text style={styles.textStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        )
    };
}

const styles = StyleSheet.create({
    touchStyle: {
        marginTop: 10,
        borderRadius: 5,
        width: 200,
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#4EA5F0',
    },
    textStyle: {
        color:'white',
        textAlign: 'center',
        fontSize: 18,
    }
});