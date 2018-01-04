import firebase from 'firebase';
import {connect} from "react-redux";

class Backend {
  uid = '';
  messagesRef = null;
  avatar=null;
  count = 0;

  //firebaseApp = '';
  //constructor
  constructor(props) {

    firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyCMbcisYS6A4GQhy1MpmA9lHwNo2AgdvLY",
      authDomain: "chat-real-time-react-native.firebaseapp.com",
      databaseURL: "https://chat-real-time-react-native.firebaseio.com",
      projectId: "chat-real-time-react-native",
      storageBucket: "chat-real-time-react-native.appspot.com",
      messagingSenderId: "886726898740"
    });
  //Authentication
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setUid(user.uid);
        //this.setAvatar(user.avatar);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message);
        });
      }
    });


  }

  getFireBaseApp(){
    return firebaseApp;
  }

  setAvatar(value) {
    this.avatar = value;
  }
  getAvatar() {
      return this.avatar;
    }
  setUid(value) {
      this.uid = value;
    }
  getUid() {
      return this.uid;
    }
    setUsername(){
      return this.getUsername()
    }
    getUsername(){
      return this.props.myUsername;
    }
    getCouterpart(){
      return this.props.myCounterpart;
    }


  // retrieve the messages from the Backend
  loadMessages(refString, messageCallBack) {
    //ref: create child node of root node(firebase.database())
    this.messagesRef = firebase.database().ref(refString.toString());
    this.messagesRef.off();
    const onReceive = (data) => {
      const message = data.val();

      if(message.user.username == 'thien@gmail.com')
        this.setAvatar(require('../../images/NgocTrinh_00.jpg'));
      if(message.user.username == 'buu@gmail.com')
        this.setAvatar(require('../../images/KieuTrinh_00.jpg'));
      if(message.user.username == 'chuong@gmail.com'){
        this.setAvatar(require('../../images/ChiPu_00.jpg'));
      }

      //alert(this.getAvatar())


        messageCallBack({
        _id: data.key,
        text: message.text,
        createdAt: new Date(message.createdAt),
        user: {
          _id: message.user._id,
          username: message.user.username,
          avatar: this.getAvatar(),
        },
        //image: 'https://facebook.github.io/react/img/logo_og.png',
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }
  // send the message to the Backend
  sendMessage(message) {
    for (let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text: message[i].text,
        user: message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  // close the connection to the Backend
  closeChat() {
    if (this.messagesRef) {
      this.messagesRef.off();
    }
  }
}
export default new Backend();
