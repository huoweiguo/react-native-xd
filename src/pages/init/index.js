import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './initStyle';
import RotateInit from '../../components/rotateInit';

class Init extends Component {
    constructor (props) {
        super(props);
        this.timer = null;
        this.state = {
            count: 10,
            isShow: false
        }
    }

    componentDidMount() {
        this.countDown();
    }
    
    //倒计时
    countDown () {
        let _this = this;
        clearInterval(this.timer);
        this.timer = setInterval(function () {

            let count = _this.state.count - 1;
            if (count < 0 ) {
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
                    <Text style={styles.compute}>计算中{this.state.count}S</Text>
                </View>

                {
                    this.state.isShow ? reset : (<View></View>)
                }
                
            </View>
        )
    }
}

export default Init;