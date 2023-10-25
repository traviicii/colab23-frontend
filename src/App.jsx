import React, { useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Views/Welcome/Welcome';
import './index.css';
import Footer from './Components/Footer/Footer';
import PersonalDetails from './Views/PersonalDetails/PersonalDetails';
import SignIn from './Views/Welcome/SignIn';
import ProfessionalBackground from './Views/ProfessionalBackground/ProfessionalBackground';
import SkillsAndTools from './Views/SkillsAndTools/SkillsAndTools';
import AboutYou from './Views/AboutYou/AboutYou';
import YourAvailability from './Views/YourAvailability/YourAvailability';
import WelcomeDone from './Views/WelcomeDone/WelcomeDone';
import DashboardUnpopulated from './Views/Dashboard/DashboardUnpopulated';
import Dashboard from './Views/Dashboard/Dashboard';
import NavbarLoggedIn from './Components/Navbar/NavbarLoggedIn';
import ProjectBrowser from './Views/ProjectBrowser/ProjectBrowser';
import UserProfile from './Views/IndividualTeamMember/IndividualTeamMember';

// Google Firebase
import { initializeApp } from 'firebase/app';
import { useSelector } from 'react-redux';
import ProjectProfile from './Views/ProjectProfile/ProjectProfile';
import IndividualTeamMember from './Views/IndividualTeamMember/IndividualTeamMember';

const FIREBASE_KEY = process.env.REACT_APP_API_KEY

const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "colab23-13a36.firebaseapp.com",
  projectId: "colab23-13a36",
  storageBucket: "colab23-13a36.appspot.com",
  messagingSenderId: "584885429499",
  appId: "1:584885429499:web:058217a842d6483932bc5e",
  measurementId: "G-J8X11WGDK9"
};

initializeApp(firebaseConfig);
// End Google Firebase

const appStyle = {
  backgroundColor: '#626171'
};


export default function App() {

  const user = useSelector((state) => state.user);

  return (
    <div style={appStyle}>

    {user.data.id ? <NavbarLoggedIn /> : <Navbar />}

      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/personal-details' element ={<PersonalDetails/>} />
        <Route path='/professional-background' element ={<ProfessionalBackground/>} />
        <Route path='/skills-and-tools' element={<SkillsAndTools/>} />
        <Route path='/about-you' element={<AboutYou />} />
        <Route path='/your-availability' element={<YourAvailability />} />
        <Route path='/welcome-done' element={<WelcomeDone />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard-unpopulated' element={<DashboardUnpopulated />} />
        <Route path='/project-browser' element={<ProjectBrowser />} />
        <Route path='/individual-team-member' element={<UserProfile />} />
        <Route path='/project-profile/:project_id' element={<ProjectProfile />} />
        <Route path='/individualteammember/:user_id' element={<IndividualTeamMember />} />


      </Routes>
      
      <Footer />
    </div>
  )
}
