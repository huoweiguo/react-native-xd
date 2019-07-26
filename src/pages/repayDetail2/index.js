import React, { Component } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { styles } from './stylsCss';
import { postAddress, token, userId, merchantId }  from '../../../api';
import Toast from 'react-native-easy-toast';

class RepayDetail2 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            actualRepayAmt: 0,
            periodsPortAmt: 0,
            productName: '',
            loanPeriodsTimes: 0,
            loanPeriodsUnit: '',
            periodsStartDate: '',
            periodsEndDate: '',
            billOrderId: '',
            contractShowFlag: '',
            loanSettleTimeFormat: '',
            periodsSubstractPortAmt: 0,
            periodsViolateAmt: 0,
            periodsPenalSumAmt: 0,
            periodsPortAmt: 0,
            periodsInterestRateAmt: 0,
            loanProtocolPicUrl: ''
        }
    }

    renderSingle () {
        const _this = this;
        let t = new Date().getTime(),
        singleRepayPlanId = this.props.navigation.state.params.singleRepayPlanId;
        let url = `${postAddress}/plan/${singleRepayPlanId}?token=${token}&userId=${userId}&merchantId=${merchantId}&t=${t}`;
        fetch(url).then( res => res.json())
            .then( res => {
                if (res.respCode === '000000') {
                    let data = res.data;
                    _this.setState( _=> ({
                        actualRepayAmt: data.actualRepayAmt,
                        periodsPortAmt: data.periodsPortAmt,
                        productName: data.productName,
                        loanPeriodsTimes: data.loanPeriodsTimes,
                        loanPeriodsUnit: data.loanPeriodsUnit === 'WEEK' ? '周' : data.loanPeriodsUnit === 'DAY' ? '天' : '月',
                        periodsEndDate: data.periodsEndDate,
                        periodsStartDate: data.periodsStartDate,
                        billOrderId: data.billOrderId,
                        contractShowFlag: data.contractShowFlag,
                        loanProtocolPicUrl: data.loanProtocolPicUrl,
                        loanSettleTimeFormat: data.loanSettleTimeFormat,
                        periodsSubstractPortAmt: data.periodsSubstractPortAmt,
                        periodsViolateAmt: data.periodsViolateAmt,
                        periodsPenalSumAmt: data.periodsPenalSumAmt,
                        periodsPortAmt: data.periodsPortAmt,
                        periodsInterestRateAmt: data.periodsInterestRateAmt
                    }))
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( err => {
                console.log(err);
            })
    }

    lookPicture () {
        let { navigate } = this.props.navigation;
        
        if (this.state.loanProtocolPicUrl) {
            navigate('Agreement', {
                imgUrl: this.state.loanProtocolPicUrl
            })
        } else {
            this.refs.toast.show('暂无合同');
        }
    }

    componentDidMount() {
        this.renderSingle();
    }
    

    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    {/**详情头部 */}
                    <View style={styles.header_nav}>
                        <Image style={styles.icon_nav} source={require('../../assets/icon_yyq.png')}/>
                        <Text style={styles.small_title}>已经结清总额(元)</Text>
                        <Text style={styles.amount}>{this.state.actualRepayAmt}</Text>
                        <Text style={styles.small_des}>好借好还，再借不难</Text>
                    </View>

                    {/**详情信息 */}
                    <View style={styles.detail_des}>
                        {/**loan detail */}
                        <View style={styles.loan_des}>
                            <Text style={styles.des_d1}>借款明细</Text>
                            <View style={styles.v1}><Text style={styles.t1}>借款金额</Text><Text style={styles.t2}>{this.state.periodsPortAmt}元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>借款产品</Text><Text style={styles.t2}>{this.state.productName}</Text></View>
                            <View style={styles.v1}>
                                <Text style={styles.t1}>借款期限</Text><Text style={styles.t2}>
                                    {this.state.loanPeriodsTimes}{this.state.loanPeriodsUnit}|{this.state.periodsStartDate}至{this.state.periodsEndDate}
                                </Text>
                            </View>
                            <View style={styles.v1}><Text style={styles.t1}>借款时间</Text><Text style={styles.t2}>{this.state.periodsStartDate}</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>订单编号</Text><Text style={styles.t2}>{this.state.billOrderId}</Text></View>
                            {
                                this.state.contractShowFlag !== 'N' ? 
                                    (<View style={styles.v1}><Text style={styles.t1}>借款合同</Text><Text style={styles.t3} onPress={this.lookPicture.bind(this)}>查看</Text></View>) :
                                    (<View></View>)
                            }
                            
                        </View>
                        {/**分割线 */}
                        <View style={styles.split_line}></View>
                        {/**repay detail */}
                        <View style={styles.repay_des}>
                            <Text style={styles.des_d1}>借款明细</Text>
                            <View style={styles.v1}><Text style={styles.t1}>已还本金</Text><Text style={styles.t2}>{this.state.periodsPortAmt}元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>已还利息</Text><Text style={styles.t2}>{this.state.periodsInterestRateAmt}元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>逾期费</Text><Text style={styles.t2}>{this.state.periodsPenalSumAmt}元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>手续费</Text><Text style={styles.t2}>{this.state.periodsViolateAmt}元</Text></View>
                            {
                                this.state.periodsSubstractPortAmt !== '' ? 
                                    (<View style={styles.v1}><Text style={styles.t1}>减免金额</Text><Text style={styles.t2}>{this.state.periodsSubstractPortAmt}元</Text></View>) :
                                    (<View></View>)
                            }
                            
                            <View style={styles.v1}><Text style={styles.t1}>还款时间</Text><Text style={styles.t2}>{this.state.loanSettleTimeFormat}</Text></View>
                        </View>
                    </View>
                </ScrollView>
                <Toast position="center" ref="toast"/>
            </View>
        )
    }
}

export default RepayDetail2; 