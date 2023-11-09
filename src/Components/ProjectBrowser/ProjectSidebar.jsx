import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMainFilter, setDuration, setStatus, setRole, setInterests } from '../../Actions';

import ProjectRoleOption from './ProjectRoleOption';
import ProjectStatusOption from './ProjectStatusOption';
import ProjectDurationOption from './ProjectDurationOption';
import ProjectIndustriesOption from './ProjectIndustriesOption';

export default function ProjectSidebar({ openModal }) {
  const dispatch = useDispatch();
  const duration = useSelector((state) => state.filter.duration);
  const status = useSelector((state) => state.filter.status);
  const role = useSelector((state) => state.filter.role);
  const interests = useSelector((state) => state.filter.interests)
  const peopleOrProjects = useSelector((state) => state.filter.mainFilter);

  // Array of fields of interests
  const fieldsOfInterests = [
    'Fintech', 'Education', 'Non-Profit', 'SaaS', 'Healthcare',
    'Sustainability', 'Security', 'Enterprise', 'Marketplace', 'e-Commerce',
    'B2C', 'Retail', 'B2B', 'Blockchain', 'Real Estate',
    'API', 'Artificial Intel', 'Big Data', 'DevOps', 'Deep Tech',
    'Cloud Comput.', 'Agriculture', 'Environment', 'Ment. Health',
    'Home Impr.', 'Community', 'Entertain.', 'Productivity', 'Art/Design', 'Science'
  ];

  const [selectedFields, setSelectedFields] = useState([]);  // Stores selected fields of interest (industries)
  

  // Local states to control visibility
  const [showProjectStatusButtons, setShowProjectStatusButtons] = useState(false);
  const [showDurationButtons, setShowDurationButtons] = useState(false);
  const [showIndustriesButtons, setShowIndustriesButtons] = useState(false);
  const [showProjectRoleIcons, setShowProjectRoleIcons] = useState(false);

  // Function to handle the click of a role option
  const handleRoleClick = (selectedRole) => {
    if (role === null) {
        dispatch(setRole(selectedRole))
    } else  if (role === 'Project Manager' && selectedRole === 'Project Manager') {
        dispatch(setRole(null))
    } else  if (role === 'Developer' && selectedRole === 'Developer') {
        dispatch(setRole(null))
    } else  if (role === 'Designer' && selectedRole === 'Designer') {
        dispatch(setRole(null))
    } else {
    dispatch(setRole(selectedRole));
    console.log(selectedRole);
    console.log(role)
  }};

  // Function to handle the click of a main filter option
  const handleMainFilterClick = (filter) => {
    if (peopleOrProjects === null) {
        dispatch(setMainFilter(filter))
    } else  if (peopleOrProjects === 'Projects' && filter === 'Projects') {
        dispatch(setMainFilter(null))
    } else  if (peopleOrProjects === 'People' && filter === 'People') {
        dispatch(setMainFilter(null))
    } else {
    dispatch(setMainFilter(filter));
    console.log(filter);
  }};

  // Function to handle the click of a status option
  const handleStatusClick = (selectedStatus) => {
    if (status === 'Open' && selectedStatus === 'Open') {
        dispatch(setStatus(null))
    } else  if (status === 'Complete' && selectedStatus === 'Complete') {
        dispatch(setStatus(null))
    } else {
    dispatch(setStatus(selectedStatus));
    console.log(selectedStatus)
  }};

  // Function to handle the click of a duration option
  const handleDurationClick = (option) => {
    if (duration === null) {
        dispatch(setDuration(option))
    } else  if (duration === 'Short-Term' && option === 'Short-Term') {
        dispatch(setDuration(null))
    } else  if (duration === 'Medium-Term' && option === 'Medium-Term') {
        dispatch(setDuration(null))
    } else  if (duration === 'Long-Term' && option === 'Long-Term') {
        dispatch(setDuration(null))
    } else {
    dispatch(setDuration(option));
    console.log(option)
  }};

// Function to update selected industries and dispatch to Redux
    const handleFieldSelection = (field) => {
  
    let updatedSelectedFields;
  
    if (selectedFields.includes(field)) {
      updatedSelectedFields = selectedFields.filter((selectedField) => selectedField !== field);
    } else {
      updatedSelectedFields = [...selectedFields, field];
    }

    // Update the local state
    setSelectedFields(updatedSelectedFields); 
  
    // Dispatch action to update Redux state with the updatedSelectedFields
    dispatch(setInterests(updatedSelectedFields));

    console.log(field)
  };
  

  // Function to toggle the visibility of project status buttons
  const toggleProjectStatusButtons = () => {
    setShowProjectStatusButtons(!showProjectStatusButtons);
  };

  // Function to toggle the visibility of duration buttons
  const toggleDurationButtons = () => {
    setShowDurationButtons(!showDurationButtons);
  };

  // Function to toggle the visibility of project industry buttons
  const toggleProjectIndustryButtons = () => {
    setShowIndustriesButtons(!showIndustriesButtons);
  };

  // Function to toggle the visibility of project role icons
  const toggleProjectRoleIcons = () => {
    setShowProjectRoleIcons(!showProjectRoleIcons);
  };



  

  return (
    <div className='h-full' style={{ overflowY: 'auto', backgroundColor: '#bcbbc2' }}>
      <aside id="sidebar-multi-level-sidebar" className="transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="pb-40" style={{ backgroundColor: '#bcbbc2' }}>
          <p className="text-4xl pt-10 pl-12 mb-8 mt-4 ml-3">Explore</p>
          <div className="mb-2 text-center">
            <div className="flex flex-col items-center">
              <button onClick={openModal} className="m-2 w-3/4 py-4 text-white rounded-lg border border-black hover:bg-gray-200 mt-4 mb-6" style={{ backgroundColor: '#ed4168' }}>
                + Create Your Own Project
              </button>
              <div className='flex justify-center items-center w-3/4'>
                <div className='w-2/3 border border-black' />
                <div className='p-4 text-md text-center text-black'>
                  or
                </div>
                <div className='w-2/3 border border-black' />
              </div>
            </div>
          </div>
          <p className="text-md ml-16 mt-4 text-3xl">Filter by:</p>
          <div className="flex flex-col space-x-4 ml-16 mt-10 mb-12 space-y-2">
            <button onClick={() => handleMainFilterClick("Projects")}>
            <svg width="180" height="60" viewBox="0 0 202 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="48" fill="#135279"/>
            <path d="M85.6844 26.3344C83.7125 22.9375 78.4969 19.7531 65.0094 23.3C60.5078 20.1936 55.2422 18.3778 49.7827 18.0492C44.3232 17.7205 38.8778 18.8916 34.0361 21.4356C29.1944 23.9796 25.1408 27.7995 22.3142 32.4819C19.4876 37.1642 17.9957 42.5306 18 48C18 48.75 18.0271 49.4937 18.0813 50.2312C8.17505 60.1437 8.3438 66.25 10.325 69.6656C12.1875 72.8781 15.9063 74.25 20.7125 74.25C23.7719 74.25 27.275 73.6937 31.0094 72.7156C35.512 75.8176 40.7771 77.6293 46.2351 77.9546C51.6931 78.2799 57.1361 77.1064 61.9753 74.5612C66.8144 72.0159 70.8654 68.1958 73.6899 63.5142C76.5144 58.8326 78.0049 53.4677 78 48C78 47.2469 77.9719 46.5031 77.9157 45.7625C82.3875 41.2687 85.3719 36.9469 86.3532 33.2625C87.2344 30.0062 86.475 27.6875 85.6844 26.3344ZM48 25.5C53.0963 25.5069 58.0397 27.241 62.0234 30.4194C66.0072 33.5977 68.7959 38.0325 69.9344 43C65.5 46.9781 59.5625 51.3094 52.35 55.4562C45.5563 59.3594 38.7407 62.4437 32.6344 64.4094C29.3461 61.3245 27.0605 57.3228 26.0739 52.9233C25.0873 48.5238 25.4453 43.9293 27.1014 39.7356C28.7575 35.542 31.6353 31.9426 35.3617 29.4043C39.0882 26.8659 43.4912 25.5057 48 25.5ZM16.8094 65.9031C16.6188 65.5687 16.7563 63.3344 20.1438 59.1187C21.196 61.7453 22.6153 64.2095 24.3594 66.4375C18.975 67.2531 17.0157 66.2531 16.8094 65.9031ZM48 70.5C45.6043 70.5004 43.2241 70.1163 40.95 69.3625C46.1568 67.243 51.2124 64.7695 56.0813 61.9594C60.9319 59.1931 65.5857 56.0951 70.0094 52.6875C68.9293 57.725 66.1559 62.2403 62.1511 65.4815C58.1464 68.7226 53.152 70.4938 48 70.5ZM79.1157 31.3281C78.7157 32.8219 77.6125 34.725 75.8688 36.8906C74.8166 34.2605 73.3961 31.7932 71.65 29.5625C76.5969 28.8219 78.8907 29.5625 79.1969 30.0969C79.25 30.1875 79.3157 30.5875 79.1157 31.3281Z" fill="#D7F7F9"/>
            <path d="M115.512 50.832V47.904H119.16C119.624 47.904 120.048 47.808 120.432 47.616C120.816 47.424 121.12 47.144 121.344 46.776C121.568 46.408 121.68 45.96 121.68 45.432C121.68 44.92 121.568 44.48 121.344 44.112C121.12 43.744 120.816 43.464 120.432 43.272C120.048 43.08 119.624 42.984 119.16 42.984H115.512V40.056H119.712C120.784 40.056 121.752 40.272 122.616 40.704C123.48 41.136 124.16 41.76 124.656 42.576C125.168 43.376 125.424 44.328 125.424 45.432C125.424 46.536 125.168 47.496 124.656 48.312C124.16 49.112 123.48 49.736 122.616 50.184C121.752 50.616 120.784 50.832 119.712 50.832H115.512ZM112.632 57V40.056H116.4V57H112.632ZM127.366 57V45.336H131.038V57H127.366ZM131.038 50.592L129.502 49.392C129.806 48.032 130.318 46.976 131.038 46.224C131.758 45.472 132.758 45.096 134.038 45.096C134.598 45.096 135.086 45.184 135.502 45.36C135.934 45.52 136.31 45.776 136.63 46.128L134.446 48.888C134.286 48.712 134.086 48.576 133.846 48.48C133.606 48.384 133.334 48.336 133.03 48.336C132.422 48.336 131.934 48.528 131.566 48.912C131.214 49.28 131.038 49.84 131.038 50.592ZM142.896 57.264C141.696 57.264 140.608 57 139.632 56.472C138.672 55.928 137.912 55.192 137.352 54.264C136.792 53.336 136.512 52.296 136.512 51.144C136.512 49.992 136.792 48.96 137.352 48.048C137.912 47.136 138.672 46.416 139.632 45.888C140.592 45.344 141.68 45.072 142.896 45.072C144.112 45.072 145.2 45.336 146.16 45.864C147.12 46.392 147.88 47.12 148.44 48.048C149 48.96 149.28 49.992 149.28 51.144C149.28 52.296 149 53.336 148.44 54.264C147.88 55.192 147.12 55.928 146.16 56.472C145.2 57 144.112 57.264 142.896 57.264ZM142.896 53.928C143.424 53.928 143.888 53.816 144.288 53.592C144.688 53.352 144.992 53.024 145.2 52.608C145.424 52.176 145.536 51.688 145.536 51.144C145.536 50.6 145.424 50.128 145.2 49.728C144.976 49.312 144.664 48.992 144.264 48.768C143.88 48.528 143.424 48.408 142.896 48.408C142.384 48.408 141.928 48.528 141.528 48.768C141.128 48.992 140.816 49.312 140.592 49.728C140.368 50.144 140.256 50.624 140.256 51.168C140.256 51.696 140.368 52.176 140.592 52.608C140.816 53.024 141.128 53.352 141.528 53.592C141.928 53.816 142.384 53.928 142.896 53.928ZM150.437 62.232C149.588 62.232 148.868 62.088 148.276 61.8C147.684 61.528 147.164 61.136 146.716 60.624L148.996 58.344C149.172 58.552 149.356 58.696 149.548 58.776C149.724 58.872 149.933 58.92 150.173 58.92C150.525 58.92 150.813 58.816 151.037 58.608C151.277 58.4 151.396 58.08 151.396 57.648V45.336H155.069V57.6C155.069 58.544 154.869 59.36 154.469 60.048C154.069 60.736 153.517 61.272 152.812 61.656C152.125 62.04 151.333 62.232 150.437 62.232ZM153.269 43.728C152.693 43.728 152.213 43.536 151.829 43.152C151.461 42.752 151.277 42.272 151.277 41.712C151.277 41.136 151.461 40.656 151.829 40.272C152.213 39.888 152.693 39.696 153.269 39.696C153.845 39.696 154.317 39.888 154.685 40.272C155.053 40.656 155.237 41.136 155.237 41.712C155.237 42.272 155.053 42.752 154.685 43.152C154.317 43.536 153.845 43.728 153.269 43.728ZM163.431 57.264C162.167 57.264 161.039 57.008 160.047 56.496C159.071 55.968 158.303 55.24 157.743 54.312C157.183 53.384 156.903 52.336 156.903 51.168C156.903 50 157.175 48.96 157.719 48.048C158.279 47.12 159.031 46.392 159.975 45.864C160.919 45.336 161.983 45.072 163.167 45.072C164.319 45.072 165.335 45.32 166.215 45.816C167.095 46.312 167.783 47 168.279 47.88C168.791 48.76 169.047 49.768 169.047 50.904C169.047 51.112 169.031 51.336 168.999 51.576C168.983 51.8 168.943 52.064 168.879 52.368L158.823 52.392V49.872L167.319 49.848L165.735 50.904C165.719 50.232 165.615 49.68 165.423 49.248C165.231 48.8 164.943 48.464 164.559 48.24C164.191 48 163.735 47.88 163.191 47.88C162.615 47.88 162.111 48.016 161.679 48.288C161.263 48.544 160.935 48.912 160.695 49.392C160.471 49.872 160.359 50.456 160.359 51.144C160.359 51.832 160.479 52.424 160.719 52.92C160.975 53.4 161.327 53.776 161.775 54.048C162.239 54.304 162.783 54.432 163.407 54.432C163.983 54.432 164.503 54.336 164.967 54.144C165.431 53.936 165.839 53.632 166.191 53.232L168.207 55.248C167.631 55.92 166.935 56.424 166.119 56.76C165.303 57.096 164.407 57.264 163.431 57.264ZM176.459 57.264C175.259 57.264 174.171 57 173.195 56.472C172.219 55.944 171.451 55.216 170.891 54.288C170.331 53.36 170.051 52.32 170.051 51.168C170.051 50 170.331 48.96 170.891 48.048C171.467 47.12 172.243 46.392 173.219 45.864C174.195 45.336 175.291 45.072 176.507 45.072C177.419 45.072 178.251 45.232 179.003 45.552C179.771 45.856 180.451 46.32 181.043 46.944L178.691 49.296C178.419 48.992 178.099 48.768 177.731 48.624C177.379 48.48 176.971 48.408 176.507 48.408C175.979 48.408 175.507 48.528 175.091 48.768C174.691 48.992 174.371 49.312 174.131 49.728C173.907 50.128 173.795 50.6 173.795 51.144C173.795 51.688 173.907 52.168 174.131 52.584C174.371 53 174.699 53.328 175.115 53.568C175.531 53.808 175.995 53.928 176.507 53.928C176.987 53.928 177.411 53.848 177.779 53.688C178.163 53.512 178.491 53.272 178.763 52.968L181.091 55.32C180.483 55.96 179.795 56.448 179.027 56.784C178.259 57.104 177.403 57.264 176.459 57.264ZM184.194 57V40.512H187.866V57H184.194ZM181.554 48.456V45.336H190.506V48.456H181.554ZM196.138 57.288C195.45 57.288 194.77 57.2 194.098 57.024C193.442 56.848 192.826 56.6 192.25 56.28C191.69 55.944 191.21 55.56 190.81 55.128L192.898 53.016C193.282 53.432 193.738 53.76 194.266 54C194.794 54.224 195.37 54.336 195.994 54.336C196.426 54.336 196.754 54.272 196.978 54.144C197.218 54.016 197.338 53.84 197.338 53.616C197.338 53.328 197.194 53.112 196.906 52.968C196.634 52.808 196.282 52.672 195.85 52.56C195.418 52.432 194.962 52.296 194.482 52.152C194.002 52.008 193.546 51.808 193.114 51.552C192.682 51.296 192.33 50.944 192.058 50.496C191.786 50.032 191.65 49.448 191.65 48.744C191.65 47.992 191.842 47.344 192.226 46.8C192.61 46.24 193.154 45.8 193.858 45.48C194.562 45.16 195.386 45 196.33 45C197.322 45 198.234 45.176 199.066 45.528C199.914 45.864 200.602 46.368 201.13 47.04L199.042 49.152C198.674 48.72 198.258 48.416 197.794 48.24C197.346 48.064 196.906 47.976 196.474 47.976C196.058 47.976 195.746 48.04 195.538 48.168C195.33 48.28 195.226 48.448 195.226 48.672C195.226 48.912 195.362 49.104 195.634 49.248C195.906 49.392 196.258 49.52 196.69 49.632C197.122 49.744 197.578 49.88 198.058 50.04C198.538 50.2 198.994 50.416 199.426 50.688C199.858 50.96 200.21 51.328 200.482 51.792C200.754 52.24 200.89 52.832 200.89 53.568C200.89 54.704 200.458 55.608 199.594 56.28C198.746 56.952 197.594 57.288 196.138 57.288Z" fill="black"/>
            </svg>

            </button>
            <button onClick={() => handleMainFilterClick("People")}>
            <svg width="130" height="60" viewBox="0 0 173 96" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="48" cy="48" r="46.5" stroke="#D7F7F9" stroke-width="3"/>
            <path d="M42.3667 44.4333C45.7667 49.9 45.2667 56.3333 41.2001 58.9333C37.1334 61.4666 31.0667 59.1 27.6334 53.6333C24.2334 48.1666 24.7667 41.6666 28.8334 39.1333C32.9001 36.6 38.9667 38.9666 42.3667 44.4333ZM48.0001 67.1666C54.6667 67.1666 56.3334 64.6666 56.3334 64.6666C56.3334 64.6666 54.6667 71.3333 48.0001 71.3333C41.3334 71.3333 39.6667 64.7666 39.6667 64.6666C39.6667 64.6666 41.3334 67.1666 48.0001 67.1666ZM67.1667 39.1333C71.2334 41.6666 71.7668 48.1666 68.3667 53.6333C64.9334 59.1 58.8667 61.4666 54.8001 58.9333C50.7334 56.3333 50.2334 49.9 53.6334 44.4333C57.0334 38.9666 63.1001 36.6 67.1667 39.1333ZM48.0001 74.6666C56.3334 74.6666 74.6667 57.5333 74.6667 44.6666C74.6667 31.8 62.7001 21.3333 48.0001 21.3333C33.3001 21.3333 21.3334 31.8 21.3334 44.6666C21.3334 57.5333 39.6667 74.6666 48.0001 74.6666ZM48.0001 14.6666C66.3334 14.6666 81.3334 28.1333 81.3334 44.6666C81.3334 58.2666 62.4001 81.3333 48.0001 81.3333C33.6001 81.3333 14.6667 58.2666 14.6667 44.6666C14.6667 28.1333 29.6667 14.6666 48.0001 14.6666Z" fill="#D7F7F9"/>
            <path d="M103.48 50.52V48.552H108.016C108.64 48.552 109.192 48.424 109.672 48.168C110.168 47.912 110.552 47.552 110.824 47.088C111.112 46.624 111.256 46.072 111.256 45.432C111.256 44.792 111.112 44.24 110.824 43.776C110.552 43.312 110.168 42.952 109.672 42.696C109.192 42.44 108.64 42.312 108.016 42.312H103.48V40.344H108.16C109.184 40.344 110.096 40.552 110.896 40.968C111.712 41.384 112.352 41.976 112.816 42.744C113.296 43.496 113.536 44.392 113.536 45.432C113.536 46.456 113.296 47.352 112.816 48.12C112.352 48.872 111.712 49.464 110.896 49.896C110.096 50.312 109.184 50.52 108.16 50.52H103.48ZM101.968 57V40.344H104.224V57H101.968ZM120.762 57.24C119.626 57.24 118.602 56.984 117.69 56.472C116.778 55.944 116.058 55.232 115.53 54.336C115.002 53.44 114.738 52.424 114.738 51.288C114.738 50.168 114.994 49.16 115.506 48.264C116.034 47.368 116.738 46.664 117.618 46.152C118.514 45.624 119.514 45.36 120.618 45.36C121.674 45.36 122.602 45.6 123.402 46.08C124.218 46.56 124.85 47.224 125.298 48.072C125.762 48.92 125.994 49.88 125.994 50.952C125.994 51.112 125.986 51.288 125.97 51.48C125.954 51.656 125.922 51.864 125.874 52.104H116.25V50.304H124.722L123.93 51C123.93 50.232 123.794 49.584 123.522 49.056C123.25 48.512 122.866 48.096 122.37 47.808C121.874 47.504 121.274 47.352 120.57 47.352C119.834 47.352 119.186 47.512 118.626 47.832C118.066 48.152 117.634 48.6 117.33 49.176C117.026 49.752 116.874 50.432 116.874 51.216C116.874 52.016 117.034 52.72 117.354 53.328C117.674 53.92 118.13 54.384 118.722 54.72C119.314 55.04 119.994 55.2 120.762 55.2C121.402 55.2 121.986 55.088 122.514 54.864C123.058 54.64 123.522 54.304 123.906 53.856L125.298 55.272C124.754 55.912 124.082 56.4 123.282 56.736C122.498 57.072 121.658 57.24 120.762 57.24ZM133.558 57.24C132.438 57.24 131.43 56.976 130.534 56.448C129.638 55.92 128.926 55.208 128.398 54.312C127.87 53.4 127.606 52.384 127.606 51.264C127.606 50.16 127.87 49.168 128.398 48.288C128.926 47.392 129.638 46.68 130.534 46.152C131.43 45.624 132.438 45.36 133.558 45.36C134.662 45.36 135.662 45.624 136.558 46.152C137.47 46.664 138.19 47.368 138.718 48.264C139.246 49.16 139.51 50.16 139.51 51.264C139.51 52.384 139.246 53.4 138.718 54.312C138.19 55.208 137.47 55.92 136.558 56.448C135.662 56.976 134.662 57.24 133.558 57.24ZM133.558 55.152C134.278 55.152 134.918 54.984 135.478 54.648C136.038 54.312 136.478 53.856 136.798 53.28C137.118 52.688 137.278 52.016 137.278 51.264C137.278 50.528 137.11 49.872 136.774 49.296C136.454 48.72 136.014 48.272 135.454 47.952C134.91 47.616 134.278 47.448 133.558 47.448C132.838 47.448 132.198 47.616 131.638 47.952C131.078 48.272 130.638 48.72 130.318 49.296C129.998 49.872 129.838 50.528 129.838 51.264C129.838 52.016 129.998 52.688 130.318 53.28C130.638 53.856 131.078 54.312 131.638 54.648C132.198 54.984 132.838 55.152 133.558 55.152ZM147.943 57.24C147.079 57.24 146.295 57.064 145.591 56.712C144.903 56.344 144.351 55.84 143.935 55.2C143.519 54.56 143.287 53.832 143.239 53.016V49.584C143.287 48.752 143.519 48.024 143.935 47.4C144.367 46.76 144.927 46.264 145.615 45.912C146.319 45.544 147.095 45.36 147.943 45.36C148.983 45.36 149.919 45.624 150.751 46.152C151.599 46.68 152.263 47.392 152.743 48.288C153.223 49.184 153.463 50.192 153.463 51.312C153.463 52.432 153.223 53.44 152.743 54.336C152.263 55.232 151.599 55.944 150.751 56.472C149.919 56.984 148.983 57.24 147.943 57.24ZM147.583 55.2C148.303 55.2 148.935 55.032 149.479 54.696C150.023 54.36 150.455 53.904 150.775 53.328C151.095 52.736 151.255 52.056 151.255 51.288C151.255 50.536 151.095 49.864 150.775 49.272C150.455 48.68 150.023 48.224 149.479 47.904C148.935 47.568 148.311 47.4 147.607 47.4C146.887 47.4 146.255 47.568 145.711 47.904C145.167 48.224 144.743 48.68 144.439 49.272C144.135 49.864 143.983 50.544 143.983 51.312C143.983 52.064 144.127 52.736 144.415 53.328C144.719 53.904 145.143 54.36 145.687 54.696C146.247 55.032 146.879 55.2 147.583 55.2ZM141.943 61.776V45.6H144.103V48.6L143.695 51.36L144.103 54.144V61.776H141.943ZM155.912 57V39.864H158.072V57H155.912ZM166.512 57.24C165.376 57.24 164.352 56.984 163.44 56.472C162.528 55.944 161.808 55.232 161.28 54.336C160.752 53.44 160.488 52.424 160.488 51.288C160.488 50.168 160.744 49.16 161.256 48.264C161.784 47.368 162.488 46.664 163.368 46.152C164.264 45.624 165.264 45.36 166.368 45.36C167.424 45.36 168.352 45.6 169.152 46.08C169.968 46.56 170.6 47.224 171.048 48.072C171.512 48.92 171.744 49.88 171.744 50.952C171.744 51.112 171.736 51.288 171.72 51.48C171.704 51.656 171.672 51.864 171.624 52.104H162V50.304H170.472L169.68 51C169.68 50.232 169.544 49.584 169.272 49.056C169 48.512 168.616 48.096 168.12 47.808C167.624 47.504 167.024 47.352 166.32 47.352C165.584 47.352 164.936 47.512 164.376 47.832C163.816 48.152 163.384 48.6 163.08 49.176C162.776 49.752 162.624 50.432 162.624 51.216C162.624 52.016 162.784 52.72 163.104 53.328C163.424 53.92 163.88 54.384 164.472 54.72C165.064 55.04 165.744 55.2 166.512 55.2C167.152 55.2 167.736 55.088 168.264 54.864C168.808 54.64 169.272 54.304 169.656 53.856L171.048 55.272C170.504 55.912 169.832 56.4 169.032 56.736C168.248 57.072 167.408 57.24 166.512 57.24Z" fill="black"/>
            </svg>

            </button>
          </div>
          <div>
            <ul className="space-y-2 font-medium">
              <ProjectRoleOption showProjectRoleIcons={showProjectRoleIcons} toggleProjectRoleIcons={toggleProjectRoleIcons} selectedRole={role} handleRoleClick={handleRoleClick}/>
              <ProjectStatusOption showProjectStatusButtons={showProjectStatusButtons} toggleProjectStatusButtons={toggleProjectStatusButtons} selectedStatus={status} handleStatusClick={handleStatusClick}/>
              <ProjectDurationOption showProjectDurationButtons={showDurationButtons} toggleProjectDurationButtons={toggleDurationButtons} selectedDuration={duration} handleDurationClick={handleDurationClick}/>
              <ProjectIndustriesOption selectedFields={interests} showIndustriesButtons={showIndustriesButtons} toggleProjectIndustryButtons={toggleProjectIndustryButtons} toggleField={handleFieldSelection} fieldsOfInterests={fieldsOfInterests}/>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
