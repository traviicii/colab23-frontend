import React, { useEffect, useRef } from 'react';
import './Welcome.css'
import SignIn from './SignIn';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Welcome() {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user)

  useEffect(() => {
    // Check if the user object and its data.id property are defined
    if (user && user.data.id) {
      if (user.data.current_project_id) {
        // User is involved in a project, navigate to the project dashboard
        navigate('/dashboard');
      } else {
        // User has no current project, navigate to the unpopulated dashboard
        navigate('/dashboard-unpopulated');
      }
    }
    // If user or user.data is not defined, do nothing (stay on the homepage)
  }, [user, navigate]);
  

  const navigateToSignIn = () => {
    navigate('/signin')
  }

    // Create a ref for the "How Does TeamUp Work?" section
    const howDoesTeamUpWorkSection = useRef(null);

    const scrollToHowDoesTeamUpWork = () => {
      howDoesTeamUpWorkSection.current.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <div style={{ backgroundColor: '#1f1d34' }}>
      <div className='flex items-center flex-col justify-center text-white'>
    <div className="flex items-center justify-center pt-20 text-white" id='welcome-wrapper'>
      <div className="w-3/4 text-center" >

        <div className='mb-8 text-left text-4xl w-3/4 text-5xl' style={{ fontFamily: 'Oswald, sans-serif' }}>
          <p>Your Team Awaits!</p>
        </div>

        <div className="overlay-container">
        <img
              src={process.env.PUBLIC_URL + '/assets/Home Page Graphic.png'}
              alt="Overlay Image"
              className="overlay-image"/>
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
          Let's Get Started!
        </button>
      </div>
    </div>

      <div className="arrow bounce">
        <a onClick={scrollToHowDoesTeamUpWork} className="fa-solid fa-angle-down fa-3x" href="#"></a>
      </div>

      
        <div ref={howDoesTeamUpWorkSection} className="rounded-lg p-4 mt-4 w-3/4 mb-20" style={{ backgroundColor: '#626171' }}>
          <div className='text-left w-3/5 pt-20 pl-10'>
            <p className="text-3xl">How Does TeamUp Work?</p>
            <p className="mt-8">TeamUp is a free collaborative product team platform. If you are an early-career, transitioning career, or simply want to enhance your collaborative project skills in product management, product design, or software development, TeamUp is for you! We'll help you start or join a product team and provide tools to help your embark on your journey towards building a product you can share anywhere.</p>
          </div>
          <div className='flex justify-center space-x-10 mt-12 px-12'>
            <div className='w-2/5 flex'>
              <svg width="40" height="24" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Stars">
                <path id="Vector" d="M9.99076 4.33325L12.766 10.2916L18.8714 12.9999L12.766 15.7083L9.99076 21.6666L7.21556 15.7083L1.11011 12.9999L7.21556 10.2916L9.99076 4.33325ZM9.99076 9.56575L8.88068 11.9166L6.4718 12.9999L8.88068 14.0833L9.99076 16.4341L11.1008 14.0833L13.5097 12.9999L11.1008 11.9166L9.99076 9.56575ZM21.0916 9.74992L19.6929 6.78159L16.6513 5.41658L19.6929 4.06242L21.0916 1.08325L22.4792 4.06242L25.5319 5.41658L22.4792 6.78159L21.0916 9.74992ZM21.0916 24.9166L19.6929 21.9482L16.6513 20.5833L19.6929 19.2291L21.0916 16.2499L22.4792 19.2291L25.5319 20.5833L22.4792 21.9482L21.0916 24.9166Z" fill="#EBB237"/>
                </g>
                </svg>

              <p className='mx-1'>1.</p>
              <p>Sign up and create a free account with your personal details & preferences.  </p>
            </div>
            <div className='w-2/5 flex' style={{ color: '#F9E8C3' }}>
            <svg width="50" height="24" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1857 11.8409C13.318 13.6176 13.1515 15.7084 11.7972 16.5534C10.4429 17.3767 8.42254 16.6076 7.27916 14.8309C6.14687 13.0542 6.32449 10.9417 7.67879 10.1184C9.03309 9.29508 11.0534 10.0642 12.1857 11.8409ZM14.0618 19.2292C16.2819 19.2292 16.837 18.4167 16.837 18.4167C16.837 18.4167 16.2819 20.5834 14.0618 20.5834C11.8416 20.5834 11.2866 18.4492 11.2866 18.4167C11.2866 18.4167 11.8416 19.2292 14.0618 19.2292ZM20.4447 10.1184C21.799 10.9417 21.9766 13.0542 20.8444 14.8309C19.701 16.6076 17.6806 17.3767 16.3263 16.5534C14.972 15.7084 14.8055 13.6176 15.9378 11.8409C17.0701 10.0642 19.0904 9.29508 20.4447 10.1184ZM14.0618 21.6667C16.837 21.6667 22.9424 16.0984 22.9424 11.9167C22.9424 7.73508 18.9572 4.33341 14.0618 4.33341C9.1663 4.33341 5.1811 7.73508 5.1811 11.9167C5.1811 16.0984 11.2866 21.6667 14.0618 21.6667ZM14.0618 2.16675C20.1672 2.16675 25.1626 6.54341 25.1626 11.9167C25.1626 16.3367 18.8573 23.8334 14.0618 23.8334C9.2662 23.8334 2.96094 16.3367 2.96094 11.9167C2.96094 6.54341 7.95631 2.16675 14.0618 2.16675Z" fill="#D7F7F9"/>
            </svg>

              <p className='mx-1'>2.</p>
              <p>Browse and join others' projects or create your own to collaborate on cross-function teams.</p>
            </div>
            <div className='w-2/5 flex'>
            <svg width="100" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.92188 14.0833C6.90125 14.3128 8.74394 15.1856 10.1534 16.5611C11.5629 17.9366 12.4572 19.7349 12.6925 21.6666C13.6737 21.1145 14.4944 20.3274 15.0772 19.3796C15.6599 18.4318 15.9853 17.3546 16.0227 16.2499C17.8866 15.61 19.5143 14.4451 20.6999 12.9024C21.8854 11.3598 22.5756 9.5087 22.6832 7.58325C22.6832 6.7213 22.3323 5.89465 21.7078 5.28515C21.0832 4.67566 20.2362 4.33325 19.3529 4.33325C17.38 4.43824 15.4832 5.11181 13.9024 6.26879C12.3217 7.42578 11.128 9.01422 10.4723 10.8333C9.3403 10.8697 8.23653 11.1873 7.26533 11.756C6.29413 12.3247 5.48756 13.1257 4.92188 14.0833Z" stroke="#F8E1E6" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.25216 15.1665C7.09682 15.803 6.1626 16.7618 5.56926 17.9199C4.97592 19.078 4.75051 20.3826 4.92191 21.6665C6.23753 21.8338 7.57437 21.6138 8.76104 21.0348C9.94772 20.4557 10.9302 19.544 11.5824 18.4165M16.0227 9.74984C16.0227 10.0372 16.1397 10.3127 16.3479 10.5159C16.556 10.719 16.8384 10.8332 17.1328 10.8332C17.4272 10.8332 17.7096 10.719 17.9178 10.5159C18.1259 10.3127 18.2429 10.0372 18.2429 9.74984C18.2429 9.46252 18.1259 9.18697 17.9178 8.98381C17.7096 8.78064 17.4272 8.6665 17.1328 8.6665C16.8384 8.6665 16.556 8.78064 16.3479 8.98381C16.1397 9.18697 16.0227 9.46252 16.0227 9.74984Z" stroke="#F8E1E6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

              <p className='mx-1'>3.</p>
              <p>Blast off! TeamUp will support you in staying organized and on top of your project needs as you work together on creating an amazing product.</p>
            </div>
          </div>
          <div className='flex justify-center'>
          <button onClick={navigateToSignIn} className="text-whit py-4 px-4 mt-10 mb-10 w-1/2 rounded-md border">
          Start Your Mission Now!
        </button>
          </div>
        </div>
    </div>
    </div>
  );
}
