import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
import { GiftedChat } from 'react-native-gifted-chat';
import {connect} from 'react-redux';
class ChatScreen extends Component{
	//{}
state = {
    messages: [],
  };
  componentWillMount() {
      //Get the name of listview when  click
      alert("The name is: " + this.props.navigation.state.params.friend);
  }
  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          //alert();
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          username: this.props.navigation.state.params.friend,
          avatar: Backend.getAvatar()
        }}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages: GiftedChat.append(previousState.messages, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

function mapStateToProps(state){
    return{myValue: state.value};
}

export default connect(mapStateToProps)(ChatScreen);
ChatScreen.defaultProps = {
  username: 'Default_Name',
};

ChatScreen.propTypes = {
   username: PropTypes.string,
};