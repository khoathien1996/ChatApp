import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ListView,
    Image,
    Text,
    View
} from 'react-native';
import {connect} from 'react-redux';
//import Icon from 'react-native-vector-icons/MaterialIcons';

const image1 = require('../../images/NgocTrinh_00.jpg')
const image2 = require('../../images/KieuTrinh_00.jpg')
const image3 = require('../../images/ChiPu_00.jpg')
const image4 = require('../../images/girl_02.png')
const data = [{
    "username": 'thien@gmail.com',
    "first_name": "Khoa Thien",
    "message": "I am Superman",
    "image": image1
}, {
    "username": 'buu@gmail.com',
    "first_name": "Hoang Buu",
    "message": "So I am Spiderman",
    "image": image2
}, {
    "username": 'chuong@gmail.com',
    "first_name": "Thanh Chuong",
    "message": "I am a girl :))",
    "image": image3
}, {
    "username": 'All',
    "first_name": "All",
    "message": "Where the the Restroom?",
    "image": image4
}]
const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class Contacts extends Component {
    static navigationOptions={
        tabBarLabel:"Contact",
        tabBarIcon:({tintColor}) =>(
            <Image
                source={require('../../images/avatar.png')}
                style={{width:50,height:50,tintColor:'black'}}>
            </Image>
        ),
        tabBarOptions:{
            upperCaseLabel: false
        }
    }
    constructor(props){
        super(props)

        this.state = {
            dataSource: ds.cloneWithRows(data),
        }
    }

    eachMessage(x){
        var a = x.username;
        if(a != this.props.myUsername) {
            return (
                <TouchableOpacity onPress={() => this.props.navigation.navigate("ChatScreen", {counterpart: a})}>
                    <View style={{
                        alignItems: 'center',
                        padding: 10,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderColor: '#f7f7f7'
                    }}>
                        <Image source={x.image} style={{borderRadius: 30, width: 60, height: 60}} resizeMode='contain'/>
                        <View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 280}}>
                                <Text style={{
                                    marginLeft: 15,
                                    fontWeight: '600',
                                    color: '#222',
                                    fontSize: 15
                                }}>{x.first_name}</Text>
                                <Text style={{fontWeight: '200', color: '#777', fontSize: 13}}>MOBILE</Text>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{
                                    fontWeight: '400',
                                    color: '#666',
                                    fontSize: 12,
                                    marginLeft: 15
                                }}>{x.message}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return(
            <View/>
        );
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.eachMessage(rowData)}
                />
            </View>
        );
    }
}
function mapStateToProps(state){
    return{myUsername: state.username};
}
export default connect(mapStateToProps)(Contacts);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
