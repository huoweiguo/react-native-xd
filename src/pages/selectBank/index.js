import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styleCss';
import { postAddress, preAddress } from '../../../api';

class SelectBank extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bankList: []
        }
    }

    renderBank () {
        const _this = this;
        fetch(`${preAddress}/limitAmt/list?t=new Date().getTime()`)
            .then( res => { return res.json() })
            .then( res => {
                if (res.respCode === '000000') {
                    _this.setState({
                        bankList: res.data
                    })
                }
            })
            .catch( err => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.renderBank();
    }
    
    render () {
        return ( 
            <View style={styles.container}>
                <View style={styles.content}>
                    <ScrollView style={{flex: 1}}>
                        {
                            this.state.bankList.map( item => {
                                return (
                                    <View style={styles.select_list} key={item.bankCode}>
                                        <Image style={styles.list_img} source={{uri: item.bankLogo}}/>
                                        <View>
                                            <Text style={styles.bank_name}>{item.bankName}</Text>
                                            <Text style={styles.bank_des}>单笔金额≤{item.perTransactionLimit},当日金额≤{item.perDayLimit}</Text>
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

export default SelectBank;