import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {

    const user = useSelector((state) => state.user)

    const navigate = useNavigate();
    const navigateAboutYou = () => {
        navigate('/about-you');
    }

  return (

    <div style={{ backgroundColor: 'white' }}>
        <div className=''>
            <div className='top'>
                <button className="hover:underline text-lg mr-4" onClick={() => navigate("/professional-background")} style={{ display: 'flex', alignItems: 'center' }}>
                    <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                        <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                    </svg>
                    Back
                </button>
            </div>
            <div>
                {/* User's name from redux*/}
                <h1>{user.data.first_name} {user.data.last_name}</h1>
            </div>

            <div className='middle flex justify-center space-x-60'>
                <div className='image'>
                    
                    <img className="" src="https://picsum.photos/200/200" alt="" />
                </div>
                <div className='time'>
                    <div>
                        <img src="https://picsum.photos/50/50" alt="" />
                    
                        <div>
                            <h3>Location</h3>
                            <h4>Years of Experience</h4>
                        </div>
                    </div>

                    <div>
                        <p>Adjective 1</p>
                        <p>Adjective 2</p>
                        <p>Adjective 3</p>
                    </div>
                    
                </div>
                    <div className='message w-1/4'>
                        <button className='border rounded w-full py-4' style={{backgroundColor: '#36d6e3'}}>Send a Message</button>
                        <p>Interested in:</p>
                        <div className="interest-buttons">
                            <button className="white-button px-3 py-1 rounded border-black border-2">Fintech</button>
                            <button className="white-button px-3 py-1 rounded border-black border-2">Education</button>
                            <button className="white-button px-3 py-1 rounded border-black border-2">Non-Profit</button>
                        </div>
                        <p>Available:</p>
                        <ul>
                            <li># of hours / week</li>
                        </ul>
                        <p>Currently Working On:</p>
                        <ul>
                            <li># of hours / week</li>
                        </ul>
                    </div>
            </div>


        </div>
    </div>
  )
}
