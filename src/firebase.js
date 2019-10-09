import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCFK_PRBjF1i1H97OrTUV8cRhUkZmbSPWc",
  authDomain: "ehcg-clone.firebaseapp.com",
  databaseURL: "https://ehcg-clone.firebaseio.com",
  projectId: "ehcg-clone",
  storageBucket: "",
  messagingSenderId: "427276127206",
  appId: "1:427276127206:web:e9d266ce44fc15b9a26427",
  measurementId: "G-H3RSKX0EDV"
}
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();

export const postRef = databaseRef.child('posts');
