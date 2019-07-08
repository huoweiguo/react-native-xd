import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Toast extends Component {
    render () {
        return (
            <View style={styles.toast}>
                <Text numberOfLines={2} style={styles.toast_text}>说的话可说的是嘎三个哥哥啊哈电话看哈的</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    toast: {
        position: 'absolute',
        left: '50%',
        top: '48%',
        width:  200,
        backgroundColor: '#000',
        marginLeft: -100,
        opacity: 0.5,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 5
    },
    toast_text: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 22
    }
});
export default Toast;