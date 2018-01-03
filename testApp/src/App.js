import React, { Component } from 'react';
import {
View
} from 'react-native';
import {HomeStack} from './components/Router';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const defaultState = {username: 'anonymous', value: 'Anonymous'};

const reducer = (state = defaultState, action) =>{
  if(action.type === 'LOGIN') return {username: 'thien1@gmail.com', value: 'Khoa Thien'}
  if(action.type === 'BUU_LOGIN') return {username: 'buu@gmail.com', value: 'Hoang Buu'}
  if(action.type === 'LOGOUT') return {username: '', value: ''}
  return state;
};

const store = createStore(reducer);

//const myState = store.getState();
//console.log(myState);

//store.dispatch({type: 'LOGIN'});
//console.log('Sau khi dispatch: ' + store.getState().username);


export default class App extends Component<{}> {

  render() {

    return (
        <Provider store={store}>
            <HomeStack />
        </Provider>
    );
  }
}

