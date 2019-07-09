import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styleCss';
import { linkAddress } from '../../../api';
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
        fetch(`${linkAddress}/src/mock/cost_list.json`)
            .then( res => {
                return res.json();
            })
            .then ( res => {
                if (res.respCode === '000000') {
                    this.setState( _ => ({
                        once: res.once,
                        amount: res.amount,
                        extends_list: res.data
                    }));
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch ( err => {
                console.error(err);
            })
    }


    goToRepayDetail (id) {
        this.props.navigation.navigate('RepayDetail2', {
            id: id
        });
    }
    

    render () {
        return (
            <View style={styles.container}>
                <Toast  position="center" ref="toast"/>
                {/**repay header */}
                <View style={styles.repay_outer}>
                    <Text style={styles.txt1}>未还总额(元)</Text>
                    <Text style={styles.txt2}>{this.state.amount}</Text>
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
                                    <Text style={styles.textMask} onPress={this.goToRepayDetail.bind(this, item.id)}></Text>
                                    <Text style={[styles.list_date, item.isOverdue === 'O' ? styles.cred : item.isOverdue === 'S' ? styles.repay_s: '']}>{item.datatime}</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={[styles.list_amount, item.isOverdue === 'O' ? styles.cred : item.isOverdue === 'S' ? styles.repay_s: '']}>{item.amount}元</Text>
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