import React, { Component } from 'react';
import { Image } from 'react-native';
import { styles } from './indexStyles';
import Loan from '../loan';
import My from '../my';
import Repay from '../repay';
import TabNavigator from 'react-native-tab-navigator';

let navigation = null;

class Home extends Component {

    constructor (props) {
        super (props);
        this.state = {
            selectedTab: 'Loan'
        };
        navigation = this.props.navigation;
    }

    render () {
        let loanView = <Loan navigation={navigation}></Loan>;

        let repayView = <Repay navigation={navigation}></Repay>;

        let myView = <My navigation={navigation}></My>;

        return (
            <TabNavigator>
                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Loan'}
                    title="借款"
                    renderIcon={() => <Image style={styles.barImg} source={require('../../assets/icon1_jk.png')} />}
                    renderSelectedIcon={() => <Image style={styles.barImg} source={require('../../assets/icon1_jk_pre.png')} />}
                    onPress={() => this.setState({ selectedTab: 'Loan' })}>
                    {loanView}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'Repay'}
                    title="还款"
                    renderIcon={() => <Image style={styles.barImg} source={require('../../assets/icon2_hk.png')} />}
                    renderSelectedIcon={() => <Image style={styles.barImg} source={require('../../assets/icon2_hk_pre.png')} />}
                    badgeText="2"
                    onPress={() => this.setState({ selectedTab: 'Repay' })}>
                    {repayView}
                </TabNavigator.Item>

                <TabNavigator.Item
                    selected={this.state.selectedTab === 'My'}
                    title="我的"
                    renderIcon={() => <Image style={styles.barImg} source={require('../../assets/icon3_user.png')} />}
                    renderSelectedIcon={() => <Image style={styles.barImg} source={require('../../assets/icon3_user_pre.png')} />}
                    onPress={() => this.setState({ selectedTab: 'My' })}>
                    {myView}
                </TabNavigator.Item>
            </TabNavigator>
        )
    }
}

export default Home;