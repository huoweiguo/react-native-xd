import React, { Component } from 'react';
import { View, Text, Image, Modal, ScrollView} from 'react-native';
import { styles } from './styleCss';

class Repayment extends Component {
    constructor (props) {
        super(props);
        this.state = {
            visible:  true
        }
    }

    selectCard () {
        console.log("select Card");
    }

    addCard () {
        console.log('add Card');
    }

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

                <Modal visible={this.state.visible} transparent={true}>
                    <View style={styles.mask_content}></View>
    
                    <View style={styles.popBox}>
                        <View style={styles.sel_nav}>
                            <Text style={styles.text1}>选择支付方式</Text>
                            <Text style={styles.closeBtn}><Image style={styles.selImg} source={require('../../assets/delete.png')}/></Text>
                        </View>

                        <ScrollView style={{flex: 1}}>
                            {/**card list render */}
                            <View style={styles.bank_list}>
                                <Text onPress={this.selectCard.bind(this)} style={styles.mask_event}></Text>
                                <View style={styles.bank_left}>
                                    <Image style={styles.bankImg_list} source={require('../../assets/icon_bank_logo.png')} />
                                    <View>
                                        <Text style={styles.bank_name_number}>中国工商银行储蓄卡  (4488)</Text>
                                        <Text style={styles.bank_des}>银行单笔限额10000.00元</Text>
                                    </View>
                                </View>
                                <Image style={styles.select_icon} source={require('../../assets/icon_selected.png')}/>
                            </View>

                            {/**add card charge */}
                            <View style={styles.bank_list}>
                                <Text onPress={this.addCard.bind(this)} style={styles.mask_event}></Text>
                                <View style={styles.bank_left}>
                                    <Image style={styles.bankImg_list} source={require('../../assets/icon_tjyhk.png')} />
                                    <View>
                                        <Text style={styles.bank_name_number}>添加银行卡支付</Text>
                                        <Text style={styles.bank_des}>该交易只支持储蓄卡</Text>
                                    </View>
                                </View>
                                <Image style={styles.arrow_icon} source={require('../../assets/right-arrow.png')}/>
                            </View>
                        </ScrollView>
                    </View>

                </Modal>
            </View>
        )
    }
}

export default Repayment;