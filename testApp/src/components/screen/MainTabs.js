import React, { Component } from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';

import Profile from './Profile';
import Contacts from './Contacts';
import {StyleSheet, View, Text} from "react-native";
import {connect} from 'react-redux';


var MainScreenNavigator = TabNavigator({
        TabChat:{screen:Profile},
        TabContact:{screen: Contacts},

    },{
        tabBarPosition:'top',
        swipeEnabled:true,
        tabBarOptions:{
            // activeTintColor:'white',
            // activeBackgroundColor:'darkgreen',
            // inactiveTintColor: 'black',
            // inactiveBackgroundColor: 'green'
        }
    }
);
MainScreenNavigator.navigationOptions ={
    title:"My Main"
}

export default MainScreenNavigator;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    logo:{
        color:'#fff',
        fontSize:23,
        margin:10,
        marginLeft:20,
        fontWeight:'500',
    },
    row:{
        flexDirection:'row'
    },
    topBit:{
        flexDirection:'row',
        alignItems:'center',
        paddingTop:15,
        backgroundColor:'#075e54',
        justifyContent:'space-between'
    },
});
//     constructor(props) {
//         super(props);
//         this.state = {
//             user_name_current: this.props.navigation.state.params.username_current,
//         };
//
//     }
//     componentWillMount() {
//         alert(this.state.user_name_current)
//     }
//
//     render(){
//         return (
//             <MainScreenNavigator/>
//         );
//     }
//
// }
//
//
