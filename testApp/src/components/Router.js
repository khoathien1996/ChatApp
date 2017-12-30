import React, { Component } from 'react';
import Login from './screen/Login';
import Register from './screen/Register';
import Register1 from './screen/testRegister';
import MainScreen from './screen/MainScreen';
import {StackNavigator} from 'react-navigation';

export const HomeStack = StackNavigator({
 
  LoginScreen:{
  	screen: Login,
  	navigationOptions:{
  		title: "Login" 
  	}
  },
  RegisterScreen:{
  	screen: Register,
  	navigationOptions:{
  		title:'Register'
  	}
  },
  MainScreen:{
    screen: MainScreen,
    navigationOptions:{
      title:'Chat'
    }
  },

  RegisterScreen1:{
    screen: Register1,
    navigationOptions:{
      title:'ahihi'
    }
  },

  
});
