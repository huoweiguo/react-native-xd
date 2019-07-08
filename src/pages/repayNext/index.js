import React, { Component } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { styles } from './styleCss';
import { linkAddress } from '../../../api';
import Toast from '../../components/toast'; 

class RepayNext extends Component {

    constructor (props) {
        super(props);
        this.state = {
            isToast: true,
            extends_list: []
        }
    }

    componentDidMount() {
        fetch(`${linkAddress}/src/mock/cost_list.json`)
            .then( res => {
                return res.json();
            })
            .then ( res => {
                if (res.respCode === '000000') {

                } else {
                    Alert.alert(res.respMsg);
                }
            })
            .catch ( err => {
                console.error(err);
            })
    }
    

    render () {
        return (
            <View style={styles.container}>
                {/**repay header */}
                <View style={styles.repay_outer}>
                    <Text style={styles.txt1}>未还总额(元)</Text>
                    <Text style={styles.txt2}>1588.96</Text>
                    <Text style={styles.txt3}>共计<Text style={styles.cred}>5笔</Text>未结清</Text>
                </View>

                {/**cost descript */}
                <View style={styles.repay_des}>
                    <Text style={styles.r_txt}>账单明细</Text>
                </View>
                
                <View style={styles.repay_lsit}>
                    <View style={styles.list_s}>
                        <Text style={styles.list_date}>2019年01月15日</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.list_amount}>317.79元</Text>
                            <Image style={styles.r_arrow} source={require('../../assets/right-arrow.png')}/>
                        </View>
                    </View>
                </View>

                {
                    this.state.isToast ?  (<Toast />) : (<View></View>)
                }
            </View>
        )
    }
}

export default RepayNext;