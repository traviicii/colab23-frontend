import React, { useState } from 'react';
import ProjectSidebar from '../../Components/ProjectBrowser/ProjectSidebar';
import ProjectDisplay from '../../Components/ProjectBrowser/ProjectDisplay';
import CreateProjectModal from '../../Components/ProjectBrowser/CreateProjectModal';

export default function ProjectBrowser() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  

    return (
      <div className="flex">
        <div className="w-1/4" style={{ display: 'flex', flexDirection: 'column' }}>
          <ProjectSidebar openModal={toggleModal} />
          <CreateProjectModal isOpen={isModalOpen} closeModal={toggleModal} />
        </div>
  
        <div className="w-3/4">
          <ProjectDisplay />
        </div>
      </div>
    )
  }