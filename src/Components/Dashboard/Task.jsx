import React, { useState } from 'react';

export default function Task() {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);

  const openTaskModal = () => {
    setIsTaskModalOpen(true);
  };

  const closeTaskModal = () => {
    setIsTaskModalOpen(false);
  };

  const openMeetingModal = () => {
    setIsMeetingModalOpen(true);
  };

  const closeMeetingModal = () => {
    setIsMeetingModalOpen(false);
  };

  return (
    <div className="flex justify-center space-x-4">
      <div className="w-1/3 bg-white p-4 rounded-lg text-center">
        <h2 className="font-bold text-lg">What do we need to get done this week?</h2>
        <button
          className="bg-white hover:bg-gray-200 font-bold py-1 border-2 border-black rounded w-full mt-10"
          onClick={openTaskModal}
        >
          + Add a New Task
        </button>
        {isTaskModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-70">
            <div className="relative w-full max-w-2xl max-h-full mx-auto">
              {/* Your modal content here */}
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal content */}
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add Task Information Below
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeTaskModal}
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Task"
                      className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Due Date"
                      className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Any Notes"
                      className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                    />
                  </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={closeTaskModal}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark-text-gray-300 dark-border-gray-500 dark-hover-text-white dark-hover-bg-gray-600 dark-focus-ring-gray-600"
                    onClick={closeTaskModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/3 bg-white p-4 rounded-lg text-center">
        <h2 className="font-bold text-lg">When are we meeting next?</h2>
        <button
          className="bg-white hover:bg-gray-200 font-bold py-1 border-2 border-black rounded w-full mt-10"
          onClick={openMeetingModal}
        >
          + Propose a New Meeting
        </button>
        {isMeetingModalOpen && (
          <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-70">
            <div className="relative w-full max-w-2xl max-h-full mx-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* Modal content */}
                <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Add New Meeting Information
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover-text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark-hover-bg-gray-600 dark-hover-text-white"
                    onClick={closeMeetingModal}
                  >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-6 space-y-6">
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Meeting Title"
                      className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter the Date/Time"
                      className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Enter Any Notes"
                      className="w-full border border-gray-300 rounded p-2 focus:ring focus:ring-blue-300"
                    />
                  </div>
                </div>
                <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark-border-gray-600">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover-bg-blue-800 focus-ring-4 focus-outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark-bg-blue-600 dark-hover-bg-blue-700 dark-focus-ring-blue-800"
                    onClick={closeMeetingModal}
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white hover-bg-gray-100 focus-ring-4 focus-outline-none focus-ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover-text-gray-900 focus-z-10 dark-bg-gray-700 dark-text-gray-300 dark-border-gray-500 dark-hover-text-white dark-hover-bg-gray-600 dark-focus-ring-gray-600"
                    onClick={closeMeetingModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-1/3 bg-white p-4 rounded-lg text-center">
        <h2 className="font-bold text-lg">What have we already accomplished?</h2>
      </div>
    </div>
  );
}
