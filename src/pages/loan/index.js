import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styleCss';
import ImageSilder from '../../components/imageSilder';

class Loan extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            imgArr: [
                'http://pic34.nipic.com/20131020/6704106_203943375000_2.jpg',
                'http://pic37.nipic.com/20140115/7430301_100825571157_2.jpg',
                'http://pic25.nipic.com/20121112/9252150_150552938000_2.jpg'
            ],

            isLoan: true,
    
            productList: [
                require('../../assets/cp1.png'),
                require('../../assets/cp2.png'),
                require('../../assets/cp1.png'),
                require('../../assets/cp2.png'),
                require('../../assets/cp1.png'),
                require('../../assets/cp2.png'),
                require('../../assets/cp1.png'),
                require('../../assets/cp2.png')
            ]
        }
    }

    _goInitLink () {
        /**
         * REFUSE: 审核拒绝
         * SUCCESS: 通过
         *  */
        if (this.state.isLoan) {
            this.props.navigation.navigate('Result', { result: 'REFUSE'});
        } else {
            this.props.navigation.navigate('InitPage');
        }
        
    }

    
    render () {
        let { productList } = this.state;
        let _this = this;
        return  (
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
                                        <Text key={index} onPress={_this._goInitLink.bind(_this)} style={[styles.proView, (index == productList.length - 1) ? styles.prodLast : '']}>
                                            <Image style={styles.product} source={item}/>
                                        </Text>
                                    );
                                })
                            }
                        </ScrollView>
                    </View>
                </View>
            
                <View style={styles.samllText}>
                    <Text style={{color: '#ccc', textAlign: 'center'}} >本平台不像学生提供贷款服务</Text>
                </View>
            </View>    
        )
    }
   
}

export default Loan;