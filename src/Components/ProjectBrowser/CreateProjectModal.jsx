import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setUserData, setUserProject } from '../../Actions';
// import { useNavigate } from 'react-router-dom';
import CreateProject from './CreateProject';
import GenerateProject from './GenerateProject';


export default function CreateProjectModal({ isOpen, closeModal }) {

  const [activeDisplay, setActiveDisplay] = useState('create');

  const [chosenProject, setChosenProject] = useState(null)

  const handleLinkClick = (display) => {
    setActiveDisplay(display);
  };

  let displayComponent;

  if (activeDisplay === 'create') {
    displayComponent = <CreateProject closeModal={closeModal} chosenProject={chosenProject} />;
  } else if (activeDisplay === 'generate') {
    displayComponent = <GenerateProject setActiveDisplay={setActiveDisplay} chosenProject={chosenProject} setChosenProject={setChosenProject} />;
  }

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 w-full h-screen p-4 overflow-x-hidden overflow-y-auto bg-black bg-opacity-70">
          <div className="relative w-full max-w-2xl max-h-full mx-auto">
            <div className="relative bg-white rounded-lg shadow">

              {/* This div contains Create New Project and Generate Project buttone + button to close modal */}
              <div className="flex items-start justify-between p-5 rounded-t">
                <div className="w-full text-center space-x-12">

                  <div className='w-[283px] flex space-x-6'>

                    <div className='w-[283px]'>
                      <button onClick={() => handleLinkClick('create')}>
                        <h3 className="text-2xl font-semibold text-black">
                          Create A New Project
                        </h3>
                      </button>
                      {activeDisplay === 'create' ? <div className="w-[283px] h-[0px] border-b-4 my-2 border-rose-500"></div> : <div className='w-[283px]'></div>}
                    </div>

                    <div className='w-[283px]'>
                      <button onClick={() => handleLinkClick('generate')}>
                        <h3 className="text-2xl font-semibold text-black">
                          Generate New Project
                        </h3>
                      </button>
                      {activeDisplay === 'generate' ? <div className="w-[283px] h-[0px] border-b-4 my-2 border-rose-500"></div> : <div className='w-[283px]'></div>}
                    </div>
                  </div>

                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-red-300 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  onClick={closeModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* ///////////////////////////// */}

              {displayComponent}

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
