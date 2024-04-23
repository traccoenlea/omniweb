// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmzU3C7nZ0-nP2iFkSVHapToDzmhXmTlM",
  authDomain: "omnistos-2a3a2.firebaseapp.com",
  databaseURL:
    "https://omnistos-2a3a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "omnistos-2a3a2",
  storageBucket: "omnistos-2a3a2.appspot.com",
  messagingSenderId: "495170062617",
  appId: "1:495170062617:web:c63d527ff6438f02d21d88",
  measurementId: "G-7YVD8VYKHJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
