import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {connect} from 'react-redux';

class Bar extends Component {

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
      backgroundColor: '#E74C3C',
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