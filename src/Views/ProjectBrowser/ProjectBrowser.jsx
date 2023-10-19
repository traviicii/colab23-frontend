import React from 'react'
import ProjectSidebar from '../../Components/ProjectBrowser/ProjectSidebar'
import ProjectDisplay from '../../Components/ProjectBrowser/ProjectDisplay'

export default function ProjectBrowser() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4">
        <ProjectSidebar />
      </div>
      
      {/* Display */}
      <div className="w-3/4">
        <ProjectDisplay />
      </div>
    </div>
  )
}
