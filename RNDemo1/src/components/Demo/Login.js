import React, { Component } from 'react';
import { View,Image,Text,TextInput,StyleSheet,Dimensions } from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from './Button'

class Login extends Component{
    static navigationOptions = ({navigation})=>({
        headerTitle: '登录',
    })

    render(){
        return(
            <View style={styles.container}>
                <Image source={require('./../../images/blue.png')} 
                        style={styles.imageSize}>
                     <TextInput style={styles.textInput}
                                placeholder="请输入账号/邮箱"
                                placeholderTextColor='#f0f8ff'
                                keyboardType='default'
                                returnKeyType='done'
                                keyboardAppearance='dark'/>
                     <TextInput style={styles.passwordTextInput}
                                placeholder="请输入密码"
                                placeholderTextColor='#f0f8ff'
                                keyboardType='default'
                                returnKeyType='done'
                                keyboardAppearance='dark'
                                secureTextEntry={true}/>
                     <Button  title="登录"
                              onPress={() => alert('点击了登录按钮')}
                              />       
                </Image>
            </View>
        )
    };
}

const LoginStackNavigation = StackNavigator(
    {
        Login: {screen: Login},
    },
    {
        initialRouteName: 'Login',
        mode:'card',
        headerMode:'screen',
    }
);


export default class LoginDemo extends Component{
    render(){
        return <LoginStackNavigation />
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
    },
    imageSize: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        alignItems: 'center',
    },
    textInput: {
        marginTop: Dimensions.get('window').height / 2 - 100,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'cyan',
        borderWidth: 1,
        height: 35,
        borderRadius: 5,
        paddingLeft: 8,
        fontSize: 14,
    },
    passwordTextInput: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        borderColor: 'cyan',
        borderWidth: 1,
        height: 35,
        borderRadius: 5,
        paddingLeft: 8,
        fontSize: 14,
    },
});