import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToast, setAdjectives, setDescription, setFieldsOfInterest, setOtherInterests } from '../../Actions';

export default function AboutYou() {
  const fieldsOfInterest = [
    'Fintech', 'Education', 'Non-Profit', 'SaaS', 'Healthcare',
    'Sustainability', 'Security', 'Enterprise', 'Marketplace', 'E-Commerce',
    'B2C', 'Retail', 'B2B', 'Blockchain', 'Real Estate',
    'API', 'Artificial Intel', 'Big Data', 'DevOps', 'Deep Tech',
    'Cloud Computing', 'Agriculture', 'Environmental', 'Mental Health',
    'Home Improvement', 'Community', 'Entertainment', 'Productivity', 'Art / Design', 'Other...'
  ];

  const adjectivesList = [
    'Organized', 'Creative', 'Innovative', 'Introverted', 'Enthusiastic', 'Driven', 'Social',
    'Adaptable', 'Direct'
  ];
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const aboutYou = useSelector((state) => state.aboutYouForm)

  const [selectedFields, setSelectedFields] = useState([]);
  const [adjectivesState, setAdjectivesState] = useState([]);
  const [descriptionState, setDescriptionState] = useState(aboutYou.description);
  const [showOtherInterests, setShowOtherInterests] = useState(false);
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [InterestTag, setInterestTag] = useState([]);



  const handleInputChange = (e) => {
    setInputValue(e.target.value);
      const handleInputChange = (e) => {
        setInputValue(e.target.value);
      }};
    
      const handleInputKeydown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
          setTags([...tags, inputValue.trim()]);
          setInputValue('');
        }
      };


  const toggleField = (field) => {
    if (field === 'Other...') {
      setShowOtherInterests(true);
    } else if (selectedFields.includes(field)) {
      setSelectedFields(selectedFields.filter(selectedField => selectedField !== field));
    } else if (selectedFields.length < 5) {
      setSelectedFields([...selectedFields, field]);
    } else {
      dispatch(addToast("You can only select a maximum of 5 fields of interest!", "error"))
    }
  };
    

