import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    },
    select_list: {
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f0f0f0'
    },
    list_img: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    content: {
        flex: 1,
        backgroundColor: '#fff',
        paddingBottom: 20
    },
    bank_name: {
        color: '#4a4a4a',
        fontSize: 16,
        marginBottom: 3
    },
    bank_des: {
        fontSize: 12,
        color: '#9b9b9b'
    }
});