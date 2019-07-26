import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styleCss';
import { postAddress, token, userId, merchantId } from '../../../api';
import Toast, {DURATION} from 'react-native-easy-toast';

class RepayNext extends Component {

    constructor (props) {
        super(props);
        this.state = {
            amount: '',
            once: '',
            extends_list: []
        }
    }

    componentDidMount() {
        const _this = this;
        let t = new Date().getTime();
        let url = `${postAddress}/loan/queryBillRepayPlanList?token=${token}&userId=${userId}&merchantId=${merchantId}&t=${t}`
        fetch(url,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                billOrderId: _this.props.navigation.state.params.sysSeqId
            })
        }).then( res => res.json())
            .then ( res => {
                console.log(res);
                if (res.respCode === '000000') {
                    this.setState({
                        once: res.data.unclearCount,
                        extends_list: res.data.repayPlanRoughList
                    });
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch ( err => {
                console.error(err);
            })
    }


    goToRepayDetail (sysSeqId, status) {
        let { navigate } = this.props.navigation; 
        if (status === 'P') {
            this.refs.toast.show('订单处理中...');
            return false;
        }

        if (status === 'S') {
            navigate('RepayDetail2', {
                singleRepayPlanId: sysSeqId
            });
            return false;
        }

        if (status === 'W') {
            navigate('RepayDetail', {
                sysSeqId: sysSeqId,
                billOrderId: this.props.navigation.state.params.sysSeqId
            });
        }
    }
    

    render () {
        return (
            <View style={styles.container}>
                <Toast  position="center" ref="toast"/>
                {/**repay header */}
                <View style={styles.repay_outer}>
                    <Text style={styles.txt1}>未还总额(元)</Text>
                    <Text style={styles.txt2}>{this.props.navigation.state.params.repayAmt}</Text>
                    <Text style={styles.txt3}>共计<Text style={styles.cred}>{this.state.once}笔</Text>未结清</Text>
                </View>

                {/**cost descript */}
                <View style={styles.repay_des}>
                    <Text style={styles.r_txt}>账单明细</Text>
                </View>
                
                <View style={styles.repay_lsit}>
                    <ScrollView style={{flex: 1}}>

                    {
                        this.state.extends_list.map( (item, index) => {
                            return (
                                <View style={styles.list_s} key={item.id}>
                                    <Text style={styles.clickView} onPress={this.goToRepayDetail.bind(this, item.sysSeqId, item.status)}></Text>
                                    <Text style={[styles.list_date, item.overdueDay === 'O' ? styles.cred : item.isOverdue === 'S' ? styles.repay_s: '']}>{item.repayDate}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={[styles.list_amount, item.overdueDay === 'O' ? styles.cred : item.isOverdue === 'S' ? styles.repay_s: '']}>{item.shouldRepayAmt}元</Text>
                                        <Image style={styles.r_arrow} source={require('../../assets/right-arrow.png')}/>
                                    </View>
                                </View>
                            )
                        })
                    }

                    </ScrollView>
                    
                </View>
            </View>
        )
    }
}

export default RepayNext;