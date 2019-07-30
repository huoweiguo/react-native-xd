import React, { Component } from 'react';
import { View, Text, Image, ScrollView, SafeAreaView } from 'react-native';
import { styles } from './styleCss';
import ImageSilder from '../../components/imageSilder';
import { preAddress } from '../../../api';
import queryString from 'querystring';
import Toast from 'react-native-easy-toast';
import commons from '../../../getItems';

class Loan extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            imgArr: [
                'http://pic34.nipic.com/20131020/6704106_203943375000_2.jpg',
                'http://pic37.nipic.com/20140115/7430301_100825571157_2.jpg',
                'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg'
            ],
            token: '',
            merchantId:  '',
            userId: '',
            productId: '',
            userName: '',
            productName: '',
            isLoan: false,
            productList: []
        }
    }

    getProduct () {
        const _this = this;
        fetch(`${preAddress}/product/queryProductListShowApp`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                token: _this.state.token
            },
            body: queryString.stringify({
                merchantId: _this.state.merchantId,
                userId: _this.state.userId
            })
        }).then( res => res.json())
            .then( res => {
                if (res.respCode == '000000') {
                    _this.setState({
                        productList: res.data
                    })
                } else {
                    _this.refs.toast.show(res.respMsg);
                }
            })
            .catch( err => {
                console.log(err);
            });
    }
    
    _goInitLink (obj) {
        /**
         * REFUSE: 审核拒绝
         * SUCCESS: 通过
         *  */
        this.setState({
            productId: obj.productId,
            productName: obj.productName,
            userName: this.state.userName
        })

         if (!obj.hasPassAndNotAcceptFlag) {
             this.isBindCard();
         } else {
            this.props.navigation.navigate('LoanDetail');
         }

        /*this.props.navigation.navigate('Result', { result: 'REFUSE'});*/ 
    }

    isBindCard () {
        let _this = this,
            {navigate} = this.props.navigation,
            t = new Date().getTime(),
            url = `${preAddress}/bankCard/query?token=${this.state.token}&userId=${this.state.userId}&merchantId=${this.state.merchantId}&t=${t}`
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
            if (res.respCode === '000000') {
                    let { productId, userName, productName } = _this.state;
                    if (res.data.length > 0) {
                        navigate('InitPage', {
                            productId,
                            userName,
                            productName
                        });
                    } else {
                        navigate('BankList')
                    }
            } else {
                _this.refs.toast.show(res.respMsg);
            }
        })
        .catch( err => {
            console.log(err);
        })
    }

    componentDidMount() {
        let _this = this;
        commons.getItemParams(this, function(){
            _this.getProduct();
        });
    }
    

    
    render () {
        let { productList } = this.state;
        let _this = this;
        return  (
            <SafeAreaView style={{flex: 1}}>
                <View style={{backgroundColor: '#f5f5f5', flex:1}}>
                    <View style={styles.container}>
                        <View styles={styles.geolocation}>
        
                            <View style={styles.geoMap}>
                                <View><Image style={styles.mapImg} source={require('../../assets/map.png')}/></View>
                                <View><Text style={styles.city}>上海市</Text></View>
                            </View>
        
                            <Image style={styles.ding} source={require('../../assets/icon_have_new.png')} />
        
                        </View>
        
                        {/**BANNER */}
                        <View style={styles.banner}>
                            <ImageSilder
                                height={135}
                                autoplay={true}
                                images={this.state.imgArr} 
                            />
                        </View>
                        
        
                        <View style={styles.nav}>
                            <Text style={styles.navText}>借款推荐</Text>
                        </View>
        
                        <View style={{flex: 1}}>
                            <ScrollView style={{flex: 1}}>
                                {
                                    productList.map(function (item, index) {
                                        return (
                                            <Text key={index} onPress={_this._goInitLink.bind(_this, item)} style={[styles.proView, (index == productList.length - 1) ? styles.prodLast : '']}>
                                                <Image style={styles.product} source={{uri:item.imageUrl}}/>
                                            </Text>
                                        );
                                    })
                                }

                                <View style={styles.samllText}>
                                    <Text style={{color: '#ccc', textAlign: 'center'}} >本平台不像学生提供贷款服务</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                
                    <Toast position="center" ref="toast"/>
                </View>  
                
            </SafeAreaView>  
        )
    }
   
}

export default Loan;