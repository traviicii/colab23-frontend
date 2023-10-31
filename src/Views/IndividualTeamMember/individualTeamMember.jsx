import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

<<<<<<< HEAD
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
              <h1 className='text-3xl font-bold'>Team Member Name</h1>
            </div>
            <div className='flex items-center'>
                {/* Display a circle with gradient */}
                <svg width="50" height="50" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30.2" r="29" fill="#ED4068" stroke="#ED4068" strokeWidth="2"/>
                <path d="M16.6666 43.5334C15.75 43.5334 14.965 43.2067 14.3116 42.5534C13.6583 41.9 13.3322 41.1156 13.3333 40.2V20.2C13.3333 19.2834 13.66 18.4984 14.3133 17.845C14.9666 17.1917 15.7511 16.8656 16.6666 16.8667H26.6666L30 20.2H43.3333C44.25 20.2 45.035 20.5267 45.6883 21.18C46.3416 21.8334 46.6678 22.6178 46.6666 23.5334V29.0334C46.1389 28.8111 45.59 28.665 45.02 28.595C44.45 28.525 43.8878 28.5323 43.3333 28.6167V23.5334H28.625L25.2916 20.2H16.6666V40.2H30.1666L30 40.3667V43.5334H16.6666ZM33.3333 46.8667V41.7417L42.5416 32.575C42.7916 32.325 43.0694 32.1445 43.375 32.0334C43.6805 31.9223 43.9861 31.8667 44.2917 31.8667C44.625 31.8667 44.9444 31.9295 45.25 32.055C45.5555 32.1806 45.8333 32.3678 46.0833 32.6167L47.625 34.1584C47.8472 34.4084 48.0211 34.6861 48.1466 34.9917C48.2722 35.2973 48.3344 35.6028 48.3333 35.9084C48.3333 36.2139 48.2778 36.5267 48.1666 36.8467C48.0555 37.1667 47.875 37.4511 47.625 37.7L38.4583 46.8667H33.3333ZM35.8333 44.3667H37.4167L42.4583 39.2834L41.7083 38.4917L40.9166 37.7417L35.8333 42.7834V44.3667ZM41.7083 38.4917L40.9166 37.7417L42.4583 39.2834L41.7083 38.4917Z" fill="black"/>
                </svg>
                <p className='ml-2'># of Years</p>
            </div>
=======
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
        if (data.project){
          setProject(data.project)
        }
      }
    }
    catch {
      console.log("Couldn't get user data.")
    }
  }

  const showDeveloperSkills = () => {
    return member.developer_skills?.map((skill) => <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showDesignSkills = () => {
    return member.design_skills?.map((skill) => <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showManagementSkills = () => {
    return member.management_skills?.map((skill) => <button className="bg-opacity-50 px-3 py-1 m-1 rounded border-white border">{skill}</button>)
  }

  const showInterests = () => {
    return member.interests?.map((interest) => <button className="white-button w-auto p-2 h-10 m-1 text-base whitespace-nowrap rounded-md border-grey border-2">{interest}</button>)
  }

  const showAvailability = () => {
    return member.availability?.map((availability) => <li>{availability}</li>)
  }

  const showAdjectives = () => {
    return member.adjectives?.map((adjective) => <li style={{ listStyleType: 'disc', marginLeft: '25px' }}>{adjective}</li>)
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
>>>>>>> 30061c3afc9fca38e00c5f96186d728f12c5d39a
          </div>
          <div className='flex items-center'>

            {/* Display a circle with gradient */}
            <svg width="50" height="50" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="30" cy="30.2" r="29" fill="#ED4068" stroke="#ED4068" stroke-width="2" />
              <path d="M16.6666 43.5334C15.75 43.5334 14.965 43.2067 14.3116 42.5534C13.6583 41.9 13.3322 41.1156 13.3333 40.2V20.2C13.3333 19.2834 13.66 18.4984 14.3133 17.845C14.9666 17.1917 15.7511 16.8656 16.6666 16.8667H26.6666L30 20.2H43.3333C44.25 20.2 45.035 20.5267 45.6883 21.18C46.3416 21.8334 46.6678 22.6178 46.6666 23.5334V29.0334C46.1389 28.8111 45.59 28.665 45.02 28.595C44.45 28.525 43.8878 28.5323 43.3333 28.6167V23.5334H28.625L25.2916 20.2H16.6666V40.2H30.1666L30 40.3667V43.5334H16.6666ZM33.3333 46.8667V41.7417L42.5416 32.575C42.7916 32.325 43.0694 32.1445 43.375 32.0334C43.6805 31.9223 43.9861 31.8667 44.2917 31.8667C44.625 31.8667 44.9444 31.9295 45.25 32.055C45.5555 32.1806 45.8333 32.3678 46.0833 32.6167L47.625 34.1584C47.8472 34.4084 48.0211 34.6861 48.1466 34.9917C48.2722 35.2973 48.3344 35.6028 48.3333 35.9084C48.3333 36.2139 48.2778 36.5267 48.1666 36.8467C48.0555 37.1667 47.875 37.4511 47.625 37.7L38.4583 46.8667H33.3333ZM35.8333 44.3667H37.4167L42.4583 39.2834L41.7083 38.4917L40.9166 37.7417L35.8333 42.7834V44.3667ZM41.7083 38.4917L40.9166 37.7417L42.4583 39.2834L41.7083 38.4917Z" fill="black" />
            </svg>
            <p className='ml-2'># of Years: {member.prod_exp}</p>
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
            <div className='flex justify-center w-1/4 pt-12 px-6'>
              <div className='message w-full mt-10'>
                <button onClick={() => window.location = `mailto:${member.email}`} className='border rounded w-full py-4 mb-4 font-bold rounded' style={{ backgroundColor: '#d7f7f9', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                    <g id="Send Message">
                      <path id="Vector 67" d="M17.8212 1.43106L2.36655 6.38543L9.58171 9.67058M17.8212 1.43106L12.8669 16.8857L9.58171 9.67058M17.8212 1.43106L9.58171 9.67058" stroke="black" />
                    </g>
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
                {member.current_project_id ? <p><Link to={`/project-profile/${member.current_project_id}`} className='mt-4 font-bold underline'>{project ? project.name : '' }</Link> <br></br> - Project Admin: {project? project.admin_name : ''}</p> : `${member.first_name} isn't involved in a project currently!`}
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
  );
}
