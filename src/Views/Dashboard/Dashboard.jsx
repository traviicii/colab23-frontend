import React, { useState } from 'react';
import './Dashboard.css';
import Task from '../../Components/Dashboard/Task';
import Team from '../../Components/Dashboard/Team';
import Resources from '../../Components/Dashboard/Resources';
import ProjectChat from '../../Components/Dashboard/ProjectChat';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const [activeDisplay, setActiveDisplay] = useState('task');

    const name = useSelector((state) => state.personalForm.firstName)
  
    const handleLinkClick = (display) => {
      setActiveDisplay(display);
    };
  
    let displayComponent;
  
    if (activeDisplay === 'task') {
      displayComponent = <Task />;
    } else if (activeDisplay === 'team') {
      displayComponent = <Team />;
    } else if (activeDisplay === 'resources') {
      displayComponent = <Resources />
    } else if (activeDisplay === 'project-chat') {
      displayComponent = <ProjectChat />
    }

  return (
    <div className="h-screen pl-20 pt-20 mb-60">
      <h1 className="text-5xl font-bold pb-5 text-white">Hey, {name}!</h1>
      <p className="text-3xl text-white">It's Week XX of Project Name-</p>
      <p className="text-3xl text-white">Let's take a look at what's going on...</p>

      <div className="flex justify-center mt-20">
        <div className="link-container flex">
          <div className="tab-link" onClick={() => handleLinkClick('task')}>
            <p>Task</p>
          </div>
          <div className="tab-link" onClick={() => handleLinkClick('team')}>
            <p>Team</p>
          </div>
          <div className="tab-link" onClick={() => handleLinkClick('resources')}>
            <p>Resources</p>
          </div>
          <div className="tab-link" onClick={() => handleLinkClick('project-chat')}>
            <p>Project Chat</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-4 h-auto w-5/6 mx-auto rounded-xl" style={{ backgroundColor: '#1f1d34' }}>
        <div>
            {displayComponent}
        </div>
      </div>
    </div>
  );
}
