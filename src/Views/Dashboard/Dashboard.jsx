import React, { useEffect, useState } from 'react';
import Task from '../../Components/Dashboard/Tasks/Task';
import Team from '../../Components/Dashboard/Team';
import Resources from '../../Components/Dashboard/Resources';
import ProjectChat from '../../Components/Dashboard/ProjectChat';
import { useSelector } from 'react-redux';
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const navigate = useNavigate()

    const [activeDisplay, setActiveDisplay] = useState('task');

    const user = useSelector((state) => state.user);

    const handleLinkClick = (display) => {
        setActiveDisplay(display);
    };

    let displayComponent;

    if (activeDisplay === 'task') {
        displayComponent = <Task />;
    } else if (activeDisplay === 'team') {
        displayComponent = <Team />;
    } else if (activeDisplay === 'resources') {
        displayComponent = <Resources />;
    }

    return (
        <div className="h-screen pl-20 pr-20 pt-20 mb-60">
            <h1 className="text-5xl font-bold pb-5 text-white">Hey, {user.data.first_name}!</h1>
            <p className="text-3xl text-white">You're working on <button className='underline text-rose-300' onClick={() => navigate(`/project-profile/${user.project.id}`)}>{user.project.name}</button>!</p>
            <p className="text-3xl text-white">Let's take a look at what's going on...</p>

            {/* Added some flex styling here to adjust the responsiveness of the tabs and content underneath */}
            <div className=''>
                <div className='dashboard w-full flex flex-col items-start'>
                    <div className="flex mt-20">
                        <div className="link-container flex">

                            {/* Tasks Tab */}
                            <div className={`tab-link ml-2.5  ${activeDisplay === 'task' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('task')}>
                                <div className="flex items-center justify-center mt-1">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M36.6666 8.63337L17.65 27.6667L10.5833 20.6L12.9333 18.25L17.65 22.9667L34.3166 6.30004L36.6666 8.63337ZM20 33.3334C12.65 33.3334 6.66665 27.35 6.66665 20C6.66665 12.65 12.65 6.66671 20 6.66671C22.6166 6.66671 25.0666 7.43337 27.1333 8.75004L29.55 6.33337C26.7483 4.3804 23.4152 3.33335 20 3.33337C10.8 3.33337 3.33331 10.8 3.33331 20C3.33331 29.2 10.8 36.6667 20 36.6667C22.8833 36.6667 25.6 35.9334 27.9666 34.6334L25.4666 32.1334C23.8 32.9 21.95 33.3334 20 33.3334ZM31.6666 25H26.6666V28.3334H31.6666V33.3334H35V28.3334H40V25H35V20H31.6666V25Z" fill="black" />
                                    </svg>

                                    <p className="ml-4 text-2xl">Tasks</p>
                                </div>
                            </div>

                            {/* Team  Tab */}
                            <div className={`tab-link ${activeDisplay === 'team' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('team')}>
                                <div className="flex items-center justify-center mt-1">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Alien">
                                            <path id="Vector" d="M17.1833 18.2167C18.8833 20.95 18.6333 24.1667 16.6 25.4667C14.5667 26.7334 11.5333 25.55 9.81668 22.8167C8.11668 20.0834 8.38334 16.8334 10.4167 15.5667C12.45 14.3 15.4833 15.4834 17.1833 18.2167ZM20 29.5834C23.3333 29.5834 24.1667 28.3334 24.1667 28.3334C24.1667 28.3334 23.3333 31.6667 20 31.6667C16.6667 31.6667 15.8333 28.3834 15.8333 28.3334C15.8333 28.3334 16.6667 29.5834 20 29.5834ZM29.5833 15.5667C31.6167 16.8334 31.8833 20.0834 30.1833 22.8167C28.4667 25.55 25.4333 26.7334 23.4 25.4667C21.3667 24.1667 21.1167 20.95 22.8167 18.2167C24.5167 15.4834 27.55 14.3 29.5833 15.5667ZM20 33.3334C24.1667 33.3334 33.3333 24.7667 33.3333 18.3334C33.3333 11.9 27.35 6.66671 20 6.66671C12.65 6.66671 6.66668 11.9 6.66668 18.3334C6.66668 24.7667 15.8333 33.3334 20 33.3334ZM20 3.33337C29.1667 3.33337 36.6667 10.0667 36.6667 18.3334C36.6667 25.1334 27.2 36.6667 20 36.6667C12.8 36.6667 3.33334 25.1334 3.33334 18.3334C3.33334 10.0667 10.8333 3.33337 20 3.33337Z" fill="black" />
                                        </g>
                                    </svg>
                                    <p className="ml-4 text-2xl">Your Team</p>
                                </div>
                            </div>

                            {/* Resources Tab */}
                            <div className={`tab-link ${activeDisplay === 'resources' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('resources')}>
                                <div className="flex items-center justify-center mt-1">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Resource">
                                            <path id="Vector" d="M37.4222 17.1111H35.2556C35.3712 17.6984 35.4528 18.292 35.5 18.8888H19.4333L9.22222 31.1888C6.72166 28.7613 5.10873 25.5643 4.64206 22.1106C4.17538 18.6569 4.88201 15.1466 6.64863 12.1424C8.41524 9.13829 11.1395 6.81441 14.3846 5.54343C17.6296 4.27246 21.2075 4.12802 24.5444 5.13327L25.6556 3.17772C22.0881 1.98064 18.2328 1.94641 14.6447 3.07996C11.0565 4.21351 7.92057 6.45637 5.68829 9.48567C3.45601 12.515 2.24252 16.1745 2.2225 19.9374C2.20249 23.7003 3.37698 27.3725 5.57691 30.4253C7.77684 33.4782 10.8887 35.7543 14.4646 36.926C18.0405 38.0976 21.896 38.1044 25.4759 36.9453C29.0559 35.7863 32.1758 33.5212 34.3865 30.476C36.5971 27.4309 37.7845 23.7629 37.7778 19.9999C37.772 19.0279 37.6866 18.058 37.5222 17.0999L37.4222 17.1111ZM20 35.5555C16.743 35.5538 13.5698 34.5233 10.9333 32.6111L20.4778 21.1111H35.5C35.2193 25.0315 33.4648 28.7004 30.5893 31.3801C27.7138 34.0597 23.9305 35.5515 20 35.5555Z" fill="black" />
                                            <path id="Vector_2" d="M29.8333 1.26665L23.4778 12.2222C23.3299 12.4392 23.245 12.693 23.2325 12.9553C23.22 13.2176 23.2804 13.4783 23.407 13.7084C23.5335 13.9385 23.7213 14.1291 23.9496 14.259C24.1778 14.3889 24.4375 14.4531 24.7 14.4444H37.4222C37.6847 14.4531 37.9444 14.3889 38.1727 14.259C38.4009 14.1291 38.5887 13.9385 38.7153 13.7084C38.8418 13.4783 38.9022 13.2176 38.8897 12.9553C38.8772 12.693 38.7923 12.4392 38.6444 12.2222L32.2889 1.26665C32.1635 1.05227 31.9843 0.87444 31.7689 0.75086C31.5535 0.62728 31.3094 0.562256 31.0611 0.562256C30.8128 0.562256 30.5688 0.62728 30.3534 0.75086C30.138 0.87444 29.9587 1.05227 29.8333 1.26665Z" fill="black" />
                                        </g>
                                    </svg>

                                    <p className="ml-4 text-2xl">Resources</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Displayes the active dashboard component */}
                    <div className="p-4 w-11/12 h-auto rounded-xl" style={{ backgroundColor: '#1f1d34' }}>
                        <div className=''>{displayComponent}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}
