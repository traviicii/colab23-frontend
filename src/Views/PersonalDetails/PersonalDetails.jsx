import React from 'react';
import './PersonalDetails.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setFirstName, setLastName, setEmail, setPassword, setConfirmPassword } from '../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function PersonalDetails() {

      //Call to api to see if the user already exists
      const checkUser = async (email) => {
        const URL = BACK_END_URL + '/api/checkuser'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                email
            })
        }

        const res = await fetch(URL, options);
        const data = await res.json();
        console.log(data)
        if (data.status == 'ok') {
          navigateToProfessionalBaground()
        }
        else {
          console.log(data.message)
          navigate('/signin')
        }
    }

    // Initialize Redux dispatch and get form data from the Redux store
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.personalForm);
    console.log(formData.email)
    
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
        <div className="flex h-screen items-center justify-center">
          <div className="shadow-2xl rounded-xl px-20 py-12 w-1/3">
            <div className="mb-6">
            <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
              <p className="text-3xl text-center text-500 mb-12">
                We're excited for your new journey!
              </p>
              <h2 className="text-lg text-center font-bold mb-8">
                Let's start by getting some basics
                </h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                What is your first name?
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-8"
                id="firstName"
                type="text"
                placeholder="Your First Name"
                required="required"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                What is your last name?
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-8"
                id="lastName"
                type="text"
                placeholder="Your Last Name"
                required="required"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Enter your email address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-8"
                id="email"
                type="email"
                placeholder="email@domain.com"
                required="required"/>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Select a password (8 characters minimum)
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-8"
                id="password"
                type="password"
                placeholder="Password"/>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Re-type your password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-5"
                id="confimrPassword"
                type="password"
                placeholder="Confirm Password"/>
            </div>
      
            <div className="flex items-center justify-between mt-10">
              <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none"
                type="button">
                Continue
              </button>
            </div>

            <div className="text-center mt-10">
                <a className="text-blue-500 hover:underline text-sm underline" href="/">
                Go Back Home
                </a>
            </div>
          </div>
        </div>
      );
    };
      