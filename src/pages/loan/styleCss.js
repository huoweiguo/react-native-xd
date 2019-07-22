import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff'
    },
    geolocation: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    geoMap: {
        flexDirection: 'row',
        width: 175
    },
    mapImg: {
        width: 14,
        height: 18,
        marginRight: 5
    },
    city: {
        height: 18,
        lineHeight: 18
    },
    ding: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 22,
        height: 22
    },
    swiperIndexView:{
        width:8,
        height:8,
        borderRadius:4,
        marginLeft:3,
        marginRight:3
    },
    nav: {
        height: 50
    },
    navText: {
        height: 50,
        lineHeight: 50,
        color: '#4a4a4a',
        fontSize: 14,
        fontWeight: '500'
    },
    product: {
        width: width - 40,
        height: 67
    },
    proView: {
        flex: 1,
        paddingBottom: 15,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#f5f5f5'
    },
    prodLast: {
        borderBottomWidth: 0
    },
    samllText: {
        paddingBottom: 20,
        fontSize: 10
    },
    banner: {
        marginLeft: -20, 
        marginRight: -20, 
        height: 135, 
        marginTop: 20, 
        marginBottom: 10
    }
});
