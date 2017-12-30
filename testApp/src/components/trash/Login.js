import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView}  from 'react-native';

import LoginForm from './LoginForm';


export default class Login extends Component{
	render(){
		return(
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.logo}
					 	source={require('../../images/logo.png')}
					/>

					<Text style={styles.title}>
						Chat my life
					</Text>				
				</View>

				<View style={styles.formContainer}>
					<LoginForm />
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#f1c40f',
	},
	logoContainer:{
		alignItems: 'center',
		flexGrow: 1,
		//justifyContent: 'flex-start',
		top: '25%' ,
	},
	logo: {
		width : 260,
		height: 110,
	},
	formContainer:{

	},
	title:{
		color: '#FFF',
		marginTop: 10,
		width: 160,
		textAlign: 'center',
		opacity: 0.9,
		fontSize: 20,

	},
});