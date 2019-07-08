import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import { styles } from './pLoginStyle';

class PLogin extends Component {

    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            password: '',
            status: false
        }
    }

    _gotoLogo () {
        var { navigate } = this.props.navigation;
        return navigate('Login');
    }

    _gotoForget () {
        var { navigate } = this.props.navigation;
        return navigate('ModifyPassword');
    }

    _onChangeText (text) {
        const newText = text.replace(/[^\d]+/, '');
        const mobileExp = /^1[3|4|5|7|8][0-9]{9}/;
        const { password } = this.state;
        this.setState({inputValue: newText});
        if (mobileExp.test(newText) && password.length > 0) {
            this.setState({
                status: true
            })
        } else {
            this.setState({
                status: false
            })
        }
    }

    _onKeyPsw (text) {
        this.setState({password: text});
    }

    _onLogin () {
        const { navigate } = this.props.navigation;
        return navigate('Home');
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>密码登录</Text>
                </View>

                <View style={styles.iptBox}>
                    <View style={styles.outerBox}>
                        <Image style={styles.iconImg} source={require('../../assets/icon_phone.png')}/>
                        <TextInput 
                            style={[styles.inpText]} 
                            maxLength = {11}
                            value={this.state.inputValue}
                            onChangeText={this._onChangeText.bind(this)}
                            keyboardType='numeric'
                            placeholder="请输入手机号" />
                    </View>
            
                    <View style={styles.outerBox}>
                        <Image style={styles.iconImg} source={require('../../assets/icon_password.png')}/>
                        <TextInput
                            keyboardType='number-pad'
                            style={[styles.inpText]}
                            value={this.state.password}
                            onChangeText={this._onKeyPsw.bind(this)}
                            placeholder="请输入密码"/>
                    </View>    
                    
                    <TouchableHighlight
                        style={[this.state.status ? styles.getCode : styles.noCode, styles.smsBtn]}
                        onPress={this._onLogin.bind(this)}
                        underlayColor="#bbcaff">
                        <Text style={styles.btnText}>确定</Text>
                    </TouchableHighlight>

                    {/**忘记密码 */}
                    <View style={styles.forgot}>
                        <TouchableHighlight underlayColor="#fff" onPress={this._gotoForget.bind(this)}>
                            <Text style={styles.forgotText}>忘记密码?</Text>
                        </TouchableHighlight>

                        <TouchableHighlight underlayColor="#fff" onPress={this._gotoLogo.bind(this)}>
                            <Text style={styles.forgotText}>验证码登录/注册</Text>
                        </TouchableHighlight>
                    </View>

                </View>

                
            </View>
        )
    }
}

export default PLogin;