import React from 'react'

export default function ProjectStatusOption({ selectedStatus, handleStatusClick, showProjectStatusButtons, toggleProjectStatusButtons }) {
  return (
    <li>
    <button type="button" className="flex items-center w-2/3 p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 ml-10" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
        <span className="flex-1 text-left whitespace-nowrap" onClick={toggleProjectStatusButtons}>Project Status</span>
        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 4 4 4-4" />
        </svg>
    </button>
    {showProjectStatusButtons && (
        <div className="ml-12">
          <button
            className={`my-2 border-2 rounded-md px-8 py-2 mr-2 text-sm ${selectedStatus === 'Open' ? 'bg-white' : ''}`}
            onClick={() => {
              handleStatusClick('Open');
              console.log('Open');
            }}
          >
            Open
          </button>
          <button
            className={`my-2 border-2 rounded-md px-8 py-2 text-sm ${selectedStatus === 'Complete' ? 'bg-white' : ''}`}
            onClick={() => {
              handleStatusClick('Complete');
              console.log('Complete');
            }}
          >
            Complete
          </button>
        </div>
      )}
    </li>
  );
}