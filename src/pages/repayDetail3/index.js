import React, { Component } from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { styles } from './stylsCss';
import { linkAddress } from '../../../api';
import Toast from 'react-native-easy-toast';

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
        fetch(`${linkAddress}/src/mock/expect.json`)
            .then( res => { return res.json() })
            .then( res => {
                if (res.respCode === '000000') {
                    _this.setState( _=> ({
                        amount: res.amount,
                        once: res.once,
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
                    <Text style={styles.amount}>1588.95</Text>
                    <Text style={styles.small_des}>对应<Text style={{color: '#ff5656'}}>5笔</Text>借款</Text>
                </View>

                {/**说明分割 */}
                <Text style={styles.split_des}>共5笔</Text>
                   
                {/**repay list */}
                <ScrollView style={{flex: 1}}>
                    {
                        this.state.list.map( item => {
                            return (
                                <View key={item.id} style={styles.repay_list}>
                                    <View style={styles.repay_t1}><Text style={styles.v3}>本息已还款</Text><Text style={styles.v4}>{item.r_count}元</Text></View>
                                    <View style={styles.repay_t2}><Text style={styles.v1}>借款金额</Text><Text style={styles.v1}>{item.l_count}元</Text></View>
                                    <View style={styles.repay_t2}><Text style={styles.v1}>借款期限</Text><Text style={styles.v1}>{item.date}</Text></View>
                                    <View style={styles.repay_t2}><Text style={styles.v1}>还款详情</Text><Text style={styles.v2}>点击查看</Text></View>
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