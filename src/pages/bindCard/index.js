import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './styleCss';

class BindCard extends Component {
    constructor (props) {
        super (props);
        this.state = {
            cardNumber: "6222028736254161",
            cardPhone: "13616671458",
            smsCode: ''
        }
    }
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.header_nav}>注意: 请绑定您的借记卡或储蓄卡，不支持绑定信用卡</Text>
                <ScrollView style={{flex: 1}}>
                    {/**personal info */}    
                    <View style={styles.p_info}>
                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>持卡人</Text>
                            <Text style={styles.title_dse}>霍维国 & JSON.HUO</Text>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>身份证号</Text>
                            <Text style={styles.title_dse}>36251627282821982X</Text>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>银行卡号</Text>
                            <TextInput value={this.state.cardNumber} placeholder="请输入银行卡号"/>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>发卡银行</Text>
                            <Text style={styles.title_dse}>中国银行</Text>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>预留手机</Text>
                            <TextInput style={styles.ipt} value={this.state.cardPhone} placeholder="请输入手机号码"/>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>验证码</Text>
                            <View style={styles.smsCode}>
                                <TextInput style={styles.ipt} value={this.state.smsCode} placeholder="请输入验证码"/>
                                <Text style={styles.sms}>获取验证码</Text>
                            </View>
                        
                        </View>
                    </View>

                    <View style={styles.bind_btn_set}>
                        <Text style={styles.bind_btn}>确认绑定到账银行卡</Text>
                    </View>
                    <Text style={styles.support}>支持的银行卡和限额</Text>
                </ScrollView>
            </View>
        )
    }
}

export default BindCard;