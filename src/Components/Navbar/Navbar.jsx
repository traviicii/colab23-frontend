import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  return (
      <nav className="flex justify-around items-center bg-gray-500 text-gray-800 py-2 h-10" id='nav-wrapper'>

        <div className="link-wrapper">
          <div className="nav-menu">
            <NavLink className="mx-10" to="/about">About</NavLink>
            <NavLink className="mx-10" to="/pricing">Pricing</NavLink>
            <NavLink className="mx-10" to="/contact">Contact</NavLink>
          </div>
        </div>

        <div className="mx-auto text-center text-3xl">
          <h1>Team 1</h1>
        </div>

        <div className="ml-auto" id='auth-link'>
          <button className="signup-button">Sign In / Sign Up</button>
        </div>

      </nav>
  );
};