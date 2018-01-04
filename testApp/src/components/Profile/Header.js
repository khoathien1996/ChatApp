import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View,
    ImageBackground
} from 'react-native';
import {connect} from 'react-redux';


class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            image:''
        };
     //   this.setValue();
    }
    componentWillMount(){

    }

    render() {
        //
        return (
            <ImageBackground style={styles.headerBackground} source={require('../../images/bg_header.jpg')}>
                <View style={styles.header}>
                    <View  style={styles.profile}>
                        <Image  style={styles.profilepic} source={this.props.myImage}/>
                    </View>
                    <Text style={styles.name}>{this.props.myName}</Text>
                    <Text style={styles.pos}>- {this.props.myDescription} -</Text>
                </View>

            </ImageBackground>
        );
    }

}
function mapStateToProps(state){
    return{myName: state.name, myDescription: state.description, myImage: state.image};
}

export default connect(mapStateToProps)(Header);
const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
        width:null,
        alignSelf: 'stretch'
    },
    header:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    profile:{
        width: 120,
        height:120,
        borderRadius: 100,
        borderColor: 'rgba(0,0,0,0.4)',
        borderWidth: 16,
    },
    profilepic:{
        flex: 1,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 4,
    },
    name:{
        marginTop: 5,
        fontSize: 16,
        color: "#fff",
        fontWeight: 'bold',
    },
    pos:{
        fontSize: 14,
        color: '#0394c0',
        fontWeight: '300',
        fontStyle: 'italic'
    }


});
