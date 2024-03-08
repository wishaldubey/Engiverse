// firebase-init.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbVc-z2-0Gx7NWjvhX1rrH4Arcn5hxSaU",
    authDomain: "engiverse-c6ca1.firebaseapp.com",
    projectId: "engiverse-c6ca1",
    storageBucket: "engiverse-c6ca1.appspot.com",
    messagingSenderId: "345916674787",
    appId: "1:345916674787:web:55621566b852704b87ebd6",
    measurementId: "G-CXBRXYPV75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
