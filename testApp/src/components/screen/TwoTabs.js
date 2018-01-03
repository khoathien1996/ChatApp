import React, { Component } from 'react';
import {
    Text,
    View,
} from 'react-native';
import MainScreenNavigator from "./MainTabs";


export default class TwoTabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name_current: this.props.navigation.state.params.username_current,
        };

    }
    componentWillMount() {
        alert(this.state.user_name_current)
    }

    render(){
        return (
            <MainScreenNavigator/>
        );
    }

}





