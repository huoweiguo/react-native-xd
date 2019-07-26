import React, { Component } from 'react';
import { View, Text, Image, DeviceEventEmitter } from 'react-native';
import { styles } from './styleCss.js';

class RepayResult extends Component {
    constructor (props) {
        super(props);
        this.state = {
            status: true,
            bankName: '',
            amount: 0
        }
    }

    goHome () {
        this.props.navigation.navigate('Home');
    }    

    componentDidMount() {
        let { status, bankName,  amount} = this.props.navigation.state.params;
        this.setState({
            status: status,
            bankName: bankName,
            amount: amount
        })
    }

    componentWillUnmount() {
        DeviceEventEmitter.emit('renderRepayList');
    }
    

    render () {
        return (
            <View style={styles.container}>
                <View style={styles.result_v}>
                    {
                        this.state.status 
                            ? <Image style={styles.icon_fs} source={require('../../assets/icon_cg.png')}/>
                            : <Image style={styles.icon_fs} source={require('../../assets/icon_sb.png')}/>
                    }
                    
                    <Text style={styles.title_nav}>还款成功，为信用点赞</Text>
                    <Text style={styles.title_small}>还款方式：{this.state.bankName} 还款金额：{this.state.amount}元</Text>
                    <View style={styles.bh_v}><Text onPress={this.goHome.bind(this)} style={styles.backHome}>返回首页</Text></View>
                </View>
            </View>
        )
    }
}

export default RepayResult;