import React from 'react';

import {GiftedChat} from 'react-native-gifted-chat';
import {
	View, 
	Text,
}from 'react-native';

class Chat extends React.Component {
	render(){
		state ={
			messages:[]
		}
		return(
			<GiftedChat
		        messages={this.state.messages}
		        onSend={(messages) => {
	        		//send message
		        }}
		        user={{
		          _id: 1,
		        }}
		      />
		);
	}
}

Chat.defaultProps = {
  name2: 'Thien',
};

// Chat.propTypes = {
//   name2: React.propTypes.string,
// };

export default Chat;