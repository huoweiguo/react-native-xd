import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    content: {
        backgroundColor: '#fff',
        paddingTop: 40
    },
    header_act: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        paddingLeft: 29,
        paddingRight: 29,
        paddingBottom: 19,
        backgroundColor: '#fff'
    },
    head_img: {
        width: 54,
        height: 54,
        marginRight: 12
    },
    head_username: {
        color: '#4a4a4a',
        fontSize: 16,
        lineHeight: 22,
        fontWeight: '500',
        marginTop: 15
    },
    head_arrow: {
        width: 12,
        height: 12,
        marginTop: 20
    },
    user_bg: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: 375,
        height: 80
    },
    user_info: {
        backgroundColor: '#fff',
        paddingLeft: 30,
        paddingRight: 30
    },
    user_list: {
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 55,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f0f0f0'
    },
    list_arrow: {
        width: 10,
        height: 10,
        marginTop: 20
    },
    list_des: {
        fontSize: 15,
        color: '#000117',
        fontWeight: '300',
        height: 55,
        lineHeight: 55
    },
    list_event: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 55,
        zIndex: 2
    },
    nb0: {
        borderBottomWidth: 0
    }
})