import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    no_bank_v: {
        marginTop: 135,
        width: 150,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 30
    },
    no_bank_card: {
        width: 150,
        height: 110,
        marginBottom: 10
    },
    noCard: {
        textAlign: 'center',
        color: '#9b9b9b',
        fontSize: 16,
        lineHeight: 22
    },
    add_card_box: {
        position: 'relative',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: '#f4f8fe',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#a4b7fa',
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 3,
        marginBottom: 80
    },
    cross: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    add_card_text: {
        fontSize: 16,
        color: '#4a4a4a',
        lineHeight: 20
    },
    add_card_arrow: {
        position: 'absolute',
        right: 20,
        top: 13,
        width: 12,
        height: 12,
        zIndex: 5
    },
    add_card_mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: width - 40,
        height: 40,
        zIndex:  9
    },
    card_content: {
        flex: 1,
        margin: 20
    },
    card_prompt: {
        flexDirection: 'row',
        marginBottom: 10
    },
    icon_superise: {
        width: 13,
        height: 13,
        marginRight: 5
    },
    prompt_t1: {
        color: '#567bff',
        fontSize: 12
    },
    list_card: {
        position: 'relative',
        width: '100%',
        height: 120,
        marginBottom: 20
    },
    bank_outer: {
        flex: 1,
        borderRadius: 3,
        padding: 20
    },
    card_des_number: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoImg: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    card_des: {
        flex: 1
    },
    bank_txt: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    bank_name_text: {
        fontSize: 16,
        color: '#fff',
        lineHeight: 22,
        fontWeight: '500'
    },
    default_style: {
        width: 44,
        height: 15,
        borderRadius: 7,
        backgroundColor: '#fff',
        marginTop: 5
    },
    default_txt: {
        height: 15,
        color: '#567bff',
        fontSize: 10,
        textAlign: 'center',
        lineHeight: 15
    },
    card_type: {
        fontSize: 10,
        color: '#fff',
        lineHeight: 14,
        fontWeight: '300'
    },
    card_number: {
        color: '#fff',
        fontSize: 24,
        height: 33,
        lineHeight: 33
    },
    mask_card: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: 120,
        zIndex: 2
    },
    list_mask: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        opacity: 0.65,
        zIndex: 9
    },
    list_content: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        backgroundColor: '#eee',
        width: '100%',
        zIndex: 10
    },
    set_card: {
        height: 43,
        backgroundColor: '#fff',
        lineHeight: 43,
        textAlign: 'center',
        fontSize: 14,
        color: '#4a4a4a',
        marginBottom: 10
    },
    mb0: {
        marginBottom: 0
    },
    default_view: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 270,
        height: 160,
        marginLeft: -135,
        marginTop: -80,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingTop: 22,
        zIndex: 10
    },
    df_txt1: {
        color: '#000118',
        fontSize: 18,
        lineHeight: 25,
        fontWeight: '300',
        textAlign: 'center',
        marginBottom: 8
    },
    df_txt2: {
        color:'#9b9b9b',
        fontSize: 12,
        lineHeight: 17,
        textAlign: 'center',
        fontWeight: '300'
    },
    df_btn_set: {
        flexDirection: 'row',
        marginTop: 15,
        borderTopWidth: 1,
        borderColor: '#ddd',
        borderStyle: 'solid'
    },
    df_btn: {
        color: '#9b9b9b',
        height: 55,
        lineHeight: 55,
        textAlign: 'center',
        flex: 1,
        fontSize: 16
    },
    cblue: {
        color:'#567bff'
    }
})