import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import JoinedProjectModal from './JoinedProjectModal'; // Import the modal component
import { useDispatch, useSelector } from 'react-redux';
import { addTask, addToast, setUserData, setUserProject } from '../../Actions';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function ProjectProfile() {

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const { project_id } = useParams()

    const [project, setProject] = useState({})
    const [admin, setAdmin] = useState({})
    const [members, setMembers] = useState([])


    // Function to toggle the task menu
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    // Reference to the kebab menu for click outside detection
    const menuRef = useRef(null);
    useEffect(() => {
        // Function to close the menu when clicking outside
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('click', handleClickOutside);

        // Cleanup: remove the event listener when finished
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [isMenuOpen, setMenuOpen] = useState(false);

    // Toggle are you sure box
    const [areYouSure, setAreYouSure] = useState(false)
    const [areYouSure2, setAreYouSure2] = useState(false)


    useEffect(() => { getProject() }, [])

    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    // Function to open the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to close the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };


    const getProject = async () => {

        const token = user.data.apitoken
        const url = BACK_END_URL + `/api/getproject/${project_id}`
        const options = {
            method: "GET",
            headers: {
                // Authorization: `Bearer ${token}`
            }
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === 'ok') {
                console.log(data)
                //local state, not redux
                setProject(data.project)
                setAdmin(data.admin)
                setMembers(data.members)
            }
        }
        catch {
            console.log("Couldn't get project data.")
        }
    }


    const addUserToProject = async () => {

        const token = user.data.apitoken
        const url = BACK_END_URL + `/api/addprojectuser`
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                user_id: user.data.id,
                project_id: project_id
            })
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === 'ok') {
                console.log(data)
                dispatch(setUserProject(data.project))
                dispatch(setUserData(data.user))
                openModal()
            }
            else {
                console.log(data)
                setAreYouSure(false)
                dispatch(addToast(data.message, "error"))
            }
        }
        catch {
            console.log("Couldn't add you to the project. Log in and try again?")
            dispatch(addToast("Couldn't add you to the project. Log in and try again?", "error"))
        }
    }

    const deleteProject = async () => {

        const token = user.data.apitoken
        const url = BACK_END_URL + `/api/deleteproject/${user.data.id}/${project_id}`
        const options = {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        try {
            const res = await fetch(url, options);
            const data = await res.json();
            if (data.status === 'ok') {
                console.log(data)
                dispatch(addToast(data.message, "success"))
                navigate('/dashboard-unpopulated')
            }
            else{
                dispatch(addToast(data.message, "error"))
            }
        }
        catch {
            console.log("Couldn't delete project.")
            dispatch(addToast("Hmm something isn't right... Your project couldn't be deleted.", "error"))
        }
    }

    // This is a utility function that calculates the difference in days
    const calculateDaysPassed = (dateString) => {
        const now = new Date(); // current date and time
        const receivedDate = new Date(dateString); // convert your datetime string to a date object

        const differenceInTime = now.getTime() - receivedDate.getTime(); // difference in milliseconds
        const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // convert milliseconds to days

        return differenceInDays;
    };

    const showIndustries = () => {
        return project.industries?.map((industry) => <button className="flex items-center w-auto p-2 h-10 m-1 text-base whitespace-nowrap rounded-md border-2 border-rose-300">{industry}</button>)
    }

    const showMembers = () => {
        return members.map((member, index) => (
            <div key={index} className="flex justify-center items-center flex-col">
                {/* Choose the icon based on the prod_role */}
                {member.prod_role === 'Developer' && <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#135279" />
                    <path d="M13.3333 21.6667V15H46.6666V21.6667H43.3333V18.3333H16.6666V21.6667H13.3333ZM23.3333 45V41.6667H13.3333V35H16.6666V38.3333H43.3333V35H46.6666V41.6667H36.6666V45H23.3333ZM17.9999 28.3333L22.3333 24L19.9999 21.6667L13.3333 28.3333L19.9999 35L22.3333 32.6667L17.9999 28.3333ZM41.9999 28.3333L37.6666 32.6667L39.9999 35L46.6666 28.3333L39.9999 21.6667L37.6666 24L41.9999 28.3333Z" fill="#D7F7F9" />
                </svg>

                }
                {member.prod_role === 'Product Manager' && <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#ED4068" />
                    <path d="M16.6666 43.3333C15.7499 43.3333 14.9649 43.0067 14.3116 42.3533C13.6583 41.7 13.3321 40.9155 13.3333 40V20C13.3333 19.0833 13.6599 18.2983 14.3133 17.645C14.9666 16.9917 15.751 16.6655 16.6666 16.6667H26.6666L29.9999 20H43.3333C44.2499 20 45.0349 20.3267 45.6883 20.98C46.3416 21.6333 46.6677 22.4178 46.6666 23.3333V28.8333C46.1388 28.6111 45.5899 28.465 45.0199 28.395C44.4499 28.325 43.8877 28.3322 43.3333 28.4167V23.3333H28.6249L25.2916 20H16.6666V40H30.1666L29.9999 40.1667V43.3333H16.6666ZM33.3333 46.6667V41.5417L42.5416 32.375C42.7916 32.125 43.0694 31.9444 43.3749 31.8333C43.6805 31.7222 43.986 31.6667 44.2916 31.6667C44.6249 31.6667 44.9444 31.7294 45.2499 31.855C45.5555 31.9805 45.8333 32.1678 46.0833 32.4167L47.6249 33.9583C47.8471 34.2083 48.021 34.4861 48.1466 34.7917C48.2721 35.0972 48.3344 35.4028 48.3333 35.7083C48.3333 36.0139 48.2777 36.3267 48.1666 36.6467C48.0555 36.9667 47.8749 37.2511 47.6249 37.5L38.4583 46.6667H33.3333ZM35.8333 44.1667H37.4166L42.4583 39.0833L41.7083 38.2917L40.9166 37.5417L35.8333 42.5833V44.1667ZM41.7083 38.2917L40.9166 37.5417L42.4583 39.0833L41.7083 38.2917Z" fill="#F8E1E6" />
                </svg>

                }
                {member.prod_role === 'Designer' && <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="30" cy="30" r="30" fill="#EBB237" />
                    <path d="M21.6666 36.6667C22.5833 36.6667 23.3333 37.4167 23.3333 38.3333C23.3333 40.1667 21.8333 41.6667 19.9999 41.6667C19.7166 41.6667 19.4499 41.6667 19.1666 41.5833C19.6833 40.6667 19.9999 39.5667 19.9999 38.3333C19.9999 37.4167 20.7499 36.6667 21.6666 36.6667ZM41.1166 15C40.6833 15 40.2666 15.1667 39.9333 15.4833L24.9999 30.4167L29.5833 35L44.5166 20.0667C45.1666 19.4167 45.1666 18.3333 44.5166 17.7167L42.2833 15.4833C41.9499 15.15 41.5333 15 41.1166 15ZM21.6666 33.3333C18.8999 33.3333 16.6666 35.5667 16.6666 38.3333C16.6666 40.5167 14.7333 41.6667 13.3333 41.6667C14.8666 43.7 17.4999 45 19.9999 45C23.6833 45 26.6666 42.0167 26.6666 38.3333C26.6666 35.5667 24.4333 33.3333 21.6666 33.3333Z" fill="#F9E8C3" />
                </svg>

                }

                <p className='whitespace-nowrap'>{member.first_name} {member.last_name}</p>
            </div>
        ))
    }

    const calculateRemainingRoles = (role) => {
        const totalNeeded = project[`${role}_wanted`]; // e.g., project['devs_needed']
        const filledRoles = members.filter(member => member.prod_role === role).length;
        return totalNeeded - filledRoles;
    };



    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className="">

                {/* Top Section */}
                <div className='top w-3/4 ml-36 mb-4 space-y-6 flex items-center'>
                    <div className='space-y-4'>
                        <button
                            className="hover:underline text-lg mr-4 w-3/4 pt-4"
                            onClick={() => navigate("/project-browser")}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                                <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                            </svg>
                            Back
                        </button>
                        <div className='space-y-4'>

                            <p className='text-4xl font-bold'>{project.name}</p>
                            <div>
                                <button disabled className="px-8 py-1 rounded border-2 border-rose-300">{project.complete === false ? "Open" : "Closed"}</button>
                            </div>
                            <div>
                                <p className='text-2xl'>Duration: {project.duration}</p>
                                <p className='text-2xl'>Posted: {calculateDaysPassed(project.date_created)} days ago</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className='middle-bottom-wrapper flex flex-col justify-center items-center py-4 w-full mx-auto' style={{ backgroundColor: '#f8e1e6' }}>

                    <div className='middle flex w-10/12'>

                        {/* Gradient and center middle sections */}
                        <div className='flex'>
                            {/* Div for radial color gradient */}
                            <div className="w-1/3 mr-6" style={{
                                width: '277px',
                                height: '277px',
                                background: `radial-gradient(circle at center, #13557c, #35d2e0)`
                            }}></div>

                            {/* Center of Middle */}
                            <div className='w-1/2'>

                                <p>Project Admin: <Link to={`/individualteammember/${admin.id}`}><p className='underline font-bold text-rose-500'>{admin.first_name} {admin.last_name}, {admin.prod_role}</p></Link></p>
                                <p className='mb-4'>Admin Time Zone: <span className='font-bold'>{admin.timezone}</span></p>

                                <div className='industries w-full'>
                                    <p className='mt-6 w-full'>Industries:</p>
                                    <div className="flex flex-wrap space-x-2 mt-4 mb-4">
                                        {showIndustries()}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side of Middle */}
                        <div className='flex justify-center w-1/3 ml-4'>

                            {/* Reuest to join, edit project details, are you sure popup, and project team */}
                            <div className='w-full'>

                                {/* Request to join and Are you sure popup for joining */}
                                {areYouSure === false ?
                                    // If proj_id == user's project ID then show edit details and kebab
                                    user.project.id == project_id ?
                                        <div className='flex'>
                                            {user.data.is_admin == true ?
                                                <button className='flex justify-center items-center border rounded-xl w-full py-4 mb-4 text-white bg-[#ed4168]' >Edit Details</button>
                                                :
                                                <button onClick={toggleMenu} className='flex justify-center items-center border rounded-xl w-full py-4 mb-4 text-white bg-[#ed4168]' >Project Options</button>
                                            }
                                            {/* Kebab menu */}
                                            <div className="relative mt-1" ref={menuRef}>
                                                <div
                                                    className="kebab-menu cursor-pointer hover-bg-gray-100"
                                                    onClick={toggleMenu}>
                                                    <svg
                                                        width="20px"
                                                        height="20px"
                                                        viewBox="0 0 24 24"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <title>Kebab-Menu</title>
                                                        <g id="Kebab-Menu" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect id="Container" x="0" y="0" width="24" height="24"></rect>
                                                            <path d="M12,6 C12.5522847,6 13,5.55228475 13,5 C13,4.44771525 12.5522847,4 12,4 C11.4477153,4 11,4.44771525 11,5 C11,5.55228475 11.4477153,6 12,6 Z" id="shape-03" stroke="#030819" strokeWidth="2" strokeLinecap="round" strokeDasharray="0,0"></path>
                                                            <path d="M12,13 C12.5522847,13 13,12.5522847 13,12 C13,11.4477153 12.5522847,11 12,11 C11.4477153,11 11,11.4477153 11,12 C11,12.5522847 11.4477153,13 12,13 Z" id="shape-03" stroke="#030819" strokeWidth="2" strokeLinecap="round" strokeDasharray="0,0"></path>
                                                            <path d="M12,20 C12.5522847,20 13,19.5522847 13,19 C13,18.4477153 12.5522847,18 12,18 C11.4477153,18 11,18.4477153 11,19 C11,19.5522847 11.4477153,20 12,20 Z" id="shape-03" stroke="#030819" strokeWidth="2" strokeLinecap="round" strokeDasharray="0,0"></path>
                                                        </g>
                                                    </svg>
                                                </div>
                                                {isMenuOpen && (
                                                    user.data.is_admin == true ?

                                                        <div className="menu-dropdown absolute whitespace-nowrap z-10 mt-2 right-0 w-fit bg-white border border-stone-600 rounded-lg shadow-lg">
                                                            <ul className="p-2">
                                                                <li className="flex justify-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg" onClick={toggleMenu}>
                                                                    <button >Assign New Project Admin</button>
                                                                </li>

                                                                <div className="w-[184px] h-[0px] border border-black"></div>

                                                                <li className="flex justify-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg" onClick={toggleMenu}>
                                                                    <button >Edit Project</button>
                                                                </li>

                                                                <div className="w-[184px] h-[0px] border border-black"></div>

                                                                <li className="flex justify-center cursor-pointer hover:bg-gray-100 p-2 rounded-lg" onClick={toggleMenu}>
                                                                    <button >Mark Project Complete</button>
                                                                </li>

                                                                <div className="w-[184px] h-[0px] border border-black"></div>

                                                                <li className="flex justify-center flex-col cursor-pointer hover:bg-gray-100 p-2 rounded-lg" onClick={toggleMenu}>
                                                                    <button onClick={() => deleteProject()} className='flex justify-center'>
                                                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M9.5 3V4H4.5V6H5.5V19C5.5 19.5304 5.71071 20.0391 6.08579 20.4142C6.46086 20.7893 6.96957 21 7.5 21H17.5C18.0304 21 18.5391 20.7893 18.9142 20.4142C19.2893 20.0391 19.5 19.5304 19.5 19V6H20.5V4H15.5V3H9.5ZM7.5 6H17.5V19H7.5V6ZM9.5 8V17H11.5V8H9.5ZM13.5 8V17H15.5V8H13.5Z" fill="#ED4068" />
                                                                        </svg>
                                                                        <p className='ml-1 text-rose-500'>Delete Project</p>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        :

                                                        <div className="menu-dropdown absolute z-10 mt-2 right-0 w-fit bg-white border border-gray-200 rounded shadow-lg">
                                                            <ul className="p-2">
                                                                <li className="cursor-pointer hover-bg-gray-100 p-2" onClick={toggleMenu}>
                                                                    <button >Leave Project</button>
                                                                </li>
                                                            </ul>
                                                        </div>

                                                )}
                                            </div>
                                            {/* //////// End of kebab /////////////////// */}
                                        </div>
                                        :
                                        <button className='flex justify-center items-center border rounded-xl w-full py-4 mb-4 text-white bg-[#ed4168]' onClick={() => setAreYouSure(true)}>Request to Join</button>
                                    :
                                    // If the user isn't involved with this project
                                    <div className='flex items-center shadow-2xl shadow-rose-500 border  rounded-xl w-[486px] px-4 py-4 mb-5 gap-2 bg-white'>
                                        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.99799 14.7447L8.66667 14.2477V14.7403C8.50645 14.7214 8.33588 14.6787 8.15687 14.6088C7.60345 14.3926 7.02609 13.9314 6.59666 13.2483C6.17262 12.5658 6.01165 11.8455 6.06051 11.2535C6.10943 10.6609 6.35628 10.2556 6.69062 10.0473C7.02613 9.83831 7.49924 9.79508 8.05143 10.0111C8.60345 10.227 9.17806 10.6879 9.60237 11.3701C10.0285 12.0553 10.1912 12.7723 10.1443 13.3614C10.0977 13.9465 9.85531 14.3558 9.51524 14.5753C9.36767 14.6663 9.19366 14.7254 8.99799 14.7447ZM17.3094 10.0473C17.6437 10.2556 17.8906 10.6609 17.9395 11.2536C17.9883 11.8455 17.8274 12.5658 17.4034 13.2483C16.9739 13.9314 16.3966 14.3926 15.8431 14.6088C15.2915 14.8242 14.8199 14.782 14.4848 14.5753C14.1447 14.3558 13.9023 13.9465 13.8557 13.3614C13.8088 12.7723 13.9715 12.0553 14.3976 11.3701C14.8219 10.6879 15.3965 10.227 15.9486 10.0111C16.5008 9.79508 16.9739 9.83831 17.3094 10.0473ZM12 20.8333C12.8639 20.8333 13.8409 20.4094 14.7465 19.8432C15.6812 19.2588 16.6561 18.449 17.5402 17.523C18.4246 16.5967 19.2379 15.5333 19.8344 14.4314C20.4267 13.3372 20.8333 12.1528 20.8333 11C20.8333 6.57863 16.7621 3.16667 12 3.16667C7.23787 3.16667 3.16667 6.57863 3.16667 11C3.16667 12.1528 3.57328 13.3372 4.16559 14.4314C4.76209 15.5333 5.57541 16.5967 6.45976 17.523C7.34394 18.449 8.31883 19.2588 9.25353 19.8432C10.1591 20.4094 11.1361 20.8333 12 20.8333ZM12 2.83333C17.1252 2.83333 21.1667 6.58122 21.1667 11C21.1667 11.8444 20.8669 12.9114 20.2969 14.0728C19.7324 15.223 18.93 16.4103 17.9929 17.4812C17.0549 18.5531 16.0005 19.4876 14.9433 20.1483C13.8774 20.8146 12.8669 21.1667 12 21.1667C11.1331 21.1667 10.1226 20.8146 9.05667 20.1483C7.99946 19.4876 6.94505 18.5531 6.00715 17.4812C5.07004 16.4103 4.2676 15.223 3.70309 14.0728C3.13306 12.9114 2.83333 11.8444 2.83333 11C2.83333 6.58122 6.87485 2.83333 12 2.83333Z" fill="#ED4068" stroke="#ED4068" strokeWidth="1.66667" />
                                        </svg>


                                        <div className='gap-2'>
                                            <p><b>Are you sure?</b> Click the button to embark on this mission.</p>
                                            <button onClick={() => addUserToProject()} className="w-full h-10 px-3.5 py-1 mt-2 bg-rose-500 rounded shadow border border-rose-500 justify-center items-center gap-2 inline-flex">
                                                <div className="text-white text-base font-semibold font-['Outfit']">Embark!</div>
                                            </button>
                                        </div>

                                    </div>
                                }

                                <JoinedProjectModal isOpen={isModalOpen} closeModal={closeModal} />


                                <p className='mb-4'>Project Team:</p>
                                {/* team icons. Revise this section */}
                                <div className='flex space-x-2'>

                                    {showMembers()}

                                    {/* Show members still needed */}
                                    {Array.from({ length: project.devs_needed }, (_, i) => (
                                        <div key={i} className="flex justify-center items-center flex-col">
                                            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="#626171" stroke-width="2" />
                                                <path d="M13.3333 21.6667V15H46.6666V21.6667H43.3333V18.3333H16.6666V21.6667H13.3333ZM23.3333 45V41.6667H13.3333V35H16.6666V38.3333H43.3333V35H46.6666V41.6667H36.6666V45H23.3333ZM17.9999 28.3333L22.3333 24L19.9999 21.6667L13.3333 28.3333L19.9999 35L22.3333 32.6667L17.9999 28.3333ZM41.9999 28.3333L37.6666 32.6667L39.9999 35L46.6666 28.3333L39.9999 21.6667L37.6666 24L41.9999 28.3333Z" fill="#626171" />
                                            </svg>


                                            <p>Developer</p>
                                        </div>
                                    ))}
                                    {Array.from({ length: project.pms_needed }, (_, i) => (
                                        <div key={i} className="flex justify-center items-center flex-col">
                                            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="#626171" stroke-width="2" />
                                                <path d="M16.6666 43.3334C15.7499 43.3334 14.9649 43.0068 14.3116 42.3534C13.6583 41.7001 13.3321 40.9156 13.3333 40.0001V20.0001C13.3333 19.0834 13.6599 18.2984 14.3133 17.6451C14.9666 16.9918 15.751 16.6656 16.6666 16.6668H26.6666L29.9999 20.0001H43.3333C44.2499 20.0001 45.0349 20.3268 45.6883 20.9801C46.3416 21.6334 46.6677 22.4179 46.6666 23.3334V28.8334C46.1388 28.6112 45.5899 28.4651 45.0199 28.3951C44.4499 28.3251 43.8877 28.3323 43.3333 28.4168V23.3334H28.6249L25.2916 20.0001H16.6666V40.0001H30.1666L29.9999 40.1668V43.3334H16.6666ZM33.3333 46.6667V41.5417L42.5416 32.3751C42.7916 32.1251 43.0694 31.9445 43.3749 31.8334C43.6805 31.7223 43.986 31.6668 44.2916 31.6668C44.6249 31.6668 44.9444 31.7295 45.2499 31.8551C45.5555 31.9806 45.8333 32.1679 46.0833 32.4168L47.6249 33.9584C47.8471 34.2084 48.021 34.4862 48.1466 34.7917C48.2721 35.0973 48.3344 35.4029 48.3333 35.7084C48.3333 36.014 48.2777 36.3267 48.1666 36.6468C48.0555 36.9668 47.8749 37.2512 47.6249 37.5001L38.4583 46.6667H33.3333ZM35.8333 44.1667H37.4166L42.4583 39.0834L41.7083 38.2918L40.9166 37.5417L35.8333 42.5834V44.1667ZM41.7083 38.2918L40.9166 37.5417L42.4583 39.0834L41.7083 38.2918Z" fill="#626171" />
                                            </svg>


                                            <p>Manager</p>
                                        </div>
                                    ))}
                                    {Array.from({ length: project.designers_needed }, (_, i) => (
                                        <div key={i} className="flex justify-center items-center flex-col">
                                            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="#626171" stroke-width="2" />
                                                <path d="M21.6666 36.6667C22.5833 36.6667 23.3333 37.4167 23.3333 38.3333C23.3333 40.1667 21.8333 41.6667 19.9999 41.6667C19.7166 41.6667 19.4499 41.6667 19.1666 41.5833C19.6833 40.6667 19.9999 39.5667 19.9999 38.3333C19.9999 37.4167 20.7499 36.6667 21.6666 36.6667ZM41.1166 15C40.6833 15 40.2666 15.1667 39.9333 15.4833L24.9999 30.4167L29.5833 35L44.5166 20.0667C45.1666 19.4167 45.1666 18.3333 44.5166 17.7167L42.2833 15.4833C41.9499 15.15 41.5333 15 41.1166 15ZM21.6666 33.3333C18.8999 33.3333 16.6666 35.5667 16.6666 38.3333C16.6666 40.5167 14.7333 41.6667 13.3333 41.6667C14.8666 43.7 17.4999 45 19.9999 45C23.6833 45 26.6666 42.0167 26.6666 38.3333C26.6666 35.5667 24.4333 33.3333 21.6666 33.3333Z" fill="#626171" />
                                            </svg>


                                            <p>Designer</p>
                                        </div>
                                    ))}


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom section */}
                <div className='flex flex-col justify-center items-center w-full mx-auto'>
                    <div className="bottom bg-white flex justify-center w-10/12 py-8">
                        <div className="w-full flex mt-10" style={{ minHeight: '250px' }}>
                            <div className="w-1/2 p-4 rounded-l-lg text-white pt-12" style={{ backgroundColor: '#626171' }}>
                                <p className="text-2xl font-semibold mb-4">Project Description:</p>
                                <p>{project.description}</p>
                            </div>
                            <div className="w-1/2 p-4 rounded-r-lg " style={{ backgroundColor: '#bcbbc2' }}>
                                <ol>
                                    <div className='flex flex-col justify-center h-full pt-6 '>
                                        <p className="text-2xl font-semibold mb-4">Looking For: </p>
                                        {project.looking_for}

                                    </div>
                                </ol>
                            </div>
                        </div>
                    </div>
                    {areYouSure2 ?
                        <div className='flex items-center shadow-2xl shadow-rose-500 border  rounded-xl w-[486px] px-4 py-4 mb-5 gap-2 bg-white'>
                            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.99799 14.7447L8.66667 14.2477V14.7403C8.50645 14.7214 8.33588 14.6787 8.15687 14.6088C7.60345 14.3926 7.02609 13.9314 6.59666 13.2483C6.17262 12.5658 6.01165 11.8455 6.06051 11.2535C6.10943 10.6609 6.35628 10.2556 6.69062 10.0473C7.02613 9.83831 7.49924 9.79508 8.05143 10.0111C8.60345 10.227 9.17806 10.6879 9.60237 11.3701C10.0285 12.0553 10.1912 12.7723 10.1443 13.3614C10.0977 13.9465 9.85531 14.3558 9.51524 14.5753C9.36767 14.6663 9.19366 14.7254 8.99799 14.7447ZM17.3094 10.0473C17.6437 10.2556 17.8906 10.6609 17.9395 11.2536C17.9883 11.8455 17.8274 12.5658 17.4034 13.2483C16.9739 13.9314 16.3966 14.3926 15.8431 14.6088C15.2915 14.8242 14.8199 14.782 14.4848 14.5753C14.1447 14.3558 13.9023 13.9465 13.8557 13.3614C13.8088 12.7723 13.9715 12.0553 14.3976 11.3701C14.8219 10.6879 15.3965 10.227 15.9486 10.0111C16.5008 9.79508 16.9739 9.83831 17.3094 10.0473ZM12 20.8333C12.8639 20.8333 13.8409 20.4094 14.7465 19.8432C15.6812 19.2588 16.6561 18.449 17.5402 17.523C18.4246 16.5967 19.2379 15.5333 19.8344 14.4314C20.4267 13.3372 20.8333 12.1528 20.8333 11C20.8333 6.57863 16.7621 3.16667 12 3.16667C7.23787 3.16667 3.16667 6.57863 3.16667 11C3.16667 12.1528 3.57328 13.3372 4.16559 14.4314C4.76209 15.5333 5.57541 16.5967 6.45976 17.523C7.34394 18.449 8.31883 19.2588 9.25353 19.8432C10.1591 20.4094 11.1361 20.8333 12 20.8333ZM12 2.83333C17.1252 2.83333 21.1667 6.58122 21.1667 11C21.1667 11.8444 20.8669 12.9114 20.2969 14.0728C19.7324 15.223 18.93 16.4103 17.9929 17.4812C17.0549 18.5531 16.0005 19.4876 14.9433 20.1483C13.8774 20.8146 12.8669 21.1667 12 21.1667C11.1331 21.1667 10.1226 20.8146 9.05667 20.1483C7.99946 19.4876 6.94505 18.5531 6.00715 17.4812C5.07004 16.4103 4.2676 15.223 3.70309 14.0728C3.13306 12.9114 2.83333 11.8444 2.83333 11C2.83333 6.58122 6.87485 2.83333 12 2.83333Z" fill="#ED4068" stroke="#ED4068" strokeWidth="1.66667" />
                            </svg>


                            <div className='gap-2'>
                                <p><b>Are you sure?</b> Click the button to embark on this mission.</p>
                                <button onClick={() => addUserToProject()} className="w-full h-10 px-3.5 py-1 mt-2 bg-rose-500 rounded shadow border border-rose-500 justify-center items-center gap-2 inline-flex">
                                    <div className="text-white text-base font-semibold font-['Outfit']">Embark!</div>
                                </button>
                            </div>

                        </div>
                        :
                        <button className='bg-opacity-50 px-40 py-2 mt-10 mb-20 rounded border-black border font-bold' onClick={() => setAreYouSure2(true)}>Request to Join</button>

                    }
                </div>
            </div>
        </div>
    );
}
