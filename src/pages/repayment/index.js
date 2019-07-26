import React, { Component } from 'react';
import { View, Text, Image, Modal, ScrollView} from 'react-native';
import { styles } from './styleCss';
import { postAddress, preAddress, token, userId, merchantId } from '../../../api';
import Toast from 'react-native-easy-toast';
import queryString from 'querystring';

class Repayment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible:  false,
            cardList: [],
            defaultCard: {
                bankName: '',
                number: '',
                amt: 0,
                actAmt: 0,
                serviceAmt: 0,
                payChannelCode: '',
                bankLogo: '',
                bankCardId: '',
                cardId: ''
            }
        }
    }

    selectCardList (id) {
        if (id == this.state.defaultCard.bankCardId) {
            this.setState( _ => ({
                visible: false
            }));
        } else {
            this.setBankList(id);
        }
    }   

    //重置银行卡
    setBankList  (id) {
        const arr = [];
        let obj = {};
        for (let i = 0; i < this.state.cardList.length; i++) {
            obj = this.state.cardList[i];
            obj.bankCard == id ? obj.isDefault = 'Y' : obj.isDefault = 'N';
            arr.push(obj);
        }

        this.getDefaultCard();
        this.setState({
            visible: false
        })
    }

    addCard () {
        this.setState({
            visible: false
        });
        this.props.navigation.navigate('BankList');
    }

    //基础信息
    baseInfo () {
        const _this = this;
        let t = new Date().getTime();
        let url = `${postAddress}/repayment/confirm?token=${token}&userId=${userId}&merchantId=${merchantId}&t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: queryString.stringify({
                billOrderId: _this.props.navigation.state.params.billOrderId,
                amt: _this.props.navigation.state.params.amt
            })
        }).then ( res => res.json())
            .then( res => {
                if (res.respCode === '000000') {
                    let data = res.data;
                    let defaultCard = Object.assign({}, this.state.defaultCard, {
                        bankName: data.bankName,
                        number: data.bankCode,
                        bankLogo: data.bankLogo,
                        amt: data.amt,
                        serviceAmt: data.serviceAmt,
                        actAmt: data.actAmt,
                        payChannelCode: data.payChannelCode
                    });
                    _this.setState({
                        defaultCard
                    });

                    _this.renderOwnCard();
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
                console.log(res);
            })
            .catch( err => {
                console.log(err);
            })
    }

    //获取卡列表并处理默认卡
    renderOwnCard () {
        const _this = this;
        let t = new Date().getTime();
        let url = `${preAddress}/bankCard/query?token=${token}&userId=${userId}&merchantId=${merchantId}&t=${t}`
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                merchantId: merchantId,
                payChannelCode: _this.state.payChannelCode
            })
        })
            .then( res => res.json() )
            .then( res => {
                console.log(res);
                if (res.respCode === '000000') {
                    _this.setState({
                        cardList: res.data
                    });

                    _this.getDefaultCard();
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( err => {
                console.log(err);
            })
    }

    //处理默认卡
    getDefaultCard () {
        var isDefaultArr = this.state.cardList.filter( item => {
            return item.isDefault == 'Y';
        });

        let defaultCard = Object.assign({}, this.state.defaultCard, {
            bankName: isDefaultArr[0].bankName,
            number: isDefaultArr[0].bankCard.substr(isDefaultArr[0].bankCard.length-4, 4),
            bankLogo: isDefaultArr[0].bankLog,
            bankCardId: isDefaultArr[0].bankCard
        });

        this.setState({
            defaultCard
        });
    }

    //选择卡
    selectCard () {
        this.setState({
            visible: true
        })
    }

    //关闭选择卡
    closeMask () {
        this.setState({
            visible: false
        })
    }

    //sure repay 
    repayIng () {
        const _this = this;
        let { navigate } = this.props.navigation;
        let { amt, periods, billOrderId, tradeType } = this.props.navigation.state.params;
        let t = new Date().getTime();
        let url = `${postAddress}/repayment/pay?token=${token}&userId=${userId}&merchantId=${merchantId}&t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amt,
                periods,
                billOrderId,
                bankCard: _this.state.defaultCard.bankCardId,
                tradeType
            })
        }).then( res => res.json())
        .then(res => {
            console.log(res);
            if (res.respCode === '000000') {
                navigate('RepayResult', {
                    status: true,
                    bankName: _this.state.defaultCard.bankName,
                    amount: amt
                })
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch( err => {
            console.log(err)
        });
    }
    

    componentDidMount() {
        this.baseInfo();
    }
    

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.small_prompt}>注意：还款支持余额还款，银行卡仅支持储蓄卡还款</Text>

                {/**选择卡 */}
                <View style={styles.bank_content}>
                    <View style={styles.bank_sel}>
                        <Text onPress={this.selectCard.bind(this)} style={styles.bank_sel_clk}></Text>
                        <View style={styles.left}>
                            <Image  style={styles.bankImg} source={{uri: this.state.defaultCard.bankLogo}}/>
                            <Text style={styles.bankName}>{this.state.defaultCard.bankName} ({this.state.defaultCard.number})</Text>
                        </View>
                        <Image style={styles.r_arrow} source={require('../../assets/right-arrow.png')} />
                    </View>
                </View>

                {/**amount description */}
                <View style={styles.repay_amount}>
                    <View style={styles.amount_inner}>
                        <Text style={styles.yen}>&yen;</Text>
                        <Text style={styles.account}>{this.state.defaultCard.amt}</Text>
                    </View>
                </View>

                <View style={styles.repay_des}>
                    <Text style={styles.a_txt}>本次还款手续费<Text style={styles.cred}>{this.state.defaultCard.serviceAmt}</Text>元，实际扣款金额<Text style={styles.cred}>{this.state.defaultCard.actAmt}</Text>元</Text>
                </View>

                <Text style={styles.sure} onPress={this.repayIng.bind(this)}>确认还款</Text>

                {/**mask */}
                <Modal animationType="slide" visible={this.state.visible} transparent={true}>
                    <View style={styles.mask_content}></View>
    
                    <View style={styles.popBox}>
                        <View style={styles.sel_nav}>
                            <Text style={styles.text1}>选择支付方式</Text>
                            <Text style={styles.closeBtn} onPress={this.closeMask.bind(this)}><Image style={styles.selImg} source={require('../../assets/delete.png')}/></Text>
                        </View>

                        <ScrollView style={{flex: 1}}>
                            {/**card list render */}

                            {
                                this.state.cardList.map( (item, index) => {
                                    return (
                                        <View style={styles.bank_list} key={index}>
                                            <Text onPress={this.selectCardList.bind(this, item.bankCard)} style={styles.mask_event}></Text>
                                            <View style={styles.bank_left}>
                                                <Image style={styles.bankImg_list} source={{uri: item.bankLog}} />
                                                <View>
                                                    <Text style={styles.bank_name_number}>{item.bankName}  ({item.bankCard.substr(item.bankCard.length-4, 4)})</Text>
                                                    <Text style={styles.bank_des}>单笔最大{item.limitPerTransaction}</Text>
                                                </View>
                                            </View>

                                            {
                                                item.isDefault == 'Y' ? <Image style={styles.select_icon} source={require('../../assets/icon_selected.png')}/> : <View />
                                            }
                                            
                                        </View>
                                    )
                                })
                            }
                            

                            {/**add card charge */}
                            <View style={styles.bank_list}>
                                <Text onPress={this.addCard.bind(this)} style={styles.mask_event}></Text>
                                <View style={styles.bank_left}>
                                    <Image style={styles.bankImg_list} source={require('../../assets/icon_tjyhk.png')} />
                                    <View>
                                        <Text style={styles.bank_name_number}>添加银行卡支付</Text>
                                        <Text style={styles.bank_des}>该交易只支持储蓄卡</Text>
                                    </View>
                                </View>
                                <Image style={styles.arrow_icon} source={require('../../assets/right-arrow.png')}/>
                            </View>
                        </ScrollView>
                    </View>

                </Modal>

                <Toast position="center" ref="toast"/>
            </View>
        )
    }
}

export default Repayment;