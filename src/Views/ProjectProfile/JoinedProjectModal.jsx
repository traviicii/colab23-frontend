import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function JoinedProjectModal({ isOpen, closeModal }) {
  const navigate = useNavigate();

  // Function to handle joining the project
  const joinProject = () => {
    // We can add our logic for joining the project, API request to join the project.
    closeModal();
    navigate('/project-browser');
  };

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-70">
          <div className="flex items-center justify-center w-full h-full">
            <div className="relative w-full max-w-lg max-h-full mx-auto">
              <div className="relative bg-white rounded-lg shadow">
                <div className="flex items-start justify-between p-4 border-b rounded-t">
                  <div className="w-full text-center">
                    <h3 className="text-2xl font-semibold text-black py-6">Project Name</h3>
                  </div>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-600 hover-text-gray-800 focus:outline-none focus-text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="p-6 space-y-1">
                  <div className="mb-4 mt-4 text-center">
                    <p className="text-gray-700 font-semibold">Success!</p>
                    <p className="text-gray-700 font-semibold">
                      Your project admin will contact you when the project starts.
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center p-6 border-t border-gray-200 rounded-b">
                  <button
                    type="button"
                    className="text-black bg-white border-black border-2 focus:ring-4 focus:outline-none focus-ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center"
                    onClick={() => joinProject()}
                  >
                    Go Back to Teams Browser
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
