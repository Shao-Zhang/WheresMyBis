import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import { initializeFirestore } from 'firebase/firestore';

const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

    authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,

    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

    appId: process.env.REACT_APP_FIREBASE_APP_ID,

    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = initializeFirestore(app, {
    experimentalForceLongPolling: true,
});


export default db;