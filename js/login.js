// login.js
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

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

      // Set a flag indicating that the user has logged in once
      localStorage.setItem("userLoggedInOnce", "true");

      // Redirect to the main page after successful login
      window.location.href = "index1.html";
    })
    .catch((error) => {
      // Handle errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

// Check if the user is already logged in when the page loads
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is already logged in:", user);
    window.location.href = "index1.html"; // Redirect to index1.html if user is logged in
  } else {
    console.log("No user is currently logged in.");
  }
});

// Attach click event listener to Google Sign-In button
const googleBtn = document.querySelector(".google-btn");
googleBtn.addEventListener("click", googleSignIn);
