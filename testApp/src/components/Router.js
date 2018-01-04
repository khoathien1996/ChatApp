import React, { Component } from 'react';
import Login from './screen/Login';
import Register from './screen/Register';
import ChatScreen from './screen/ChatScreen';
import {StackNavigator} from 'react-navigation';

import MainScreenNavigator from "./screen/MainTabs";

export const HomeStack = StackNavigator({

    LoginScreen:{
        screen: Login,
        navigationOptions:{
            title: "Login"
        }
    },

    MainTabs:{
        screen: MainScreenNavigator,
        navigationOptions:{
            title: "Sky"
        }
    },
  RegisterScreen:{
  	screen: Register,
  	navigationOptions:{
  		title:'Register'
  	}
  },
  ChatScreen:{
    screen: ChatScreen,
    navigationOptions:{
      title:'Chat'
    }
  },


  
});
