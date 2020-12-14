import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD155dS1bXdsqNgDjPgV9JL69CiioeO8B4",
  authDomain: "crwn-db-147f9.firebaseapp.com",
  projectId: "crwn-db-147f9",
  storageBucket: "crwn-db-147f9.appspot.com",
  messagingSenderId: "74317961716",
  appId: "1:74317961716:web:6b56a9c02cec58978a41a1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;