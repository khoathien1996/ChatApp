import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ImageBackground
} from 'react-native';
import {connect} from 'react-redux';

class Bar extends Component {
    // renderHeart(){
    //     switch (this.props.myUsername) {
    //         case 'thien1@gmail.com':
    //             return '1M';
    //             break;
    //         case 'buu@gmail.com':
    //             return '800K';
    //             break;
    //         case 'chuong@gmail.com':
    //             return '600K';
    //             break;
    //         default:
    //             return '0';
    //             break;
    //     }
    // }
    // renderFollowing(){
    //     switch (this.props.myValue) {
    //         case 'thien1@gmail.com':
    //             return '5,2M';
    //             break;
    //         case 'buu@gmail.com':
    //             return '2,4M';
    //             break;
    //         case 'chuong@gmail.com':
    //             return '3,8M';
    //             break;
    //         default:
    //             return '0';
    //             break;
    //     }
    // }
    render() {
        return (
            <View style={styles.bar}>
                <View style={[styles.barItems, styles.barseparator]}>
                    <Text style={styles.barTop}>{this.props.myHearts}</Text>
                    <Text style={styles.barBottom}>Hearts</Text>
                </View>
                <View style={styles.barItems}>
                    <Text style={styles.barTop}>{this.props.myFollowing}</Text>
                    <Text style={styles.barBottom}>Following</Text>
                </View>
            </View>
        );
    }
}
function mapStateToProps(state){
    return{myUsername: state.username, myHearts: state.hearts, myFollowing: state.following};
}

export default connect(mapStateToProps)(Bar);
const styles = StyleSheet.create({
    bar:{
      borderTopColor:'#fff',
      borderTopWidth: 4,
      backgroundColor: '#ec2e4a',
      flexDirection: 'row'
    },
    barseparator:{
        borderRightWidth: 4
    },
    barItems:{
        flex: 1,
        padding: 18,
        alignItems: 'center',
    },
    barTop:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    barBottom:{
        color: '#000',
        fontSize:14,
        fontWeight: 'bold',
    }

});