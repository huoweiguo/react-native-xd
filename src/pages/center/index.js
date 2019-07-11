import React, { Component } from 'react';
import { View, Text , SafeAreaView, Image, ScrollView} from 'react-native';
import { styles } from './styleCss';

class Center extends Component {
    constructor (props) {
        super(props);
    }

    goBankList () {
        this.props.navigation.navigate('BankList');
    }

    render () {
        return  (
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.container}>
                    <ScrollView style={{flex: 1}}>
                        <View style={styles.content}>
                            {/**header info */}
                            <View style={styles.header_act}>
                                <Image style={styles.user_bg} source={require('../../assets/user_bg.png')}/>

                                <View style={{flexDirection: 'row'}}>
                                    <Image style={styles.head_img} source={require('../../assets/yh_head.png')}/>
                                    <Text style={styles.head_username}>15199880000</Text>
                                </View>
                                <Image style={styles.head_arrow} source={require('../../assets/right-arrow.png')}/>
                            </View>

                            {/**user info */}

                            <View style={styles.user_info}>

                                <View style={styles.user_list}>
                                    <Text style={styles.list_event} onPress={this.goBankList.bind(this)}></Text>
                                    <Text style={styles.list_des}>银行卡</Text>
                                    <Image style={styles.list_arrow} source={require('../../assets/right-arrow.png')}/>
                                </View>

                                <View style={styles.user_list}>
                                    <Text style={styles.list_event}></Text>
                                    <Text style={styles.list_des}>客服反馈</Text>
                                    <Image style={styles.list_arrow} source={require('../../assets/right-arrow.png')}/>
                                </View>

                                <View style={styles.user_list}>
                                    <Text style={styles.list_event}></Text>
                                    <Text style={styles.list_des}>手机检测</Text>
                                    <Image style={styles.list_arrow} source={require('../../assets/right-arrow.png')}/>
                                </View>

                                <View style={styles.user_list}>
                                    <Text style={styles.list_event}></Text>
                                    <Text style={styles.list_des}>帮助中心</Text>
                                    <Image style={styles.list_arrow} source={require('../../assets/right-arrow.png')}/>
                                </View>

                                <View style={[styles.user_list,styles.nb0]}>
                                    <Text style={styles.list_event}></Text>
                                    <Text style={styles.list_des}>我的设置</Text>
                                    <Image style={styles.list_arrow} source={require('../../assets/right-arrow.png')}/>
                                </View>

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

export default Center;