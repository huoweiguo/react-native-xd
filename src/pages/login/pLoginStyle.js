import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30
    },
    title: {
        marginTop: 20,
        marginBottom: 55,
        fontSize: 30,
        color: '#000117',
        fontWeight: 'bold'
    },

    iptBox: {
        flex: 1
    },

    getCode: {
        backgroundColor: '#567bff'
    },

    noCode: {
        backgroundColor: '#bbcaff'
    },

    outerBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 46,
        borderBottomWidth: 1,
        borderColor: '#eee',
        marginBottom: 10
    },

    inpText: {
        flex:1,
        height: 46,
        fontSize: 16
    },

    iconImg: {
        width: 16,
        height: 16,
        marginTop: 15,
        marginRight: 10
    },

    smsBtn: {
        width: 315,
        height: 46,
        borderRadius: 2,
        marginBottom: 30,
        marginTop: 33
    },

    btnText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 46
    },

    forgot: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    forgotText: {
        fontSize: 14,
        color: '#567bff'
    }
});