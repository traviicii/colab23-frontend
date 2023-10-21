import React from 'react';
import './Welcome.css'
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    navigate('/signin')
  }

  return (
    <div style={{ backgroundColor: '#1f1d34' }}>
    <div className="flex items-center justify-center h-screen text-white" id='welcome-wrapper'>
      <div className="w-3/4 text-center" >

        <div className='mb-8 text-left text-4xl font-bold w-3/4'>
          <h1>Your Team Awaits!</h1>
        </div>

        <div className="text-left text-2xl">
          <p>
            Cultivate your skills as an early-career product manager, developer or designer!
          </p>
          <p className='mt-10'>
            Explore endless possibilities by joining a product team or launch your own idea!
          </p>
        </div>
        
        <button onClick={navigateToSignIn} style={{ backgroundColor: '#ed4168' }} className="text-whit py-2 px-4 mt-10 w-full rounded-md">
          Get Started
        </button>
        
        <a href="#" className="text-white block mt-6 underline" style={{ color: '#ecafbd' }}>Learn More</a>
      </div>
    </div>
    </div>
  );
}
