import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Views/Welcome/Welcome';
import './index.css';
import Footer from './Components/Footer/Footer';

import { initializeApp } from 'firebase/app';
import SignIn from './Views/Welcome/SignIn';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

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
