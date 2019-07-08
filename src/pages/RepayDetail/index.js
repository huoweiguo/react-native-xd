import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styleCss';

class RepayDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            smallText: '03月15日应还款(元)',
            amount: 1208.79,
            peroid: '7天',
            loanDate: '2019年03月15日',
            baseAmount: 1200,
            rate: 8.79,
            beOverdue: '0.00',
            payment: '一次性本息',
            extends: true,  //是否展期
            isRepaymentDate: false  //是否是还款日
        }
    }

    repayExtends () {
        this.props.navigation.navigate('extendDate');
    }

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.repay_header}>
                    <Text style={styles.smallText}>{this.state.smallText}</Text>
                    <Text style={styles.amount}>{this.state.amount}</Text>

                    {/**是否是还款日 */}

                    {
                        this.state.isRepaymentDate 
                        ? (<View style={styles.small_view}>
                                <Image style={styles.amaze} source={require('../../assets/icon_taps_red.png')}/>
                                <Text style={[styles.small_prompt, styles.cred]}>今日是还款日，请尽快还款以免对征信产生影响</Text>
                            </View>) 
                        : (<View style={styles.small_view}>
                                <Image style={styles.amaze} source={require('../../assets/icon_taps.png')}/>
                                <Text style={styles.small_prompt}>确保到期资金充足, 请按时还款</Text>
                            </View>)
                    }
                
                    <Text style={styles.btn1}>确认还款</Text>
                </View>

                {/**展期还款 */}
                {
                    this.state.extends ? (
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
                            <Text style={styles.loan_amount}>{this.state.amount}元</Text>
                            <Text style={styles.loan_date}>{this.state.loanDate}借 | {this.state.peroid}</Text>
                        </View>
                        <View>
                            <Text style={styles.loan_time}>{this.state.peroid}</Text>
                        </View>
                    </View>

                    {/*金额 */}
                    <View>
                        <View style={styles.rate}>
                            <Text style={styles.r1}>本金</Text>
                            <Text style={styles.r2}>{this.state.baseAmount}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>利息</Text>
                            <Text  style={styles.r2}>{this.state.rate}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>逾期费</Text>
                            <Text  style={styles.r2}>{this.state.beOverdue}元</Text>
                        </View>
                        <View style={styles.rate}>
                            <Text  style={styles.r1}>还款方式</Text>
                            <Text  style={styles.r2}>{this.state.payment}</Text>
                        </View>
                    </View>


                </View>
            </View>
        )
    }
}

export default RepayDetail;