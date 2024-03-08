// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Select the form and name field
  const form = document.getElementById('lobby__form');
  const nameField = form.querySelector('input[name="name"]');

  // Handle changes in authentication state
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, retrieve display name
      const displayName = user.displayName;
      if (displayName) {
        // Set the display name in the name field
        nameField.value = displayName;
      }
    } else {
      // User is signed out, handle accordingly
    }
  });

  // Handle form submission
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Perform form submission logic here
  });
});
