import React from 'react';
import './Welcome.css'

export default function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center h-screen" id='welcome-wrapper'>
      <div className="w-3/4 text-center">

        <div className='mb-8 text-left text-5xl font-bold'>
          <h1>Your Team Awaits</h1>
        </div>

        <div className="text-left text-2xl">
          <p>
            Grow your skills with other product managers, designers, and developers on a collaborative product.
          </p>
        </div>
        
        <button className="bg-gray-800 text-white py-2 px-4 mt-8 w-full rounded-md hover:bg-gray-700">
          Join a Team Today
        </button>
        
        <a href="/learn-more" className="block mt-4 underline">Learn More</a>
      </div>
    </div>
  );
}
