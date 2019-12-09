import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAALox6hTBsGZCpnxpHwCnpFen-gbUFNQ0',
  authDomain: 'crwn-db-f0ba0.firebaseapp.com',
  databaseURL: 'https://crwn-db-f0ba0.firebaseio.com',
  projectId: 'crwn-db-f0ba0',
  storageBucket: 'crwn-db-f0ba0.appspot.com',
  messagingSenderId: '388705337211',
  appId: '1:388705337211:web:f06d5f6e7f864018a0c7de',
  measurementId: 'G-L2G06NTXMP'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
