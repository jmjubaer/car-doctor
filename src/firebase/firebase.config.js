// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIDGm2pm4BCU0mpV3Y-itqs4inw_ZMaRo",
  authDomain: "car-doctor-f315e.firebaseapp.com",
  projectId: "car-doctor-f315e",
  storageBucket: "car-doctor-f315e.appspot.com",
  messagingSenderId: "1028609525975",
  appId: "1:1028609525975:web:b5bd46968fadb7fcddc892"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;