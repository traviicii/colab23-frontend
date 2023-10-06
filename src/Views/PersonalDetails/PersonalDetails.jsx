import React from 'react';
import './PersonalDetails.css'

export default function PersonalDetails() {

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
                placeholder="Your First Name"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                What is your last name?
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-8"
                id="lastName"
                type="text"
                placeholder="Your Last Name"/>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Enter your email address
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none mb-8"
                id="email"
                type="email"
                placeholder="email@domain.com"/>
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
      