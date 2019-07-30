import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { styles } from './styleCss';
import { preAddress } from '../../../api';
import queryString from 'querystring';
import Toast from 'react-native-easy-toast';
import commons from '../../../getItems';

class BindCard extends Component {
    constructor (props) {
        super (props);
        this.state = {
            idCard: "",
            userName: '',
            token: '',
            merchantId:  '',
            userId: '',
            userPhone: "",
            smsCode: '',
            cardNumber: '',
            bankName: '',
            bankCode: '',
            status: false,
            sysSeqId: '',
            times: 60,
            smsStatus: true,
            timer: null,
            canClick: true
        }
    }

    changePhone (text) {
        text = text.replace(/\D+/g, '');
        this.setState({
            userPhone: text
        });
        this.chkIsEmptyAndFromat();
    }

    changeCode (text) {
        this.setState({
            smsCode: text
        });
        this.chkIsEmptyAndFromat();
    }

    changeCardNum (text)  {
        text = text.replace(/\D+/g, '');
        this.setState({
            cardNumber: text
        });
        this.chkIsEmptyAndFromat();
    }

    chkIsEmptyAndFromat () {
        const _this = this;
        setTimeout(function(){

            let {userPhone, smsCode, cardNumber} = _this.state;
            let regPhone = /^1[1|3|4|5|7|8][0-9]{9}/;
            if (regPhone.test(userPhone) && smsCode !== '' && cardNumber.length >=16) {
                _this.setState({
                    status: true
                })
            } else {
                _this.setState({
                    status: false
                })
            }

        }, 30);
    }

    initInfo () {
        const _this = this;
        let t = new Date().getTime(),
            url = `${preAddress}/bankCard/bindCardLog/initBandCardInfo?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`;
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then ( res => res.json())
        .then ( res => {
            console.log(res);
            if (res.respCode === '000000') {
                let data = res.data;
                _this.setState({
                    idCard: data.idCard,
                    userPhone: data.userPhone,
                    userName: data.userName,
                    bankCode: data.bankCode
                })
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch( err => {
            console.log(err);
        })
    }

    //失焦
    cardBlur () {
        const _this = this;
        let t = new Date().getTime(),
            url = `${preAddress}/cabin/bank?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&cardNo=${this.state.cardNumber}&t=${t}`;
        fetch (url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then( res => res.json())
        .then( res => {
            console.log(res);
            if (res.respCode === '000000') {
                _this.setState({
                    bankName: res.bankName
                })
            } else {
                _this.setState({
                    bankName: ''
                })
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch ( err => {
            console.log(err)
        })
    }

    //获取验证码
    getSmsCode () {
        let regPhone = /^1[1|3|4|5|7|8][0-9]{9}/;
        if (!regPhone.test(this.state.userPhone)) {
            this.refs.toast.show('请输入正确的手机号码');
            return false;
        } 
        
        if (!this.state.canClick) {
            return false;
        }

        this.setState({
            canClick: false
        });

        let _this = this,
            t = new Date().getTime(),
            url = `${preAddress}/bankCard/verifyCode?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: queryString.stringify({
                idCardName: _this.state.userName,
                idCard: _this.state.idCard,
                bankCard: _this.state.cardNumber,
                bankCode: _this.state.bankCode,
                bankName: _this.state.bankName,
                phoneNum: _this.state.userPhone
            })
        })
        .then ( res => res.json())
        .then ( res => {
            _this.setState({
                canClick: true
            });
            if (res.respCode === '000000') {
                _this.openClock();
                _this.refs.toast.show("获取验证码成功");
                _this.setState({
                    sysSeqId: res.data.sysSeqId
                });
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch ( err => {
            _this.setState({
                canClick: true
            });
            console.log(err)
        })
    }

    //开启定时器
    openClock () {
        const _this = this;
        clearInterval(this.state.timer);
        this.state.timer = setInterval(function() {
            _this.setState({
                times: _this.state.times - 1
            });
            if (_this.state.times < 0) {
                _this.setState({
                    times: 60,
                    smsStatus: true
                });
                clearInterval(_this.state.timer);
            } else {
                _this.setState({
                    smsStatus: false
                });
            }
        }, 1000);
    }

    //绑定银行卡
    sureBindCard () {
        let _this = this,
            t = new Date().getTime(),
            url = `${preAddress}/bankCard/bindConfirm?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: queryString.stringify({
                sysSeqId: _this.state.sysSeqId,
                verifyCode: _this.state.smsCode
            })
        })
        .then ( res => res.json())
        .then ( res => {
            console.log(res);
            if (res.respCode === '000000') {
                _this.refs.toast.show('绑卡成功');
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch ( err => {
            console.log(err);
        })
    }

    componentDidMount() {
        var _this = this;
        commons.getItemParams(this, function(){
            _this.initInfo();
        });
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
                            <Text style={styles.title_dse}>{this.state.userName}</Text>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>身份证号</Text>
                            <Text style={styles.title_dse}>{this.state.idCard}</Text>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>银行卡号</Text>
                            <TextInput style={styles.ipt} value={this.state.cardNumber} maxLength={19}  onBlur={this.cardBlur.bind(this)} onChangeText={this.changeCardNum.bind(this)} placeholder="请输入银行卡号"/>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>发卡银行</Text>
                            <Text style={styles.title_dse}>{this.state.bankName}</Text>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>预留手机</Text>
                            <TextInput style={styles.ipt} value={this.state.userPhone} maxLength={11} onChangeText={this.changePhone.bind(this)} placeholder="请输入手机号码"/>
                        </View>

                        <View style={styles.line_outer}>
                            <Text style={styles.title_line}>验证码</Text>
                            <View style={styles.smsCode}>
                                <TextInput style={styles.ipt} maxLength={6} value={this.state.smsCode} onChangeText={this.changeCode.bind(this)} placeholder="请输入验证码"/>
                                {
                                    this.state.smsStatus 
                                    ? <Text style={styles.sms} onPress={this.getSmsCode.bind(this)}>获取验证码</Text>
                                    : <Text style={[styles.sms, styles.sms_gray]}>{this.state.times}S后重新获取</Text>
                                }
                                
                            </View>
                        
                        </View>
                    </View>

                    <View style={styles.bind_btn_set}>
                        {
                            this.state.status 
                                ? <Text onPress={this.sureBindCard.bind(this)} style={styles.bind_act}>确认绑定到账银行卡</Text>
                                : <Text style={styles.bind_btn}>确认绑定到账银行卡</Text>
                        }
                        
                    </View>
                    <Text style={styles.support}>支持的银行卡和限额</Text>
                </ScrollView>
                <Toast position="center" ref="toast"/>
            </View>
        )
    }
}

export default BindCard;