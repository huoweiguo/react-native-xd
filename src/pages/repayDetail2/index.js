import React, { Component } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { styles } from './stylsCss';

class RepayDetail2 extends Component {
    render () {
        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>
                    {/**详情头部 */}
                    <View style={styles.header_nav}>
                        <Image style={styles.icon_nav} source={require('../../assets/icon_yyq.png')}/>
                        <Text style={styles.small_title}>已经结清总额(元)</Text>
                        <Text style={styles.amount}>1588.95</Text>
                        <Text style={styles.small_des}>好借好还，再借不难</Text>
                    </View>

                    {/**详情信息 */}
                    <View style={styles.detail_des}>
                        {/**loan detail */}
                        <View style={styles.loan_des}>
                            <Text style={styles.des_d1}>借款明细</Text>
                            <View style={styles.v1}><Text style={styles.t1}>借款金额</Text><Text style={styles.t2}>1200.00元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>借款产品</Text><Text style={styles.t2}>瓜子贷</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>借款期限</Text><Text style={styles.t2}>7天|2019.03.18至2019.03.25</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>还款方式</Text><Text style={styles.t2}>等额本息</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>借款用途</Text><Text style={styles.t2}>个人消费</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>申请时间</Text><Text style={styles.t2}>2019年02月15日</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>订单编号</Text><Text style={styles.t2}>BD632525718825254281</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>借款合同</Text><Text style={styles.t3}>查看</Text></View>
                        </View>
                        {/**分割线 */}
                        <View style={styles.split_line}></View>
                        {/**repay detail */}
                        <View style={styles.repay_des}>
                            <Text style={styles.des_d1}>借款明细</Text>
                            <View style={styles.v1}><Text style={styles.t1}>已还本金</Text><Text style={styles.t2}>1200.00元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>已还利息</Text><Text style={styles.t2}>388.95元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>逾期费</Text><Text style={styles.t2}>100.00元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>手续费</Text><Text style={styles.t2}>0.00元</Text></View>
                            <View style={styles.v1}><Text style={styles.t1}>还款时间</Text><Text style={styles.t2}>2019.02.15 13:14:25</Text></View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default RepayDetail2; 