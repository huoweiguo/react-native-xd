import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    small_prompt: {
        lineHeight: 20,
        backgroundColor: '#Eff2ff',
        fontSize: 12,
        color: '#567bff',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10
    },
    bank_content: {
        backgroundColor: '#fff'
    },
    bank_sel: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 13,
        paddingBottom: 13,
        height: 50,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f0f0f0',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    bankImg: {
        width: 24,
        height: 24
    },
    r_arrow: {
        width: 12,
        height: 12,
        marginTop: 6
    },
    left: {
        flexDirection: 'row'
    },
    bankName: {
        fontSize: 18,
        color: '#000117',
        fontWeight: '300',
        marginLeft: 10
    },
    mask_content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundColor: '#000',
        opacity: 0.65,
        zIndex: 10
    },
    popBox: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        height: '50%',
        backgroundColor: '#fff',
        zIndex: 11
    },
    sel_nav: {
        position: 'relative',
        height: 48,
        backgroundColor: '#f5f5f5'
    },
    closeBtn: {
        position: 'absolute',
        right: 19,
        top: 19,
        zIndex: 13
    },
    selImg: {
        width: 18,
        height: 18
    },
    text1: {
        height: 48,
        lineHeight: 48,
        textAlign: 'center',
        fontSize: 20,
        color: '#000118',
        fontWeight: '300'
    },
    bank_list: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        paddingBottom: 14,
        marginRight: 20,
        paddingTop: 14,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#f5f5f5',
        borderStyle: 'solid'
    },
    bankImg_list: {
        width: 32,
        height: 32,
        marginRight: 9,
        marginTop: 2
    },
    bank_left: {
        flexDirection: 'row'
    },
    bank_name_number: {
        color: '#000117',
        fontSize: 14,
        lineHeight: 20,
        marginBottom: 1
    },
    bank_des: {
        color: '#909090',
        fontSize: 12,
        lineHeight: 17
    },
    select_icon: {
        width: 21,
        height: 20,
        marginTop: 10
    },
    arrow_icon: {
        width: 14,
        height: 14,
        marginTop: 12
    },
    mask_event: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        zIndex: 5
    }
});