import React, { Component } from 'react';
import { View, Text, Image, Modal, ScrollView} from 'react-native';
import { styles } from './styleCss';
import { linkAddress } from '../../../api';
import Toast from 'react-native-easy-toast';

class Repayment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible:  false,
            cardList: [],
            defaultCard: {
                bankName: '',
                number: '',
                bankLogo: '',
                bankCardId: '',
                cardId: ''
            }
        }
    }

    selectCardList (id) {
        console.log(id);
        if (id == this.state.defaultCard.cardId) {
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
            obj.cardId == id ? obj.default = true : obj.default = false;
            arr.push(obj);
        }

        this.getDefaultCard(arr);
        this.setState({
            visible: false
        })
    }

    addCard () {
        console.log('add Card');
    }

    //获取卡列表并处理默认卡
    renderOwnCard () {
        const _this = this;
        fetch(`${linkAddress}/src/mock/ownCard.json`)
            .then( res => { return res.json(); })
            .then( res => {
                if (res.respCode === '000000') {
                    _this.setState( _ => ({
                        cardList: res.data
                    }));
                    _this.getDefaultCard(res.data);
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( err => {
                console.log(err);
            })
    }

    //处理默认卡
    getDefaultCard (data) {
        let defaultCard = data.filter( item => {
            return item.default === true;
        });

        let dataArr  = Object.assign({}, this.state.defaultCard, {
            bankName: defaultCard[0].bankName,
            bankCardId: defaultCard[0].bankCardId,
            cardId: defaultCard[0].cardId,
            bankLogo: defaultCard[0].bankLogo,
            number:  defaultCard[0].number,
        });
        
        this.setState( _ => ({
            defaultCard: dataArr
        }));
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

    componentDidMount() {
        this.renderOwnCard();
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
                        <Text style={styles.account}>317.79</Text>
                    </View>
                </View>

                <View style={styles.repay_des}>
                    <Text style={styles.a_txt}>本次还款手续费<Text style={styles.cred}>0.00</Text>元，实际扣款金额<Text style={styles.cred}>317.79</Text>元</Text>
                </View>

                <Text style={styles.sure}>确认还款</Text>

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
                                this.state.cardList.map( item => {
                                    return (
                                        <View style={styles.bank_list} key={item.cardId}>
                                            <Text onPress={this.selectCardList.bind(this, item.cardId)} style={styles.mask_event}></Text>
                                            <View style={styles.bank_left}>
                                                <Image style={styles.bankImg_list} source={{uri: item.bankLogo}} />
                                                <View>
                                                    <Text style={styles.bank_name_number}>{item.bankName}  ({item.number})</Text>
                                                    <Text style={styles.bank_des}>{item.smallText}</Text>
                                                </View>
                                            </View>

                                            {
                                                item.default ? <Image style={styles.select_icon} source={require('../../assets/icon_selected.png')}/> : <View />
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