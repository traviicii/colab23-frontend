import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate('/signin')
  }

  return (
      <nav className="flex justify-around items-center text-gray-800 py-2 h-10" id='nav-wrapper'>

        <div className="link-wrapper">
          <div className="nav-menu">
            <NavLink className="mx-10" to="#">About</NavLink>
            <NavLink className="mx-10" to="#">Pricing</NavLink>
            <NavLink className="mx-10" to="#">Contact</NavLink>
          </div>
        </div>

        <div className="mx-auto text-center text-3xl">
          <h1>
            <NavLink to="/">TeamUp</NavLink>
          </h1>
        </div>

        <div className="ml-auto" id='auth-link'>
          <button onClick={navigateToSignIn} className="signup-button">Sign In / Sign Up</button>
        </div>

      </nav>
  );
};