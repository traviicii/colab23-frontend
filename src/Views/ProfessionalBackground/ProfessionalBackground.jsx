import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPreviousRole, setMentorshipStatus, setProductRole, setProductExperience } from '../../Actions';
import './ProfessionalBackground.css';


export default function ProfessionalBackground() {
    // Initialize state variables for dropdown selection and checkbox display
    const [selectedOption, setSelectedOption] = useState('');
    const [showCheckbox, setShowCheckbox] = useState(false);
  
    // Get access to the Redux dispatch and state using hooks
    const dispatch = useDispatch();
    const professionalFormData = useSelector((state) => state.professionalBackground);
    const navigate = useNavigate();

    const navigateToSkillsAndTools = () => {
      navigate('/skills-and-tools');
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
    // Handle dropdown selection change event
    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
    
        // Show checkbox if specific dropdown options are selected
        if (selectedValue === 'option2' || selectedValue === 'option3' || selectedValue === 'option4') {
            setShowCheckbox(true);
        } else {
            setShowCheckbox(false);
        }
    };
    const [showArrow, setShowArrow] = useState(true);
    const [showRoleArrow, setShowRoleArrow] = useState(true);

    const handleYearsSelectChange = (e) => {
      const selectedValue = e.target.value;
      setShowArrow(selectedValue === 'initial');
      handleOnChange(e);
    }

    const handleRoleSelectChange = (e) => {
      const selectedRoleValue = e.target.value;
      setShowRoleArrow(selectedRoleValue === 'initial');
      handleProductRole(e);
    }


    // Handle both dropdown and years of experience changes together
    const handleOnChange = (e) => {
        handleDropdownChange(e);
        handleProductExperience(e);
    }
  
    // Handle continue button click
    const handleContinue = () => {
        // Dispatch Redux actions to update the store with professional background data
        dispatch(setPreviousRole(professionalFormData.previousRole));
        dispatch(setMentorshipStatus(professionalFormData.isMentor));
        dispatch(setProductRole(professionalFormData.productRole));
        dispatch(setProductExperience(professionalFormData.productExperience));
        console.log(professionalFormData); // Log the professionalFormData
        navigateToSkillsAndTools()
    };

    // Handle input for previous professional role
    const handlePreviousRole = (e) => {
        dispatch(setPreviousRole(e.target.value));
    };

    // Handle checkbox for mentorship status
    const handleMentorshipStatus = (e) => {
        const isChecked = e.target.checked;
        dispatch(setMentorshipStatus(isChecked));
    };

    // Handle product role dropdown change
    const handleProductRole = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOptionLabel = e.target.options[selectedIndex].label;
        dispatch(setProductRole(selectedOptionLabel));
    };

    // Handle product experience dropdown change
    const handleProductExperience = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOptionLabel = e.target.options[selectedIndex].label;
        dispatch(setProductExperience(selectedOptionLabel));
    };
      


  return (
    <div style={{ backgroundColor: '#bcbbc2' }}>
    <div className="professional-background-container" >
      <div className="flex items-center justify-center">
        <div
          className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white">
          <div className="mb-4 flex items-center">
          <button className="hover:underline text-lg mr-4" onClick={() => navigate("/personal-details")} style={{ display: 'flex', alignItems: 'center' }}>
              <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                  <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
              </svg>
              Back
              </button>
            {/* progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '33.34%', backgroundColor: '#ed4168' }}></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">
            Your Professional Background
          </p>
          <p className="text-md md:text-lg font-semibold text-center">
            Let's start by getting some info about your work experience
          </p>
          <h4 className='text-md md:text-lg text-center mb-12'>All info will be displayed on your personal profile</h4>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1">
              If you are currently switching careers, what is your previous/current role?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none border-2 border-black mb-6"
              type="text"
              placeholder="Your Previous Role/Title"
              value={professionalFormData.previousRole ? professionalFormData.previousRole : ''} 
              onChange={handlePreviousRole}/>
          </div>

          <div className="border-t-2 border-black my-4 mb-10"></div>


          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1">
            Which of the following describes your role on a product team?
            </label>
            <div className="relative">
      <div className="custom-select-wrapper">
        <select
          className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6 border-2 border-black"
          defaultValue="initial"
          onChange={handleRoleSelectChange} >
                <option value="initial" disabled>Select Product Manager, Designer, Developer</option>
                <option value="option2">Product Manager</option>
                <option value="option3">Designer</option>
                <option value="option4">Developer</option>
        </select>
      </div>
      {showRoleArrow && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pb-4 text-gray-700">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow/down">
          <path id="Vector" d="M2.16659 7.45524L3.64575 5.97607L10.4999 12.8302L17.3541 5.97607L18.8333 7.45524L10.4999 15.7886L2.16659 7.45524Z" fill="black"/>
          </g>
          </svg>
        </div>
      )}
    </div>
          </div>


          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1">
              How much experience do you have in the product role you selected above?
            </label>
            <div className="relative">
      <div className="custom-select-wrapper">
        <select
          className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6 border-2 border-black"
          defaultValue="initial"
          onChange={handleYearsSelectChange}>
          <option value="initial" disabled>Select # of Years</option>
          <option value="option1">0-2 years</option>
          <option value="option2">2-5 years</option>
          <option value="option3">5-10 years</option>
          <option value="option4">10+ years</option>
        </select>
      </div>
      {showArrow && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 pb-4 text-gray-700">
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="Arrow/down">
          <path id="Vector" d="M2.16659 7.45524L3.64575 5.97607L10.4999 12.8302L17.3541 5.97607L18.8333 7.45524L10.4999 15.7886L2.16659 7.45524Z" fill="black"/>
          </g>
          </svg>
        </div>
      )}
    </div>
            {showCheckbox && (
              <p className="text-sm text-gray-500">You qualify to be a mentor! Would you like to be a mentor to other colleagues with less experience?</p>
            )}
          </div>

          {/* Conditional rendering of the checkbox */}
          {showCheckbox && (
            <div className="mb-2 flex items-center mb-10">
              <input
                type="checkbox"
                id="checkbox"
                className="form-checkbox h-5 w-5 text-blue-500"
                onChange={handleMentorshipStatus}
              />
              <label className="block text-gray-700 text-sm font-bold ml-2" htmlFor="checkbox">
                Yes, sign me up to be a mentor so other students can reach out to me with questions.
              </label>
            </div>
          )}

          <div className="flex items-center justify-between mt-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none" style={{ backgroundColor: '#ed4168' }}
              type="button"
              onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
