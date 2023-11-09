import React from 'react'
import { Link } from 'react-router-dom';

export default function TeamMember( {member} ) {

    // Function to generate a random gradient
    const generateRandomGradient = () => {
        const colors = [
            'radial-gradient(#ff7e5f, #feb47b, #f88a4b)',
            'radial-gradient(#45a29e, #66fcf1, #36fc36)',
            'radial-gradient(#3494e6, #ec6e85, #f35d5d)',
        ];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    return (
        <div className="w-1/4 bg-white p-4 rounded-lg shadow-lg text-center mx-4" >
            <Link to={`/individualteammember/${member.id}`}><div className="random-color-square mb-4 w-30 h-48 rounded" style={{ background: generateRandomGradient() }}></div></Link>
            <Link to={`/individualteammember/${member.id}`}><h2 className="text-xl font-semibold">{member.first_name} {member.last_name}</h2></Link>
            <h3 className="text-gray-600">Role: {member.prod_role}</h3>
            <h3 className="text-gray-600">Email: {member.email}</h3>
            <button onClick={() => window.location = `mailto:${member.email}`} className='rounded-lg border border-rose-500 w-full h-[40px] py-4 mt-2 font-bold rounded' style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                    <g id="Send Message">
                      <path id="Vector 67" d="M17.8212 1.43106L2.36655 6.38543L9.58171 9.67058M17.8212 1.43106L12.8669 16.8857L9.58171 9.67058M17.8212 1.43106L9.58171 9.67058" stroke="black" />
                    </g>
                  </svg>
                  Send an Email
                </button>
            <p className="text-left mt-2">Location: <b>{member.location}</b></p>
            <p className="text-left">Timezone: <b>{member.timezone}</b></p>
            <h3 className="text-left font-bold mt-2">Experience</h3>
            <ul className="text-left">
                <li>{member.prev_role ? member.prev_role : ''}</li>
                <li>{member.prod_role ? member.prod_role : ''}, {member.prod_exp ? member.prod_exp : ''}</li>
            </ul>
            <h3 className="text-left flex justify-between items-center mt-2"><b>About</b> <p className='text-xs'>(scrollable)</p></h3>
            <p className="text-left h-[100px] overflow-y-auto">{member.about}</p>
        </div>
    )
}
