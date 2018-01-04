import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux';

class PhotoGrid extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            images: '',
        };
    }
    componentWillMount(){
        // var username_login = 'thien@gmail.com';
        // this.setState({
        //     username: username_login,
        // });
       // this.renderImage();
    }

    renderImage() {
        //alert(this.props.myValue);
        this.showImageThien();
        switch (this.props.myValue) {
            case 'thien@gmail.com':
                //alert("Anonymous ne");
                return this.showImageThien();
                break;
            case 'buu@gmail.com':
                return this.showImageBuu();
                break;
            case 'chuong@gmail.com':
                return this.showImageChuong();
                break;
            default:
                break;
        }
        return this.showImageThien()
    }
    showImageThien(){
        //alert("Dagoi");
        return(
            <ScrollView>
                <View style={styles.photoGrid}>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/NgocTrinh_01.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/NgocTrinh_02.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/NgocTrinh_03.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/NgocTrinh_04.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/NgocTrinh_05.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/NgocTrinh_06.jpg')}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
    showImageBuu(){
        return(
            <ScrollView>
                <View style={styles.photoGrid}>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/KieuTrinh_01.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/KieuTrinh_02.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/KieuTrinh_03.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/KieuTrinh_04.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/KieuTrinh_05.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/KieuTrinh_06.jpg')}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
    showImageChuong(){
        return(
            <ScrollView>
                <View style={styles.photoGrid}>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/ChiPu_01.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/ChiPu_02.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/ChiPu_03.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/ChiPu_04.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/ChiPu_05.jpg')}/>
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../../images/ChiPu_06.jpg')}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
    render() {
        return(
            this.renderImage()
        );
    }
}
function mapStateToProps(state){
    return{myValue: state.username};
}

export default connect(mapStateToProps)(PhotoGrid);

const styles = StyleSheet.create({
    photoGrid:{
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    photoWrap:{
        margin: 2,
        //height: 120,
        width: (Dimensions.get('window').width /2) - 4,
        height: (Dimensions.get('window').width /2) - 4,
    },
    photo:{
        flex:1,
        width: null,
        alignSelf: 'stretch'
    }

});