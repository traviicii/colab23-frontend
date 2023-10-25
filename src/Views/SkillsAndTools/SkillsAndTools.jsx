import React, { useState } from 'react';
// import { FiSearch, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setDesignSkills, setDeveloperSkills, setManagementSkills, setWantedSkills } from '../../Actions';

export default function SkillsAndTools() {
    const productDesignSkills = [
        'Qualitative Research', 'Market Research', 'Branding', 'Visual Design', 'Graphic Design',
        'Management', 'Sketching', 'Wireframing', 'Prototyping', 'Copy Writing', 'Information Arch',
        'Usability Testing', 'Figma', 'Figjam', 'Micro', 'Adobe Sketch', 'InVision', 'ProtoPie',
        'Adobe PhotoShop', 'Adobe Illustrator', 'Other...'
    ];

    const softwareDeveloperSkills = [
        'HTML / CSS', 'JavaScript', 'Python', 'Backend', 'Frontend', 'Testing / Debugging',
        'Responsive Design', 'Git / Github', 'CMS', 'React', 'Flask', 'Other...'
    ];

    const productManagementSkills = [
        'Agile', 'Roadmapping', 'Analytics', 'Sprint Planning', 'Forecasting',
        'Label', 'Trello', 'Asana', 'Other...'
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
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    //Skills you're learning or would like to gain
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleInputKeydown = (e) => {
        if (e.key === 'Enter' && inputValue.trim() !== '') {
            setTags([...tags, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleTagRemove = (tagToRemove) => {
        const updatedTags = tags.filter((tag) => tag !== tagToRemove);
        setTags(updatedTags);
    };

    const navigate = useNavigate();
    const navigateAboutYou = () => {
        navigate('/about-you');
    }



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

                    <h2 className="text-md md:text-lg text-center font-bold mb-12">
                        Tell us about your current skillset and toolkit
                    </h2>

                    <h6 className="text-md md:text-lg text-left mb-4">
                        1. What are some skills you possess? (Select as many as you like.)
                    </h6>

                    <h3 className="text-md text-left font-semibold mb-2">
                        Product Design
                    </h3>

                    {/* Grid of Product Design Skills */}
                    <div className="grid grid-cols-3 gap-4">
                        {productDesignSkills.map((skill, index) => (
                            <div key={index}
                                style={{ backgroundColor: skillsTools.designSkills.includes(skill) ? '#ecafbd' : 'white' }}
                                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                                onClick={() => toggleSkill(skill, skillsTools.designSkills, setDesignSkills)}>
                                {skill}
                            </div>
                        ))}
                    </div>

                    <hr className="border-t-4 border-gray-300 my-6" />

                    <h3 className="text-md text-left font-semibold mb-2">
                        Software Developer
                    </h3>

                    {/* Grid of Software Developer Skills */}
                    <div className="grid grid-cols-3 gap-4">
                        {softwareDeveloperSkills.map((skill, index) => (
                            <div key={index}
                                style={{ backgroundColor: skillsTools.developerSkills.includes(skill) ? '#ecafbd' : 'white' }}
                                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                                onClick={() => toggleSkill(skill, skillsTools.developerSkills, setDeveloperSkills)}>
                                {skill}
                            </div>
                        ))}
                    </div>


                    <hr className="border-t-4 border-gray-300 my-6" />

                    <h3 className="text-md text-left font-semibold mb-2">
                        Product Management
                    </h3>

                    {/* Grid of Product Management Skills */}
                    <div className="grid grid-cols-3 gap-4">
                        {productManagementSkills.map((skill, index) => (
                            <div key={index}
                                style={{ backgroundColor: skillsTools.managementSkills.includes(skill) ? '#ecafbd' : 'white' }}
                                className="rounded-lg p-2 text-center cursor-pointer border border-gray-300"
                                onClick={() => toggleSkill(skill, skillsTools.managementSkills, setManagementSkills)}>
                                {skill}
                            </div>
                        ))}
                    </div>


                    <hr className="border-t-4 border-gray-300 my-6" />

                    <h6 className="text-md md:text-lg text-left mb-4">
                        2. Are there any skills you are learning or would like to gain?
                    </h6>

                    {/* New skill input and tag display */}
                    <div>
                        <div className="tag-list inline-block">
                            {tags.map((tag, index) => (
                                <div key={index} className="tag inline-block bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                                    {tag}
                                    <button className='ml-2' onClick={() => handleTagRemove(tag)}>X</button>
                                </div>
                            ))}
                        </div>
                        <input type="text" value={inputValue} onChange={handleInputChange}
                            onKeyDown={handleInputKeydown} placeholder="Enter skills..." className="w-full border h-8" />
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none" style={{ backgroundColor: '#ed4168' }}
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

