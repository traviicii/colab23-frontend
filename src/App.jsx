import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Views/Welcome/Welcome';
import './index.css';
import Footer from './Components/Footer/Footer';
import SignIn from './Views/Welcome/SignIn';

// Google Firebase
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDWuQqrf7N_n_1IOTrpgNRKV78SnBgxWAY",
  authDomain: "colab23-13a36.firebaseapp.com",
  projectId: "colab23-13a36",
  storageBucket: "colab23-13a36.appspot.com",
  messagingSenderId: "584885429499",
  appId: "1:584885429499:web:058217a842d6483932bc5e",
  measurementId: "G-J8X11WGDK9"
};

initializeApp(firebaseConfig);
// End Google Firebase


export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      
      <Footer />
    </div>
  )
}
