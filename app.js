import React,{Component} from 'react';
import {Navigator, View} from 'react-native';
import Home from './src/Home';
import ComicDetail from './src/ComicDetail';

class MarvelBook extends Component {
    renderScene = (route, navigator) => {
        if(route.name == 'Home') {
            return <Home navigator={navigator} />
        }
        if(route.name == 'ComicView') {
            return <ComicDetail navigator={navigator} comic={route.data}/>
        }
    }

    render() {
        return (
            <Navigator style={{ flex:1 }}
                initialRoute={{ name: 'Home' }}
                renderScene={ this.renderScene }
            />
        );
    }
}

export default MarvelBook;
