// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9jQD-zADLXfkl_QWtfWScQG_-oFQyj-I",
  authDomain: "quora-clone-mern-342520.firebaseapp.com",
  projectId: "quora-clone-mern-342520",
  storageBucket: "quora-clone-mern-342520.appspot.com",
  messagingSenderId: "234981889085",
  appId: "1:234981889085:web:80520c1a02dda062164654",
  measurementId: "G-PJHPW00TLQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();

export { auth, provider };