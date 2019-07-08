import React, { Component } from 'react';
import { View, Text, Image, Modal } from 'react-native';
import { styles } from './styleCss';

class extendDate extends Component {
    constructor (props) {
        super(props);
        this.state = {
            modalVisible: false,
            isCost: true
        }
    }

    pressCost ()  {
        this.setState({
            modalVisible: true,
            isCost: true
        })
    }

    hideCost ()  {
        this.setState({
            modalVisible: false
        })
    }

    showCost () {
        this.setState({
            modalVisible: true,
            isCost: false
        })
    }

    render () {
        return (
            <View style={styles.container}>
                {/**展期header */}
                <View style={styles.extends_amount}>
                    <Text style={styles.extends_des}>展期还款金额(元)</Text>
                    <View style={styles.extends_prompt}>
                        <View style={styles.extends_v1}>
                            <Text style={{fontSize: 16, color: '#222336', lineHeight: 22, marginTop: 5, marginRight: 8}}>&yen;</Text>
                            <Text style={styles.money}>3172.79</Text>
                        </View>

                        <View style={styles.extends_v2}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{fontSize: 12, color: '#4a4a4a', marginBottom: 2, lineHeight: 17}}>费用说明</Text>
                                <Text style={{marginTop: 4, marginLeft: 2}} onPress={this.pressCost.bind(this)}><Image style={styles.cost_assist} source={require('../../assets/icon_assist.png')} /></Text>
                            </View>
                            <Text style={styles.extends_f1} 
                                numberOfLines={2} >管理费150.50元 + 手续费50.09元 + 利息117.20元 + 逾期费78.87元</Text>
                        </View>
                    </View>
                </View>

                {/*展期详情*/}
                <View style={styles.extends_xs}>
                    <View style={styles.ex_outer}>
                        <Text style={styles.ex_txt1}>推延还款期限</Text>
                        <Text style={[styles.ex_txt2,styles.cblue]}>延期7天</Text>
                    </View>
                    <View style={styles.ex_outer}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={styles.ex_txt1}>延后总还款</Text>
                            <Text style={styles.mt10} onPress={this.showCost.bind(this)}><Image style={styles.cost_assist} source={require('../../assets/icon_assist.png')}/></Text>
                        </View>
                        <Text style={styles.ex_txt2}>1208.79元</Text>
                    </View>
                    <View style={[styles.ex_outer, styles.noBrd]}>
                        <Text style={styles.ex_txt1}>延后还款日</Text>
                        <Text style={styles.ex_txt2}>2019.03.15</Text>
                    </View>
                </View>
           
                {/**确认展期*/}
                <Text style={styles.ex_btn}>确认展期</Text>

                {/**弹框*/}
                <Modal animationType="fade" transparent={true} visible={this.state.modalVisible}>
                    <View style={styles.mask}></View>
                    <View style={styles.mask_content}>
                        <View style={styles.mask_nav}>
                            <Text style={styles.mask_title}>
                                {
                                    this.state.isCost ? '费用说明' : '延后总还款'
                                }
                            </Text>
                            <Text style={{position: 'absolute',right: 14,top: 14}} onPress={this.hideCost.bind(this)}><Image style={styles.close} source={require('../../assets/delete.png')}/></Text>
                        </View>

                        {/**费用说明/延后总还款 */}

                        {
                            this.state.isCost 
                            ? (<View style={styles.cost}>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt}>总计费用</Text><Text style={styles.cost_txt}>317.79元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 管理费</Text><Text style={styles.cost_txt1}>150.15元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 手续费</Text><Text style={styles.cost_txt1}>50.05元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 利息</Text><Text style={styles.cost_txt1}>67.2元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 逾期费</Text><Text style={styles.cost_txt1}>78.09元</Text></View>
                                </View>)
                            :  (<View style={styles.cost}>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt}>总还款金额</Text><Text style={styles.cost_txt}>317.79元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 借款金额</Text><Text style={styles.cost_txt1}>150.15元</Text></View>
                                    <View style={styles.cost_outer}><Text style={styles.cost_txt1}> &middot; 利息</Text><Text style={styles.cost_txt1}>50.05元</Text></View>
                                </View>)
                        }
                    
                    </View>
                </Modal>

            </View>
        )
    }
}

export default extendDate;