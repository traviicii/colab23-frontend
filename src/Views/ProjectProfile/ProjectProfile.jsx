import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ProjectProfile() {

    const navigate = useNavigate();

    return (
        <div style={{ backgroundColor: 'white' }}>
            <div className="">
                <div className='top w-3/4 ml-36 mb-10 space-y-6'>
                    <button className="hover:underline text-lg mr-4 w-3/4 pt-4" onClick={() => navigate("/project-browser")} style={{ display: 'flex', alignItems: 'center' }}>
                        <svg fill="#000000" width="20" height="20" viewBox="0 0 42 42" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                            <polygon fillRule="evenodd" points="31,38.32 13.391,21 31,3.68 28.279,1 8,21.01 28.279,41" />
                        </svg>
                        Back
                    </button>
                <div>
                    <h1 className='text-2xl font-bold'>Project Name</h1>
                </div>
                </div>

                <div className='middle flex space-x-32 w-full justify-center'>
                    <div className='image'>
                        <img className="" src="https://picsum.photos/400/300" alt="" />
                    </div>
                    <div className='time'>
                        <div className='flex'>
                            <div>
                                <h3 className='text-2xl'># of weeks</h3>
                                <h4 className='text-2xl'>Posted: x days ago</h4>
                            </div>
                        </div>
                        <div>
                            <button className="white-button px-3 py-1 my-4 rounded border-black border-2">Open</button>
                        </div>
                        <div className='industries'>
                            <p>Industries:</p>
                            <div className="interest-buttons space-x-2 mt-4 mb-4">
                            <button className="white-button px-3 py-1 rounded border-black border-2">Fintech</button>
                            <button className="white-button px-3 py-1 rounded border-black border-2">Education</button>
                            <button className="white-button px-3 py-1 rounded border-black border-2">Non-Profit</button>
                        </div>
                        </div>
                    </div>
                    <div className='message w-1/4'>
                        <button className='border rounded w-full py-4 mb-4' style={{ backgroundColor: '#36d6e3' }}>Request to Join</button>
                        <p>Interested in:</p>
                        <div className="interest-buttons space-x-2 mt-4 mb-4">
                            <button className="white-button px-3 py-1 rounded border-black border-2">Fintech</button>
                            <button className="white-button px-3 py-1 rounded border-black border-2">Education</button>
                            <button className="white-button px-3 py-1 rounded border-black border-2">Non-Profit</button>
                        </div>
                        <p>Available:</p>
                        <ul>
                            <li># of hours / week</li>
                        </ul>
                        <p className='mt-4'>Currently Working On:</p>
                        <ul>
                            <li># of hours / week</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white flex justify-center w-full py-8">
                <div className="w-5/6 flex">
                    <div className="w-1/2 p-4 rounded-l-lg" style={{ backgroundColor: '#f3d187' }}>
                        <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis non maxime, inventore quae numquam tenetur suscipit iusto similique sequi illo vero doloremque praesentium earum quod incidunt id dolores error sunt.</p>
                    </div>
                    <div className="w-1/2 p-4 rounded-r-lg" style={{ backgroundColor: '#ebb237' }}>
                        <ol>
                            <h2 className="text-2xl font-semibold mb-4">Looking For</h2>
                            <li>People who are interested in:</li>
                            <div className="interest-buttons">
                            <button className="bg-white px-3 py-1 m-1 rounded border-black border">Fintech</button>
                            <button className="bg-white px-3 py-1 m-1 rounded border-black border">Education</button>
                            <button className="bg-white px-3 py-1 m-1 rounded border-black border">Non-Profit</button>

                            <li>Available for #xx hours / week</li>
                            <li>Experience with xyz things</li>
                        </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}