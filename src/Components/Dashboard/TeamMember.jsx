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
            <button className="hover:bg-gray-200 border-2 border-black font-bold py-2 px-4 rounded mt-4 w-full flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                    <path d="M4.66671 5.99998H10.6667M4.66671 8.66665H10.6667M4.66671 11.3333H8.00004M14.6667 7.99998C14.6667 11.682 11.682 14.6666 8.00004 14.6666H1.33337V7.99998C1.33337 4.31798 4.31804 1.33331 8.00004 1.33331C11.682 1.33331 14.6667 4.31798 14.6667 7.99998Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Send a Message
            </button>
            <p className="text-left mt-8">Location: {member.location}</p>
            <h3 className="text-left font-bold mt-8">To Do</h3>
            <ul className="text-left">
                <li>Need to do this task, Timestamp</li>
                <li>Need to do this task, Timestamp</li>
            </ul>
            <h3 className="text-left font-bold mt-8">Recently Completed</h3>
            <ul className="text-left">
                <li>Completed this task, Timestamp</li>
                <li>Completed this task, Timestamp</li>
            </ul>
        </div>
    )
}
