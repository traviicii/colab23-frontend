import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToast, setUserData, setUserProject } from '../../Actions'

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL


export default function CreateProject( { chosenProject, closeModal }) {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const fieldsOfInterest = [
        'Fintech', 'Education', 'Non-Profit', 'SaaS', 'Healthcare',
        'Sustainability', 'Security', 'Enterprise', 'Marketplace', 'E-Commerce',
        'B2C', 'Retail', 'B2B', 'Blockchain', 'Real Estate',
        'API', 'Artificial Intel', 'Big Data', 'DevOps', 'Deep Tech',
        'Cloud Computing', 'Agriculture', 'Environmental', 'Mental Health',
        'Home Improvement', 'Community', 'Entertainment', 'Productivity', 'Art / Design', 'Science'
    ];

    const toggleField = (field) => {
        if (selectedFields.includes(field)) {
            setSelectedFields(selectedFields.filter(selectedField => selectedField !== field));
        } else if (selectedFields.length < 15) {
            setSelectedFields([...selectedFields, field]);
        }
    };

    const [selectedFields, setSelectedFields] = useState([]);
    const [teamMembers, setTeamMembers] = useState({
        productManager: false,
        productDesigner: false,
        developer1: false,
        developer2: false,
    });

    const handleTeamMemberChange = (e) => {
        const { name, checked } = e.target;
        setTeamMembers({ ...teamMembers, [name]: checked });
    };

    const [projectTitle, setProjectTitle] = useState(chosenProject ? chosenProject.title : '');
    const [projectDescription, setProjectDescription] = useState('');
    const [projectDuration, setProjectDuration] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleProjectTitleChange = (e) => {
        setProjectTitle(e.target.value);
    };

    const handleProjectDescriptionChange = (e) => {
        setProjectDescription(e.target.value);
    };

    const handleProjectDurationChange = (e) => {
        setProjectDuration(e.target.value);
    };

    const handleAdditionalInfoChange = (e) => {
        setAdditionalInfo(e.target.value);
    };


    const createNewProject = async () => {
        const token = user.data.apitoken
        const url = BACK_END_URL + '/api/createproject'
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                admin_id: user.data.id,
                project_name: projectTitle,
                description: projectDescription,
                duration: projectDuration,
                industries: selectedFields,
                looking_for: additionalInfo,
                team_needed: teamMembers
            })
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === "ok") {
                console.log(data)
                //navigate to populated dashboard
                dispatch(setUserProject(data.project))
                dispatch(setUserData(data.user))
                navigate('/dashboard')
            }
            else {
                console.log(data)
                dispatch(addToast(data.message, 'error'))
                closeModal()
            }
        }
        catch {
            console.log("Possible error with fetch request. Project not created.")
        }
    }

    return (
        <div>


            <div className="p-6 space-y-1">
                <div className="mb-4 flex">
                    <div className="flex flex-col">
                        <p className="text-gray-700 font-semibold">
                            Let's get some info about your project idea!
                        </p>
                        <p className="text-gray-700">
                            *required fields
                        </p>
                    </div>
                </div>

                <div className="mb-1">
                    <p className="text-gray-700 font-bold mt-10">
                        What would you like to call this project?
                    </p>
                    <p className="text-gray-500">
                        Try to describe your project idea in the title - don't worry, you can change this later.
                    </p>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Project Title"
                        value={projectTitle}
                        onChange={handleProjectTitleChange}
                        className="w-full border-2 border-black rounded p-2 focus:ring focus:ring-blue-300"
                    />
                </div>
            </div>

            <div className="p-6 space-y-4">
                <p className="text-gray-700 font-bold">
                    How would you describe the project?
                </p>
                <p className="text-gray-500">
                    What is the problem you are trying to solve? What are some of your goals for this project?
                </p>
                <textarea
                    placeholder="Project Description"
                    value={projectDescription}
                    onChange={handleProjectDescriptionChange}
                    className="w-full border-2 border-black rounded p-2 h-28 focus:ring focus:ring-blue-300"
                />
            </div>

            <div className="p-6 space-y-2">
                <p className="text-gray-700 font-bold">
                    About how long will this project take?
                </p>
                <select
                    value={projectDuration}
                    onChange={handleProjectDurationChange}
                    className="w-full border-2 border-black rounded p-2 focus:ring focus:ring-blue-300"
                >
                    <option value="">Select the Duration</option>
                    <option value="short-term">Short Term (1-4 weeks)</option>
                    <option value="medium-term">Medium Term (4-10 weeks)</option>
                    <option value="long-term">Long Term (10+ weeks)</option>
                </select>
            </div>

            <div className="p-6 space-y-2">
                <p className="text-gray-700 font-bold">
                    Which team members will be required on the team (not including yourself)?
                </p>
                <div className="space-y-2">
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="productManager"
                                checked={teamMembers.productManager}
                                onChange={handleTeamMemberChange}
                                className="mr-2"
                            />
                            Product Manager
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="productDesigner"
                                checked={teamMembers.productDesigner}
                                onChange={handleTeamMemberChange}
                                className="mr-2"
                            />
                            Product Designer
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="developer1"
                                checked={teamMembers.developer1}
                                onChange={handleTeamMemberChange}
                                className="mr-2"
                            />
                            Developer 1
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="developer2"
                                checked={teamMembers.developer2}
                                onChange={handleTeamMemberChange}
                                className="mr-2"
                            />
                            Developer 2
                        </label>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-gray-700 font-bold mt-10">
                        How would you describe the project?
                    </p>
                    <p className="text-gray-500">
                        What is the problem you are trying to solve? What are some of your goals for this project?
                    </p>
                </div>
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
                <div className="space-y-1">
                    <p className="text-gray-700 font-bold mt-12">
                        Anything else you'd like to mention?
                    </p>
                    <p className="text-gray-500">
                        Are you looking for anything in particular from your team?
                    </p>
                    <textarea
                        placeholder="Anything else?"
                        value={additionalInfo}
                        onChange={handleAdditionalInfoChange}
                        className="w-full border-2 border-black rounded p-2 h-28 focus:ring focus:ring-blue-300"
                    />
                </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                <button
                    type="button"
                    className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    style={{ backgroundColor: '#ed4168' }}
                    onClick={() => createNewProject()}
                >
                    Submit!
                </button>
            </div>
        </div>
    )
}
