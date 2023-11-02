import React, { useState, useEffect } from 'react';
import './PersonalDetails.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setLinkedIn, setPassword, setConfirmPassword } from '../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function PersonalDetails() {

  
  // Initialize Redux dispatch and get form data from the Redux store
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.personalForm);
  console.log(formData.email)
  
  //Call to api to see if the user already exists
  const checkUser = async () => {
    //Switched to a GET request, removed body
    const URL = BACK_END_URL + `/api/checkuser/${formData.email}`
    const options = {
        method: "GET",
        // headers: {
        //     "Content-Type": 'application/json'
        // },
        // body: JSON.stringify({
        //     email: formData.email
        // })
    }

    const res = await fetch(URL, options);
    const data = await res.json();
    console.log(data)
    if (data.status === 'ok') {
      console.log(data.status)
      handleContinue()
    }
    else {
      console.log(data.message)
      navigate('/signin')
    }
}
  // Initialize navigation hook for routing
  const navigate = useNavigate();
  
  // Function to navigate to the next page
  const navigateToProfessionalBaground = () => {
        navigate('/professional-background');
    }
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    // Handle continue button click
    const handleContinue = () => {
        // Dispatch Redux actions to update the store with personal details
        // These are already being done on input
        // dispatch(setFirstName(formData.firstName));
        // dispatch(setLastName(formData.lastName));
        // dispatch(setEmail(formData.email));
        // dispatch(setPassword(formData.password));
        // dispatch(setConfirmPassword(formData.confirmPassword));

        //console.log('Form Data Sent to Redux:', formData); // Log the form data
        navigateToProfessionalBaground(); // Navigate to the next page
    };

    // Handle input changes for first name
    const handleFirstNameChange = (e) => {
        dispatch(setFirstName(e.target.value));
    };

    // Handle input changes for last name
    const handleLastNameChange = (e) => {
        dispatch(setLastName(e.target.value));
    };

    // Handle input changes for email
    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };

    // Handle input changes for email
    const handleLinkedInChange = (e) => {
        dispatch(setLinkedIn(e.target.value));
    };

    // Handle input changes for password
    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    };

    // Handle input changes for confirming password
    const handleConfirmPasswordChange = (e) => {
        dispatch(setConfirmPassword(e.target.value));
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    



  return (
    
    <div className="personal-details-container" style={{ backgroundColor: '#bcbbc2' }}>
      <div className="flex items-center justify-center">
        <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white">
          <div className="mb-4 ml-20 mr-20">
            <div className="w-full bg-gray-200 h-2 rounded-full mr-20">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '16.67%', backgroundColor: '#ed4168' }}></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-center text-500 mb-8">
            We're excited for your new journey!
          </p>
          <p className="text-md md:text-lg text-center font-semibold">
            Let's start by getting some basics
          </p>
          <h4 className='text-md md:text-lg text-center mb-12'>All info will be displayed on your personal profile</h4>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="firstName">
              What is your first name?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4 border-2 border-black"
              id="firstName"
              type="text"
              placeholder="Your First Name"  
              value={formData.firstName ? formData.firstName : ''} 
              onChange={handleFirstNameChange} />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="lastName">
              What is your last name?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4 border-2 border-black"
              id="lastName"
              type="text"
              placeholder="Your Last Name"
              value={formData.lastName ? formData.lastName : ''} 
              onChange={handleLastNameChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
              Enter your email address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4 border-2 border-black"
              id="email"
              type="email"
              placeholder="email@domain.com"
              required="required"
              value={formData.email ? formData.email : ''} 
              onChange={handleEmailChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="linkedin">
              Enter your LinkedIn profile
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4 border-2 border-black"
              id="linkedin"
              type="text"
              placeholder="LinkedIn URL"
              value={formData.linkedin ? formData.linkedin : ''} 
              onChange={handleLinkedInChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
              Select a password (8 characters minimum)
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4 border-2 border-black"
              id="password"
              type="password"
              placeholder="Password"
              value={formData.password ? formData.password : ''} 
              onChange={handlePasswordChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirmPassword">
              Re-type your password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4 border-2 border-black"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={formData.confirmPassword ? formData.confirmPassword : ''} 
              onChange={handleConfirmPasswordChange}/>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none" style={{ backgroundColor: '#ed4168' }}
              type="button" onClick={checkUser}>
              Continue
            </button>
          </div>

          <div className="text-center mt-6">
            <a className="hover:underline text-sm underline" style={{ color: '#ed4168' }} href="/">
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}