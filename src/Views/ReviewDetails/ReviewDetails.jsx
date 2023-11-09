import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function ReviewDetails() {
  const professionalFormData = useSelector((state) => state.professionalBackground);
  const skillsTools = useSelector((state) => state.skillsTools);
  const aboutYou = useSelector((state) => state.aboutYouForm);
  const availabilityForm = useSelector((state) => state.availabilityForm)

  const currentSkills = useSelector((state) => state.skillsTools.designSkills).concat(useSelector((state) => state.skillsTools.developerSkills)).concat(useSelector((state) => state.skillsTools.managementSkills));

  const navigate = useNavigate();

  const navigateWelcomeDone = () => {
    navigate('/welcome-done');
  }

  return (
    <div className="personal-details-container" style={{ backgroundColor: '#bcbbc2' }}>
      <div className="flex items-center justify-center">
        <div className="shadow-2xl rounded-xl w-4/5 md:w-4/5 lg:w-3/5 xl:w-2/5 px-4 md:px-6 py-8 md:py-10 bg-white">
        <div className="mb-4 flex items-center">
            <button className="hover:underline text-lg mr-4" onClick={() => navigate("/your-availability")} style={{ display: 'flex', alignItems: 'center' }}>
                <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                    <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                </svg>
                Back
            </button>

                {/* progress bar */}
                <div className="w-full bg-gray-200 h-2 rounded-full mr-20 ml-10">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '100%', backgroundColor: '#ed4168' }}></div>
                </div>
            </div>
          <p className="text-xl md:text-2xl text-center text-500 mb-8">
            Review Your Details
          </p>
          <p className="text-md md:text-lg text-center font-bold mb-1">
            Does everything look good?
          </p>
          <p className="text-md md:text-lg text-center mb-6">
          If not, go back to make any changes.
          </p>
          <p className="text-md text-left font-semibold mb-6">
                Your Professional Background
            </p>
          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              If you are currently switching careers, what is your previous/current role?
            </p>
            <p className="text-gray-500 mb-6">{professionalFormData.previousRole}</p>
          </div>

          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              Which of the following describes your role on a product team?
            </p>
            <p className="text-gray-500 mb-6">{professionalFormData.productRole}</p>
          </div>


          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              How much experience do you have in the product role you selected above?
            </p>
            <p className="text-gray-500 mb-6">{professionalFormData.productExperience}</p>
          </div>


          <div className="border-t-2 border-black my-10 mb-10"></div>



          <p className="text-md text-left font-semibold mb-6">
                Your Skills
            </p>

            <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-6">
                Current Skills
            </p>
            <div className="grid grid-cols-3 gap-4">
                {currentSkills
                .filter(skill => skill && skill.trim() !== '')
                .map((skill, index) => (
                    <div key={index} className="rounded-lg p-2 text-center cursor-pointer border-gray-300" style={{ backgroundColor: '#f8e1e6' }}>
                    {skill}
                    </div>
                ))}
            </div>
            </div>



            <div className="mb-2">
                <p className="text-gray-700 text-sm font-bold mb-6 mt-8">
                    Want to Learn
                </p>
                <div className="grid grid-cols-3 gap-4 text-gray-500">
                    {skillsTools.wantedSkills
                        .filter(skill => skill && skill.trim() !== '')
                        .map((skill, index) => (
                            <div key={index} className="rounded-lg p-2 text-center cursor-pointer border-gray-300 text-black" style={{ backgroundColor: '#f8e1e6' }}>
                                {skill}
                            </div>
                        ))}
                </div>
            </div>


          <div className="border-t-2 border-black my-10 mb-10"></div>


          <p className="text-md text-left font-semibold mb-6">
                About You
            </p>

            <div className="mb-2">
                <p className="text-gray-700 text-sm font-bold mb-6">
                    Fields You Are Interested In
                </p>
                <div className="grid grid-cols-3 gap-4">
                    {aboutYou.fieldsOfInterest.map((field, index) => (
                        <div key={index} className="rounded-lg p-2 text-center cursor-pointer border-gray-300" style={{ backgroundColor: '#f8e1e6' }}>
                            {field}
                        </div>
                        ))}
                    </div>
                </div>


          <p className="text-md text-left font-semibold mb-4 mt-10">
                Personal Bio
            </p>

            <div className="mb-2">
            <ul className="text-gray-500 mb-6 ml-8" style={{ listStyleType: 'disc' }}>
                {aboutYou.adjectives.map((adjective, index) => (
                    <li key={index}>{adjective}</li>
                    ))}
                </ul>
            </div>

          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              Description
            </p>
            <p className="text-gray-500 mb-6">{aboutYou.description}</p>
          </div>


          <div className="border-t-2 border-black my-10 mb-10"></div>



          <p className="text-md text-left font-semibold mb-6">
                Your Availability
            </p>

          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              Your Location
            </p>
            <p className="text-gray-500 mb-6">{availabilityForm.location}</p>
          </div>


          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              Your Timezone
            </p>
            <p className="text-gray-500 mb-6">{availabilityForm.timezone}</p>
          </div>

          <div className="mb-2">
            <p className="text-gray-700 text-sm font-bold mb-1">
              Availability
            </p>
            <p className="text-gray-500">{availabilityForm.hoursPerWeek}</p>
            <div className="mb-2">
            <p className="text-gray-500">Times Available:</p>
            <ul className="text-gray-500 mb-6 ml-8" style={{ listStyleType: 'disc' }}>
                {availabilityForm.availability.map((availability, index) => (
                <li key={index}>{availability}</li>
                ))}
            </ul>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              className="w-full bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-3 rounded-lg focus-outline-none"
              style={{ backgroundColor: '#ed4168' }}
              type="button"
              onClick={navigateWelcomeDone}
            >
              Launch My Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
