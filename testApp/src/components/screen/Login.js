import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, ImageBackground}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
import {connect} from 'react-redux';
//import Backend from '../firebase/Backend';
class Login extends Component{

	constructor(props){
		super(props);
		this.state={
			user_name:'',
			password:'',
		}
	}
	dismissAlert(){}

	login(){
		Backend.getFireBaseApp().auth().signInWithEmailAndPassword(this.state.user_name, this.state.password)
		.then(() =>{
			if(this.state.user_name == 'thien@gmail.com')
				this.props.dispatch({type: 'THIEN_LOGIN'});
            if(this.state.user_name == 'buu@gmail.com')
                this.props.dispatch({type: 'BUU_LOGIN'});
            if(this.state.user_name == 'chuong@gmail.com')
                this.props.dispatch({type: 'CHUONG_LOGIN'});
			Alert.alert(
			  'Success',
			  'Login sucessfully: ' + this.state.user_name,
			  [			
			    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			    {text: 'OK', onPress :() => this.props.navigation.navigate("MainTabs")},
			  ],
			 // {onDismiss: () => {this.dismissAlert()} },
			  { cancelable: false }
			)
			this.setState({
                user_name: this.state.user_name,
				password:'',
			});
		})	
		.catch(function(error){
			Alert.alert(
			  'Fail',
			  'Login failed. Please check your infomation!',
			  [			
			    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
			    {text: 'OK', onPress: () =>  console.log('OK Pressed')},
			  ],
			  { cancelable: false }
			)
		});
	}
	render(){
		return(
			<View style={styles.container}>
				<ImageBackground source={require('../../images/background2.jpg')} style={styles.backgroundImage}>
                <View style={styles.logoContainer}>
					<Image
					style={styles.logoImage}
					source={require('../../images/logo.png')}
					/>
					<Text style={styles.title}>Chat my life</Text>
                	<View style={styles.inputContainer}>
                        <TextInput
						underlineColorAndroid='transparent'
                        placeholder="Email"
                        style={styles.input}
                        onChangeText={(user_name) => this.setState({user_name})}
                        value={this.state.user_name}
                        />
                        <TextInput
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        style={styles.input}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                        value={this.state.password}
                        />

                        <TouchableOpacity style={styles.buttonContainer}
                                          onPress ={() => {this.login();
                                          }}>
							<Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>

                        <View style={{alignItems: 'center'}}>
                        <Text style={{color:'white', fontSize: 16, fontStyle: 'italic'}} onPress ={() => {this.props.navigation.navigate("RegisterScreen")}}>
                        Register?
                        </Text>
                        </View>

					</View>
				</View>
				</ImageBackground>
			</View>

    	);
    }
}
// function mapStateToProps(state){
//     return{myValue: state.value};
//}
export default connect()(Login);

const styles =StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#62d4f8'
	},
	backgroundImage:{
		flex: 1,
		alignSelf: 'stretch',
		width: null,
		justifyContent: 'center',
	},
	content:{
		alignItems: 'center',
	},
    logoContainer:{
        alignItems: 'center',
        flexGrow: 1,
        top: '20%' ,
    },
	logoImage:{
		width : 260,
		height: 110,
	},
	logo:{
		color: 'white',
		fontSize: 40,
		fontStyle: 'italic',
		fontWeight: 'bold',
		textShadowColor: '#252525',
		textShadowOffset: {width: 2, height: 2},
		textShadowRadius: 15,
		marginBottom: 20,
	},
    inputContainer:{
		margin: 20,
		marginBottom:0,
		padding:20,
		paddingBottom: 10,
		alignSelf: 'stretch',
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'rgba(255,255,255,0.2)',
	},
	input:{
		fontSize: 16,
		height:40,
		padding:10,
		marginBottom:10,
		backgroundColor: 'rgba(255,255, 255,1)',
	},
	buttonContainer:{
		alignSelf: 'stretch',
		margin: 10,
		padding: 20,
		backgroundColor: 'blue',
		borderWidth: 1,
		borderColor: '#fff',
		backgroundColor: 'rgba(255,255,255,0.6)',
	},
    buttonRegister:{
        alignSelf: 'stretch',
		marginTop: 10,
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'blue',
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor: 'rgba(255,255,255,0.6)',
	},
    buttonText:{
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});


