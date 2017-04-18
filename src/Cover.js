import React, {Component} from 'react'
import {Image, StyleSheet, View} from 'react-native'

export default class Cover extends Component {
    render() {
        return (
            <Image source={require('../images/cover.jpg')} style={styles.imageCover}/>
        );
    }
}

const styles = StyleSheet.create({
    imageCover: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});