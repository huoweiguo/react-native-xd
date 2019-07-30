import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image, Platform } from 'react-native';
import { styles } from './pLoginStyle';
import Toast from 'react-native-easy-toast';
import { preAddress, merchantId } from '../../../api';
import StorageUtil from '../../../storageUtil';

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
    
    chkStatus() {
        let mobileExp = /^1[0-9]{10}/;
        let { password, inputValue } = this.state;
        if (mobileExp.test(inputValue) && password.length > 0) {
            this.setState({
                status: true
            });
        } else {
            this.setState({
                status: false
            });
        }
    }
    _onChangeText (text) {
        this.setState({inputValue: text});
        this.chkStatus();
    }

    _onKeyPsw (text) {
        this.setState({password: text});
        this.chkStatus();
    }

    _onLogin () {
        let regPhone = /^1[0-9]{10}/;
        let psw = this.state.password.replace(/\s/g, '');
        if (!regPhone.test(this.state.inputValue)) {
            this.refs.toast.show('手机号码格式不正确');
            return false;
        }

        if (psw === '') {
            this.refs.toast.show('密码不能为空');
            return false;
        }

        let t = new Date().getTime(),
            _this = this;
            url = `${preAddress}/userReg/pwdLogin?t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                phoneNum: _this.state.inputValue,
                userPwd: _this.state.password,
                merchantId: merchantId,
                device: Platform.OS,
                deviceId: ''
            })
        })
        .then ( res => res.json())
        .then ( res => {
            console.log(res);
            if(res.respCode === '000000') {
                StorageUtil.save('token',res.data.token);
                StorageUtil.save('userId', res.data.userId);
                StorageUtil.save('merchantId', res.data.merchantId);
                StorageUtil.save('userName', res.data.userName);
                _this.refs.toast.show("登录成功");
                const { navigate } = this.props.navigation;
                setTimeout(function () {
                    navigate('Home');
                }, 1500);
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch ( err => {
            console.error(err);
        })
    }

    componentDidMount() {
      console.log('login');
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

                <Toast position="center" ref="toast"/>
            </View>
        )
    }
}

export default PLogin;