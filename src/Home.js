import React,{Component} from 'react';
import {View} from 'react-native';
import Cover from './Cover.js';
import LoginRegister from './LoginRegister';
import {getCurrentUser, getAuth} from './lib/FirebaseHandler';
import Main from './Main'

export default class Home extends Component {
    state = {
        hasAccount: false,
        showCover: true,
    }

    componentDidMount = () => {
        getAuth().onAuthStateChanged( (user) => {
            let hasAccount = false;
            if (user) {
                hasAccount = true;
            }
            this.setState({hasAccount: hasAccount, showCover: false});
        });
    }

    render() {
        if (this.state.showCover) {
            return (
                <Cover />
            )
        } else if (this.state.hasAccount) {
            return(
                <Main navigator={this.props.navigator} />
            )
        } else {
            return (
                <LoginRegister />
            )
        }
    }
}
