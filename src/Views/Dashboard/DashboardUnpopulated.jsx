import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function DashboardUnpopulated() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()

  const user = useSelector((state) => state.user)

  const navigateToBrowser = () => {
    navigate("/project-browser")
  }

  return (
    <div className="h-screen pl-24 pt-24 text-white">
      <h1 className="text-4xl font-bold pb-5">Welcome {user.data.first_name}!</h1>
      <p className="text-2xl">You currently don't have any projects!</p>
      <p className="text-2xl mt-3">Let's find a great project to join...</p>

      <div className="flex flex-col items-center">
        <img
          src={process.env.PUBLIC_URL + '/assets/SadPlanet.png'}
          alt="Empty Gif"
          className="w-80 max-h-96 mx-auto"/>

        <div className="flex justify-center mt-10 ">
        <button onClick={navigateToBrowser} className="m-2 px-20 py-2 text-black rounded-lg hover:bg-gray-200" style={{ backgroundColor: '#ed4168' }}>
            Explore or Create Projects
        </button>

        </div>
      </div>
    </div>
  );
}
