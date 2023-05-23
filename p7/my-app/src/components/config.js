// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {GoogleAuthProvider, getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCKvLZ9f0Fdoi29knt8xag8F3TFMf3vtp0",
  authDomain: "my-app-a2f5e.firebaseapp.com",
  projectId: "my-app-a2f5e",
  storageBucket: "my-app-a2f5e.appspot.com",
  messagingSenderId: "514036466905",
  appId: "1:514036466905:web:9e9d800f89f2dae03b6ac8",
  measurementId: "G-GCFZWQ3FC6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  const auth=getAuth(app)
  const provider=new GoogleAuthProvider()
  export {auth,provider}