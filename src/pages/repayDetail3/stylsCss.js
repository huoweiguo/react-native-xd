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
    cred: {
        color: '#ff5656'
    },
    split_des: {
        paddingLeft: 20,
        color: '#9b9b9b',
        fontSize: 12,
        marginBottom: 10
    },
    repay_list: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 24,
        paddingBottom: 13,
        marginBottom: 20
    },
    repay_t1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 14,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        borderStyle: 'solid'
    },
    repay_t2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    v1: {
        fontSize: 14,
        color: '#9b9b9b',
        lineHeight: 20,
        fontWeight: '400'
    },
    v2: {
        lineHeight: 20,
        fontSize: 14,
        color: '#567bff'
    },
    v3: {
        color: '#4a4a4a',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20
    },
    v4: {
        fontSize: 20,
        color: '#4a4a4a',
        fontWeight: '500',
        lineHeight: 28
    }
});