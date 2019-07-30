import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { postAddress } from '../../../api';
import { styles } from './styleCss';
import Toast, {DURATION} from 'react-native-easy-toast';
import commons from '../../../getItems';

class RepayDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            currentRepayDate: '',
            currentShouldRepayTotalAmt: 0,
            totalPeriods: 0,
            currentPeriods: 0,
            currentCapital: 0,
            currentInterest: 0,
            overdueAmt: 0,
            periodsSubstractAmt: 0,
            actualRepayAmt: 0,
            currentLoanDate: '',
            todayIsRepay: '',
            overdueStatus: '',
            overdueDay: 0,
            isExtends: false,  //是否展期
            token: '',
            merchantId: '',
            userId: '',
            userName: ''
        }
    }

    repayExtends () {
        let { navigate } = this.props.navigation;
        let { sysSeqId, singleRepayPlanId } = this.props.navigation.state.params;
        navigate('extendDate', {
            billOrderId: singleRepayPlanId,
            repayPlanId: sysSeqId,
            periods:  this.state.currentPeriods
        });
    }

    renderDetail () {   
        const _this = this;
        let t = new Date().getTime();
        let url = `${postAddress}/loan/queryBillRepayPlanDetail?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                repayPlanId: _this.props.navigation.state.params.sysSeqId
            })
        }).then( res => res.json())
            .then( res => {
                if (res.respCode === '000000') {
                    let data = res.data;
                    this.setState({
                        currentRepayDate: data.currentRepayDate,
                        currentShouldRepayTotalAmt: data.currentShouldRepayTotalAmt,
                        isExtends: data.isExtends,
                        currentLoanDate: data.currentLoanDate,
                        currentPeriods: data.currentPeriods,
                        totalPeriods: data.totalPeriods,
                        currentCapital: data.currentCapital,
                        currentInterest: data.currentInterest,
                        overdueAmt: data.overdueAmt,
                        periodsSubstractAmt: data.periodsSubstractAmt,
                        actualRepayAmt: data.actualRepayAmt,
                        overdueStatus: data.overdueStatus,
                        todayIsRepay: data.todayIsRepay,
                        overdueDay: data.overdueDay
                    });
                   
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( err => {
                console.log(err);
            });
    }

    quickRepay (amt) {
        let { navigate } = this.props.navigation;
        navigate('Repayment', {
            billOrderId: this.props.navigation.state.params.billOrderId || this.props.navigation.state.params.singleRepayPlanId,
            sysSeqId: this.props.navigation.state.params.sysSeqId,
            periods: this.state.currentPeriods,
            amt: amt,
            tradeType: 'HK'
        });
    }

    componentDidMount() {
        let _this = this;
        commons.getItemParams(this, function(){
            _this.renderDetail();
        });
    }
    

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.repay_header}>
                    <Text style={styles.smallText}>{this.state.currentRepayDate}应还款(元)</Text>
                    <Text style={styles.amount}>{this.state.currentShouldRepayTotalAmt}</Text>

                    {/**是否是还款日 */}

                    {
                        this.state.overdueStatus !== 'O' && !this.state.todayIsRepay ? 
                        (<View style={styles.small_view}>
                            <Image style={styles.amaze} source={require('../../assets/icon_taps.png')}/>
                            <Text style={styles.small_prompt}>确保到期资金充足, 请按时还款</Text>
                        </View>)
                        : this.state.overdueStatus !== 'O' && this.state.todayIsRepay
                        ? (<View style={styles.small_view}>
                                <Image style={styles.amaze} source={require('../../assets/icon_taps_red.png')}/>
                                <Text style={[styles.small_prompt, styles.cred]}>今日是还款日，请尽快还款以免对征信产生影响</Text>
                            </View>) 
                        : (<View style={styles.small_view}>
                            <Image style={styles.amaze} source={require('../../assets/icon_taps_red.png')}/>
                                <Text style={[styles.small_prompt, styles.cred]}>您已逾期{this.state.overdueDay}天,请尽快还款以免对征信产生影响</Text>
                        </View>)
                    }
                
                    <Text style={styles.btn1} onPress={this.quickRepay.bind(this, this.state.currentShouldRepayTotalAmt)}>确认还款</Text>
                </View>

                {/**展期还款 */}
                {
                    this.state.isExtends ? (
                        <View style={styles.strentch}>
                            <Text style={styles.linkMask} onPress={this.repayExtends.bind(this)}></Text>
                            <View>
                                <Text style={styles.str_txt1}>展期还款</Text>
                                <Text style={styles.str_txt2}>如您无法如期全额还款，可申请展期，延长还款时间</Text>
                            </View>
                            <Image style={styles.str_rarrow} source={require('../../assets/right-arrow.png')}/>
                        </View>
                    ) : (<View></View>)
                }
                

                {/**借款详情 */}
                <View style={styles.loan_det}>
                    <View style={styles.loan_cont}>
                        <View>
                            <Text style={styles.loan_amount}>{this.state.currentShouldRepayTotalAmt}元</Text>
                            <Text style={styles.loan_date}>
                                {this.state.currentLoanDate}借 |
                                {this.state.totalPeriods > 1 ? `共${this.state.totalPeriods}期`: `${this.state.currentPeriods}天`}
                            </Text>
                        </View>
                        <View>
                            <Text style={styles.loan_time}>
                                {this.state.totalPeriods > 1 ? `第${this.state.currentPeriods}期`: `${this.state.currentPeriods}天`}
                            </Text>
                        </View>
                    </View>

                    {/*金额 */}
                    <View>
                        <View style={styles.rate}>
                            <Text style={styles.r1}>本金</Text>
                            <Text style={styles.r2}>{this.state.currentCapital}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>利息</Text>
                            <Text  style={styles.r2}>{this.state.currentInterest}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>逾期费</Text>
                            <Text  style={styles.r2}>{this.state.overdueAmt}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>减免金额</Text>
                            <Text  style={styles.r2}>{this.state.periodsSubstractAmt}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>已还金额</Text>
                            <Text  style={styles.r2}>{this.state.actualRepayAmt}元</Text>
                        </View>
                    </View>


                </View>
                <Toast  position="center" ref="toast"/>
            </View>
        )
    }
}

export default RepayDetail;