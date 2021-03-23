import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEC9LOUg3SC_broDPoRlBbzdHT-cI6dao",
  authDomain: "vue3-full-course-11fd7.firebaseapp.com",
  projectId: "vue3-full-course-11fd7",
  storageBucket: "vue3-full-course-11fd7.appspot.com",
  messagingSenderId: "862846105302",
  appId: "1:862846105302:web:c6bd0b4df95baf2c7a3b77"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 
const db = firebase.database();

export const dbChat = db.ref("chat");
export default firebase;