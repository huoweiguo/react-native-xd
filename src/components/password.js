/**
 * Created by wayne on 2017/6/21.
 */
import React, { Component } from 'react';
import {StyleSheet,View,TextInput,Text,TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    inputItem: {
        flex:1,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        marginLeft: 5,
        marginRight: 5,
        borderRadius: 5
    },
    inputItemBorderLeftWidth: {
        borderLeftWidth: 1,
        borderColor: '#ccc',
    },
    iconStyle: {
        width: 12,
        height: 12,
        backgroundColor: '#222',
        borderRadius: 6,
    },
    focusBox: {
        borderColor: '#567bff',
        shadowColor: '#567bff',
        shadowOffset: {h: 5, w: 5},
        shadowRadius: 5,
        shadowOpacity: 0.8
    }
});

export default class passwordInput extends Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this._onPress = this._onPress.bind(this);
    }
    _onPress(){
        this._input.focus();
    }

    render(){
        return(
            <TouchableHighlight onPress={this._onPress} activeOpacity={1} underlayColor='transparent'>
                <View style={[styles.container,this.props.style]} >
                    <TextInput ref={(c) => this._input = c}
                        maxLength={this.props.maxLength}
                        isShow={this.props.isShow}
                        autoFocus={true}
                        keyboardType="numeric"
                        style={{display: 'none'}}
                        onChangeText={(text)=>{this.setState({text});this.props.onChange(text)}}
                    />
                    {
                        this._getInputItem()
                    }
                </View>
            </TouchableHighlight>
        )

    }
    _getInputItem(){
        let inputItem = [];
        let {text}=this.state;
        for (let i = 0; i < parseInt(this.props.maxLength); i++) {
            if (i == 0) {
                inputItem.push(
                    <View key={i} style={[styles.inputItem,this.props.inputItemStyle, i == text.length ? styles.focusBox : '']}>
                        {i < text.length ?
                            this.props.isShow ? <Text>{text[i]}</Text> : <View style={[styles.iconStyle,this.props.iconStyle]}></View>
                            : null}
                    </View>)
            }
            else {
                inputItem.push(
                    <View key={i} style={[styles.inputItem,styles.inputItemBorderLeftWidth,this.props.inputItemStyle, i == text.length ? styles.focusBox : '']}>
                        {i < text.length ?
                            this.props.isShow ? <Text>{text[i]}</Text> : <View style={[styles.iconStyle,this.props.iconStyle]}></View>
                            : null}
                    </View>)
            }
        }
        
        return inputItem;
    }
}
