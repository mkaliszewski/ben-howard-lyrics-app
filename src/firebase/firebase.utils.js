import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDAWH2_Ebpt6HxPkU5qazmKKs8WNzmh680",
    authDomain: "react-lyrics-app.firebaseapp.com",
    databaseURL: "https://react-lyrics-app.firebaseio.com",
    projectId: "react-lyrics-app",
    storageBucket: "react-lyrics-app.appspot.com",
    messagingSenderId: "329575215546",
    appId: "1:329575215546:web:507421d11e7ddafe306d83",
    measurementId: "G-8C3SX85FBW"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


const providerGoogle = new firebase.auth.GoogleAuthProvider()
const providerFacebook = new firebase.auth.FacebookAuthProvider();

providerGoogle.setCustomParameters({
    prompt: 'select_account'
})

providerFacebook.setCustomParameters({
    prompt: 'select_account'
})

export const signInWithGoogle = () => auth.signInWithPopup(providerGoogle);
export const signInWithFacebook = () => auth.signInWithPopup(providerFacebook);

export default firebase;