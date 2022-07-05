import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorker from './seviceWorker';
// import * as firebase from 'firebase';
import firebase from 'firebase/compat/app';
// import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD3sTWoqt1AXcI8K2FX1FvPotuySHn6sGg",
    authDomain: "cart-5225a.firebaseapp.com",
    projectId: "cart-5225a",
    storageBucket: "cart-5225a.appspot.com",
    messagingSenderId: "258304582377",
    appId: "1:258304582377:web:ef48f82a08341b5c460678"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

 let root =ReactDOM.createRoot(document.getElementById('root'));
 root.render(<App />);

 serviceWorker.unregister();

