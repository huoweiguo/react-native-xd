import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableHighlight, 
    TouchableOpacity, 
    TextInput,
    SafeAreaView
} from 'react-native';

class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            status: false,
            inputValue: ''
        }
    }

    _onPress () {
        const { navigate } = this.props.navigation;
        return navigate('PLogin');
    }

    _getSmsCode () {
        const mobileExp = /^1[3|4|5|7|8][0-9]{9}/;
        const { navigate } = this.props.navigation;

        if (mobileExp.test(this.state.inputValue)) {
            navigate('SetCode',{
                mobile: this.state.inputValue
            });
        }
    }

    changeText (text) {
        const newText = text.replace(/[^\d]+/, '');
        const mobileExp = /^1[3|4|5|7|8][0-9]{9}/;
        this.setState({inputValue: newText});
        if (mobileExp.test(newText)) {
            this.setState({
                status: true
            });
        } else {
            this.setState({
                status: false
            });
        }
    }

    componentDidMount() {
    }
    

    render () {
        return (
            <SafeAreaView>
                <View style={styles.loginContent}>

                    {/* title */}
                    <View style={styles.titleNav}>
                        <Text style={styles.loginTitle}>登录/注册</Text>
                        <Text style={styles.welcome}>欢迎使用百家有米</Text>
                    </View>

                    {/* 手机号输入框 */}
                    <View style={styles.iptBox}>
                        <TextInput 
                            style={styles.inpt1}
                            onChangeText={this.changeText.bind(this)}
                            maxLength = {11}
                            value={this.state.inputValue}
                            placeholder="请输入手机号"
                            keyboardType='numeric'
                        />
                    </View>

                    {/**获取验证码按钮 */}
                    <View>
                        <TouchableHighlight 
                            style={[this.state.status ? styles.getCode : styles.noCode, styles.smsBtn]} 
                            underlayColor="#bbcaff" 
                            onPress={this._getSmsCode.bind(this)}>
                            <Text style={styles.btnText}>获取验证码</Text>
                        </TouchableHighlight>
                    </View>
                    
                    {/**其他方式登录 */}
                    <View style={styles.pswBox}>
                        <View style={styles.viewText}>
                            <Text style={styles.notCode}>收不到验证码</Text>
                        </View>

                        
                        <TouchableOpacity 
                            style={styles.viewText}
                            activeOpacity={0.8}
                            onPress={this._onPress.bind(this)}>
                            <Text style={styles.pswlogin}>密码登录</Text>
                        </TouchableOpacity>
                    
                        
                    </View>

                    <View style={styles.bottomBox}>
                        <Text style={styles.bottomText}>
                            登录注册即表明您已阅读并同意
                            <Text style={styles.agreement}>
                                《百家有米注册协议》
                            </Text>
                        </Text>
                    </View>
                </View>
            </SafeAreaView>    
        );
    }
}
  

const styles = StyleSheet.create({
    loginContent: {
        height: '100%',
        paddingTop: 60,
        paddingLeft: 30,
        paddingRight: 30,
        position: 'relative'
    },
    
    titleNav: {
        marginBottom: 80
    },

    loginTitle: {
        fontSize: 30,
        color: '#000117',
        lineHeight: 42,
        fontWeight: 'bold',
        letterSpacing: 3
    },

    welcome: {
        color: '#9b9b9b',
        fontSize: 14,
        lineHeight: 20
    },

    inpt1: {
        height: 46,
        borderBottomWidth: 2,
        fontSize: 16,
        borderBottomColor: "#efefef"
    },

    iptBox: {
        marginBottom: 30,
    },

    smsBtn: {
        height: 46,
        borderRadius: 2,
        marginBottom: 30
    },

    btnText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 46
    },

    getCode: {
        backgroundColor: '#567bff'
    },

    noCode: {
        backgroundColor: '#bbcaff'
    },
    

    pswBox: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    notCode: {
        color: '#9b9b9b',
        fontSize: 14
    },
    
    pswlogin: {
        color: '#567bFF',
        fontSize: 14
    },

    viewText: {
        height: 20,
        lineHeight: 20
    },

    bottomBox: {
        position: 'absolute',
        width: '100%',
        bottom: 30,
        height: 20,
        lineHeight: 20,
        left: 30,
        zIndex: 1
    },

    bottomText:{
        fontSize: 10,
        color: '#9b9b9b',
        textAlign: 'center'
    },

    agreement:{
        color: '#4a4a4a',
        fontSize: 10
    }
});

export default Login;