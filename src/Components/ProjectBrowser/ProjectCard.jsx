import React from 'react'
import Industries from './Industries'

export default function ProjectCard({ project }) {

    const displayIndustries = () => {
        return project.industries.map((industry, index) => <Industries key={index} industry={industry} />)
    }

    return (
        <div className='mx-3 my-3 w-96'>
            <div className="w-full bg-white border border-gray-200 rounded-lg shadow-xl" style={{ backgroundColor: '#f8e1e6' }}>
                <a href="#">
                    <img className="rounded-t-lg w-full" src="https://picsum.photos/400/150" alt="" />
                </a>

                {/* Project Information */}
                <div className="py-6 px-4">

                    {/* Name */}
                    <div className='flex flex-col items-center'>
                        <p className='mr-2'>Project</p>
                        <a href="#" className='mb-4 text-2xl font-bold tracking-tight text-gray-900'><p>{project.name}</p></a>
                    </div>

                    {/* Industries */}
                    <div className="mb-3 flex flex-wrap justify-center">
                        {/* Display industries from Industries component */}
                        {project.industries ? displayIndustries() : ''}
                    </div>

                    {/* Admin/Creator */}
                    <div className='flex'>
                        <p className='font-bold mr-2'>Project Creator:</p>
                        <p>{project.admin_name}</p>
                    </div>

                    <div className="flex justify-between mb-4 mt-4">
                        {/* Team Size - Currently just a length count on list of members. Should be desired size instead? */}
                        <div className="mr-10">
                            <p className='font-bold whitespace-nowrap'>Team Size</p>
                            <p>{project.team_size}</p>
                        </div>

                        {/* Roles need for project */}
                        <div className='flex flex-col items-center'>
                            <p className='font-bold'>Roles Needed:</p>
                            <div className='flex flex-wrap justify-center'>
                                {project.need_dev === true ? <div className="rounded-lg text-center border border-[#ED4068] bg-transparent m-1 py-1 px-2 w-fit h-fit" >Developer</div> : ''}
                                {project.need_designer === true ? <div className="rounded-lg text-center border border-[#ED4068] bg-transparent m-1 p-1 w-fit h-fit" >Designer</div> : ''}
                                {project.need_pm === true ? <div className="rounded-lg text-center border border-[#ED4068] bg-transparent m-1 p-1 w-fit h-fit" >Project Manager</div> : ''}
                            </div>

                        </div>
                    </div>

                    <div className="flex mb-2">
                        {/* Admin's Timezone? */}
                        <div className="mr-14">
                            <p className='font-bold'>Timezone</p>
                            <p>{project.admin_timezone}</p>
                        </div>

                        {/* Project duration */}
                        <div>
                            <p className='font-bold'>Duration:</p>
                            <p>{project.duration}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
