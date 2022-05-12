// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3s-RvkzZrLfjxV8FjxzN7n2iwKl20ECs",
  authDomain: "familiar-with-life.firebaseapp.com",
  projectId: "familiar-with-life",
  storageBucket: "familiar-with-life.appspot.com",
  messagingSenderId: "589259383653",
  appId: "1:589259383653:web:c5a1cf9aabca56391f778c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;