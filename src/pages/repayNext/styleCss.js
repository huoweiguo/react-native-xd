import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f5f5f5'
    },
    repay_outer: {
        height: 120,
        backgroundColor: '#fff',
        paddingTop: 25,
        paddingBottom: 16
    },
    cred: {
        color: '#ff5656'
    },
    txt1: {
        textAlign: 'center',
        color: '#4a4a4a',
        fontSize: 12,
        lineHeight: 17
    },
    txt2: {
        textAlign: 'center',
        fontSize: 30,
        lineHeight: 42,
        marginBottom: 5,
        fontWeight: '600'
    },
    txt3: {
        textAlign: 'center',
        color: '#9b9b9b',
        fontSize: 12
    },
    repay_des: {
        height: 47,
        paddingLeft: 20
    },
    r_txt: {
        color: '#9b9b9b',
        fontSize: 12,
        height: 47,
        lineHeight: 47
    },
    repay_lsit: {
        backgroundColor: '#fff'
    },
    r_arrow: {
        width: 16,
        height: 16,
        marginTop: 22,
        marginLeft: 2
    },
    list_s: {
        paddingLeft: 22,
        paddingRight: 22,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 60,
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        borderStyle: 'solid'
    },
    list_date: {
        height: 60,
        lineHeight: 60,
        color: '#9b9b9b',
        fontSize: 14
    },
    list_amount: {
        height: 60,
        lineHeight: 60,
        color: '#9b9b9b',
        fontSize: 18
    }
});