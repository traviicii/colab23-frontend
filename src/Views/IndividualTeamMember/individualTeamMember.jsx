import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function IndividualTeamMember() {
  // Initialize the navigate function from react-router-dom
  const navigate = useNavigate();

  const user = useSelector((state) => state.user)

  // Uses the user id to be looked up as a param from the url route. See app.jsx for user profile page.
  const { user_id } = useParams()

  // Looked up user info
  const [member, setMember] = useState({})
  const [project, setProject] = useState('')

  useEffect(() => { getUser() }, [])

  const getUser = async () => {

    const token = user.data.apitoken
    const url = BACK_END_URL + `/api/getuser/${user_id}`
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
        setMember(data.user)
        if (data.project) {
          setProject(data.project)
        }
      }
    }
    catch {
      console.log("Couldn't get user data.")
    }
  }

  const showDeveloperSkills = () => {
    return member.developer_skills?.map((skill) => <button disabled className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showDesignSkills = () => {
    return member.design_skills?.map((skill) => <button disabled className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showManagementSkills = () => {
    return member.management_skills?.map((skill) => <button disabled className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showWantedSkills = () => {
    return member.wanted_skills?.map((skill) => <button disabled className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showInterests = () => {
    return member.interests?.map((interest) => <button disabled className="flex items-center w-auto p-2 h-10 m-1 text-base whitespace-nowrap rounded-md border-2 border-rose-300">{interest}</button>)
  }

  const showAvailability = () => {
    return member.availability?.map((availability) => <li>{availability}</li>)
  }

  const showAdjectives = () => {
    return member.adjectives?.map((adjective) => <li style={{ listStyleType: 'disc', marginLeft: '25px' }}>{adjective}</li>)
  }

  const showRoleIcon = () => {
    const role = member.prod_role
    if (role == "Product Manager"){
        return <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#ED4068"/>
        <path d="M16.6666 43.3333C15.7499 43.3333 14.9649 43.0067 14.3116 42.3533C13.6583 41.7 13.3321 40.9155 13.3333 40V20C13.3333 19.0833 13.6599 18.2983 14.3133 17.645C14.9666 16.9917 15.751 16.6655 16.6666 16.6667H26.6666L29.9999 20H43.3333C44.2499 20 45.0349 20.3267 45.6883 20.98C46.3416 21.6333 46.6677 22.4178 46.6666 23.3333V28.8333C46.1388 28.6111 45.5899 28.465 45.0199 28.395C44.4499 28.325 43.8877 28.3322 43.3333 28.4167V23.3333H28.6249L25.2916 20H16.6666V40H30.1666L29.9999 40.1667V43.3333H16.6666ZM33.3333 46.6667V41.5417L42.5416 32.375C42.7916 32.125 43.0694 31.9444 43.3749 31.8333C43.6805 31.7222 43.986 31.6667 44.2916 31.6667C44.6249 31.6667 44.9444 31.7294 45.2499 31.855C45.5555 31.9805 45.8333 32.1678 46.0833 32.4167L47.6249 33.9583C47.8471 34.2083 48.021 34.4861 48.1466 34.7917C48.2721 35.0972 48.3344 35.4028 48.3333 35.7083C48.3333 36.0139 48.2777 36.3267 48.1666 36.6467C48.0555 36.9667 47.8749 37.2511 47.6249 37.5L38.4583 46.6667H33.3333ZM35.8333 44.1667H37.4166L42.4583 39.0833L41.7083 38.2917L40.9166 37.5417L35.8333 42.5833V44.1667ZM41.7083 38.2917L40.9166 37.5417L42.4583 39.0833L41.7083 38.2917Z" fill="#F8E1E6"/>
        </svg>
        
    } 
    else if (role == "Designer") {
        return <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#EBB237"/>
        <path d="M21.6666 36.6667C22.5833 36.6667 23.3333 37.4167 23.3333 38.3333C23.3333 40.1667 21.8333 41.6667 19.9999 41.6667C19.7166 41.6667 19.4499 41.6667 19.1666 41.5833C19.6833 40.6667 19.9999 39.5667 19.9999 38.3333C19.9999 37.4167 20.7499 36.6667 21.6666 36.6667ZM41.1166 15C40.6833 15 40.2666 15.1667 39.9333 15.4833L24.9999 30.4167L29.5833 35L44.5166 20.0667C45.1666 19.4167 45.1666 18.3333 44.5166 17.7167L42.2833 15.4833C41.9499 15.15 41.5333 15 41.1166 15ZM21.6666 33.3333C18.8999 33.3333 16.6666 35.5667 16.6666 38.3333C16.6666 40.5167 14.7333 41.6667 13.3333 41.6667C14.8666 43.7 17.4999 45 19.9999 45C23.6833 45 26.6666 42.0167 26.6666 38.3333C26.6666 35.5667 24.4333 33.3333 21.6666 33.3333Z" fill="#F9E8C3"/>
        </svg>
        
    }
    else if (role == "Developer") {
        return <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="30" cy="30" r="30" fill="#135279"/>
        <path d="M13.3333 21.6667V15H46.6666V21.6667H43.3333V18.3333H16.6666V21.6667H13.3333ZM23.3333 45V41.6667H13.3333V35H16.6666V38.3333H43.3333V35H46.6666V41.6667H36.6666V45H23.3333ZM17.9999 28.3333L22.3333 24L19.9999 21.6667L13.3333 28.3333L19.9999 35L22.3333 32.6667L17.9999 28.3333ZM41.9999 28.3333L37.6666 32.6667L39.9999 35L46.6666 28.3333L39.9999 21.6667L37.6666 24L41.9999 28.3333Z" fill="#D7F7F9"/>
        </svg>
        
    }
}

  return (
    <div style={{ backgroundColor: 'white' }}>
      <div className="">
        <div className='top w-3/4 ml-36 mb-4 space-y-6'>
          {/* Back button to navigate to the project browser */}
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

          <div>
            {/* Display the team member's name */}
            <h1 className='text-3xl font-bold'>{member.first_name} {member.last_name}</h1>
          </div>
          <div className='flex items-center'>

            {/* Display a circle with gradient */}
            {showRoleIcon()}
            <p className='ml-2'>{member.prod_exp}</p>
          </div>
        </div>

        {/* Div containing the middle and bottom section */}
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
                <ul style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                  <li>{member.location}</li>
                  <li>{member.timezone}</li>
                </ul>
              </div>
              <div>
                {/* Display former experience */}
                <p className='mt-6 font-bold'>Former Experience:</p>
                <ul style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                  <li>{member.prev_role}, {member.prev_exp}</li>
                </ul>
              </div>
              <div>
                {/* Display availability information */}
                <p className='mt-6 font-bold'>Available:</p>
                <ul style={{ listStyleType: 'disc', marginLeft: '25px' }}>
                  {showAvailability()}
                  <li>{member.hours_wk}</li>
                </ul>
              </div>
            </div>

            {/* email, interested in */}
            <div className='flex justify-center w-1/4 pt-8'>
              <div className='message w-full mt-10'>
                <button onClick={() => window.location = `mailto:${member.email}`} className='border bg-[#ED4068] text-white rounded w-full py-4 mb-4 font-bold rounded-xl' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg className='mr-2' width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.8212 1.43082L2.36655 6.38519L9.58171 9.67033M17.8212 1.43082L12.8669 16.8855L9.58171 9.67033M17.8212 1.43082L9.58171 9.67033" stroke="white" />
                  </svg>

                  Send an Email
                </button>

                <p className='font-bold'>Interested in:</p>
                <div className="interest-buttons flex flex-wrap mt-4 mb-4 w-full">
                  {/* Display buttons for interests */}
                  {showInterests()}
                  {/* <button className="white-button px-3 py-1 rounded border-grey border-2">Fintech</button>
                  <button className="white-button px-3 py-1 rounded border-grey border-2">Education</button>
                  <button className="white-button px-3 py-1 rounded border-grey border-2">Non-Profit</button> */}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section - About, working on, skills */}
          <div className="bottom bg-white flex justify-center w-full py-8 ">
            <div className="w-10/12 flex mb-20 mt-10" style={{ minHeight: '250px' }}>

              {/* About */}
              <div className="py-12 px-6 w-96 rounded-l-2xl" style={{ backgroundColor: '#fae8c2' }}>
                <h2 className="text-2xl font-semibold mb-4">About Me:</h2>
                <ol>
                  {/* Display a list of qualities */}
                  {showAdjectives()}
                  {/* <li style={{ listStyleType: 'disc', marginLeft: '25px' }}>{member.adjectives ? member.adjectives[0] : ''}</li>
                  <li style={{ listStyleType: 'disc', marginLeft: '25px' }}>{member.adjectives ? member.adjectives[1] : ''}</li>
                  <li style={{ listStyleType: 'disc', marginLeft: '25px' }}>{member.adjectives ? member.adjectives[2] : ''}</li> */}
                </ol>
                <p className='mt-8'>{member.about}</p>
              </div>

              {/* Currently working on */}
              <div className="py-12 px-6 w-96" style={{ backgroundColor: '#f3d187' }}>
                <h2 className="text-2xl font-semibold mb-4">Currently Working On:</h2>
                {member.current_project_id ? <p><Link to={`/project-profile/${member.current_project_id}`} className='mt-4 font-bold underline'>{project ? project.name : ''}</Link> <br></br> - Project Admin: {project ? project.admin_name : ''}</p> : `${member.first_name} isn't involved in a project currently!`}
                <p className='mt-4 font-bold'>About the project:</p>
                {project.description}
                {/* <ul>
                  <li style={{ listStyleType: 'disc', marginLeft: '25px' }}># of hours / week</li>
                </ul> */}
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
                  <div className="interest-buttons mt-4">
                    {showWantedSkills()}
                  </div>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
