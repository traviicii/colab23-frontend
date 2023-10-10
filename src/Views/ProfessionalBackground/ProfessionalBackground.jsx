import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setPreviousRole, setYearsOfExperience, setMentorshipStatus, setProductRole, setProductExperience } from '../../Actions';
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

    // Handle years of experience dropdown change
    const handleYearsOfExperience = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOptionLabel = e.target.options[selectedIndex].label;
        dispatch(setYearsOfExperience(selectedOptionLabel));
    };

    // Handle both dropdown and years of experience changes together
    const handleOnChange = (e) => {
        handleDropdownChange(e);
        handleYearsOfExperience(e);
    }
  
    // Handle continue button click
    const handleContinue = () => {
        // Dispatch Redux actions to update the store with professional background data
        dispatch(setPreviousRole(professionalFormData.previousRole));
        dispatch(setYearsOfExperience(professionalFormData.yearsOfExperience));
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
    <div className="professional-background-container">
      <div className="flex items-center justify-center">
        <div
          className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10">
          <div className="mb-4 flex items-center">
            <a className="text-blue-500 hover:underline text-lg mr-4" href="/personal-details">
              Back
            </a>
            <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">
            Your Professional Background
          </p>
          <h2 className="text-md md:text-lg text-center font-bold mb-12">
            Let's start by getting some info about your work experience
          </h2>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="previousRole">
              What was your previous professional role/title?
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
              id="previousRole"
              type="text"
              placeholder="Your Previous Role/Title"
              onChange={handlePreviousRole}/>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="question1">
              How many total years of experience do you have?
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
                id="question1"
                onChange={handleOnChange}
                value={selectedOption}
              >
                <option value="" disabled>Select # of Years</option>
                <option value="option1">0-2 years</option>
                <option value="option2">2-5 years</option>
                <option value="option3">5-10 years</option>
                <option value="option4">10+ years</option>
              </select>
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

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mt-2 mb-1" htmlFor="question2">
              Which of the following describes your role on a product team?
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
                id="question2"
                defaultValue="option1"
                onChange={handleProductRole} 
              >
                <option value="option1" disabled>Select Product Manager, Designer, Developer</option>
                <option value="option1">Product Manager</option>
                <option value="option2">Designer</option>
                <option value="option3">Developer</option>
                <option value="option4">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="question3">
              How much experience do you have in the product role you selected above?
            </label>
            <div className="relative">
              <select
                className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
                id="question3"
                defaultValue="option1"
                onChange={handleProductExperience}
              >
                <option value="option1" disabled>Select # of Years</option>
                <option value="option2">0-2 years</option>
                <option value="option3">2-5 years</option>
                <option value="option4">5-10 years</option>
                <option value="option5">10+ years</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none"
              type="button"
              onClick={handleContinue}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
