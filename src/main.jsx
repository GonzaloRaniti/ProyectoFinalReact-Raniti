import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-wNb0fzt1xtVM_8QyJpXLuRUUOCYXYaI",
  authDomain: "cgindumentaria-942f1.firebaseapp.com",
  projectId: "cgindumentaria-942f1",
  storageBucket: "cgindumentaria-942f1.appspot.com",
  messagingSenderId: "429244680715",
  appId: "1:429244680715:web:286ac14100c6ca3103950e",
  measurementId: "G-X4L0K5BQ25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
