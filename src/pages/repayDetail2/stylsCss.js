import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    header_nav: {
        position: 'relative',
        height: 120,
        backgroundColor: '#fff',
        marginBottom: 20
    },
    small_title: {
        marginTop: 30,
        color: '#4a4a4a',
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 1,
        lineHeight: 17
    },
    amount: {
        fontSize: 30,
        color: '#4a4a4a',
        lineHeight: 42,
        textAlign: 'center',
        fontWeight: '600'
    },
    small_des: {
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 17,
        color: '#4a4a4a',
        textAlign: 'center'
    },
    icon_nav: {
        position: 'absolute',
        right: 0,
        top: 2,
        width: 67,
        height: 61
    },
    detail_des: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 12,
        paddingBottom: 18
    },
    v1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    t1: {
        color: '#909090',
        fontSize: 14,
        lineHeight: 20
    },
    t2: {
        color: '#000117'
    },
    t3: {
        color: '#567bff'
    },
    des_d1: {
        color: '#4a4a4a',
        lineHeight: 20
    },
    split_line: {
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        borderStyle: 'solid',
        marginLeft: -20,
        marginRight: -20,
        marginBottom: 13,
        marginTop: 16
    }
});