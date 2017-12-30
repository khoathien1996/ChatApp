import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, TextInput, Alert, Keyboard}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
export default class Register1 extends Component{


	render(){
		
		return(
			
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View >
          <View >
            <View>
              <TextInput
                //style={[baseStyles.input, baseStyles.darkFont]}
                autoFocus={true}
                placeholder='Email'
                placeholderTextColor='#AAA'
                autoCorrect={false}
                autoCapitalize='none'
                keyBoardType='email-address'
                returnKeyType='next'
                value={this.email}
                onChangeText={this.onChangeEmail}
              />
            </View>
            <View>
              <TextInput
                secureTextEntry={true}
          //      style={[baseStyles.input, baseStyles.darkFont]}
                placeholder='Password'
                placeholderTextColor='#AAA'
                autoCorrect={false}
                autoCapitalize='none'
                returnKeyType='send'
                value={this.password}
                onChangeText={this.onChangePassword}
              />
            </View>
            <View style={{height: 60}}>
              <Button title='Create Account Now'
                      onPress={this.register}
                      backgroundColor='#31D8A0'
                      buttonStyle={{marginTop: 10, borderRadius: 5}}/>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
		
		
	}
}