// Function to toggle skill selection
const toggleSkill = (skill, state, stateFunc) => {
  if (state.includes(skill)) {
    // Deselect the skill
    dispatch(stateFunc(state.filter(selectedSkill => selectedSkill !== skill)));
  } else if (state.length < 3) {
    // Select the skill if not already selected and there is space for more
    if (skill === 'Other...') {
      setShowOtherInterests(true);
    }
    dispatch(stateFunc([...state, skill]));
  } else {
    // Notify the user about the maximum limit
    dispatch(addToast("You can only select a maximum of 3 skills!", "error"));
  }
  console.log(aboutYou);
};
      
  // const handleAdjectiveSelect = (selectedAdjective) => {
  //   if (adjectivesState.includes(selectedAdjective)) {
  //     // Deselect the adjective
  //     const updatedAdjectives = adjectivesState.filter((adj) => adj !== selectedAdjective);
  //     setAdjectivesState(updatedAdjectives);
  //   } else if (adjectivesState.length < 3) {
  //     // Select the adjective if not already selected and there is space for more
  //     setAdjectivesState([...adjectivesState, selectedAdjective]);
  //   } else {
  //     dispatch(addToast("You can only select a maximum of 3 adjectives!", "error"))
  //   }
  // };

  const handleDescriptionChange = (event) => {
    setDescriptionState(event.target.value);
  };

  const navigateYourAvailability = () => {
    dispatch(setDescription(descriptionState));
    dispatch(setOtherInterests(InterestTag))
    navigate('/your-availability');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleEnterButtonClick = () => {
    // Handle adding the tag when the "Enter" button is clicked for skills to gain
    const newTag = inputValue.trim();
    if (newTag) {
        setInterestTag([...InterestTag, newTag]);
        dispatch(setOtherInterests([...aboutYou.otherInterests, newTag]));
        setInputValue('');
    }
};

const handleInterestsTagRemove = (tagToRemove) => {
  const updatedInterestTag = InterestTag.filter((tag) => tag !== tagToRemove);
  setInterestTag(updatedInterestTag);
};

const handleInterestsInputKeydown = (e) => {
  if (e.key === 'Enter' && inputValue.trim() !== '') {
      setInterestTag([...InterestTag, inputValue.trim()]);
      setInputValue('');
      dispatch(setOtherInterests([...aboutYou.otherInterests, inputValue.trim()]));
  }
};

  return (
    <div className="professional-background-container" style={{ backgroundColor: '#bcbbc2' }}>
      <div className="flex items-center justify-center">
        <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg-w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white">
          <div className="mb-4 flex items-center">
            <button className="hover:underline text-lg mr-4" onClick={() => navigate("/skills-and-tools")} style={{ display: 'flex', alignItems: 'center' }}>
              <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
              </svg>
              Back
            </button>
            {/* progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '66.68%', backgroundColor: '#ed4168' }}></div>
            </div>
          </div>
          <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">About You</p>
          <p className="text-md md:text-lg text-center font-semibold">
            Tell your teammates a little bit more about yourself!
          </p>
          <h4 className='text-md md:text-lg text-center mb-12'>All info will be displayed on your public profile</h4>

          <h6 className="text-sm md:text-md text-left mb-2 font-bold">Select the fields you are most interested in for potential teammates to learn more about your interests.
          <span style={{ color: '#ed4168' }}>*</span></h6>
          

          <p className='text-sm mb-6 text-gray-500'>Select up to 5</p>
          <div className="grid grid-cols-3 gap-4">
            {fieldsOfInterest.map((field, index) => (
              <div key={index} style={{
                  backgroundColor:
                  aboutYou.fieldsOfInterest.includes(field) ? '#F8E1E6' : 'white'
                }}
                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                onClick={() => toggleSkill(field, aboutYou.fieldsOfInterest, setFieldsOfInterest)}>
                {field}
              </div>
            ))}
          </div>

          {/* New input box for other interests */}
          {aboutYou.fieldsOfInterest.includes('Other...') && (
                <div>
                  <h6 className="text-md md:text-lg text-left mt-4">
                        Enter any interests you would like to gain.
                    </h6>
                      <div className="tag-list inline-block">
                      {aboutYou.otherInterests.map((tag, index) => (
                        <div key={index} className="tag inline-block bg-blue-500 px-2 py-1 m-1 rounded-full text-sm" style={{ backgroundColor: '#ecafbd' }}>
                            {tag}
                            <button className='ml-2' onClick={() => handleInterestsTagRemove(tag)}>X</button>
                        </div>
                        ))}
                      </div>
                      <div className="input-container flex items-center mb-6">
                      <input type="text" value={inputValue} onChange={handleInputChange}
                        onKeyDown={handleInterestsInputKeydown} placeholder="Enter an Interest" className="shadow appearance-none border-2 border-black rounded py-2 px-2 md:px-3 text-gray-700 focus:outline-none flex-grow" />
                      <button onClick={handleEnterButtonClick} className="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 ml-2" style={{ backgroundColor: '#ed4168' }}>Enter</button>
                  </div>
                </div>
          )}

        <div className="border border-black mt-8 mb-8"></div>

          <h6 className="text-sm md:text-md text-left mb-2 font-bold">Select 3 adjectives you identify with for potential teammates to understand more about you.
          <span style={{ color: '#ed4168' }}>*</span></h6>
          <div className="mb-2">
          <div className="grid grid-cols-3 gap-4">
            {adjectivesList.map((adjective, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: aboutYou.adjectives.includes(adjective) ? '#F8E1E6' : 'white'
                }}
                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                onClick={() => toggleSkill(adjective, aboutYou.adjectives, setAdjectives)}>
                {adjective}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-black mt-8 mb-8"></div>

          <h6 className="text-sm md:text-md text-left mb-2 font-bold">3. Add a short description about yourself for potential teammates to get to know you. (optional)</h6>
          <p className="text-sm text-gray-500 mb-2">Your background, goals, fun facts...</p>
          <div className="mb-2">
          <textarea
            className="shadow appearance-none border-2 border-black rounded w-full py-2 px-2 md:px-3 text-gray-700 focus:outline-none mb-6"
            placeholder="Enter some details about you"
            rows="4"
            value={descriptionState}
            onChange={handleDescriptionChange}
            style={{ resize: 'none' }}/>
        </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none" style={{ backgroundColor: '#ed4168' }}
              type="button"
              onClick={navigateYourAvailability}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  };

