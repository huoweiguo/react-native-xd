import React , { Component } from 'react';
import { View, Image, ScrollView } from 'react-native';

class Agreement extends Component {
    constructor (props) {
        super(props);
        this.state = {
            imgUrl: ''
        }
    }

    componentWillMount () {
        this.setState({
            imgUrl: this.props.navigation.state.params.imgUrl
        })
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ScrollView style={{flex:1}}>
                    <Image style={{ width: '100%'}} source={{uri: this.state.imgUrl}}/>
                </ScrollView>
            </View>
        )
    }
}

export default Agreement;