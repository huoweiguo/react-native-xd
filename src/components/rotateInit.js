import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

class RotateInit extends Component {
    constructor (props) {
        super(props);
        this.spinValue = new Animated.Value(0)
        this.state = {};
    }

    componentDidMount() {
        this.spin();
    }

    spin = () => {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 2500,
            easing: Easing.linear,
            useNativeDriver: true
        }).start(()=>this.spin());
    }

    render () {
        const spinStyle = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <Animated.Image style={{...this.props.style, transform:[{rotate: spinStyle}]}} source={require('../assets/init_circle.png')}></Animated.Image>
        )
    }
}

export default RotateInit;