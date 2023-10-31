import React from 'react';
import { useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import UserCard from './UserCard';

export default function ProjectDisplay({ projects, users }) {
  // Get the filter object from Redux state
  const reduxObject = useSelector((state) => state.filter);

  // Function to extract values from the filter object
  function extractValues(obj) {
    const filterProjectList = [];

    for (const key in obj) {
      if (key === 'interests') {
        filterProjectList.push(...obj[key]);
      } else {
        filterProjectList.push(obj[key]);
      }
    }

    return filterProjectList;
  }

  // Extract values from the Redux filter object
  let filterResults = extractValues(reduxObject);

  // Convert filter results to lowercase strings
  const targetStrings = filterResults.map(value => value ? value.toLowerCase() : value);

  // Get project and user dictionaries from Redux state
  const projectDictionaryList = useSelector((state) => state.projectUser.projects);
  const userDictionaryList = useSelector((state) => state.projectUser.users);
  const peopleOrProjects = useSelector((state) => state.filter.mainFilter);

  // Filtering function for projects
  function filterProjects() {
    const filteredProjects = [];

    for (const projectObject of projectDictionaryList) {
      if (matchesProjectFilterCriteria(projectObject)) {
        filteredProjects.push(projectObject);
      }
    }

    return filteredProjects;
  }

  // Filtering function for users
  function filterUsers() {
    const filteredUsers = [];

    for (const userObject of userDictionaryList) {
      if (matchesUserFilterCriteria(userObject)) {
        filteredUsers.push(userObject);
      }
    }

    return filteredUsers;
  }

  // Function to check if a project matches the filter criteria
  function matchesProjectFilterCriteria(projectObject) {
    let openMatch = false; // Flag for 'open' match
    let completeMatch = false; // Flag for 'complete' match
    let designerMatch = false; // Flag for 'designer' match
    let developerMatch = false; // Flag for 'developer' match
    let projectManagerMatch = false; // Flag for 'project manager' match

    for (const key in projectObject) {
      const value = projectObject[key];

      // Check for 'complete' key and value
      if (key === 'complete') {
        if (value === false && matchesTargetString('open')) {
          openMatch = true;
        } else if (value === true && matchesTargetString('complete')) {
          completeMatch = true;
        }
      }

      // Check for other keys if array or string
      if (Array.isArray(value)) {
        for (const element of value) {
          if (matchesTargetString(element)) {
            return true;
          }
        }
      } else {
        if (matchesTargetString(value)) {
          return true;
        }
      }

      // Check for 'need_designer' key and value
      if (key === 'need_designer' && value === true && matchesTargetString('designer')) {
        designerMatch = true;
      }

      // Check for 'need_dev' key and value
      if (key === 'need_dev' && value === true && matchesTargetString('developer')) {
        developerMatch = true;
      }

      // Check for 'need_pm' key and value
      if (key === 'need_pm' && value === true && matchesTargetString('project manager')) {
        projectManagerMatch = true;
      }
    }

    // Add to projectObjects if any of the conditions are true
    return (
      openMatch ||
      completeMatch ||
      designerMatch ||
      developerMatch ||
      projectManagerMatch
    );
  }

  // Function to check if a user matches the filter criteria
  function matchesUserFilterCriteria(userObject) {
    for (const key in userObject) {
      const value = userObject[key];

      if (key === 'interests' && Array.isArray(value)) {
        for (const interest of value) {
          if (matchesTargetString(interest)) {
            return true;
          }
        }
      } else {
        if (key === 'role' && matchesTargetString(value)) {
          return true;
        }
      }
    }
    return false;
  }

  // Function to check if a value matches any of the target strings
  function matchesTargetString(value) {
    if (typeof value === "string") {
      return targetStrings.includes(value.toLowerCase());
    }
    return false; 
  }

  // Get the filtered projects and users
  const matchingProjects = filterProjects();
  const matchingUsers = filterUsers();




  // Function to render the matching projects
  const showProjects = () => {
    const projectsToDisplay = matchingProjects.length > 0 ? matchingProjects : projectDictionaryList;

    return projectsToDisplay.map((project, index) => (
      <ProjectCard key={index} project={project} />
    ));
  };

  // Function to render the matching users
  const showMatchingUsers = () => {
    const usersToDisplay = matchingUsers.length > 0 ? matchingUsers : userDictionaryList;
    return usersToDisplay.map((user, index) => (
      <UserCard key={index} user={user} />
    ));
  };

  return (
    <div style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column' }} className=''>
      <div className="flex flex-wrap pl-2">
        {(peopleOrProjects === 'Projects' || !peopleOrProjects) && showProjects()}
        {(peopleOrProjects === 'People' || !peopleOrProjects) && showMatchingUsers()}
      </div>
    </div>
  );
}
