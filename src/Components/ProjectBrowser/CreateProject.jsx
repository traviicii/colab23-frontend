import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToast, setUserData, setUserProject } from '../../Actions'

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL


export default function CreateProject({ chosenProject, closeModal }) {

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

    const [areYouSure, setAreYouSure] = useState(false)

    const [managersNeeded, setManagersNeeded] = useState(0)
    const [designersNeeded, setDesignersNeeded] = useState(0)
    const [developersNeeded, setDevelopersNeeded] = useState(0)

    const remainingManagerOptions = () => {
        const remaining = 4 - designersNeeded - developersNeeded
        let options = []
        for (let i = 0; i <= remaining; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

    const remainingDesignerOptions = () => {
        const remaining = 4 - managersNeeded - developersNeeded
        let options = []
        for (let i = 0; i <= remaining; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

    const remainingDevOptions = () => {
        const remaining = 4 - managersNeeded - designersNeeded
        let options = []
        for (let i = 0; i <= remaining; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options
    }

    // const [teamMembers, setTeamMembers] = useState({
    //     productManager: false,
    //     productDesigner: false,
    //     developer1: false,
    //     developer2: false,
    // });

    // const handleTeamMemberChange = (e) => {
    //     const { name, checked } = e.target;
    //     setTeamMembers({ ...teamMembers, [name]: checked });
    // };

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
        if (projectTitle == '') {
            return
        }
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
                managersNeeded: managersNeeded,
                designersNeeded: designersNeeded,
                developersNeeded: developersNeeded
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


            <form onSubmit={(e) => {
                e.preventDefault()
                setAreYouSure(true)
            }}>
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
                        <p className="flex text-gray-700 font-bold mt-10">
                            What would you like to call this project?
                            <p className='text-[#ED4068] ml-1'>*</p>
                        </p>
                        <p className="text-gray-500">
                            Try to describe your project idea in the title - don't worry, you can change this later.
                        </p>
                    </div>
                    <div className="mb-4">
                        <input
                            required="required"
                            type="text"
                            placeholder="Project Title"
                            value={projectTitle}
                            onChange={handleProjectTitleChange}
                            className="w-full border-2 border-black rounded p-2 focus:ring focus:ring-blue-300"
                        />
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    <p className="flex text-gray-700 font-bold">
                        How would you describe the project?
                        <p className='text-[#ED4068] ml-1'>*</p>
                    </p>
                    <p className="text-gray-500">
                        What is the problem you are trying to solve? What are some of your goals for this project?
                    </p>
                    <textarea
                        required="required"
                        placeholder="Project Description"
                        value={projectDescription}
                        onChange={handleProjectDescriptionChange}
                        className="w-full border-2 border-black rounded p-2 h-28 focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="p-6 space-y-2">
                    <p className="flex text-gray-700 font-bold">
                        About how long will this project take?
                        <p className='text-[#ED4068] ml-1'>*</p>
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
                    <div className="text-gray-700 font-bold">
                        <p>Which team members will be required on the team (including yourself)?</p>
                        <div className='flex'>
                            <p>Teams can consist of a maximum of 4 people.</p>
                            <p className='text-[#ED4068] ml-1'>*</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className='flex space-x-6'>
                            <p className='w-1/4'>Product Managers</p>
                            <select value={managersNeeded} onChange={(e) => setManagersNeeded(Number(e.target.value))} className='w-10 h-8 p-1 rounded-lg border border-black'>
                                {remainingManagerOptions()}
                            </select>
                        </div>
                        <div className='flex space-x-6'>
                            <p className='w-1/4'>Designers</p>
                            <select value={designersNeeded} onChange={(e) => setDesignersNeeded(Number(e.target.value))} className='w-10 h-8 p-1 rounded-lg border border-black'>
                                {remainingDesignerOptions()}
                            </select>
                        </div>
                        <div className='flex space-x-6'>
                            <p className='w-1/4'>Developers</p>
                            <select value={developersNeeded} onChange={(e) => setDevelopersNeeded(Number(e.target.value))} className='w-10 h-8 p-1 rounded-lg border border-black'>
                                {remainingDevOptions()}
                            </select>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="flex text-gray-700 font-bold mt-10">
                            What industires apply to this project?
                            <p className='text-[#ED4068] ml-1'>*</p>
                        </p>
                        <p className="text-gray-500">
                            Select all that apply.
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
                            What other details would you like to share with your potential teammates?
                        </p>
                        <p className="text-gray-500">
                            Share any other important details or requirements.
                        </p>
                        <textarea
                            placeholder="Anything else?"
                            value={additionalInfo}
                            onChange={handleAdditionalInfoChange}
                            className="w-full border-2 border-black rounded p-2 h-28 focus:ring focus:ring-blue-300"
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center p-6 space-x-2 border-t border-gray-200 rounded-b">
                    {areYouSure ?

                        <div className='flex justify-center items-center shadow-2xl rounded-xl shadow-rose-400 w-[450px] h-[172px] px-4 py-8'>
                            <div className='mr-2'>
                                <svg width="30" height="30" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.8849 30.2696C21.412 30.6014 20.7992 30.8334 20.0002 30.8334C19.1902 30.8334 18.5721 30.5995 18.0976 30.2665C18.6384 30.3599 19.2683 30.4167 20.0002 30.4167C20.724 30.4167 21.3481 30.3612 21.8849 30.2696ZM13.3929 24.8655C12.3486 24.4577 11.2962 23.6047 10.5234 22.3749C9.75942 21.1458 9.45515 19.8272 9.54734 18.7103C9.63959 17.5926 10.1164 16.7356 10.8575 16.274C11.5996 15.8117 12.5794 15.7601 13.6216 16.1678C14.6636 16.5754 15.7116 17.4279 16.4759 18.6568C17.242 19.8887 17.5497 21.2007 17.4611 22.3131C17.3728 23.4218 16.9019 24.2826 16.1554 24.7619C15.4139 25.2218 14.4357 25.2727 13.3929 24.8655ZM29.1429 16.274C29.8839 16.7356 30.3607 17.5926 30.453 18.7103C30.5452 19.8272 30.2409 21.1459 29.4768 22.3751C28.704 23.6048 27.6517 24.4577 26.6075 24.8655C25.5646 25.2727 24.5865 25.2218 23.8449 24.762C23.0984 24.2826 22.6275 23.4218 22.5392 22.3131C22.4506 21.2007 22.7583 19.8887 23.5245 18.6568C24.2888 17.4279 25.3367 16.5754 26.3787 16.1678C27.4209 15.7601 28.4007 15.8117 29.1429 16.274ZM20.0002 34.1667C21.2807 34.1667 22.7993 33.5286 24.2831 32.6009C25.7959 31.6551 27.3854 30.3366 28.8321 28.8213C30.2789 27.3059 31.6027 25.573 32.5689 23.7879C33.531 22.0106 34.1668 20.1295 34.1668 18.3334C34.1668 11.3387 27.7023 5.83337 20.0002 5.83337C12.298 5.83337 5.8335 11.3387 5.8335 18.3334C5.8335 20.1295 6.46928 22.0106 7.43138 23.7879C8.39767 25.573 9.72141 27.3059 11.1683 28.8213C12.6149 30.3366 14.2044 31.6551 15.7172 32.6009C17.201 33.5286 18.7196 34.1667 20.0002 34.1667ZM20.0002 4.16671C28.792 4.16671 35.8335 10.6079 35.8335 18.3334C35.8335 19.8578 35.2971 21.7231 34.3271 23.6995C33.3626 25.6647 31.9968 27.6836 30.4063 29.5013C28.8151 31.3198 27.0174 32.916 25.2002 34.0517C23.3742 35.1929 21.5871 35.8334 20.0002 35.8334C18.4133 35.8334 16.6261 35.1929 14.8002 34.0517C12.983 32.916 11.1852 31.3198 9.59398 29.5013C8.00354 27.6836 6.63777 25.6647 5.67325 23.6995C4.70323 21.7231 4.16683 19.8578 4.16683 18.3334C4.16683 10.6079 11.2083 4.16671 20.0002 4.16671Z" fill="#ED4068" stroke="#ED4068" stroke-width="1.66667" />
                                </svg>
                            </div>
                            <div className=''>
                                <p><b>Are you sure?</b> Review your details above, and when you’re ready to post your project on the Explore page, click the button to launch.</p>
                                <button onClick={() => createNewProject()} className='mt-2 w-full text-white focus:ring-4 focus:outline-none bg-[#ed4168]  font-medium rounded-lg text-sm px-5 py-2.5 text-center'>Launch it!</button>

                            </div>
                        </div>

                        :

                        <button
                            type="submit"
                            className="w-full text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            style={{ backgroundColor: '#ed4168' }}
                        // onClick={() => setAreYouSure(true)}
                        >
                            Submit!
                        </button>
                    }
                </div>
            </form>
        </div >
    )
}
