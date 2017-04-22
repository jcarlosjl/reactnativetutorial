import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class ComicWrapper extends Component {
    getImageUrl = () => {
        const {thumbnail} = this.props.comic;
        return `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`
    }

    navigate = () => {
        this.props.navigator.push({
            name: 'ComicView',
            data: this.props.comic
        })
    }

    render() {
        const imageUrl = this.getImageUrl();
        return (
            <View style={styles.content}>
                <View style={styles.comicBox} >
                    <Image source={{'url': imageUrl}} style={styles.image}/>       
                    <View style={styles.info}>
                        <TouchableOpacity onPress={this.navigate}>
                            <Text style={styles.name} 
                                ellipsizeMode="tail" 
                                numberOfLines={1} 
                                allowFontScaling={false}>
                                {this.props.comic.name}
                            </Text>
                        </TouchableOpacity>
                        <Text ellipsizeMode="tail" numberOfLines={2} allowFontScaling={false}
                                style={styles.description}>{this.props.comic.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'lightgray',
        paddingTop: 10,
    },
    comicBox: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 100,
        alignItems: 'center',
        margin: 5,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowOffset: {
        height: 1,
        width: -2
        },
        elevation: 2
    },
    image: {
        width: 80,
        height: 80,
        marginVertical: 30,
    },
    info: {
        flexDirection: 'column',
        flex: 1,
    },
    name: {
        alignSelf: 'center',
        fontWeight: '600',
        fontSize: 20,
    },
    description: {
        flex: 1,
        marginHorizontal: 10,
    }
});