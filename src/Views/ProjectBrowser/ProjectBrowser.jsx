import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProject, addUser, clearProjects, clearUsers } from '../../Actions';
import ProjectSidebar from '../../Components/ProjectBrowser/ProjectSidebar';
import ProjectDisplay from '../../Components/ProjectBrowser/ProjectDisplay';
import CreateProjectModal from '../../Components/ProjectBrowser/CreateProjectModal';

const BACK_END_URL = process.env.REACT_APP_BACKEND_URL;

export default function ProjectBrowser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const fetchBrowserData = async () => {
      try {
        const res = await fetch(BACK_END_URL + '/api/getteamsbrowser', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.data.apitoken}`,
          },
        });

        const data = await res.json();
        
      
        if (data.status === 'ok') {

          // Dispatch clear actions to remove existing data
          dispatch(clearProjects());
          dispatch(clearUsers());

          // Update local component state
          setProjects(data.projects);
          setUsers(data.users);

          // Dispatch actions to update Redux store
          data.projects.forEach((project) => {
            dispatch(addProject(project));
          });

          data.users.forEach((user) => {
            dispatch(addUser(user));
          });

          
          console.log('data', data.users);
        } else {
          console.log("Couldn't get team browser data.");
        }
      } catch (error) {
        console.error("Couldn't get team browser data:", error);
      }
    };

    fetchBrowserData(); 
  }, []);

  return (
    <div className="flex">
      <div className="w-1/4" style={{ display: 'flex', flexDirection: 'column' }}>
        <ProjectSidebar openModal={toggleModal} />
        <CreateProjectModal isOpen={isModalOpen} closeModal={toggleModal} />
      </div>

      <div className="w-3/4">
        <ProjectDisplay projects={projects} users={users} />
      </div>
    </div>
  );
}
