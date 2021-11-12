// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA7ZbkuLnkxeszTxVqEzMpjYXprFYnjLCg",
    authDomain: "react-app-curso-3ac63.firebaseapp.com",
    projectId: "react-app-curso-3ac63",
    storageBucket: "react-app-curso-3ac63.appspot.com",
    messagingSenderId: "973110912143",
    appId: "1:973110912143:web:6c1ee5b98c1d32227e7cfa"
};

// Base de datos
firebase.initializeApp(firebaseConfig);

// Referencia a la base de datos
const db = firebase.firestore()

// AuthProvider para la autenticación con Google
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export {
    db, // base de datos
    googleAuthProvider,// proveedor de google
    firebase //
}