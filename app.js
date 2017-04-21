import React,{Component} from 'react';
import {View} from 'react-native';
import Cover from './src/Cover.js';
import LoginRegister from './src/LoginRegister';
import {getCurrentUser, getAuth} from './src/lib/FirebaseHandler';
import Main from './src/Main'

class MarvelBook extends Component {
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
                <Main />
            )
        } else {
            return (
                <LoginRegister />
            )
        }
    }
}

export default MarvelBook;
