import firebase from 'firebase';

class Backend {
  uid = '';
  messagesRef = null;

  firebaseApp = '';
  constructor(props) {
    firebaseApp = firebase.initializeApp({
      apiKey: "AIzaSyCMbcisYS6A4GQhy1MpmA9lHwNo2AgdvLY",
      authDomain: "chat-real-time-react-native.firebaseapp.com",
      databaseURL: "https://chat-real-time-react-native.firebaseio.com",
      projectId: "chat-real-time-react-native",
      storageBucket: "chat-real-time-react-native.appspot.com",
      messagingSenderId: "886726898740"
    });
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
        this.setUid(user.uid);
      } else {
        firebase.auth().signInAnonymously().catch((error) => {
          alert(error.message)
        });
      }
    });
  }

  getFireBaseApp(){
    return firebaseApp;
  } 

  setUid(uid){
    this.uid = uid;
  }

  getUid(){
    return this.uid;
  }

  loadMessages(callback){
    this.messagesRef = firebase.database().ref('messages');
    this.messagesRef.off();
    const onReceive = (data) =>{
      const message = data.val();
      callback({
        _id:data.key,
        text:message.text,
        createdAt: new Date(message.createdAt),
        user:{
          _id:message.user._id,
          name:message.user.name,
        },
      });
    };
    this.messagesRef.limitToLast(20).on('child_added', onReceive);
  }

  sendMessage(message) {
    for(let i = 0; i < message.length; i++) {
      this.messagesRef.push({
        text:message[i].text,
        user:message[i].user,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
      });
    }
  }
  closeChat(){
    if(this.messagesRef){
      this.messagesRef.off();
    }
  }
}

export default new Backend();