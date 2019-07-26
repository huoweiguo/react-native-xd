import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    },
    initBg: {
        position: "absolute",
        left: 0,
        top: 0
    },
    rotateImg: {
        position: 'relative',
        width: 287,
        height: 287
    },
    rotaBg: {
        position: "absolute",
        left: 0,
        top: 0,
        width: 287,
        height: 287
    },
    smallText: {
        marginTop: 113,
        fontSize: 14,
        color: '#fff',
        lineHeight: 20,
        fontWeight: "300",
        height: 20,
        textAlign: 'center',
        marginBottom: 2
    },
    compute: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff',
        lineHeight: 42,
        textAlign: 'center'
    },
    promptView: {
        position: 'absolute',
        bottom: 58,
        left: 0,
        zIndex: 10,
        paddingLeft: 45,
        paddingRight: 45
    },

    promptText: {
        width: 287,
        marginBottom: 15,
        fontSize: 14,
        color: '#ff5656',
        textAlign: 'center',
        lineHeight: 20
    },
    btn_view: {
        width: 287,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    init_btn1: {
        width: 130,
        height: 44,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#567bff',
        lineHeight: 44,
        textAlign: 'center',
        marginRight: 25
    },
    init_btn2: {
        width: 130,
        height: 44,
        backgroundColor: '#567bff',
        borderRadius: 5,
        color: '#fff',
        lineHeight: 44,
        textAlign: 'center'
    },
    amount: {
        fontSize: 35,
        fontWeight: '600'
    },
    yen: {
        fontSize: 14,
        fontWeight: "300",
        paddingRight: 7
    }
        
});