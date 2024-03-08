// login.js
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

// Get the authentication instance from Firebase
const auth = getAuth();

// Function to handle Google Sign-In
function googleSignIn() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // Signed in successfully, get user info
            const user = result.user;
            console.log(user);
            window.location.href = "index1.html";
        })
        .catch((error) => {
            // Handle errors here
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorCode, errorMessage);
        });
}

// Attach click event listener to Google Sign-In button
const googleBtn = document.querySelector('.google-btn');
googleBtn.addEventListener('click', googleSignIn);
