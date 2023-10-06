import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Views/Welcome/Welcome';
import './index.css';
import Footer from './Components/Footer/Footer';
import PersonalDetails from './Views/PersonalDetails/PersonalDetails';


export default function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/personal-details' element ={<PersonalDetails/>} />
      </Routes>
      
      <Footer />
    </div>
  )
}
