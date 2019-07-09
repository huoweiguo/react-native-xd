import React,{Component} from 'react';
import { View, Text, Image, TouchableHighlight, SafeAreaView } from 'react-native';
import { linkAddress }  from '../../../api';
import { styles } from './styleCss';

class LoanDetail extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isQuit: false
        }
    }

    //返回按钮
    goBack () {
        this.setState({
            isQuit: true
        })
    }

    //在考虑下
    consider () {
        this.setState({
            isQuit: false
        })
    }

    //返回首页
    goHome () {
        this.props.navigation.navigate('Home');
    }

    //agree loan
    loan () {
        var _this = this;
        fetch(`${linkAddress}/src/mock/loan.json`)
            .then( res => {
                return res.json();
            })
            .then( res => {
                _this.goResult(res);
            })
            .catch( err => {
                console.log(err);
            });
    }

    //跳转到结果页面
    goResult (res) {
        const { navigate } = this.props.navigation;
        const {data} = res;
        switch (res.respCode) {
            case "000000" :
                navigate('Result', {
                    status: "success",
                    smallText: data.smallText,
                    bankName: data.bankName,
                    endOfNumber: data.endOfNumber,
                    loanAmt: data.loanAmt,
                    arrivalAmt: data.arrivalAmt
                });
                break;
            case "060021" :
                navigate('Result', {
                    status: "deal",
                    smallText: data.smallText
                });
                break;
            case "060028" :
                navigate('Result', {
                    status: "over",
                    smallText: data.smallText
                });     
                break;    
            default :
                navigate('Result', {
                    status: "faild",
                    smallText: data.smallText
                });
        }
    }
    
    render () {
        const mask = (
            <View style={styles.mask_content}>
                <View style={styles.mask}></View>
                <View style={styles.mask_box}>
                    <Text style={styles.title_prompt}>确认不借款了吗?</Text>
                    <Text style={styles.prompt_small}>闪电到账银行卡,只差这最后一步</Text>
                    <View style={styles.btn_set}>
                        <Text onPress={this.goHome.bind(this)} style={styles.btn_txt1}>确认</Text>
                        <Text onPress={this.consider.bind(this)} style={styles.btn_txt2}>考虑下</Text>
                    </View>
                </View>
            </View>
        );

        return (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.headerBg}></View>

                    {/*导航标题 */}
                    <View style={styles.loan_nav}>
                        <Text style={styles.nav_back} onPress={this.goBack.bind(this)}><Image style={styles.back} source={require('../../assets/back.png')}/></Text>
                        <Text style={styles.nav_title}>借款详情</Text>
                    </View>

                    {/**产品详情 */}
                    <View style={styles.amount_detail}>
                        <View style={styles.loan_msg}>
                            <View style={styles.msg_top}>
                                <View style={styles.msg}>
                                    <Text style={styles.msg_name}>借款金额</Text>
                                    <Text style={styles.msg_num}>1500元</Text>
                                </View>
                                <View style={styles.msg}>
                                    <Text style={styles.msg_name}>期限</Text>
                                    <Text style={styles.msg_num}>15天</Text>
                                </View>
                            </View>
                            <View style={[styles.msg_list, styles.msg_prod]}>
                                <Text style={styles.list_name}>借款产品</Text>
                                <Text style={styles.list_num}>瓜子贷</Text>
                            </View>
                        </View>
                        <Text style={styles.msg_title}>费用说明</Text>
                        <View style={styles.msg_list}>
                            <View style={styles.list}>
                                <Text style={styles.list_name}>综合费用</Text>
                                <Text style={styles.list_num}>308.14元</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.list_name}>到账金额</Text>
                                <Text style={styles.list_num}>308.14元</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.list_name}>到期应还</Text>
                                <Text style={styles.list_num}>308.14元</Text>
                            </View>
                            <View style={[styles.list, styles.noborder]}>
                                <Text style={styles.list_name}>还款计划</Text>
                                <Text style={styles.list_num}>查看</Text>
                            </View>
                        </View>
                        <Text style={styles.msg_title}>银行卡信息</Text>
                        <View style={styles.msg_list}>
                            <View style={styles.list}>
                                <Text style={styles.list_name}>到站银行卡</Text>
                                <Text style={styles.list_num}>****9308</Text>
                            </View>
                            <View style={[styles.list, styles.noborder]}>
                                <Text style={styles.list_name}>所属银行</Text>
                                <Text style={styles.list_num}>招商银行</Text>
                            </View>
                        </View>
                        <Text style={styles.msg_agree}>*点击“同意借款”即表示同意签署<Text style={styles.agree_link}>《借款合同及相关协议》</Text></Text>
                        <TouchableHighlight
                            style={styles.loan_btn}
                            underlayColor="#bbcaff">
                            <Text onPress={this.loan.bind(this)} style={styles.btnText}>同意借款</Text>
                        </TouchableHighlight>
                    </View>

                    {/**遮照 */}
                    {
                        this.state.isQuit ? mask :  (<View></View>)
                    }
                
                </View>
            </SafeAreaView>
        )
    }
}

export default LoanDetail;