import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, Alert } from 'react-native';
import Refresh from '../../components/refresh';
import { linkAddress }  from '../../../api';
import { styles } from './styleCss';

class Repay extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            isData: true,
            list: [],
            current: 1
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

    _goLoan () {
        Alert.alert(this.state.isData);
    }

    bindData (pageNum, pageSize, result) {
        let _this = this;
        setTimeout(() => {
            // 执行回调方法
            // 第一个参数为Refresh所需要的data,第二个参数为分页需要的数据的总个数
            result(_this.state.list, 100);
        }, 2000);
    }

    //渲染还款数据
    getRepayList () {
        const _this = this;
        fetch(`${linkAddress}/src/mock/repay.json`)
        .then( res => { return res.json();})
        .then( res => {
            if (res.errorCode === '000000') {
                if (res.data.length == 0 && _this.state.current == 1) {
                    _this.setState(_ = ({
                        isData: false
                    }))
                } else {
                    _this.setState( _ => ({
                        isData: true,
                        list: res.data
                    }));
                }
                
            } else {
                Alert.alert(res.message);
            }
        })
        .catch( err => {
            console.error(err);
        })
        .done();
    }

    componentDidMount () {
        this.getRepayList();
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
                
                <Refresh render={({ item }) => {
                    return (
                        <View style={styles.repayList} key={item.id}>
                            <View style={styles.list_nav}>
                                <Text style={styles.title}>{item.name}</Text>
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
                                    <Text style={styles.money}>{item.amount}</Text>
                                </View>
                                <View>
                                    <Text style={styles.fsty}>借款期数: {item.period}</Text>
                                    <Text style={[styles.fsty, styles.mt6]}>借款日期: {item.date}</Text>
                                </View>
                            </View>
                        </View>
                    )
                }}
                pageSize={10}
                method={this.bindData.bind(this)} />
                
            </View>
        );

        return (
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.titleText}>还款</Text>
                </View>

                {
                    isData ? listComponent : nodataComponent   
                }

            </View>
        )
    }
}

export default Repay;