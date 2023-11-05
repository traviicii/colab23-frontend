import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function UserProfile() {

    const timezoneOptions = [
        'UTC-11: Samoa Standard Time', 'UTC-10 Hawaii-Aleutian Standard Time', 'UTC-9: Alaska Standard Time (AKST)', 'UTC-8: Pacific Standard Time (PST)', 'UTC-7: Mountain Standard Time (MST)', 'UTC-6: Central Standard Time (CST)', 'UTC-5: Eastern Standard Time (EST)', 'UTC-Atlantic Standard Time (AST)'
    ];
    const hoursPerWeekOptions = [
        '2-5 hours/week', '5-10 hours/week', '10-20 hours/week', '20-40 hours/week'
    ];

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

    const navigate = useNavigate();

    const user = useSelector((state) => state.user)

    const [editing, setEditing] = useState(false)

    //////////////  Beginning of editing states and functions ///////////////////////////
    const [email, setEmail] = useState(user.data.email)
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown => !passwordShown);
    };

    const [location, setLocation] = useState(user.data.location)
    const [timezone, setTimezone] = useState(user.data.timezone)
    const [prevRole, setPrevRole] = useState(user.data.prev_role)
    const [prevExp, setPrevExp] = useState(user.data.prev_exp)

    const [availability, setAvailability] = useState(user.data.availability)
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        if (checked) {
            // If the checkbox is checked, add the value to the availability array
            setAvailability(prevAvailability => [...prevAvailability, name]);
        } else {
            // If the checkbox is unchecked, filter out the value from the availability array
            setAvailability(prevAvailability => prevAvailability.filter(item => item !== name));
        }
    };

    const [hoursWk, setHoursWk] = useState(user.data.hours_wk)
    const [interests, setInterests] = useState(user.data.interests)
    const addInterest = (event) => {
        const newInterest = event.target.value;
        if (newInterest && !interests.includes(newInterest)) {
            setInterests([...interests, newInterest]);
        }
    };
    const removeInterest = (interestToRemove) => {
        setInterests(interests.filter(interest => interest !== interestToRemove));
    };

    // filter out the interests that are already selected from the fieldsOfInterest array to display in the dropdown
    const availableInterests = fieldsOfInterest.filter(interest => !interests.includes(interest));

    const [adjectives, setAdjectives] = useState(user.data.adjectives)

    const handleAddAdjective = (event) => {
        const newAdjective = event.target.value;
        if (!adjectives.includes(newAdjective) && adjectives.length < 3) {
            setAdjectives([...adjectives, newAdjective]);
        }
    };

    const handleRemoveAdjective = (adjectiveToRemove) => {
        setAdjectives(adjectives.filter(adjective => adjective !== adjectiveToRemove));
    };


    const cancelEdit = () => {
        setEditing(false)
        setEmail(user.data.email)
        setLocation(user.data.location)
        setTimezone(user.data.timezone)
        setPrevRole(user.data.prev_role)
        setPrevExp(user.data.prev_exp)
        setAvailability(user.data.availability)
        setHoursWk(user.data.hours_wk)
        setInterests(user.data.interests)
        setAdjectives(user.data.adjectives)
    }

    ////////////// End of editing states and functions ///////////////////////////

    // Toggle editing mode
    const toggleEditing = () => {
        setEditing(!editing)
    }

    const showDeveloperSkills = () => {
        return user.data.developer_skills?.map((skill) => <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
    }

    const showDesignSkills = () => {
        return user.data.design_skills?.map((skill) => <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
    }

    const showManagementSkills = () => {
        return user.data.management_skills?.map((skill) => <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
    }

    const showInterests = () => {
        return interests?.map((interest) => <button className="white-button w-auto p-2 h-10 m-1 text-base whitespace-nowrap rounded-md border-2 border-rose-300">{interest}</button>)
    }

    const showAvailability = () => {
        return availability?.map((availability) => <li>{availability}</li>)
    }

    const showAdjectives = () => {
        return adjectives?.map((adjective) => <li style={{ listStyleType: 'disc', marginLeft: '25px' }}>{adjective}</li>)
    }

    return (

        <div style={{ backgroundColor: 'white' }}>
            <div className="">

                {/* top section */}
                <div className='top w-3/4 ml-36 mb-4 space-y-6 flex items-center justify-between'>
                    {/* Back button to navigate to the project browser  and user product rols icon*/}
                    <div>
                        <button
                            className="hover:underline text-lg mr-4 w-3/4 pt-4 mb-4"
                            onClick={() => navigate("/project-browser")}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                            </svg>
                            Back
                        </button>

                        <div className='mb-2'>
                            {/* Display the user's name */}
                            <h1 className='text-3xl font-bold'>{user.data.first_name} {user.data.last_name}</h1>
                        </div>
                        <div className='flex items-center'>

                            {/* Display user role icon */}
                            <svg width="50" height="50" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="30" cy="30.2" r="29" fill="#ED4068" stroke="#ED4068" stroke-width="2" />
                                <path d="M16.6666 43.5334C15.75 43.5334 14.965 43.2067 14.3116 42.5534C13.6583 41.9 13.3322 41.1156 13.3333 40.2V20.2C13.3333 19.2834 13.66 18.4984 14.3133 17.845C14.9666 17.1917 15.7511 16.8656 16.6666 16.8667H26.6666L30 20.2H43.3333C44.25 20.2 45.035 20.5267 45.6883 21.18C46.3416 21.8334 46.6678 22.6178 46.6666 23.5334V29.0334C46.1389 28.8111 45.59 28.665 45.02 28.595C44.45 28.525 43.8878 28.5323 43.3333 28.6167V23.5334H28.625L25.2916 20.2H16.6666V40.2H30.1666L30 40.3667V43.5334H16.6666ZM33.3333 46.8667V41.7417L42.5416 32.575C42.7916 32.325 43.0694 32.1445 43.375 32.0334C43.6805 31.9223 43.9861 31.8667 44.2917 31.8667C44.625 31.8667 44.9444 31.9295 45.25 32.055C45.5555 32.1806 45.8333 32.3678 46.0833 32.6167L47.625 34.1584C47.8472 34.4084 48.0211 34.6861 48.1466 34.9917C48.2722 35.2973 48.3344 35.6028 48.3333 35.9084C48.3333 36.2139 48.2778 36.5267 48.1666 36.8467C48.0555 37.1667 47.875 37.4511 47.625 37.7L38.4583 46.8667H33.3333ZM35.8333 44.3667H37.4167L42.4583 39.2834L41.7083 38.4917L40.9166 37.7417L35.8333 42.7834V44.3667ZM41.7083 38.4917L40.9166 37.7417L42.4583 39.2834L41.7083 38.4917Z" fill="black" />
                            </svg>
                            <p className='ml-2'># of Years: {user.data.prod_exp}</p>
                        </div>
                    </div>

                    {/* edit button */}
                    <div>
                        {editing === true ?
                            <div className='space-y-2'>
                                <button onClick={() => cancelEdit()} className='hover:bg-rose-300 w-[225px] h-10 px-3.5 py-2 rounded-lg flex justify-center items-center border-2 border-gray-800 gap-2'>
                                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M35.4166 20C35.4166 24.0888 33.7923 28.0101 30.9011 30.9012C28.01 33.7924 24.0887 35.4167 19.9999 35.4167V37.9167C29.8949 37.9167 37.9166 29.895 37.9166 20H35.4166ZM19.9999 35.4167C15.9112 35.4167 11.9899 33.7924 9.09869 30.9012C6.2075 28.0101 4.58325 24.0888 4.58325 20H2.08325C2.08325 29.895 10.1049 37.9167 19.9999 37.9167V35.4167ZM4.58325 20C4.58325 15.9113 6.2075 11.99 9.09869 9.09878C11.9899 6.20759 15.9112 4.58334 19.9999 4.58334V2.08334C10.1049 2.08334 2.08325 10.105 2.08325 20H4.58325ZM25.8333 23.75C23.2916 23.75 20.854 22.7403 19.0568 20.9431C17.2596 19.1459 16.2499 16.7083 16.2499 14.1667H13.7499C13.7499 17.3714 15.023 20.4448 17.289 22.7109C19.5551 24.9769 22.6286 26.25 25.8333 26.25V23.75ZM34.0416 19.115C33.1893 20.5299 31.9855 21.7002 30.5472 22.5124C29.1089 23.3245 27.485 23.7509 25.8333 23.75V26.25C27.9157 26.2511 29.963 25.7138 31.7765 24.6903C33.5899 23.6667 35.108 22.1917 36.1833 20.4083L34.0416 19.115ZM16.2499 14.1667C16.2492 12.515 16.6756 10.8911 17.4878 9.45286C18.2999 8.01459 19.4702 6.81079 20.8849 5.95834L19.5916 3.81834C17.8084 4.89333 16.3334 6.41109 15.3099 8.22429C14.2863 10.0375 13.7489 12.0845 13.7499 14.1667H16.2499ZM19.9999 4.58334C19.8309 4.57936 19.6703 4.50866 19.5533 4.38668C19.4817 4.31707 19.4339 4.22668 19.4166 4.12834C19.4099 4.07668 19.4133 3.92668 19.5916 3.81834L20.8849 5.95834C21.7233 5.45168 21.9933 4.52334 21.8949 3.79334C21.7916 3.03501 21.1949 2.08334 19.9999 2.08334V4.58334ZM36.1833 20.4083C36.0732 20.5867 35.9233 20.59 35.8716 20.5833C35.7733 20.5661 35.6829 20.5182 35.6133 20.4467C35.4913 20.3296 35.4206 20.169 35.4166 20H37.9166C37.9166 18.805 36.9649 18.2083 36.2066 18.105C35.4766 18.0067 34.5482 18.2767 34.0416 19.115L36.1833 20.4083Z" fill="black" />
                                    </svg>

                                    <p>Cancel Changes</p>
                                </button>
                                <button onClick={() => toggleEditing()} className='hover:bg-[#D7F7F9] w-[225px] h-10 px-3.5 py-2 rounded-lg flex justify-center items-center border-2 border-gray-800 gap-2'>
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.5 4.79347L11.7062 1.99972C11.6138 1.90637 11.5038 1.83227 11.3826 1.78169C11.2614 1.73112 11.1314 1.70508 11 1.70508C10.8686 1.70508 10.7386 1.73112 10.6174 1.78169C10.4962 1.83227 10.3862 1.90637 10.2937 1.99972L2.79375 9.49972C2.70056 9.5922 2.62662 9.70223 2.5762 9.82345C2.52578 9.94467 2.49988 10.0747 2.5 10.206V12.9997C2.5 13.2649 2.60536 13.5193 2.79289 13.7068C2.98043 13.8944 3.23478 13.9997 3.5 13.9997H6.29375C6.42504 13.9998 6.55505 13.9739 6.67627 13.9235C6.79749 13.8731 6.90752 13.7992 7 13.706L14.5 6.20597C14.6855 6.01771 14.7895 5.76402 14.7895 5.49972C14.7895 5.23542 14.6855 4.98173 14.5 4.79347ZM6.29375 12.9997H3.5V10.206L9 4.70597L11.7937 7.49972L6.29375 12.9997ZM12.5 6.79347L9.70625 3.99972L11 2.70597L13.7937 5.49972L12.5 6.79347Z" fill="#ED4068" />
                                    </svg>
                                    <p>Save</p>
                                </button>
                            </div>
                            :
                            <button onClick={() => toggleEditing()} className='w-[225px] h-10 px-3.5 py-2 rounded-lg flex justify-center items-center border-2 border-gray-800 gap-2'>
                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5 4.79347L11.7062 1.99972C11.6138 1.90637 11.5038 1.83227 11.3826 1.78169C11.2614 1.73112 11.1314 1.70508 11 1.70508C10.8686 1.70508 10.7386 1.73112 10.6174 1.78169C10.4962 1.83227 10.3862 1.90637 10.2937 1.99972L2.79375 9.49972C2.70056 9.5922 2.62662 9.70223 2.5762 9.82345C2.52578 9.94467 2.49988 10.0747 2.5 10.206V12.9997C2.5 13.2649 2.60536 13.5193 2.79289 13.7068C2.98043 13.8944 3.23478 13.9997 3.5 13.9997H6.29375C6.42504 13.9998 6.55505 13.9739 6.67627 13.9235C6.79749 13.8731 6.90752 13.7992 7 13.706L14.5 6.20597C14.6855 6.01771 14.7895 5.76402 14.7895 5.49972C14.7895 5.23542 14.6855 4.98173 14.5 4.79347ZM6.29375 12.9997H3.5V10.206L9 4.70597L11.7937 7.49972L6.29375 12.9997ZM12.5 6.79347L9.70625 3.99972L11 2.70597L13.7937 5.49972L12.5 6.79347Z" fill="#ED4068" />
                                </svg>
                                <p>Edit Details</p>
                            </button>
                        }
                    </div>
                </div>

                {/* middle and bottom section */}
                <div className='middle-bottom-wrapper flex flex-col justify-center items-center w-full mx-auto' style={{ backgroundColor: '#fae8c2' }}>

                    {/* Middle section */}
                    <div className='middle flex w-10/12' >
                        <div className='image w-1/3 flex items-center'>
                            {/* Display a circular image */}
                            <div className='ml-4'
                                style={{
                                    width: '338px',
                                    height: '338px',
                                    borderRadius: '50%',
                                    background: 'radial-gradient(circle, lightcoral, lightpink)',
                                }}
                            ></div>
                        </div>

                        {/* Location, former experienc, available */}
                        <div className='w-1/3 pt-12 pl-12 pr-12 pb-12'>
                            <div>
                                {/* Display the location/timezone */}
                                <p className='mt-6 font-bold'>Location/Timezone:</p>
                                <ul className='space-y-1' style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                                    <li>{editing === true ? <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder='City, State' type="text" className='focus:shadow-md rounded-lg border border-black p-1' /> : ` ${location}`}</li>
                                    <li>{editing === true ?
                                        <select
                                            className='rounded-lg border border-black p-1'
                                            value={timezone}
                                            onChange={(e) => setTimezone(e.target.value)}>
                                            <option value="" disabled>Select your timezone</option>
                                            {timezoneOptions.map((option, index) => (
                                                <option key={index} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                        : user.data.timezone}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                {/* Display former experience */}
                                <p className='mt-6 font-bold'>Former Experience:</p>
                                {editing === true ?
                                    <div className='space-y-1'>
                                        <div className='flex items-center'>
                                            <p className='flex mr-2 whitespace-nowrap'>Previous Role: </p>
                                            <input value={prevRole} onChange={(e) => setPrevRole(e.target.value)} type="text" className='focus:shadow-md rounded-lg border border-black p-1' />
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='flex mr-2 whitespace-nowrap'>Previous Experience: </p>
                                            <select
                                                className='rounded-lg border border-black p-1'
                                                value={prevExp}
                                                onChange={(e) => setPrevExp(e.target.value)}>
                                                <option value="0-2 years">0-2 years</option>
                                                <option value="2-5 years">2-5 years</option>
                                                <option value="5-10 years">5-10 years</option>
                                                <option value="10+ years">10+ years</option>
                                            </select>
                                        </div>
                                    </div>
                                    :
                                    <ul style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                                        <li>{prevRole}, {prevExp}</li>
                                    </ul>
                                }

                            </div>
                            <div>
                                {/* Display availability information */}
                                <p className='mt-6 font-bold'>Available:</p>
                                <ul style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                                    {editing ?
                                        <div className="">
                                            <label className="block">
                                                <input type="checkbox" name="Early Morning" checked={availability.includes('Early Morning')} onChange={handleCheckboxChange} className="mr-2" />
                                                Early Morning, 6am-9am
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" name="Late Mornings" checked={availability.includes('Late Mornings')} onChange={handleCheckboxChange} className="mr-2" />
                                                Late Mornings, 9am-12pm
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" name="Early Afternoons" checked={availability.includes('Early Afternoons')} onChange={handleCheckboxChange} className="mr-2" />
                                                Early Afternoons, 12pm-3pm
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" name="Late Afternoons" checked={availability.includes('Late Afternoons')} onChange={handleCheckboxChange} className="mr-2" />
                                                Late Afternoons, 3pm-6pm
                                            </label>
                                            <label className="block">
                                                <input type="checkbox" name="Evenings" checked={availability.includes('Evenings')} onChange={handleCheckboxChange} className="mr-2" />
                                                Evenings, 6pm-9pm
                                            </label>
                                            <label className="block mb-3">
                                                <input type="checkbox" name="Nights" checked={availability.includes('Nights')} onChange={handleCheckboxChange} className="mr-2" />
                                                Nights, 9pm-12am
                                            </label>
                                        </div>
                                        :
                                        showAvailability()
                                    }
                                    {editing ?
                                        <div className="flex">
                                            <p className='whitespace-nowrap mr-2'>Hours per week:</p>
                                            <select
                                                className="rounded-lg border border-black p-1"
                                                value={hoursWk}
                                                onChange={(e) => setHoursWk(e.target.value)}
                                            >
                                                <option value="" disabled>Select hours per week</option>
                                                {hoursPerWeekOptions.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        :
                                        <li>{hoursWk}</li>
                                    }
                                </ul>
                            </div>
                        </div>

                        {/* personal details and interested in */}
                        <div className='flex justify-center w-1/4 pt-12 px-6'>
                            <div className='w-full mt-6'>

                                <div className='space-y-1'>
                                    <p className='font-bold'>Personal Details:</p>
                                    <div className='flex items-center'>
                                        <p className='flex mr-2'>Email: </p>
                                        {editing === true ? <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className='focus:shadow-md rounded-lg border border-black p-1' /> : ` ${email}`}
                                    </div>
                                    <div className='flex items-center'>
                                        <p className='flex mr-2'>Password: </p>
                                        {editing === true ?
                                            <div style={{ position: 'relative' }}>
                                                <input type={passwordShown ? "text" : "password"} placeholder='Change password?' value={password} onChange={(e) => setPassword(e.target.value)} className='focus:shadow-md rounded-lg border border-black py-1 px-2' />
                                                <i
                                                    onClick={togglePasswordVisiblity}
                                                    style={{
                                                        position: 'absolute',
                                                        right: '10px',
                                                        top: '50%',
                                                        transform: 'translateY(-50%)',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {passwordShown ? <FaEye /> : <FaEyeSlash />}
                                                </i>
                                            </div>
                                            :
                                            <p>**********</p>}
                                    </div>
                                </div>

                                <div className='mt-8'>
                                    <p className='font-bold'>Interested in:</p>
                                    <div className="interest-buttons flex flex-wrap mt-4 mb-4 w-full">
                                        {/* Display buttons for interests */}
                                        {editing ? (
                                            // Dropwdown for editing
                                            <>
                                                <select onChange={addInterest} value="" className="mb-2 rounded-lg border border-black p-1">
                                                    <option value="" disabled>Add interest</option>
                                                    {availableInterests.map(interest => (
                                                        <option key={interest} value={interest}>{interest}</option>
                                                    ))}
                                                </select>

                                                <div className="flex flex-wrap  mb-4 w-full">
                                                    {interests.map(interest => (
                                                        <button
                                                            key={interest}
                                                            className="flex items-center w-auto p-2 h-10 m-1 text-base whitespace-nowrap rounded-md border-2 border-rose-300"
                                                            onClick={() => removeInterest(interest)}
                                                        >
                                                            <p>{interest}</p>
                                                            <div className='ml-1'>
                                                                <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M28.75 28.75L11.25 11.25M28.75 11.25L11.25 28.75" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </div>
                                                        </button>
                                                    ))}
                                                </div>
                                            </>
                                        ) :
                                            // Normally display interests when not editing
                                            <div className="flex flex-wrap  mb-4 w-full">
                                                {interests.map(interest => (
                                                    <div
                                                        key={interest}
                                                        className="flex items-center w-auto p-2 h-10 m-1 text-base whitespace-nowrap rounded-md border-2 border-rose-300"

                                                    >
                                                        {interest}
                                                    </div>
                                                ))}
                                            </div>
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section - About, working on, skills */}
                    <div className="bottom bg-white flex justify-center w-full py-8 ">
                        <div className="w-10/12 flex mb-20 mt-10" style={{ minHeight: '250px' }}>

                            {/* Adjectives + About */}
                            <div className="py-12 px-6 w-96 rounded-l-2xl" style={{ backgroundColor: '#fae8c2' }}>
                                <h2 className="text-2xl font-semibold mb-1">About Me:</h2>

                                {/* Adjectives */}
                                {editing ? <p><b>Adjectives</b> (3 max):</p> : ''}
                                {editing && adjectives.length < 3 && (
                                    <select onChange={handleAddAdjective} value="" className="mb-2 rounded-lg border border-black p-1">
                                        <option value="" disabled>Add Adjective</option>
                                        {adjectivesList.filter(a => !adjectives.includes(a)).map(a => (
                                            <option key={a} value={a}>{a}</option>
                                        ))}
                                    </select>
                                )}
                                <ol>
                                    {adjectives?.map((adjective) => (
                                        <li key={adjective} style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                                            {adjective}
                                            {editing && (
                                                <button onClick={() => handleRemoveAdjective(adjective)} className="ml-2 text-red-500">X</button>
                                            )}
                                        </li>
                                    ))}
                                </ol>

                                {/* About */}
                                <p className='mt-8'>{user.data.about}</p>
                            </div>

                            {/* Currently working on */}
                            <div className="py-12 px-6 w-96" style={{ backgroundColor: '#f3d187' }}>
                                <h2 className="text-2xl font-semibold mb-4">Currently Working On:</h2>
                                {user.data.current_project_id ? <p><Link to={`/project-profile/${user.data.current_project_id}`} className='mt-4 font-bold underline'>{user.project ? user.project.name : ''}</Link> <br></br> - Project Admin: {user.project ? user.project.admin_name : ''}</p> : `You're not involved in a project currently!`}
                                <p className='mt-4 font-bold'>About the project:</p>
                                <p>{user.project.description}</p>
                            </div>

                            {/* Skills */}
                            <div className="w-1/2 py-12 px-6 rounded-r-2xl " style={{ backgroundColor: '#ebb237' }}>
                                <ol>
                                    <div>
                                        <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
                                        <div className="interest-buttons">
                                            {showDeveloperSkills()}
                                            {showDesignSkills()}
                                            {showManagementSkills()}
                                        </div>
                                    </div>

                                    <h2 className="text-2xl font-semibold mt-4">Want to Learn:</h2>
                                    <div className="mt-4">
                                        <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">Fintech</button>
                                        <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">Education</button>
                                        <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">Non-Profit</button>
                                    </div>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
