import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    headerBg: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 375,
        height: 167,
        backgroundColor: '#567bff'
    },
    back: {
        position: 'relative',
        width: 16,
        height: 17,
        top: 4
    },
    loan_nav: {
        position: 'relative',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    nav_title: {
        width: 355,
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 25
    },
    nav_back: {
        position: 'absolute',
        left: 0,
        top: 5,
        height: 25,
        width: 25,
        zIndex: 5
    },
    amount_detail: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 20,
        paddingBottom: 40
    },
    loan_msg: {
        width: 355,
        height: 140,
        backgroundColor: '#fff'
    },
    msg_top: {
        flexDirection: 'row',
        width: 355,
        height: 91,
        paddingTop: 20,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        borderStyle: 'solid'
    },
    msg: {
        width: 177
    },
    msg_name: {
        lineHeight: 17,
        fontSize: 12,
        color: '#9b9b9b',
        textAlign: 'center'
    },
    msg_num: {
        marginTop: 4,
        lineHeight: 36,
        fontSize: 25,
        color: '#4a4a4a',
        textAlign: 'center'
    },
    msg_list: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff'
    },
    msg_prod: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    list_name: {
        height: 48,
        lineHeight: 48,
        fontSize: 14,
        color: '#9b9b9b',
    },
    list_num: {
        height: 48,
        lineHeight: 48,
        fontSize: 14,
        color: '#4a4a4a'
    },
    msg_title: {
        height: 42,
        lineHeight: 42,
        fontSize: 12,
        color: '#9b9b9b',
        paddingLeft: 20
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 48,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
        borderStyle: 'solid'
    },
    noborder: {
        borderBottomWidth: 0
    },
    msg_agree: {
        marginTop: 39,
        height: 14,
        marginBottom: 15,
        fontSize: 10,
        color: '#9b9b9b',
        marginLeft: 10
    },
    agree_link: {
        color: '#4a4a4a'
    },
    loan_btn: {
        marginLeft: 10,
        marginRight: 10,
        width: 335,
        backgroundColor: '#567bff'
    },
    btnText:{
        height: 50,
        lineHeight: 50,
        fontSize: 18,
        textAlign: 'center',
        color: '#fff'
    },
    mask_content: {
        position: 'absolute',
        left: 0,
        top: 0,
        zIndex: 100
    },
    mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        backgroundColor: '#000',
        opacity: 0.5,
        zIndex: 100
    },
    mask_box: {
        position: 'absolute',
        left: width / 2,
        top: height/2,
        width: 295,
        height: 160,
        marginLeft: -(295/2),
        marginTop: -(160/2),
        backgroundColor: '#fff',
        borderRadius: 10,
        zIndex: 101
    },
    btn_set: {
        flexDirection: 'row',
        height: 62,
        borderTopWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid'
    },
    title_prompt: {
        textAlign: 'center',
        marginTop: 30,
        color: '#000118',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        marginBottom: 8
    },
    prompt_small: {
        textAlign: 'center',
        color: '#4a4a4a',
        fontSize: 12,
        lineHeight: 17,
        marginBottom: 17
    },
    btn_set: {
        height: 62,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid'
    },
    btn_txt1: {
        textAlign: 'center',
        height: 62,
        lineHeight: 62,
        color: '#909090',
        fontSize: 18
    },
    btn_txt2: {
        color: '#567bff',
        fontSize: 18,
        textAlign: 'center',
        height: 62,
        lineHeight: 62,
        fontWeight: '500'
    }
});