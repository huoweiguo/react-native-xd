import React, { Component } from 'react';
import { View, Text, Image, BVLinearGradient, ScrollView, Modal} from 'react-native';
import { styles } from './styleCss.js';
import LinearGradient from 'react-native-linear-gradient';
import { preAddress } from '../../../api';
import Toast from 'react-native-easy-toast';
import queryString from 'querystring';
import commons from '../../../getItems';
class BankList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible: false,
            isSetCard: false,
            cardList:  [],
            cardId: '',
            userBankId: '',
            userId: '',
            userName: '',
            token: '',
            merchantId: ''
        }
    }

    componentDidMount() {
        let _this = this;
        commons.getItemParams(this, function () {
            _this.renderOwnCard();
        });
    }
    
    //设置默认卡
    setDefaultCard (cardId,userBankId) {
        this.setState({
            visible: true,
            cardId: cardId,
            userBankId
        })
    }

    cancelBind () {
        this.setState({
            isSetCard: false,
            visible: false
        })
    }

    setCard () {
        const _this = this;
        let t = new Date().getTime();
        let url = `${preAddress}/bankCard/default/change?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`;
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: queryString.stringify({
                userBankId: _this.state.userBankId
            })
        })
        .then ( res => res.json())
        .then ( res => {
            console.log(res);
            if (res.respCode === '000000') {
                _this.refs.toast.show("设置默认卡成功");
                _this.renderOwnCard();
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch ( err => {
            console.log(err);
        })

        this.setState( _ => ({
            visible: false
        }))
    }

    //弹出是否设卡信息
    visibleBoxCard () {
        this.setState( _ => ({
            isSetCard: true
        }))
    }

    //跳转到绑卡
    addCard () {
        this.props.navigation.navigate('BindCard');
    }

    //渲染卡列表
    renderOwnCard () {
        const _this = this;
        let t = new Date().getTime();
        let url = `${preAddress}/bankCard/query?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`
        fetch(url,{
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: _this.state.userId,
                merchantId: _this.state.merchantId
            })
        })
            .then( res => res.json() )
            .then( res => {
                console.log(res);
                if (res.respCode === '000000') {
                    _this.setState({
                        cardList: res.data
                    });
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( err => {
                console.log(err);
            })
    }


    render () {
        const noCardComponent = (<View style={styles.no_bank_v}>
            <Image style={styles.no_bank_card} source={require('../../assets/icon_zwhk.png')}/>
            <Text style={styles.noCard}>暂无银行卡</Text>
        </View>);

        const cardListComponent = (<View style={styles.card_content}>
            <View style={styles.card_prompt}>
                <Image style={styles.icon_superise} source={require('../../assets/icon_taps.png')}/>
                <Text style={styles.prompt_t1}>默认卡是你借款成功后的到账银行卡</Text>
            </View>

            
            {
                this.state.cardList.map( (item,index) => {
                    return (
                        
                        <View style={styles.list_card} key={index}>
                            <Text style={styles.mask_card} onLongPress={this.setDefaultCard.bind(this, item.bankCard, item.userBankId)}></Text>
                            <LinearGradient  start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={["#51b2f5","#567eff"]} style={styles.bank_outer}>
                                <View style={styles.card_des_number}>

                                    <Image style={styles.logoImg} source={{uri: item.bankLog}}/>

                                    <View style={styles.card_des}>
                                        <View style={styles.bank_txt}>
                                            <View>
                                                <Text style={styles.bank_name_text}>{item.bankName}</Text>
                                                <Text style={styles.card_type}>储蓄卡</Text>
                                            </View>
                                            {
                                                item.isDefault === 'Y' 
                                                    ? (<View style={styles.default_style}><Text style={styles.default_txt}>默认卡</Text></View>)
                                                    : (<View></View>)
                                            }
                                        </View>
                                        
                                        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <Text style={styles.card_number}>****</Text>
                                            <Text style={styles.card_number}>****</Text>
                                            <Text style={styles.card_number}>****</Text>
                                            <Text style={styles.card_number}>{item.bankCard.substr(item.bankCard.length - 4, 4)}</Text>
                                        </View>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
    
                    )
                })
            }

        </View>);

        return (
            <View style={styles.container}>
                <ScrollView style={{flex: 1}}>

                    {/**no bankCard */}

                    {
                        this.state.cardList.length > 0 ? cardListComponent : noCardComponent
                    }

                    <View style={styles.add_card_box}>
                        <Text style={styles.add_card_mask} onPress={this.addCard.bind(this)}></Text>
                        <Image style={styles.cross} source={require('../../assets/more_add.png')}/>
                        <Text style={styles.add_card_text}>添加银行卡</Text>
                        <Image style={styles.add_card_arrow} source={require('../../assets/right-arrow.png')}/>
                    </View>
                </ScrollView>

                {/**设置默认卡弹框 */}    
                <Modal animationType="silde"  visible={this.state.visible} transparent={true}>
                    <View style={styles.list_mask}></View>

                    {
                        this.state.isSetCard 
                            ? (<View style={styles.default_view}>
                                    <Text style={styles.df_txt1}>设置为默认卡?</Text>
                                    <Text style={styles.df_txt2}>您确定要把工商银行(尾号3170)</Text>
                                    <Text style={styles.df_txt2}>设置为默认银行卡?</Text>
                                    <View style={styles.df_btn_set}>
                                        <Text onPress={this.cancelBind.bind(this)} style={styles.df_btn}>取消</Text>
                                        <Text onPress={this.setCard.bind(this)} style={[styles.df_btn, styles.cblue]}>确定</Text>
                                    </View>
                                </View>)
                            : (
                                <View style={styles.list_content}>
                                    <Text onPress={this.visibleBoxCard.bind(this)} style={styles.set_card}>设置默认银行卡</Text>
                                    <Text onPress={this.cancelBind.bind(this)} style={[styles.set_card,styles.mb0]}>取消</Text>
                                </View>
                            )
                    }
                   
                </Modal>

                <Toast position="center" ref="toast"/>
            </View>
        )
    }
}

export default BankList;