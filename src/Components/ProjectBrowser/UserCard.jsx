import React from 'react'
import Industries from './Industries'
import { Link } from 'react-router-dom'

export default function UserCard({ user }) {

    const displayIndustries = () => {
        return user.interests.map((interest, index) => <Industries key={index} industry={interest} />)
    }

    const colors = ['#ED4068', '#135279', '#EBB237', '#626171', '#ECAFBD', '#36D6E3', '#F3D187', '#BCBBC2', '#D7F7F9']

    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)]
      }

    return (
        <div className='mx-3 my-3 w-96'>
            <div className="w-full border border-gray-200 rounded-lg shadow-xl" style={{ backgroundColor: '#f9e8c3' }}>

                <div className='flex justify-center'>
                    <div className="flex justify-center items-center rounded-full drop-shadow-lg w-40 h-40 mt-6 px-3 py-6" style={{backgroundColor: `${randomColor(colors)}`}}>
                        <Link to={`/individualteammember/${user.id}`}>
                            <p className='text-bold text-5xl tracking-tight'>{user.first_name.charAt(0)} {user.last_name.charAt(0)}</p>
                            {/* <img className="w-1/2 h-1/2 mt-6" src="https://picsum.photos/150/100" alt="" /> */}
                        </Link>
                    </div>
                </div>

                {/* User information */}
                <div className="py-6 px-4">

                    {/* Name */}
                    <Link to={`/individualteammember/${user.id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{user.first_name} {user.last_name}</h5>
                    </Link>

                    {/* Location */}
                    <div className='flex'>
                        <p className='font-bold mr-2'>Location:</p>
                        <p> {user.location}</p>
                    </div>

                    {/* Interests */}
                    <div className='flex justify-center'>
                        <p className="mt-4 mr-2 font-bold">Interests</p>
                    </div>
                    <div className="mb-3 flex flex-wrap justify-center">
                        {user.interests ? displayIndustries() : ''}
                    </div>

                    {/* Product Experience */}
                    <div className="flex mb-2 mt-6">
                        <div className='flex'>
                            <p className='font-bold mr-2'>Years of Experience:</p>
                            <p>{user.prod_exp}</p>
                        </div>
                    </div>

                    {/* About */}
                    <div className="mt-4">
                        <h6 className="font-bold mr-2">About:</h6>
                        <p className="w-full">{user.about}</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
