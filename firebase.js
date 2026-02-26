// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTvD9e1Bngf38SHoraMYFO-TIqAyRlVAM",
  authDomain: "seat-booking-demo.firebaseapp.com",
  projectId: "seat-booking-demo",
  storageBucket: "seat-booking-demo.firebasestorage.app",
  messagingSenderId: "968693307000",
  appId: "1:968693307000:web:6492bd816bccf99eec3f8d",
  measurementId: "G-8KP83YC239"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);