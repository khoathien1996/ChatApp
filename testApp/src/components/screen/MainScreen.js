import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
import { GiftedChat } from 'react-native-gifted-chat';
export default class MainScreen extends Component{

	//{this.props.navigation.state.params.username1}
state = {
    messages: [],
  };

  componentWillMount() {
    // this.setState({
    //   messages: [
    //     {
    //       _id: 1,
    //       text: 'Hello developer',
    //       createdAt: new Date(),
    //       user: {
    //         _id: 2,
    //         name: 'React Native',
    //         avatar: 'https://facebook.github.io/react/img/logo_og.png',
    //       },
    //     },
    //   ],
    // });
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={(message) => {
        	this.onSend(message);//Backend.sendMessage(message);
        }}
        //this.onSend(messages)}
        user={{
          _id: Backend.getUid(),
          name: this.props.name,
          //1,
        }}
      />
    );
  }

	componentDidMount(){
		Backend.loadMessages((message) => {
			this.setState((previousState) =>{
				return{
					messages: GiftedChat.append(previousState.messages, message),
				};
			});
		});
	}

	componentWillUnmount(){
		Backend.closeChat();
	}
}