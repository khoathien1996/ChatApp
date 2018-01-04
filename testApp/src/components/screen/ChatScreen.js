import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
import { GiftedChat } from 'react-native-gifted-chat';
import {connect} from "react-redux";

class ChatScreen extends Component{
	//{}
state = {
    messages: [],
    counterpart: this.props.navigation.state.params.counterpart,
    refString: '',
  };
  componentWillMount() {
     //alert('sau' + this.state.counterpart);
      //thiet lap ref. child here
      //myUserName -- this.state.counterpart
      if((this.props.myUsername == 'thien@gmail.com' && this.state.counterpart == 'buu@gmail.com') ||
          (this.props.myUsername == 'buu@gmail.com' && this.state.counterpart == 'thien@gmail.com'))
          this.setState({refString: 'thien_buu'});

      if((this.props.myUsername == 'thien@gmail.com' && this.state.counterpart == 'chuong@gmail.com') ||
          (this.props.myUsername == 'chuong@gmail.com' && this.state.counterpart == 'thien@gmail.com'))
          this.setState({refString: 'thien_chuong'});

      if((this.props.myUsername == 'buu@gmail.com' && this.state.counterpart == 'chuong@gmail.com') ||
          (this.props.myUsername == 'chuong@gmail.com' && this.state.counterpart == 'buu@gmail.com'))
          this.setState({refString: 'buu_chuong'});

      if(this.state.counterpart == 'All')
          this.setState({refString: 'All'});

  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
          username: this.props.myUsername,
            avatar: Backend.getAvatar(),
        }}
        showUserAvatar={true}
      />
    );
  }
  componentDidMount() {
    Backend.loadMessages(
        this.state.refString,
        ((message) => {
          this.setState((previousState) => {
                return {
                    messages: GiftedChat.append(previousState.messages, message),
                };
            });
        })
    );
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}

function mapStateToProps(state){
    return{myUsername: state.username, myCounterpart: state.counterpart};
}
export default connect(mapStateToProps)(ChatScreen);
// ChatScreen.defaultProps = {
//   username: 'Default_Name',
// };

// ChatScreen.propTypes = {
//    username: PropTypes.string,
// };