import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './initStyle';
import RotateInit from '../../components/rotateInit';
import { preAddress, token, merchantId, userId } from '../../../api';
import queryString from 'querystring';
import axios from 'axios';

class Init extends Component {
    constructor (props) {
        super(props);
        this.timer = null;
        this.state = {
            count: 10,
            isShow: false,
            cancel: null,
            productLoanAmt: 0,
            isPass: false
        }
    }

    //项目初始化
    initInterface () {
        const CancelToken = axios.CancelToken;
        const _this = this;
        let { productId, userName, productName } = this.props.navigation.state.params;
        let t = new Date().getTime(),
            url = `${preAddress}/risk/getRiskResult?token=${token}&userId=${userId}&merchantId=${merchantId}&t=${t}`;
        
        axios({
            method: 'POST',
            url: url,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            data: queryString.stringify({
                productId,
                userName,
                productName,
                channelId: '01'
            })
        },{
            cancelToken: new CancelToken(function executor (c) {
                _this.setState({
                    cancel: c
                })
            })
        })
        .then ( res => {
            console.log(res.data);
            let { productId, productName, userName } = _this.props.navigation.state.params;
            if (res.data.respCode === '6666666') {
                _this.setState( _ => ({
                    productLoanAmt: res.data.productLoanAmt
                }))
                if(res.data.auditProcess == 3){
                    setTimeout( _ => ({

                    }),1500)
                }else{
                    setTimeout(function(){
                        _this.props.navigation.navigate('LoanDetail',{
                            sysSeqId: res.data.sysSeqId,
                            productId,
                            productName,
                            userName
                        });
                    },1500)
                }
            } else {
                _this.props.navigation.navigate('Result',{
                    result: 'refuse',
                    smallText: res.data.respMsg
                });
            }
            console.log(res);
        })
        .catch( err => {
            console.log(err);
        });
    }

    componentDidMount() {
        this.initInterface();
        this.countDown();
    }
    
    //倒计时
    countDown () {
        let _this = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {

            let count = _this.state.count - 1;
            if (count < 0 ) {
                _this.state.cancel();
                clearInterval(_this.timer);
                _this.setState({
                    count: 0,
                    isShow: true
                });
            } else {
                _this.setState({
                    count: count
                });
            }
            
        }, 1000);
    }

    //跳转到首页
    goHome () {
        const { navigate } = this.props.navigation;
        navigate('Home');
    }

    resubmit () {
        this.setState( _=> ({
            isShow: false,
            count: 10
        }));
        this.countDown();
    }

    
    render () {
        const reset = (<View style={styles.promptView}>
            <Text style={styles.promptText}>提交失败，请重新提交</Text>
            <View style={styles.btn_view}>
                <Text style={styles.init_btn1} onPress={this.goHome.bind(this)}>返回首页</Text>
                <Text style={styles.init_btn2} onPress={this.resubmit.bind(this)}>重新提交</Text>
            </View>
        </View>);

        return (
            <View style={styles.container}>
                <Image style={styles.initBg} source={require('../../assets/init_body_bg.png')} />
                <View style={styles.rotateImg}>
                    <Image style={styles.rotaBg} source={require('../../assets/init_bg.png')} />
                    <RotateInit style={styles.rotaBg}></RotateInit>
                    <Text style={styles.smallText}>智能计算您的额度</Text>
                    {
                        this.state.isPass 
                            ?  <Text style={[styles.compute,styles.productLoanAmt]}><Text style={styles.yen}>&yen;</Text>{this.state.productLoanAmt}</Text>
                            : <Text style={styles.compute}>计算中{this.state.count}S</Text>
                    }
                    
                </View>

                {
                    this.state.isShow ? reset : (<View></View>)
                }
                
            </View>
        )
    }
}

export default Init;