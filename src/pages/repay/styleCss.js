import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    titleBox: {
        height: 40,
        backgroundColor: '#fff',
        marginBottom: 15
    },
    titleText: {
        height: 40,
        textAlign: 'center',
        lineHeight: 40,
        color: '#4a4a4a',
        fontSize: 18,
        fontWeight: '500'
    },
    nodata: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgData: {
        width: 150,
        height: 110,
        marginBottom: 10
    },
    nodataText: {
        fontSize: 16,
        color: '#9b9b9b',
        lineHeight: 22,
        marginBottom: 29,
    },
    loanBtn: {
        width: 119,
        height: 44,
        backgroundColor: '#567bff',
        borderRadius: 5
    },
    btnText: {
        width: 119,
        height: 44,
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 44
    },

    repayList: {
        position: 'relative',
        height: 115,
        backgroundColor: '#fff',
        marginBottom: 15,
        paddingLeft: 20,
        paddingRight: 20
    },
    innerClick: {
        position: 'absolute',
        left: 0,
        top: 0,
        height: 115,
        width: width,
        zIndex: 10
    },
    rarrow: {
        width: 10,
        height: 10,
        marginTop: 16,
        marginLeft: 5
    },
    list_nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 41,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f0f0f0'
    },
    applicable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        color: '#9b9b9b',
        fontSize: 12,
        lineHeight: 41
    },
    status: {
        color: '#9b9b9b',
        fontSize: 12,
        lineHeight: 41
    },
    list_detail: {
        paddingTop: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    fsty: {
        color: '#909090',
        fontSize: 12,
        lineHeight: 17,
    },
    money: {
        color: '#4a4a4a',
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 28
    },
    mt6: {
        marginTop: 6
    },
    blueText: {
        color: '#567bff'
    },
    isBottom: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 20,
        color: '#999'
    },
    order_mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
        backgroundColor: '#000',
        opacity: 0.65
    },
    order_view: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 295,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        marginLeft: -147,
        marginTop: -158
    },
    order_img: {
        width: "100%",
        height: 227
    },
    order_text_mask: {
        width: 212,
        height: 36,
        backgroundColor: '#567bff',
        color: '#fff',
        lineHeight: 36,
        textAlign: 'center',
        fontSize: 14
    },
    mask_Text1: {
        width: 212,
        height: 36,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 25,
        marginBottom: 25,
        borderRadius: 21,
        overflow: 'hidden'
    }
});