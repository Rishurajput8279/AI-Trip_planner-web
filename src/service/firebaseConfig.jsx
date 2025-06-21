// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZZy99uTApYRnlMqsmC1cyOwf_smJEbsM",
  authDomain: "ai-trip-plan-437d8.firebaseapp.com",
  projectId: "ai-trip-plan-437d8",
  storageBucket: "ai-trip-plan-437d8.firebasestorage.app",
  messagingSenderId: "510739282167",
  appId: "1:510739282167:web:644c8ce8f46b06f884bbf2",
  measurementId: "G-QRBS5L5RWJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);