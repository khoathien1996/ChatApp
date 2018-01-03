import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import {HomeStack} from './src/components/Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const defaultState = {
    username: 'anonymous@gmail.com',
    name: 'Anonymous',
    description: 'anonymous',
    hearts: '0',
    following: '0',
};
const reducer = (state = defaultState, action) =>{
    if(action.type === 'THIEN_LOGIN') return {
        username: 'thien1@gmail.com',
        name: 'Khoa Thien',
        description: 'Death is like the wind always by my side',
        hearts: '1M',
        following: '5,2M'
    }
    if(action.type === 'BUU_LOGIN') return {
        username: 'buu@gmail.com',
        name: 'Hoang Buu',
        description: 'Your will, my hands',
        hearts: '800K',
        following: '2,4M'
    }
    if(action.type === 'CHUONG_LOGIN') return {
        username: 'chuong@gmail.com',
        name: 'Thanh Chuong',
        description: 'Captain Teemo on duty',
        hearts: '600K',
        following: '3,6M'
    }
    if(action.type === 'LOGOUT') return {defaultState}
    return state;
};

const store = createStore(reducer);

export default class ChatApp extends Component<{}> {

    render() {

        return (
            <Provider store={store}>
                <HomeStack />
            </Provider>
        );
    }
}



AppRegistry.registerComponent('testApp', () => ChatApp);
