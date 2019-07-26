import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f5f5f5'
    },
    header_nav: {
        backgroundColor: '#d5ddf7',
        marginBottom: 17,
        fontSize: 12,
        color: '#4a4a4a',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 6,
        paddingBottom: 6
    },
    p_info: {
        backgroundColor: '#fff',
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 50
    },
    line_outer: {
        flexDirection: 'row',
        height: 50,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f0f0f0'
    },
    nb0: {
        borderBottomWidth: 0
    },
    title_line: {
        height: 50,
        color: '#9b9b9b',
        fontSize: 14,
        textAlign: 'right',
        width: 70,
        lineHeight: 50,
        marginRight: 18
    },
    title_dse: {
        height: 50,
        lineHeight: 50,
        color: '#000118',
        fontSize: 14
    },
    auto_bind: {
        flexDirection: 'row'
    },
    smsCode: {
        flex: 1,
        width: '100%',
        position: 'relative'
    },
    sms: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 100,
        height: 50,
        lineHeight: 50,
        color: '#567bff',
        textAlign: "right"
    },
    ipt: {
        width: 247,
        height: 50
    },
    bind_btn_set: {
        marginLeft: 20,
        marginRight: 20,
        height: 50,
        borderRadius: 5,
        marginBottom: 20
    },
    bind_btn: {
        backgroundColor: '#bbcaff',
        color: '#fff',
        width: '100%',
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 20
    },
    bind_act: {
        backgroundColor: '#567bff',
        color: '#fff',
        width: '100%',
        lineHeight: 50,
        textAlign: 'center',
        fontSize: 20
    },
    support: {
        textAlign: 'center',
        color: '#567bff',
        fontSize: 14,
        paddingBottom: 20
    },
    sms_gray: {
        color: '#999'
    }
});