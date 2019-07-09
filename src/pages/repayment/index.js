import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styleCss';

class Repayment extends Component {
    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.small_prompt}>注意：还款支持余额还款，银行卡仅支持储蓄卡还款</Text>

                <View style={styles.bank_content}>
                    <View style={styles.bank_sel}>
                        <View style={styles.left}>
                            <Image  style={styles.bankImg} source={require('../../assets/icon_bank_logo.png')}/>
                            <Text style={styles.bankName}>工商银行 (1918)</Text>
                        </View>
                        <Image style={styles.r_arrow} source={require('../../assets/right-arrow.png')} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Repayment;