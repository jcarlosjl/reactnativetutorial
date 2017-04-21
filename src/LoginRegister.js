import React, {Component} from 'react'
import {Body, Button, Container, Content, Header, Icon, Input, InputGroup, StyleProvider, Title} from 'native-base'
import {Image,  StyleSheet, Text, View, ScrollView} from 'react-native'
import getTheme from '../native-base-theme/components'
import material from '../native-base-theme/variables/material'
import {authenticateUser, registerUser} from './lib/FirebaseHandler'
import {validateEmail} from './lib/Validators'

export default class LoginRegister extends Component {
    nombreGrupo = null;

    state = {
        name: '',
        email : '',
        password: '',
        showRegister: false,
        nameError: '',
        emailError: '',
        passwordError: '',
    }

    handleLogin = () => {
        this.clearErrors();
        if (this.validateData()) {
            authenticateUser(this.state.email, this.state.password)
            .then(() => {
                alert('Login exitoso!');
            })
            .catch((error) => {
                const {code, message} = error;
                console.warn('Error', message);
                alert('Usuario y/o contraseña invalido, intenta nuevamete');
            });
        }
    }

    handleSignup = () => {
        this.clearErrors();
        if (this.validateData()) {
            registerUser(this.state.name, this.state.email, this.state.password)
            .then( () => {
                alert('Registro exitoso!');
            })
            .catch((error) => {
                const {code, message} = error;
                console.warn('Error', message);
                alert('Ups! algo salio mal, intenta nuevamente');
            });
        }
    }

    validateData = () => {
        let isValid = true;
        if (this.state.showRegister && this.state.name.length <= 0) {
            isValid = false;
            this.nombreGrupo.error = true;
            this.setState({nameError: 'Escribe tu nombre'});
        } else if (!validateEmail(this.state.email)) {
            isValid = false;
            this.setState({emailError: 'Ingresa una dirección de correo valida'});
        } else if (this.state.showRegister && this.state.password.length < 6) {
            isValid = false;
            this.setState({passwordError: 'Escriba una contraseña de por lo menos 6 caracteres'});
        } else if (!this.state.password) {
            isValid = false;
            this.setState({passwordError: 'Escriba tu contraseña'});
        }
        return isValid;
    }

    clearErrors = () => {
        this.setState({
            nameError: '',
            emailError: '',
            passwordError: '',
        });
    }

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header>
                        <Body>
                            <Title>Inicio</Title>
                        </Body>
                    </Header>
                    <Content style={{backgroundColor: 'black'}}>
                        <ScrollView keyboardShouldPersistTaps="never">
                            <View style={styles.content}>
                                <Image source={require('../images/logo.png')} />
                                <View style={styles.form}>
                                    {
                                        this.state.showRegister ?
                                        <View>
                                            <InputGroup ref={(group) => {this.nombreGrupo = group}}>
                                                <Icon name='ios-person' style={{color: 'white'}}/>
                                                <Input placeholder='Nombre' style={{color: 'white'}}
                                                onChangeText={(name) => this.setState({name})} />
                                            </InputGroup>
                                            <Text style={styles.errorText}>{this.state.nameError}</Text>
                                        </View>
                                    : null
                                    }
                                    <View>
                                        <InputGroup>
                                            <Icon name='ios-mail' style={{color: 'white'}}/>
                                            <Input placeholder='Email' style={{color: 'white'}}
                                            keyboardType='email-address' 
                                            onChangeText={(email) => this.setState({email})}
                                            autoCapitalize='none'
                                            autoCorrect={false}/>
                                        </InputGroup>
                                        <Text style={styles.errorText}>{this.state.emailError}</Text>
                                    </View>
                                    <View  style={{marginBottom: 30}}>
                                        <InputGroup>
                                            <Icon name='ios-unlock' style={{color: 'white'}}/>
                                            <Input placeholder='Password' style={{color: 'white'}} secureTextEntry={true} 
                                                onChangeText={(password) => this.setState({password})}/>
                                        </InputGroup>
                                        <Text style={styles.errorText}>{this.state.passwordError}</Text>
                                    </View>
                                    { !this.state.showRegister ?
                                        <View>
                                            <Button info full onPress={this.handleLogin}><Text style={loginButtonText}>Ingresar</Text></Button>
                                            <View style={{marginTop: 20}}>
                                                <Button success full onPress={
                                                    () => {
                                                        this.clearErrors();
                                                        this.setState({showRegister: true})
                                                    }
                                                }><Text style={loginButtonText}>¿No tienes cuenta aún? Registrate</Text></Button>
                                            </View>
                                        </View>
                                    : 
                                    <View> 
                                            <Button info full onPress={this.handleSignup}><Text style={loginButtonText}>Registrarme</Text></Button>
                                            <View style={{marginTop: 20}}>
                                                <Button success full onPress={() => this.setState({showRegister: false})}><Text style={loginButtonText}>Ya tengo una cuenta</Text></Button>
                                            </View>
                                        </View>
                                    }
                                </View>
                            </View>
                        </ScrollView>
                    </Content>
                </Container>
            </StyleProvider>
        )
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 20
    },
    form: {
        margin: 40,
    },
    errorText: {
        marginTop: 5,
        color: 'red',
    }
});
const loginButton = {
    marginTop: 20,
    alignSelf: 'center',
}
const loginButtonText = {
    color: 'white',
}