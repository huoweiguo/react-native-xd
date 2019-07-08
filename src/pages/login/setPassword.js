import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { styles } from './setPasswordStyle';
import Password from '../../components/password';

class SetPassword extends Component {
    constructor (props) {
        super(props);
        this.state = {
            password: ''
        }
    }

    _onChange (value) {

    }

    render () {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>设置密码</Text>
                    <Text style={styles.smallText}>输入6位密码，别太复杂，容易忘记</Text>
                </View>
                <View>
                    <Password maxLength={6} onChange={value => {
                        this.setState({
                            password: value
                        })
                    }}/>
                </View>

                <View>
                    {
                        this.state.password.length === 6 ? 
                        (<TouchableHighlight underlayColor="#bbcaff" style={styles.btnAct}>
                            <Text style={styles.btnText}>确定</Text>
                        </TouchableHighlight>) : 
                        (<TouchableHighlight underlayColor="#bbcaff" style={styles.btn}>
                            <Text style={styles.btnText}>确定</Text>
                        </TouchableHighlight>)
                    }
                </View>
            </View>
        )
    }
}

export default SetPassword;