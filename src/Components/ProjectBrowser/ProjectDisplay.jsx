import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import UserCard from './UserCard';
import { useSelector } from 'react-redux';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL

export default function ProjectDisplay() {

  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([])

  const user = useSelector((state) => state.user)

  useEffect(()=>{getBrowser()}, [])

  const getBrowser = async () => {
    const token = user.data.apitoken
    const url = BACK_END_URL + '/api/getteamsbrowser'
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      if (data.status ==='ok') {
        console.log(data)
        setProjects(data.projects)
        setUsers(data.users)
      }
    }
    catch {
      console.log("Couldn't get team browser data.")
    }

  }

  const showProjects = () => {
    return projects.map((project, index) => <ProjectCard key={index} project={project}/>)
  }

  const showUsers = () => {
    return users.map((user, index) => <UserCard key={index} user={user}/>)
  }
  
  return (
    <div style={{ backgroundColor: 'white' }} className=''>
      <div className="flex flex-wrap pl-2 py-1">

        {/* Project card */}
        {showProjects()}

        {/* User Card */}
        {showUsers()}
      </div>
    </div>
  );
}
