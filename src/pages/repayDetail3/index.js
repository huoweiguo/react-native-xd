import React, { Component } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { styles } from './stylsCss';
import { postAddress, token, userId, merchantId } from '../../../api';
import Toast from 'react-native-easy-toast';
import queryString from 'querystring';

class RepayDetail3 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            amount: '',
            once: '',
            list: []
        }
    }

    renderList () {
        const _this = this;
        let t = new Date().getTime();
        let sysSeqId = this.props.navigation.state.params.sysSeqId;
        let url = `${postAddress}/plan/detail?token=${token}&userId=${userId}&merchantId=${merchantId}&billOrderId=${sysSeqId}&t=${t}`;
        fetch(url).then( res => { return res.json() })
            .then( res => {
                console.log(res);
                if (res.respCode === '000000') {
                    _this.setState( _=> ({
                        once: res.data.length && res.data[0].loanTotalPeriods,
                        list: res.data
                    }));
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( error => {
                console.error(error);
            })

    }

    lookDetail (sysSeqId) {
        let { navigate } = this.props.navigation;
        navigate('RepayDetail2', {
            singleRepayPlanId: sysSeqId
        });
    }

    componentDidMount () {
        this.renderList();
    }

    render () {
        return (
            <View style={styles.container}>
                {/**详情头部 */}
                <View style={styles.header_nav}>
                    <Image style={styles.icon_nav} source={require('../../assets/icon_yyq.png')}/>
                    <Text style={styles.small_title}>已经结清总额(元)</Text>
                    <Text style={styles.amount}>{this.props.navigation.state.params.pendingRepayAmt}</Text>
                    <Text style={styles.small_des}>对应<Text style={{color: '#ff5656'}}>{this.state.once}笔</Text>借款</Text>
                </View>

                {/**说明分割 */}
                <Text style={styles.split_des}>共{this.state.once}笔</Text>
                   
                {/**repay list */}
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.list.map( item => {
                            return (
                                <View key={item.id} style={styles.repay_list}>
                                    <View style={styles.repay_t1}><Text style={styles.v3}>本息已还款</Text><Text style={styles.v4}>{item.actualRepayAmt}元</Text></View>
                                    <View style={styles.repay_t2}><Text style={styles.v1}>借款金额</Text><Text style={styles.v1}>{item.periodsPortAmt}元</Text></View>
                                    <View style={styles.repay_t2}>
                                        <Text style={styles.v1}>借款期限</Text>
                                        <Text style={styles.v1}>
                                            {item.loanPeriodsTimes}
                                            {item.loanPeriodsUnit === 'MONTH' ? '月' : item.loanPeriodsUnit === 'WEEK' ? '周' : item.loanPeriodsUnit === 'DAY' ? '天' : ''}
                                        </Text>
                                    </View>
                                    <View style={styles.repay_t2}><Text style={styles.v1}>还款详情</Text><Text style={styles.v2} onPress={this.lookDetail.bind(this,item.sysSeqId)}>点击查看</Text></View>
                                </View>
                            )
                        })
                    }
                    
                </ScrollView>

                <Toast position="center" ref="toast"/>
            </View>
        )
    }
}

export default RepayDetail3; 