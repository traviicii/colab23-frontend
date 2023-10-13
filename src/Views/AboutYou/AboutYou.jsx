import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAdjectives, setDescription, setFieldsOfInterest } from '../../Actions';

export default function AboutYou() {
    const fieldsOfInterest = [
      'Fintech', 'Education', 'Non-Profit', 'SaaS', 'Healthcare',
      'Sustainability', 'Security', 'Enterprise', 'Marketplace', 'e-Commerce',
      'B2C', 'Retail', 'B2B', 'Blockchain', 'Real Estate',
      'API', 'Artificial Intel.', 'Big Data', 'DevOps', 'Deep Tech',
      'Cloud Computing', 'Agriculture', 'Environmental', 'Mental Health',
      'Home Improvement', 'Community', 'Entertainment', 'Productivity', 'Art / Design', 'Science'
    ];
  
    const [selectedFields, setSelectedFields] = useState([]);
    const [adjectivesState, setAdjectivesState] = useState([]);
    const [descriptionState, setDescriptionState] = useState('');
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const toggleField = (field) => {
      if (selectedFields.includes(field)) {
        setSelectedFields(selectedFields.filter(selectedField => selectedField !== field));
      } else if (selectedFields.length < 5) {
        setSelectedFields([...selectedFields, field]);
      }
    };
  
    const handleAdjectiveSelect = (selectedAdjective) => {
      if (adjectivesState.length < 3 && !adjectivesState.includes(selectedAdjective)) {
        setAdjectivesState([...adjectivesState, selectedAdjective]);
      }
    };
  
    const removeAdjective = (adjective) => {
      const updatedAdjectives = adjectivesState.filter(item => item !== adjective);
      setAdjectivesState(updatedAdjectives);
    };

  
    const handleDescriptionChange = (event) => {
      setDescriptionState(event.target.value);
    };
  
    const navigateYourAvailability = () => {
      dispatch(setFieldsOfInterest(selectedFields));
      dispatch(setAdjectives(adjectivesState));
      dispatch(setDescription(descriptionState));
      navigate('/your-availability');
    };
  
    return (
      <div className="professional-background-container">
        <div className="flex items-center justify-center">
          <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg-w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10">
            <div className="mb-4 flex items-center">
            <button className="text-blue-500 hover:underline text-lg mr-4" onClick={() => navigate("/skills-and-tools")}>Back</button>
              {/* progress bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66.68%' }}></div>
              </div>
            </div>
            <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">About You</p>
            <h6 className="text-md md:text-lg text-left mb-4">1. What fields are you interested in? (Select up to 5)</h6>
            <div className="grid grid-cols-3 gap-4">
              {fieldsOfInterest.map((field, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-2 text-center cursor-pointer border border-gray-300 ${selectedFields.includes(field) ? 'bg-gray-300' : 'bg-white'}`}
                  onClick={() => toggleField(field)}>
                  {field}
                </div>
              ))}
            </div>
            <hr className="border-t-4 border-gray-300 my-6" />
            <h6 className="text-md md:text-lg text-left mb-4">2. Share some adjectives about yourself!</h6>
            <p className="text-sm text-gray-500 mb-2">Select up to 3 words you would use to describe yourself</p>
            <div className="mb-2">
              <div>
                {adjectivesState.map((adjective, index) => (
                  <span key={index} className="inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-sm mr-2">
                    {adjective}
                    <button className="ml-2" onClick={() => removeAdjective(adjective)}>X</button>
                  </span>
                ))}
              </div>
            </div>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
              id="question1"
              onChange={(e) => handleAdjectiveSelect(e.target.value)}>
              <option value="">Select an adjective</option>
              <option value="Organized" disabled={adjectivesState.includes("Organized")}>Organized</option>
              <option value="Creative" disabled={adjectivesState.includes("Creative")}>Creative</option>
              <option value="Innovative" disabled={adjectivesState.includes("Innovative")}>Innovative</option>
              <option value="Shy" disabled={adjectivesState.includes("Shy")}>Shy</option>
              <option value="Enthusiastic" disabled={adjectivesState.includes("Enthusiastic")}>Enthusiastic</option>
              <option value="Driven" disabled={adjectivesState.includes("Driven")}>Driven</option>
              <option value="Social" disabled={adjectivesState.includes("Social")}>Social</option>
            </select>
            <hr className="border-t-4 border-gray-300 my-6" />
            <h6 className="text-md md:text-lg text-left mb-4">3. Add a short description about yourself. (optional)</h6>
            <p className="text-sm text-gray-500 mb-2">Your background, goals, fun facts...</p>
            <div className="mb-2">
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
                placeholder="Enter some details about you"
                rows="4"
                value={descriptionState}
                onChange={handleDescriptionChange}/>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none"
                type="button"
                onClick={navigateYourAvailability}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }