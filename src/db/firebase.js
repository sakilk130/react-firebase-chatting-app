import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBneaBVeIzFoRiY78BgV29d91QexiWF34A',
  authDomain: 'react-firebase-chating-app.firebaseapp.com',
  databaseURL: 'https://react-firebase-chating-app.firebaseio.com',
  projectId: 'react-firebase-chating-app',
  storageBucket: 'react-firebase-chating-app.appspot.com',
  messagingSenderId: '856000865616',
  appId: '1:856000865616:web:3186fd5df0ea435babf855',
  measurementId: 'G-S8QP5CVD5T',
});
const db = firebaseApp.firestore();
export default db;
