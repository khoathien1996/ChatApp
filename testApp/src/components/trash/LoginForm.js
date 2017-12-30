import React, {Component} from 'react';
import { 
	View, 
	TextInput, 
	StyleSheet, 
	Image, 
	Text, 
	TouchableOpacity,


} from 'react-native';

export default class LoginForm extends Component{
	render(){
		return(
			<View>
				<TextInput 
					placeholder="username"
					placeholderTextColor='#7f8c8d'
					style={styles.input} 
				/>
				<TextInput 
					placeholder="password"
					placeholderTextColor='#7f8c8d'
					secureTextEntry
					style={styles.input} 
				/>

				<TouchableOpacity style={styles.buttonContaniner}>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
				

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		vertical-align: top;
	},
	input:{
		height: 40,
		backgroundColor:'rgba(255,255,255,0.3)',
		//marginBottom: 10,
		color: '#2c3e50',
		paddingHorizontal: 10,
	},
	buttonContaniner:{
		backgroundColor: '#d35400',
	//	paddingVertical: 10,
	},

	buttonText:{
		textAlign:'center',
		color: '#FFFFFF',
		fontWeight: '700',
	}
});