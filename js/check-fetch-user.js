import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js';
auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, display their name
        const userName = document.getElementById('user-name');
        userName.textContent = user.displayName;
    } else {
        // User is not signed in, redirect to login page
        window.location.href = 'index.html';
    }
});