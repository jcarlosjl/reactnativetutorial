import React, {Component} from 'react';
import {Body,Container, Header, Icon, StyleProvider, Tab, TabHeading, Tabs, Title} from 'native-base';
import {Text, View} from 'react-native';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import Comics from './Comics'

export default class Main extends Component {
    render() {
        return (
        <StyleProvider style={getTheme(material)}>
                <Container>
                    <Header hasTabs >
                        <Body>
                            <Title>Contenido</Title>
                        </Body>
                    </Header>
                    <Tabs>
                        <Tab heading={
                            <TabHeading>
                                <Icon name="ios-paper" />
                                <Text style={{marginHorizontal: 10}}>Historietas</Text>
                            </TabHeading>
                        }>
                            <Comics navigator={this.props.navigator}/>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Icon name="ios-people" />
                                <Text style={{marginHorizontal: 10}}>Personajes</Text>
                            </TabHeading>
                        }>
                            <View>
                            </View>
                        </Tab>
                        <Tab heading={
                            <TabHeading>
                                <Icon name="ios-settings" />
                                <Text style={{marginHorizontal: 10}}>Ajustes</Text>
                            </TabHeading>
                        }>
                            <View>
                            </View>
                        </Tab>
                    </Tabs>
                </Container>
        </StyleProvider>
        )
    }
}