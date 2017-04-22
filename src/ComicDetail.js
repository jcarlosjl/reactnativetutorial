import React, {Component} from 'react';
import {Image, StyleSheet, ScrollView, Text, View} from 'react-native';

export default class ComicDetail extends Component {
    getImageUrl = () => {
        const {thumbnail} = this.props.comic;
        return `${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`
    }

    render() {
        const imageUrl = this.getImageUrl();
        return (
            <ScrollView style={styles.content}>
                <View style={styles.comicBox} >
                    <Image source={{'url': imageUrl}} style={styles.image}/>       
                    <View style={styles.info}>
                        <Text style={styles.name} 
                            ellipsizeMode="tail" 
                            numberOfLines={1} 
                            allowFontScaling={false}>
                            {this.props.comic.name}
                        </Text>
                        <Text ellipsizeMode="tail" numberOfLines={6} allowFontScaling={false}
                                style={styles.description}>{this.props.comic.description}</Text>
                    </View>
                </View>
            </ScrollView>
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
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
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