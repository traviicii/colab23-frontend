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
      <div className='flex items-center flex-col justify-center text-white'>
    <div className="flex items-center justify-center pt-60 pb-20 text-white" id='welcome-wrapper'>
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
        
        <button onClick={navigateToSignIn} style={{ backgroundColor: '#ed4168' }} className="text-whit py-3 text-lg px-4 mt-10 w-full rounded-md">
          Learn More
        </button>

      </div>
    </div>
      
        <div className="rounded-lg p-4 mt-4 w-3/4 mb-20" style={{ backgroundColor: '#626171' }}>
          <div className='text-left w-3/5 pt-20 pl-10'>
            <p className="text-3xl">How Does TeamUp Work?</p>
            <p className="mt-2">If you are an early-career, transitioning career, or simply want to enhance your collaborative project skills in product management, product design, or software development, TeamUp is for you!</p>
          </div>
          <div className='flex justify-center space-x-28 mt-12'>
            <div className='w-1/4'>
              <p>1.  Sign up with your personal details & preferences to match up with a new project.</p>
            </div>
            <div className='w-1/4' style={{ color: '#F9E8C3' }}>
              <p>2.  Browse and join others' projects or create your own to collaborate on cross-function teams.</p>
            </div>
            <div className='w-1/4'>
              <p>3.  Blast off on your project! TeamUp will help you stay organized and on top of your project needs.</p>
            </div>
          </div>
          <div className='flex justify-center'>
          <button onClick={navigateToSignIn} className="text-whit py-4 px-4 mt-10 mb-10 w-1/2 rounded-md border">
          Get Started
        </button>
          </div>
        </div>
    </div>
    </div>
  );
}
