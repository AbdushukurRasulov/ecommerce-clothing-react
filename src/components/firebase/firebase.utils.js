import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBea7RfKEXywYvqyiDVjs7RnHJ6d06gNJA",
    authDomain: "crown-db-a2e96.firebaseapp.com",
    databaseURL: "https://crown-db-a2e96.firebaseio.com",
    projectId: "crown-db-a2e96",
    storageBucket: "crown-db-a2e96.appspot.com",
    messagingSenderId: "207596729696",
    appId: "1:207596729696:web:cc1bf81c08a85f47a61a05",
    measurementId: "G-ST061RL4M0"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;