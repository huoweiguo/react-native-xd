import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Platform } from 'react-native';
import { styles } from './setPasswordStyle';
import Password from '../../components/password';

class SetPassword extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: '',
            time: 60,
            getText: '',
            smsStatus: false,
            mobile: '',
            device: '',
            captchaId: '',
            validate: ''
        }
    }

    validateLogin () {
        const _this = this;
        fetch('http://huopan-test.baijiajiekuan.com/api/preloan/userReg/checkAndSendMsg', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                phoneNum: _this.state.mobile,
                merchantId: 'M007',
                regChannelId: _this.state.device == 'ios' ? 'M007001' : 'M007000',
                device: _this.state.device,
                isLogin: 1,
                captchaId: _this.state.captchaId,
                validate: _this.state.validate
              })
        })
            .then( res => { return res.json()})
            .then( res => {
                console.log(res);
            })
            .catch ( err => {
                console.log(err);
            })
    }

    _getSmsCode () {
        this.setState({smsStatus: true, getText: this.state.time + 'S'});
        var _this = this;
        interval = setInterval(function () {
            time = --_this.state.time;
            if (time <= 0) {
                clearInterval(interval);
                _this.setState({
                    time: 60,
                    smsStatus: false
                });
            } else {
                _this.setState({
                    getText: time + 'S'
                });
            }

        }, 1000);
    }

    componentDidMount () {
        const mobile = this.props.navigation.state.params.mobile;
        this.setState({
            mobile: mobile,
            device: Platform.OS
        });
        this.validateLogin();
    }


    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>短信验证码</Text>
                    <Text style={styles.smallText}>短信验证码已发送至{this.state.mobile}</Text>
                </View>
                <View>
                    <Password maxLength={4} isShow={true} onChange={value => {
                        this.setState({
                            code: value
                        })
                    }}/>
                </View>
                <View style={{marginTop: 20}}>
                    {
                        this.state.smsStatus ?
                        <Text style={{textAlign:'center'}}><Text style={{color:'#567bff',}}>{this.state.getText}</Text>后重新获取</Text> :
                        <Text style={{color:'#567bff',textAlign:"center"}} onPress={this._getSmsCode.bind(this)}>重新获取验证码</Text>
                    }
                    
                </View>

                {/* <View>
                    <TouchableHighlight underlayColor="#bbcaff" style={styles.btn}>
                        <Text style={styles.btnText}>确定</Text>
                    </TouchableHighlight>
                </View> */}
            </View>
        )
    }
}

export default SetPassword;