import React, {Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert, ImageBackground}  from 'react-native';
import Backend from '../firebase/FirebaseConfig';
export default class Register extends Component{

	constructor(props){
		super(props);
		this.state={
			username:'',
			password:'',
			password2:''
		}
	}
	register(){
		if(this.state.password == this.state.password2) {
            Backend.getFireBaseApp().auth().createUserWithEmailAndPassword(this.state.username, this.state.password)
                .then(() => {
                    Alert.alert(
                        'Alert Title',
                        'Register sucessfully: ' + this.state.username,
                        [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => this.props.navigation.navigate("LoginScreen")},
                        ],
                        {cancelable: false}
                    )
                    this.setState({
                        username: '',
                        password: '',
                        password2: ''
                    })
                })
                .catch(function (error) {
                    Alert.alert(
                        'Alert Title',
                        'Register failed ' + error,
                        [
                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ],
                        {cancelable: false}
                    )
                });
        }
        else{
            Alert.alert(
                'Error',
                'Password does not match the confirm password',
                [
                    {text: 'OK', style: 'cancel'},
                ],
                {cancelable: false}
            )
		}
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
                                onChangeText={(username) => this.setState({username})}
                                value={this.state.username}
                            />
                            <TextInput
                                placeholder="Password"
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                            />
                            <TextInput
                                placeholder="Retype password"
                                underlineColorAndroid='transparent'
                                style={styles.input}
                                onChangeText={(password2) => this.setState({password2})}
                                secureTextEntry={true}
                            />


                            <TouchableOpacity style={styles.buttonContainer}
                                              onPress ={() => {this.register()}}>
                                <Text style={styles.buttonText}>REGISTER</Text>
                            </TouchableOpacity>

                            <View style={{alignItems: 'center'}}>
                                <Text style={{color:'white', fontSize: 16, fontStyle: 'italic'}} onPress ={() => {this.props.navigation.navigate("LoginScreen")}}>
                                    Back
                                </Text>
                            </View>

                        </View>
                    </View>
                </ImageBackground>
            </View>
		);
	}
}

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
        top: '10%' ,
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