// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTDAKMD72KoXdW8671_6ECrsCC2a2YvGU",
  authDomain: "quora-clone-mern-1ca80.firebaseapp.com",
  projectId: "quora-clone-mern-1ca80",
  storageBucket: "quora-clone-mern-1ca80.appspot.com",
  messagingSenderId: "745260272446",
  appId: "1:745260272446:web:20a440f1dff366facbba6f",
  measurementId: "G-BKHMTN95HH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
const provider = new GoogleAuthProvider();

export { auth, provider };