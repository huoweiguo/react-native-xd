import React, { Component } from 'react';
import { View, Text, TextInput, Image, TouchableHighlight, Alert } from 'react-native';
import { styles } from './modifyPasswordStyle';

class ModifyPassword extends Component {
    constructor (props) {
        super(props);
        this.state = {
            inputValue: '',
            password: '',
            status: false,
            smsStatus: false,
            getText: '',
            time: 60
        }
    }
    _onChangeText (text) {
        const newText = text.replace(/[^\d]+/, '');
        const mobileExp = /^1[3|4|5|7|8][0-9]{9}/;
        this.setState({inputValue: newText});

        if (mobileExp.test(newText) && this.state.password) {
            this.setState({status: true});
        } else {
            this.setState({status: false});
        }
    }

    _onChangePassword (text) {
        const newText = text.replace(' ', '');
        this.setState({password: newText});
        const mobileExp = /^1[3|4|5|7|8][0-9]{9}/;
        if (mobileExp.test(this.state.inputValue) && newText != '') {
            this.setState({status: true});
        } else {
            this.setState({status: false});
        }
    }

    _getVerl () {
        const mobileReg = /^1[3|4|5|7|8][0-9]{9}$/;
        if (!mobileReg.test(this.state.inputValue)) {
            Alert.alert('手机号码格式不正确');
            return false;
        }
        this.setState({smsStatus: true, getText: this.state.time + 'S后重新获取'});
        this.countDown();
    }

    countDown () {
        var _this = this;
        inter = setInterval(function () {
            time = --_this.state.time;
            if (time <= 0) {
                clearInterval(inter);
                _this.setState({
                    time: 60,
                    smsStatus: false
                });
            } else {
                _this.setState({
                    getText: time + 'S后重新获取'
                });
            }

        }, 1000);
    }

    _setPass () {
        let { navigate } = this.props.navigation;
        navigate('SetPassword');
    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>修改密码</Text>
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
                            style={[styles.inpText]}
                            value={this.state.password}
                            onChangeText={this._onChangePassword.bind(this)}
                            placeholder="请输入验证码"/>
                            
                        {
                            this.state.smsStatus ? 
                                <Text style={styles.getVerlCount}>{this.state.getText}</Text> : 
                                <Text style={styles.getVerl} onPress={this._getVerl.bind(this)}>获取验证码</Text>
                        }
                        
                    </View>    
                    
                    {
                        this.state.status ? 
                            <TouchableHighlight style={[styles.getCode,styles.smsBtn]} onPress={this._setPass.bind(this)} underlayColor="#bbcaff">
                                <Text style={styles.btnText}>确定</Text>
                            </TouchableHighlight> :
                            <TouchableHighlight style={[styles.noCode,styles.smsBtn]} onPress={this._setPass.bind(this)} underlayColor="#bbcaff">
                                <Text style={styles.btnText}>确定</Text>
                            </TouchableHighlight>
                    }
                </View>
            </View>
        )
    }
}

export default ModifyPassword;