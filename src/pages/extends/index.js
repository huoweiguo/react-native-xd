import React, { Component } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { postAddress } from '../../../api';
import { styles } from './styleCss';
import queryString from 'querystring';
import Toast, {DURATION} from 'react-native-easy-toast';
import commons from '../../../getItems';

class extendDate extends Component {
    constructor (props) {
        super(props);
        this.state = {
            modalVisible: false,
            isCost: true,
            extendsDet: {
                loanExTotalFee: 0,
                loanExManagementFee: 0,
                loanExPoundageFee: 0,
                loanExInterst: 0,
                loanExOverdueFee: 0,
                exDay: 0,
                delayLoanFee: 0,
                delayTotalFee: 0,
                periodsEndDate: ''
            }
        }
    }

    pressCost ()  {
        this.setState({
            modalVisible: true,
            isCost: true
        })
    }

    hideCost ()  {
        this.setState({
            modalVisible: false
        })
    }

    showCost () {
        this.setState({
            modalVisible: true,
            isCost: false
        })
    }

    renderExtends () {
        const _this = this;
        let t = new Date().getTime();
        let url = `${postAddress}/loanEx/caculate?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: queryString.stringify({
                billOrderId: _this.props.navigation.state.params.billOrderId
            })
        }).then( res => res.json())
        .then( res => {
            console.log(res);
            if (res.respCode === '000000') {
                let data = res.data;
                _this.setState({
                    loanExTotalFee: data.loanExTotalFee,
                    loanExManagementFee: data.loanExManagementFee,
                    loanExPoundageFee: data.loanExPoundageFee,
                    loanExInterst: data.loanExInterst,
                    loanExOverdueFee: data.loanExOverdueFee,
                    exDay: data.exDay,
                    delayLoanFee: data.delayLoanFee,
                    delayTotalFee: data.delayTotalFee,
                    periodsEndDate: data.periodsEndDate
                })
            }  else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch( err => {
            console.log(err);
        })
    }

    //确认展期
    sureExtends () {
        let { navigate } = this.props.navigation;
        let {billOrderId, periods} = this.props.navigation.state.params;
        navigate('Repayment', {
            billOrderId: billOrderId,
            periods: periods,
            tradeType: 'ZQ',
            amt: this.state.loanExTotalFee
        })
    }

    componentDidMount() {
        let _this = this;
        commons.getItemParams(this, function(){
            _this.renderExtends()
        });
    }
    

    render () {
        return (
            <View style={styles.container}>
                {/**展期header */}
                <View style={styles.extends_amount}>
                    <Text style={styles.extends_des}>展期还款金额(元)</Text>
                    <View style={styles.extends_prompt}>
                        <View style={styles.extends_v1}>
                            <Text style={{fontSize: 16, color: '#222336', lineHeight: 22, marginTop: 5, marginRight: 8}}>&yen;</Text>
                            <Text style={styles.money}>{this.state.loanExTotalFee}</Text>
                        </View>

                        <View style={styles.extends_v2}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 12, color: '#4a4a4a', marginBottom: 2, lineHeight: 17}}>费用说明</Text>
                                <Text style={{marginTop: 4, marginLeft: 2}} onPress={this.pressCost.bind(this)}><Image style={styles.cost_assist} source={require('../../assets/icon_assist.png')} /></Text>
                            </View>
                            <Text style={styles.extends_f1} 
                                numberOfLines={2} >管理费{this.state.loanExManagementFee}元 + 手续费{this.state.loanExPoundageFee}元 + 利息{this.state.loanExInterst}元 + 逾期费{this.state.loanExOverdueFee}元</Text>
                        </View>
                    </View>
                </View>

                {/*展期详情*/}
                <View style={styles.extends_xs}>
                    <View style={styles.ex_outer}>
                        <Text style={styles.ex_txt1}>推延还款期限</Text>
                        <Text style={[styles.ex_txt2,styles.cblue]}>延期{this.state.exDay}天</Text>
                    </View>
                    <View style={styles.ex_outer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.ex_txt1}>延后总还款</Text>
                            <Text style={styles.mt10} onPress={this.showCost.bind(this)}><Image style={styles.cost_assist} source={require('../../assets/icon_assist.png')}/></Text>
                        </View>
                        <Text style={styles.ex_txt2}>{this.state.delayTotalFee}元</Text>
                    </View>
                    <View style={[styles.ex_outer, styles.noBrd]}>
                        <Text style={styles.ex_txt1}>延后还款日</Text>
                        <Text style={styles.ex_txt2}>{this.state.periodsEndDate}</Text>
                    </View>
                </View>
           
                {/**确认展期*/}
                <Text style={styles.ex_btn} onPress={this.sureExtends.bind(this)}>确认展期</Text>

                {/**弹框*/}
                <Modal animationType="fade" transparent={true} visible={this.state.modalVisible}>
                    <View style={styles.mask}></View>
                    <View style={styles.mask_content}>
                        <View style={styles.mask_nav}>
                            <Text style={styles.mask_title}>
                                {
                                    this.state.isCost ? '费用说明' : '延后总还款'
                                }
                            </Text>
                            <Text style={{position: 'absolute',right: 14,top: 14}} onPress={this.hideCost.bind(this)}><Image style={styles.close} source={require('../../assets/delete.png')}/></Text>
                        </View>

                        {/**费用说明/延后总还款 */}

                        {
                            this.state.isCost 
                            ? (<View style={styles.cost}>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt}>总计费用</Text><Text style={styles.cost_txt}>{this.state.loanExTotalFee}元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 管理费</Text><Text style={styles.cost_txt1}>{this.state.loanExManagementFee}元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 手续费</Text><Text style={styles.cost_txt1}>{this.state.loanExPoundageFee}元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 利息</Text><Text style={styles.cost_txt1}>{this.state.loanExInterst}元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 逾期费</Text><Text style={styles.cost_txt1}>{this.state.loanExOverdueFee}元</Text></View>
                                </View>)
                            :  (<View style={styles.cost}>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt}>总还款金额</Text><Text style={styles.cost_txt}>{this.state.delayTotalFee}元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 借款金额</Text><Text style={styles.cost_txt1}>{this.state.delayLoanFee}元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 利息</Text><Text style={styles.cost_txt1}>{this.state.loanExInterst}元</Text></View>
                                </View>)
                        }
                    
                    </View>
                </Modal>
                <Toast  position="center" ref="toast"/>
            </View>
        )
    }
}

export default extendDate;