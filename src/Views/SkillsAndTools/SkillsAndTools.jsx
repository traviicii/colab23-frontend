import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

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

    // State to track selected skills
    const [selectedSkills, setSelectedSkills] = useState([]);

    // Function to toggle skill selection
    const toggleSkill = (skill) => {
        if (selectedSkills.includes(skill)) {
            setSelectedSkills(selectedSkills.filter(selectedSkill => selectedSkill !== skill));
        } else {
            setSelectedSkills([...selectedSkills, skill]);
        }
    };

    const navigate = useNavigate();
    const navigateAboutYou = () => {
        navigate('/about-you');
    }

    return (
        <div className="professional-background-container">
            <div className="flex items-center justify-center">
                <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10">
                    <div className="mb-4 flex items-center">
                        <a className="text-blue-500 hover:underline text-lg mr-4" href="/professional-background">
                            Back
                        </a>
                        <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
                            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
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
                            <div
                                key={index}
                                className={`rounded-lg p-2 text-center cursor-pointer border border-gray-300 ${selectedSkills.includes(skill) ? 'bg-gray-300' : 'bg-white'}`}
                                onClick={() => toggleSkill(skill)}>
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
                            <div
                                key={index}
                                className={`rounded-lg p-2 text-center cursor-pointer border border-gray-300 ${selectedSkills.includes(skill) ? 'bg-gray-300' : 'bg-white'}`}
                                onClick={() => toggleSkill(skill)}>
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
                            <div
                                key={index}
                                className={`rounded-lg p-2 text-center cursor-pointer border border-gray-300 ${selectedSkills.includes(skill) ? 'bg-gray-300' : 'bg-white'}`}
                                onClick={() => toggleSkill(skill)}>
                                {skill}
                            </div>
                        ))}
                    </div>


                    <hr className="border-t-4 border-gray-300 my-6" />


                    <h6 className="text-md md:text-lg text-left mb-4">
                        2. Are there any skills you are learning or would like to gain?
                    </h6>

                    {/* Search Bar with Icon */}
                    <div className="flex items-center">
                        <div className="relative flex-grow">
                            <input
                                type="text"
                                className="rounded-full border border-gray-300 pl-10 pr-4 py-2 w-full focus:outline-none"
                                placeholder="Search for a Subject"/>
                            <span className="absolute top-2 left-3">
                                <FiSearch size={24} className="text-gray-400" />
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-6">
                        <button
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus:outline-none"
                            type="button"
                            onClick={ navigateAboutYou }>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
