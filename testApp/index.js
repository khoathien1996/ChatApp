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
    counterpart: '',
    image: require('./src/images/ChiPu_00.jpg'),
};
const reducer = (state = defaultState, action) =>{
    if(action.type === 'THIEN_LOGIN') return {
        username: 'thien@gmail.com',
        name: 'Khoa Thien',
        description: 'Death is like the wind always by my side',
        hearts: '1M',
        following: '5,2M',
        counterpart: state.counterpart,
        image: require('./src/images/NgocTrinh_00.jpg'),
    }
    if(action.type === 'BUU_LOGIN') return {
        username: 'buu@gmail.com',
        name: 'Hoang Buu',
        description: 'Your will, my hands',
        hearts: '800K',
        following: '2,4M',
        counterpart: state.counterpart,
        image: require('./src/images/KieuTrinh_00.jpg'),
    }
    if(action.type === 'CHUONG_LOGIN') return {
        username: 'chuong@gmail.com',
        name: 'Thanh Chuong',
        description: 'Captain Teemo on duty',
        hearts: '600K',
        following: '3,6M',
        counterpart: state.counterpart,
        image: require('./src/images/ChiPu_00.jpg'),
    }
    if(action.type === 'LOGOUT') return {defaultState}
    if(action.type === 'CLICK_COUNTERPART')return{
        ...state,
        counterpart: action.couterpart}

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
