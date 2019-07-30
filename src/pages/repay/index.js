import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, Modal, ScrollView, DeviceEventEmitter} from 'react-native';
import { postAddress }  from '../../../api';
import Toast from 'react-native-easy-toast';
import { styles } from './styleCss';
import commons from '../../../getItems';


class Repay extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            isData: true,
            list: [],
            current: 1,
            pages: 100,
            count: 0,
            isBottom: false,
            visible: false,
            token: '',
            userId: '',
            merchantId: '',
            userName: ''
        }
    }
    
    static navigationOptions = {
        tabBarLabel: '还款',
        tabBarIcon: ({ focused, tintColor}) => {
            <Image 
                source={ focused ? require('../../assets/icon2_hk_pre.png') : require('../../assets/icon2_hk.png')}
                style={{width: 25, height:26}}
            />
        }
    }

    _goLoan () {}

    //渲染还款数据
    getRepayList (current) {
        let _this = this,
            t = new Date().getTime();
        fetch(`${postAddress}/loan/queryBillOrderList?t=${t}`, {
            method: 'POST',
            headers: {
                "Content-type": "application/json",
                token: _this.state.token
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId,
                size: 10,
                current: current
            })
        }).then( res => res.json())
        .then( res => {
            if (res.respCode == '000000') {
                if (res.data.records.length == 0 && _this.state.current == 1) {
                    _this.setState(_ = ({
                        isData: false,
                        list: [],
                        pages: 1,
                        count: 0
                    }))
                } else {
                    const listArr = [..._this.state.list, ...res.data.records];
                    _this.setState( _ => ({
                        isData: true,
                        list: listArr,
                        pages: res.data.pages,
                        count: res.data.total
                    }));
                    if (res.data.records.length < 10) {
                        _this.setState({
                            isBottom: true
                        })
                    }
                }
                
            } else { 
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch( err => {
            console.error(err);
        })
        .done();
    }

    componentDidMount() {
        const _this = this;
        commons.getItemParams(this, function(){
            this.subscription = DeviceEventEmitter.addListener('renderRepayList', () => {
                _this.getRepayList(1);
            })
        });
    }

    componentWillUnmount() {
        this.subscription.remove();
    }    

    scrollViews (e) {
        var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight - 200) {
            // 滑动距离底部只有200高度，调用加载方法
            if (this.state.current > this.state.pages) {
                return false;
            }
            this.setState({
                current: this.state.current + 1
            });
            this.getRepayList(this.state.current);
        }
    }

    linkgoto (status,loanPeriods, SingleIdAndAmt) {

        let idAndAmt = SingleIdAndAmt.split('-');

        let { navigate } = this.props.navigation;
        if (status === 'P') {
            this.setState({
                visible: true
            });
        }

        if (status === 'S' && loanPeriods !== '天') {
            let moreAndOver = idAndAmt[1].split('|');
            navigate('RepayDetail3', {
                sysSeqId: moreAndOver[0],
                pendingRepayAmt: moreAndOver[1]
            });
            return false;
        }

        if (status === 'S' && loanPeriods === '天') {
            navigate('RepayDetail2', {
                singleRepayPlanId: idAndAmt[0]
            });
            return false;
        }

        if (status === 'W' && loanPeriods === '天') {
            let singleAndUse = idAndAmt[2].split('|');
            console.log(singleAndUse [1]);
            navigate('RepayDetail', {
                sysSeqId: singleAndUse [1],
                singleRepayPlanId: singleAndUse [0]
            });
            return false;
        }

        if (status === 'W' && loanPeriods !== '天') {
            let moreAndUse = idAndAmt[3].split('|');
            navigate('RepayNext', {
                sysSeqId: moreAndUse[0],
                repayAmt: moreAndUse[1]
            });
            return false;
        }
    }

    iSee () {
        this.setState({
            visible: false
        });
    }
    

    render () {
        let { isData } = this.state;

        const nodataComponent = (
            <View style={styles.nodata}>
                <Image style={styles.imgData} source={require('../../assets/icon_zwhk.png')} />
                <Text style={styles.nodataText}>暂无还款</Text>
                <TouchableHighlight 
                    style={styles.loanBtn} 
                    underlayColor="#bbcaff"
                    onPress={this._goLoan.bind(this)}>
                    <Text style={styles.btnText}>去借款</Text>
                </TouchableHighlight>
            </View>
        );

        const listComponent = (
            <View style={{flex: 1}}>
                {
                    this.state.list.map( item => {
                        return (<View style={styles.repayList} key={item.id}>
                            <Text onPress={this.linkgoto.bind(this,item.status, item.loanPeriods[item.loanPeriods.length-1], 
                                `${item.singleRepayPlanId}-${item.sysSeqId}|${item.repayAmt}-${item.sysSeqId}|${item.singleRepayPlanId}-${item.sysSeqId}|${item.pendingRepayAmt}` )} 
                                style={styles.innerClick} data-pid={item.productId}></Text>
                            <View style={styles.list_nav}>
                                <Text style={styles.title}>{item.productName}</Text>
                                <View style={styles.applicable}>
                                    <Text style={[styles.status, item.status === 'W' ? styles.blueText : '']}>
                                        {item.status === 'P' ? '锁定中': item.status === 'W' ? '使用中' : item.status === 'S' ? '已结清' : ''}
                                    </Text>
                                    <Image style={styles.rarrow} source={require('../../assets/right-arrow.png')}></Image>
                                </View>
                            </View>
                            <View style={styles.list_detail}>
                                <View>
                                    <Text style={styles.fsty}>
                                        {item.status === 'S' ? '已还总额(元)' : '未还总额(元)'}
                                    </Text>
                                    <Text style={styles.money}>{item.status === 'S' ?  item.repayAmt : item.pendingRepayAmt}</Text>
                                </View>
                                <View>
                                    <Text style={styles.fsty}>借款期数: {item.loanPeriods}</Text>
                                    <Text style={[styles.fsty, styles.mt6]}>借款日期: {item.loanDate}</Text>
                                </View>
                            </View>
                        </View>)
                    })
                }
                {
                    this.state.isBottom ? (<View><Text style={styles.isBottom}>已经到底了...</Text></View>) : (<View></View>)
                }
                 
            </View>
        );

        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>还款</Text>
                </View>

                <ScrollView onScroll={this.scrollViews.bind(this)} style={{flex: 1}}>
                    {
                        isData ? listComponent : nodataComponent   
                    }
                </ScrollView>
                <Modal animationType="silde"  visible={this.state.visible} transparent={true}>
                    <View style={styles.order_mask}></View>
                    <View style={styles.order_view}>
                        <Image style={styles.order_img} source={require('../../assets/dealOrder.png')}/>
                        <View style={styles.mask_Text1}><Text onPress={this.iSee.bind(this)} style={styles.order_text_mask}>知道了</Text></View>
                    </View>
                </Modal>
                    
                <Toast position="center" ref="toast"/>    
            
            </View>
        )
    }
}

export default Repay;