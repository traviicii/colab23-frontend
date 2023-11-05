import React, { useState, useEffect } from 'react';
// import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDesignSkills, setDeveloperSkills, setManagementSkills, setOtherSkills, setWantedSkills } from '../../Actions';

export default function SkillsAndTools() {
    const productDesignSkills = [
        'Qualitative Research', 'Market Research', 'Branding', 'Visual Design', 'Graphic Design',
        'Management', 'Sketching', 'Wireframing', 'Prototyping', 'Copy Writing', 'Information Arch',
        'Usability Testing', 'Figma', 'Figjam', 'Micro', 'Adobe Sketch', 'InVision', 'ProtoPie',
        'Adobe PhotoShop', 'Adobe Illustrator', 'Quantitative Research'
    ];

    const softwareDeveloperSkills = [
        'HTML / CSS', 'JavaScript', 'Python', 'Backend', 'Frontend', 'Testing / Debugging',
        'Responsive Design', 'Git / Github', 'CMS', 'React', 'Flask', 'Redux'
    ];

    const productManagementSkills = [
        'Agile', 'Roadmapping', 'Analytics', 'Sprint Planning', 'Forecasting',
        'Scrum', 'Trello', 'Asana', 'A/B Testing'
    ];

    const dispatch = useDispatch();
    const skillsTools = useSelector((state) => state.skillsTools)

    // Function to toggle skill selection
    const toggleSkill = (skill, state, stateFunc) => {
        if (state.includes(skill)) {
            dispatch(stateFunc(state.filter(selectedSkill => selectedSkill !== skill)));
        } else {
            dispatch(stateFunc([...state, skill]));
        }
        console.log(skillsTools)
    };

    // Function to add a new skill
    const [SkillTag, setSkillTag] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [tags, setTags] = useState([]);
    const [inputAdditionalValue, setInputAdditionalValue] = useState('');

  
    //Skills you're learning or would like to gain
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputAdditionalChange = (e) => {
      setInputAdditionalValue(e.target.value);
    };
  
    const handleInputAdditionalKeydown = (e) => {
      if (e.key === 'Enter' && inputAdditionalValue.trim() !== '') {
        setTags([...tags, inputAdditionalValue.trim()]);
        setInputAdditionalValue('');
        dispatch(setOtherSkills([...skillsTools.otherSkills, inputAdditionalValue.trim()]));
      }
    };
    
    const handleInputKeydown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setSkillTag([...SkillTag, inputValue.trim()]);
            setInputValue('');
            dispatch(setWantedSkills([...skillsTools.wantedSkills, inputValue.trim()]));
        }
    };
    
    const handleTagRemove = (tagToRemove) => {
        const updatedSkillTag = SkillTag.filter((tag) => tag !== tagToRemove);
        setSkillTag(updatedSkillTag);
    };
    
    const handleAdditionalTagRemove = (tagToRemove) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
    };

    const handleEnterButtonClicked = () => {
        // Handle adding the tag when the "Enter" button is clicked for other skills
        const newSkill = inputAdditionalValue.trim();
        if (newSkill) {
            setTags([...tags, newSkill])
            setInputAdditionalValue([...inputAdditionalValue, newSkill]);
            setInputAdditionalValue('');
            dispatch(setOtherSkills([...skillsTools.otherSkills, newSkill]));
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate();
    const navigateAboutYou = () => {
        navigate('/about-you');
    }

    const handleEnterButtonClick = () => {
        // Handle adding the tag when the "Enter" button is clicked for skills to gain
        const newTag = inputValue.trim();
        if (newTag) {
            setSkillTag([...SkillTag, newTag]);
            dispatch(setWantedSkills([...skillsTools.wantedSkills, newTag])); // Dispatch the action to update 'wantedSkills'
            setInputValue('');
        }
    };


    return (
        <div className="professional-background-container" style={{ backgroundColor: '#bcbbc2' }}>
            <div className="flex items-center justify-center">
                <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white">
                    <div className="mb-4 flex items-center">
                        <button className="hover:underline text-lg mr-4" onClick={() => navigate("/professional-background")} style={{ display: 'flex', alignItems: 'center' }}>
                            <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                            </svg>
                            Back
                        </button>



                        {/* progress bar */}
                        <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '50%', backgroundColor: '#ed4168' }}></div>
                        </div>
                    </div>
                    <p className="text-xl md:text-2xl text-center text-500 mb-8 mt-10">
                        Your Skills and Tools
                    </p>

                    <p className="text-md md:text-lg text-center font-semibold">
                        Tell us about your current skillset and toolkit
                    </p>

                    <h4 className='text-md md:text-lg text-center mb-12'>All info will be displayed on your personal profile</h4>

                    <h6 className="text-md md:text-lg text-left mb-10 font-semibold">
                        What are some skills you possess? Select as many as you like, from any category
                    </h6>

                    <p className="text-md text-left font-semibold mb-6">
                        Product Design
                    </p>

                    {/* Grid of Product Design Skills */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        {productDesignSkills.map((skill, index) => (
                            <div key={index}
                                style={{ backgroundColor: skillsTools.designSkills.includes(skill) ? '#ecafbd' : 'white' }}
                                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                                onClick={() => toggleSkill(skill, skillsTools.designSkills, setDesignSkills)}>
                                {skill}
                            </div>
                        ))}
                    </div>

                    <div className="border-t-2 border-black my-10 mb-10"></div>

                    <p className="text-md text-left font-semibold mb-6">
                        Software Developer
                    </p>

                    {/* Grid of Software Developer Skills */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        {softwareDeveloperSkills.map((skill, index) => (
                            <div key={index}
                                style={{ backgroundColor: skillsTools.developerSkills.includes(skill) ? '#ecafbd' : 'white' }}
                                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                                onClick={() => toggleSkill(skill, skillsTools.developerSkills, setDeveloperSkills)}>
                                {skill}
                            </div>
                        ))}
                    </div>


                    <div className="border-t-2 border-black my-10 mb-10"></div>

                    <p className="text-md text-left font-semibold mb-6">
                        Product Management
                    </p>

                    {/* Grid of Product Management Skills */}
                    <div className="grid grid-cols-3 gap-4 items-center">
                        {productManagementSkills.map((skill, index) => (
                            <div key={index}
                                style={{ backgroundColor: skillsTools.managementSkills.includes(skill) ? '#ecafbd' : 'white' }}
                                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                                onClick={() => toggleSkill(skill, skillsTools.managementSkills, setManagementSkills)}>
                                {skill}
                            </div>
                        ))}
                    </div>


                    <div className="border-t-2 border-black my-10 mb-10"></div>

                    {/* New input box for additional skills */}
                    <div>
                    <h6 className="text-md md:text-lg text-left mt-4">Enter any skills you would like to mention.</h6>
                    <div className="tag-list inline-block mb-1">
                        {tags.map((tag, index) => (
                        <div key={index} className="tag inline-block bg-blue-500 px-2 py-1 m-1 rounded-full text-sm" style={{ backgroundColor: '#ecafbd' }}>
                            {tag}
                            <button className='ml-2' onClick={() => handleAdditionalTagRemove(tag)}>X</button>
                        </div>
                        ))}
                    </div>
                    <div className="input-container flex items-center mb-6">
                        <input
                        className="shadow appearance-none border-2 border-black rounded py-2 px-2 md:px-3 text-gray-700 focus:outline-none flex-grow"
                        type="text" value={inputAdditionalValue} onChange={handleInputAdditionalChange}
                        onKeyDown={handleInputAdditionalKeydown}
                        placeholder="Other Skills"
                        />
                        <button onClick={handleEnterButtonClicked} className="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 ml-2" style={{ backgroundColor: '#ed4168' }}>
                        Enter
                        </button>
                    </div>
                    </div>

                
                    <div className="border-t-2 border-black mt-4 mb-4"></div>

                    {/* New skill input and tag display */}
                    <div>
                    <h6 className="text-md md:text-lg text-left mt-4">
                        Enter any skills you would like to gain.
                    </h6>
                    <div className="tag-list inline-block">
                    {SkillTag.map((tag, index) => (
                        <div key={index} className="tag inline-block bg-blue-500 px-2 py-1 m-1 rounded-full text-sm" style={{ backgroundColor: '#ecafbd' }}>
                            {tag}
                            <button className='ml-2' onClick={() => handleTagRemove(tag)}>X</button>
                        </div>
                        ))}
                    </div>
                    <div className="input-container flex items-center mb-6">
                    <input type="text" value={inputValue} onChange={handleInputChange}
                        onKeyDown={handleInputKeydown} placeholder="Enter a Subject" className="shadow appearance-none border-2 border-black rounded py-2 px-2 md:px-3 text-gray-700 focus:outline-none flex-grow" />
                    <button onClick={handleEnterButtonClick} className="bg-blue-500 text-white py-2 px-4 rounded border border-blue-500 ml-2" style={{ backgroundColor: '#ed4168' }}>Enter</button>
                    </div>
                    </div>


                    <div className="flex items-center justify-between mt-6">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none mt-10" style={{ backgroundColor: '#ed4168' }}
                            type="button"
                            onClick={navigateAboutYou}>
                                
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

