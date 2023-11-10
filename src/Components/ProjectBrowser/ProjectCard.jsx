import React from 'react'
import Industries from './Industries'
import { Link } from 'react-router-dom'

export default function ProjectCard({ project }) {

    const displayIndustries = () => {
        return project.industries.map((industry, index) => <Industries key={index} industry={industry} />)
    }

  // Function to generate a random gradient
  function generateRandomGradient() {
    // Function to generate a random color
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }

    // Get a random color for the center
    const centerColor = getRandomColor();

    // Get a random color for the outer edge
    const outerColor = getRandomColor();

    // Create the radial gradient string
    return `radial-gradient(${centerColor}, ${outerColor})`;
  }
  

  


    function capitalizeHyphenatedWord(inputString) {
        return inputString
          .split('-') // Split the input string by hyphens
          .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
          .join('-'); // Join the words back with hyphens
      }
      
      return (
        <div className='mx-6 my-5' style={{ width: '45%' }}>
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl" style={{ backgroundColor: '#f8e1e6', minHeight: '600px' }}>
            <Link to={`/project-profile/${project.id}`}>
              <div className='radial-circle w-36 h-36 mx-auto mt-6' style={{ background: generateRandomGradient() }}></div>
            </Link>

                {/* Project Information */}
                <div className="py-6 px-4">
                
                    {/* Name */}
                    <div className='flex flex-col items-center'>
                        <Link to={`/project-profile/${project.id}`} className='mb-2 text-2xl font-bold tracking-tight text-gray-900'><p>{project.name}</p></Link>
                    </div>

                    {/* Industries */}
                    <div className="mb-2 flex flex-wrap justify-center">
                        {/* Display industries from Industries component */}
                        {project.industries ? displayIndustries() : ''}
                    </div>

                    {/* Admin/Creator */}
                    <div className='flex'>
                        <p className='mr-2'>Project Admin:</p>
                        <p className='font-semibold'>{project.admin_name}</p>
                    </div>

                    <div className="flex justify-between mb-2">
                        {/* Team Size - Currently just a length count on list of members. Should be desired size instead? */}
                        {/* <div className="mr-10">
                            <p className='font-bold whitespace-nowrap'>Team Size</p>
                            <p>{project.team_size}</p>
                        </div> */}

                        {/* Roles need for project */}
                        <div className='flex flex-col'>
                            <p className='mt-2 mb-4'>Roles Needed:</p>
                            <div className='flex space-x-4 mb-2'>
                            {Array.from({ length: project.devs_wanted }, (_, i) => (
                                        <div key={i} className="flex justify-center items-center flex-col">
                                            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="#626171" stroke-width="2" />
                                                <path d="M13.3333 21.6667V15H46.6666V21.6667H43.3333V18.3333H16.6666V21.6667H13.3333ZM23.3333 45V41.6667H13.3333V35H16.6666V38.3333H43.3333V35H46.6666V41.6667H36.6666V45H23.3333ZM17.9999 28.3333L22.3333 24L19.9999 21.6667L13.3333 28.3333L19.9999 35L22.3333 32.6667L17.9999 28.3333ZM41.9999 28.3333L37.6666 32.6667L39.9999 35L46.6666 28.3333L39.9999 21.6667L37.6666 24L41.9999 28.3333Z" fill="#626171" />
                                            </svg>


                                            <p>Developer</p>
                                        </div>
                                    ))}
                                    {Array.from({ length: project.pms_wanted }, (_, i) => (
                                        <div key={i} className="flex justify-center items-center flex-col">
                                            <svg width="50" height="50" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="30" cy="30" r="29" stroke="#ED4068" stroke-width="2" />
                                                <path d="M16.6666 43.3333C15.7499 43.3333 14.9649 43.0067 14.3116 42.3533C13.6583 41.7 13.3321 40.9156 13.3333 40V20C13.3333 19.0833 13.6599 18.2983 14.3133 17.645C14.9666 16.9917 15.751 16.6656 16.6666 16.6667H26.6666L29.9999 20H43.3333C44.2499 20 45.0349 20.3267 45.6883 20.98C46.3416 21.6333 46.6677 22.4178 46.6666 23.3333V28.8333C46.1388 28.6111 45.5899 28.465 45.0199 28.395C44.4499 28.325 43.8877 28.3322 43.3333 28.4167V23.3333H28.6249L25.2916 20H16.6666V40H30.1666L29.9999 40.1667V43.3333H16.6666ZM33.3333 46.6667V41.5417L42.5416 32.375C42.7916 32.125 43.0694 31.9444 43.3749 31.8333C43.6805 31.7222 43.986 31.6667 44.2916 31.6667C44.6249 31.6667 44.9444 31.7294 45.2499 31.855C45.5555 31.9806 45.8333 32.1678 46.0833 32.4167L47.6249 33.9583C47.8471 34.2083 48.021 34.4861 48.1466 34.7917C48.2721 35.0972 48.3344 35.4028 48.3333 35.7083C48.3333 36.0139 48.2777 36.3267 48.1666 36.6467C48.0555 36.9667 47.8749 37.2511 47.6249 37.5L38.4583 46.6667H33.3333ZM35.8333 44.1667H37.4166L42.4583 39.0833L41.7083 38.2917L40.9166 37.5417L35.8333 42.5833V44.1667ZM41.7083 38.2917L40.9166 37.5417L42.4583 39.0833L41.7083 38.2917Z" fill="#ED4068" />
                                            </svg>

                                            <p>Manager</p>
                                        </div>
                                    ))}
                                    {Array.from({ length: project.designers_wanted }, (_, i) => (
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

                    <div className="flex mb-2">
                        {/* Admin's Timezone? */}
                        <div className="mr-14">
                            <p>Timezone</p>
                            <p className='font-semibold'>{project.admin_timezone}</p>
                        </div>

                        {/* Project duration */}
                        <div>
                            <p>Duration:</p>
                            <p className='font-semibold'>{capitalizeHyphenatedWord(project.duration)}</p>
                        </div>
                    </div>

                    <div>
                        <p>About:</p>
                        <p className='font-semibold'>{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
