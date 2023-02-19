import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  
    // authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyAHRtsUl2Vnxq-5o3YZ2hE4k19pUN8GG88",

    authDomain: "wheresmybis.firebaseapp.com",

    projectId: "wheresmybis",

    storageBucket: "wheresmybis.appspot.com",

    messagingSenderId: "956148063772",

    appId: "1:956148063772:web:9545597484d0332ab749d9",

    measurementId: "G-QJBDDTYT41"
  
};
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export default db;