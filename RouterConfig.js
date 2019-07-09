import { createAppContainer, createStackNavigator } from 'react-navigation';

import PLogin from './src/pages/login/pLogin';
import Login from './src/pages/login';
import ModifyPassword from './src/pages/login/modifyPassword';
import SetPassword from './src/pages/login/setPassword';
import SetCode from './src/pages/login/setCode';
import Home from './src/pages/index';
import InitPage from './src/pages/init';
import LoanDetail from './src/pages/loanDetail';
import Result from './src/pages/result';
import RepayDetail from './src/pages/RepayDetail';
import extendDate from './src/pages/extends';
import RepayNext from './src/pages/repayNext';
import RepayDetail2 from './src/pages/repayDetail2';
import RepayDetail3 from './src/pages/repayDetail3';
import Repayment from './src/pages/repayment';

const AppNavigator = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: ({navigation}) => ({
            title: '登录',
            header: null
        }),
    },
    PLogin: PLogin,
    ModifyPassword: ModifyPassword,
    SetPassword: SetPassword,
    SetCode: SetCode,
    InitPage: {
        screen: InitPage,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    LoanDetail: {
        screen: LoanDetail,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    Result: {
        screen: Result,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },
    extendDate: {
        screen: extendDate,
        navigationOptions: ({navigation}) => ({
            title: '展期还款',
            headerBackTitle: null
        })
    },
    RepayDetail: {
        screen: RepayDetail,
        navigationOptions: ({navigation}) => ({
            title: '还款详情',
            headerBackTitle: null
        })
    },
    RepayNext: {
        screen: RepayNext,
        navigationOptions: ({navigation}) => ({
            title: '还款',
            headerBackTitle: null
        })
    },
    RepayDetail2: {
        screen: RepayDetail2,
        navigationOptions: ({navigation}) => ({
            title: '还款详情',
            headerBackTitle: null
        })
    },
    RepayDetail3: {
        screen: RepayDetail3,
        navigationOptions: ({navigation}) => ({
            title: '还款详情',
            headerBackTitle: null
        })
    },
    Repayment: {
        screen: Repayment,
        navigationOptions: ({navigation}) => ({
            title: '还款',
            headerBackTitle: null
        })
    }
}, {
    initialRouteName: 'Repayment' //login
});

export default createAppContainer(AppNavigator);