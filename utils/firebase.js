import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeH0r_AwSYNgIWM7jTEW4yPdZcR7FDABQ",
  authDomain: "testporject-91db8.firebaseapp.com",
  projectId: "testporject-91db8",
  storageBucket: "testporject-91db8.appspot.com",
  messagingSenderId: "1084303455876",
  appId: "1:1084303455876:web:5bdf0a299dc41233bdb4d1",
  measurementId: "G-WX6GF81FG3",
};


const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
