import { StyleSheet, Dimensions } from 'react-native';
const { width }  = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#f5f5f5'
    },
    repay_header: {
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingBottom: 18,
        marginBottom: 20
    },
    smallText: {
        color: '#4a4a4a',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 17
    },
    amount: {
        color: '#4a4a4a',
        fontSize: 30,
        lineHeight: 42,
        textAlign: 'center',
        marginBottom: 5,
        fontWeight: '600'
    },
    small_prompt: {
        color: '#567bff',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 17,
        marginBottom: 28
    },
    btn1: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#567bff',
        height: 50,
        color: '#fff',
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 20,
        borderRadius: 3
    },
    strentch: {
        position: 'relative',
        height: 84,
        backgroundColor: '#fff',
        marginBottom: 20,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    str_txt1: {
        color: '#4a4a4a',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 22,
        marginBottom: 5
    },
    str_txt2: {
        color: '#9b9b9b',
        fontSize: 12,
        lineHeight: 17
    },
    loan_det: {
        padding: 20,
        backgroundColor: '#fff'
    },
    loan_cont: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        borderStyle: 'solid',
        paddingBottom: 10,
        marginBottom: 10
    },
    loan_amount: {
        fontSize: 14,
        color: '#4a4a4a',
        lineHeight: 20,
        fontWeight: '500'
    },
    loan_date: {
        color: '#909090',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '300'
    },
    loan_time: {
        color: '#000117',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '300'
    },
    rate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 35
    },
    r1: {
        height: 20,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '300',
        color: '#909090'
    },
    r2: {
        height: 20,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: '300',
        color: '#4a4a4a'
    },
    small_view: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    amaze: {
        width: 13,
        height: 13,
        marginRight: 5,
        marginTop: 2
    },
    str_rarrow: {
        width: 12, 
        height: 12,
        marginTop: 5
    },
    cred: {
        color: '#ff5656'
    },
    linkMask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: 84,
        zIndex: 10
    }
});