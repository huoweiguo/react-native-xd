import React, { Component } from 'react';
import { View } from 'react-native';
import PasswordGesture from 'react-native-gesture-password';

class Gesture extends Component {
    constructor (props) {
        super(props);
        this.state = {
            message: '请输入您的密码',
            status: 'normal'
        }
    }

    onReset () {
        this.setState({
            status: 'normal',
            message: '请再一次输入您的密码'
        });
    }

    onStart() {
        this.setState({
            status: 'normal',
            message: '请输入您的密码'
        });
    }

    onEnd (password) {
        let _this = this;
        if (password == '14789') {
            this.setState({
                status: 'right',
                message: '输入密码正确'
            });
 
        } else {
            this.setState({
                status: 'wrong',
                message: '密码错误，请重试'
            });

            setTimeout(function () {
                _this.onStart();
            }, 1000);
            
        }
    }

    render () {
        return (
            <View>
                <PasswordGesture 
                    ref='pg'
                    status={this.state.status}
                    message={this.state.message}
                    onStart={() => this.onStart()}
                    onEnd={(password) => this.onEnd(password)}
                />
            </View>
        )
    }
}

export default Gesture;