import React, {Component} from 'react';
import {Body,Container, Header, Icon, StyleProvider} from 'native-base';
import {ListView} from 'react-native'
import {Text, View} from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import {getComics} from './lib/MarvelApi';
import ComicWrapper from './ComicWrapper'

export default class Comics extends Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds,
            nextRows: 0,
            rows: [],
        }
    }

    componentWillMount = () => {
        
    }

    componentDidMount = () => {
        this.getData();
    }

    getData = () => {
        getComics(10, this.state.nextRows).then((response) => {
            if (response.data) {
                const rows = this.state.rows.concat(response.data.results)
                this.setState({
                    rows: rows,
                    dataSource: this.state.dataSource.cloneWithRows(rows),
                    nextRows: this.state.nextRows + response.data.count
                });
            }
        });;
    }

    render() {
        return (
            <ListView 
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ComicWrapper comic={rowData} navigator={this.props.navigator}/>}
                onEndReached={this.getData}
            />
        );
    }
}