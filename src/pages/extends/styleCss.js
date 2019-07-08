import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    extends_amount: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    extends_prompt: {
        flexDirection: 'row',
    },
    extends_v1: {
        width: width / 2.4,
        flexDirection: 'row'
    },
    extends_v2: {
        flex: 1
    },
    extends_f1: {
        lineHeight: 14,
        width: width / 2,
        fontSize: 10,
        color: '#9b9b9b',
        paddingRight: 20
    },
    extends_v2: {
        paddingLeft: 14,
        borderLeftWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        height: 47,
    },
    extends_des: {
        fontSize: 12,
        color: '#000118',
        lineHeight: 17,
        marginBottom: 15
    },
    money: {
        fontSize: 30,
        color: '#000118',
        fontWeight: '500',
        lineHeight: 42
    },
    extends_xs: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 30
    },
    ex_outer: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        borderStyle: 'solid'
    },
    ex_txt1: {
        height: 50,
        color: '#9b9b9b',
        fontSize: 14,
        lineHeight: 50
    },
    ex_txt2: {
        height: 50,
        color: '#4a4a4a',
        fontSize: 14,
        lineHeight: 50
    },
    cblue: {
        color: '#567bff'
    },
    noBrd: {
        borderBottomWidth: 0
    },
    ex_btn: {
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        lineHeight: 50,
        backgroundColor: '#567bff',
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 3
    },
    mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        backgroundColor: '#000',
        opacity: 0.5,
        zIndex: 9
    },
    mask_content: {
        position: 'absolute',
        width: 295,
        height: 215,
        backgroundColor: '#fff',
        left: '50%',
        top: '50%',
        marginLeft: -147,
        marginTop: -107,
        zIndex: 10
    },
    close: {
        width: 14,
        height: 13
    },
    mask_nav: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#d5ddf7'
    },
    mask_title: {
        color: '#000117',
        fontSize: 14,
        height: 40,
        lineHeight: 40
    },
    cost: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 25,
        paddingBottom: 25
    },
    cost_outer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    cost_txt: {
        color: '#4b4b4b',
        fontWeight: '500'
    },
    cost_txt1: {
        color: '#9b9b9b',
        fontSize: 14
    },
    cost_assist: {
        width: 13,
        height: 13
    },
    mt10: {
        marginTop: 22,
        marginLeft: 2
    }
});