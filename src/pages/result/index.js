import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView} from 'react-native';
import { styles } from './styleCss';

class Result extends Component {
    constructor (props) {
        super(props);
        this.state = {
            result: '',
            smallText: '',
            bankName: '',
            endOfNumber: '',
            loanAmt: '',
            arrivalAmt: ''
        }
    }

    goHome () {
        this.props.navigation.navigate('Home');
    }

    componentDidMount() {
        const params = this.props.navigation.state.params;
        this.setState({
            result: params.status,
            smallText: params.smallText,
            bankName: params.bankName,
            endOfNumber: params.endOfNumber,
            loanAmt: params.loanAmt,
            arrivalAmt: params.arrivalAmt
        });
        if (params.status === 'success') {
            
        }
    }

    render () {

        const accountBankComponent = (
            <View>
                <View style={styles.bank_detail}>
                
                    <View style={styles.bank_deal}>
                        <View style={styles.bank_left}>
                            <Text style={styles.txt1}>账单详情</Text>
                        </View>
                        <View style={styles.bank_right}>
                            <Image style={styles.process_img} source={require('../../assets/icon_process.png')}/>
                            <View>
                                <Text style={[styles.txt1, styles.mb20]}>发起借款申请</Text>
                                <View style={styles.mb20}>
                                    <Text style={styles.txt2}>银行处理中</Text>
                                    <Text style={styles.txt1}>预计2小时内到账</Text>
                                </View>
                                <Text style={styles.txt1}>到账成功</Text>
                            </View>
                        </View>
                    </View>
                
                    <View style={styles.mount_view}>
                        <Text style={styles.txt1}>借款金额</Text>
                        <Text style={styles.txt2}>&yen; {this.state.loanAmt}</Text>
                    </View>

                    <View style={styles.mount_view}>
                        <Text style={styles.txt1}>到账金额</Text>
                        <Text style={styles.txt2}>&yen; {this.state.arrivalAmt}</Text>
                    </View>

                    <View style={styles.mount_view}>
                        <Text style={styles.txt1}>到账银行</Text>
                        <Text style={styles.txt2}>&yen; {this.state.bankName} 尾号{this.state.endOfNumber}</Text>
                    </View>
                </View>
            </View>
        );

        return (
            <View style={styles.container}>
                <View style={styles.nav_view}>
                    <Text style={styles.nav_title}>借款结果</Text>
                </View>
                <View style={styles.content}>
                    <View style={styles.outerImg}>
                        {
                            this.state.result !== 'faild' 
                                ? (<Image style={styles.result_img} source={require('../../assets/icon_cg.png')}/>)
                                : (<Image style={styles.result_img} source={require('../../assets/icon_sb.png')}/>)
                        }
                        
                    </View>
                    <Text style={styles.nav_bold}>
                        {
                            this.state.result === 'success' ? '借款成功' : 
                            this.state.result === 'deal' ? '正在处理中...' :
                            this.state.result === 'over' ? '来晚了!今日额度已放完' :
                            this.state.result === 'faild' ? '借款失败' : ''
                        }
                    </Text>
                    <Text style={styles.nav_small}>{this.state.smallText}</Text>

                    {
                        this.state.result === 'success' ?  (<View style={styles.accelerate}>
                            <Text style={styles.txt3}>再借提额</Text>
                            <Text style={styles.txt4}>最高50%</Text>
                            <Text style={styles.txt3}>降息</Text>
                            <Text style={styles.txt4}>最高30%</Text>
                        </View>) : (<View></View>)
                    }
                    
                    {
                        this.state.result === 'success' ?  accountBankComponent : (<View></View>)
                    }

                    <View style={styles.btnSet}>
                        <Text onPress={this.goHome.bind(this)} style={styles.homeBtn}>返回首页</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Result;