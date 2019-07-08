import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './setPasswordStyle';
import Password from '../../components/password';

class SetPassword extends Component {
    constructor (props) {
        super(props);
        this.state = {
            code: '',
            time: 60,
            getText: '',
            smsStatus: false
        }
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


    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>短信验证码</Text>
                    <Text style={styles.smallText}>短信验证码已发送至15123059697</Text>
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