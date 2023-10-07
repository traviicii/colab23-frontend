import React from 'react';
import './PersonalDetails.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setConfirmPassword } from '../../Actions';

export default function PersonalDetails() {
    // Initialize Redux dispatch and get form data from the Redux store
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.personalForm);
    
    // Initialize navigation hook for routing
    const navigate = useNavigate();

    // Function to navigate to the next page
    const navigateToProfessionalBaground = () => {
        navigate('/professional-background');
    }

    // Handle continue button click
    const handleContinue = () => {
        // Dispatch Redux actions to update the store with personal details
        dispatch(setFirstName(formData.firstName));
        dispatch(setLastName(formData.lastName));
        dispatch(setEmail(formData.email));
        dispatch(setPassword(formData.password));
        dispatch(setConfirmPassword(formData.confirmPassword));

        console.log('Form Data Sent to Redux:', formData); // Log the form data
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

    // Handle input changes for password
    const handlePasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    };

    // Handle input changes for confirming password
    const handleConfirmPasswordChange = (e) => {
        dispatch(setConfirmPassword(e.target.value));
    };


  return (
    <div className="personal-details-container">
      <div className="flex items-center justify-center">
        <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10">
          <div className="mb-4">
            <div className="w-full bg-gray-200 h-2 rounded-full mr-20">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-center text-500 mb-8">
            We're excited for your new journey!
          </p>
          <h2 className="text-md md:text-lg text-center font-bold mb-6">
            Let's start by getting some basics
          </h2>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="firstName">
              What is your first name?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4"
              id="firstName"
              type="text"
              placeholder="Your First Name"   
              onChange={handleFirstNameChange} />
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="lastName">
              What is your last name?
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4"
              id="lastName"
              type="text"
              placeholder="Your Last Name"
              onChange={handleLastNameChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
              Enter your email address
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4"
              id="email"
              type="email"
              placeholder="email@domain.com"
              onChange={handleEmailChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
              Select a password (8 characters minimum)
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-4"
              id="password"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirmPassword">
              Re-type your password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-3"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              onChange={handleConfirmPasswordChange}/>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none"
              type="button" onClick={handleContinue}>
              Continue
            </button>
          </div>

          <div className="text-center mt-6">
            <a className="text-blue-500 hover:underline text-sm underline" href="/">
              Go Back Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
