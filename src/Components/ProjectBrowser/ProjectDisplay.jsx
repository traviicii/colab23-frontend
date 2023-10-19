import React from 'react';
import ProjectCard from './ProjectCard';
import UserCard from './UserCard';

export default function ProjectDisplay() {
  return (
    <div style={{ backgroundColor: 'white' }} className='h-screen'>
      <div className="flex">

        {/* Project card */}
        <ProjectCard/>

        {/* User Card */}
        <UserCard/>
      </div>
    </div>
  );
}
