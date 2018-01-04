import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

import Header    from '../Profile/Header';
import Bar       from '../Profile/Bar';
import PhotoGrid from '../Profile/PhotoGrid';

export default class Profile extends Component {
    static navigationOptions={
        tabBarLabel:"Profile",
        tabBarIcon:({tintColor}) =>(
            <Image
                source={require('../../images/avatar.png')}
                style={{width:22,height:22,tintColor:'white'}}>
            </Image>
        ),
    }
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Bar/>
                <PhotoGrid/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
