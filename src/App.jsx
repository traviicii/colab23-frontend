import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Views/Welcome/Welcome';
import './index.css';
import Footer from './Components/Footer/Footer';


export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Welcome />} />
      </Routes>
      
      <Footer />
    </div>
  )
}
