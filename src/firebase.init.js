// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL_uASfe9OW4jtxuFLlUhtMDm_QogjpwA",
  authDomain: "body-building-4bc2b.firebaseapp.com",
  projectId: "body-building-4bc2b",
  storageBucket: "body-building-4bc2b.appspot.com",
  messagingSenderId: "271506990392",
  appId: "1:271506990392:web:d0069bc2a813addc640dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;