import React from 'react'


export default function ProjectDurationOption({ showProjectDurationButtons, toggleProjectDurationButtons, selectedDuration, handleDurationClick }) {

  return (
    <li>
          <button type="button" className="flex items-center w-2/3 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 ml-10" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <span className="flex-1 text-left whitespace-nowrap" onClick={toggleProjectDurationButtons}>Duration</span>
              <svg className="w-3 h-3 ml-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
              </svg>
            </button>
            {showProjectDurationButtons && (
        <div className="ml-12">
          <button
            className={`my-2 border-2 hover:bg-white rounded-md px-10 py-2 mr-2 text-sm w-11/12 ${
              selectedDuration === 'Short-Term' ? 'bg-white' : ''
            }`}
            onClick={() => handleDurationClick('Short-Term')}
          >
            Short-Term (1-4 weeks)
          </button>
          <button
            className={`my-2 border-2 hover:bg-white rounded-md px-10 py-2 mr-2 text-sm w-11/12 ${
              selectedDuration === 'Medium-Term' ? 'bg-white' : ''
            }`}
            onClick={() => handleDurationClick('Medium-Term')}
          >
            Mid-Length (4-8 weeks)
          </button>
          <button
            className={`my-2 border-2 hover:bg-white rounded-md px-10 py-2 mr-2 text-sm w-11/12 ${
              selectedDuration === 'Long-Term' ? 'bg-white' : ''
            }`}
            onClick={() => handleDurationClick('Long-Term')}
          >
            Long-Term (8-12 weeks)
          </button>
        </div>
      )}
    </li>
  );
}