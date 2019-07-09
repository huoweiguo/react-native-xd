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
    }
});