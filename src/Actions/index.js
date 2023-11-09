import { v4 as uuidv4 } from 'uuid';

//Personal Details
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_LINKEDIN = 'SET_LINKEDIN';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_CONFIRM_PASSWORD = 'SET_CONFIRM_PASSWORD';

export const setFirstName = (firstName) => ({
  type: SET_FIRST_NAME,
  payload: firstName,
});

export const setLastName = (lastName) => ({
  type: SET_LAST_NAME,
  payload: lastName,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});

export const setLinkedIn = (linkedin) => ({
  type: SET_LINKEDIN,
  payload: linkedin,
});

export const setPassword = (password) => ({
  type: SET_PASSWORD,
  payload: password,
});

export const setConfirmPassword = (confirmPassword) => ({
  type: SET_CONFIRM_PASSWORD,
  payload: confirmPassword,
});
//End of Personal Details


// New actions for professional background form
export const SET_PREVIOUS_ROLE = 'SET_PREVIOUS_ROLE';
export const SET_YEARS_OF_EXPERIENCE = 'SET_YEARS_OF_EXPERIENCE';
export const SET_MENTORSHIP_STATUS = 'SET_MENTORSHIP_STATUS';
export const SET_PRODUCT_ROLE = 'SET_PRODUCT_ROLE';
export const SET_PRODUCT_EXPERIENCE = 'SET_PRODUCT_EXPERIENCE';

export const setPreviousRole = (previousRole) => ({
  type: SET_PREVIOUS_ROLE,
  payload: previousRole,
});

export const setMentorshipStatus = (isMentor) => ({
  type: SET_MENTORSHIP_STATUS,
  payload: isMentor,
});

export const setProductRole = (productRole) => ({
  type: SET_PRODUCT_ROLE,
  payload: productRole,
});

export const setProductExperience = (productExperience) => ({
  type: SET_PRODUCT_EXPERIENCE,
  payload: productExperience,
});
//End Professional Background

//Skills and Tools
export const SET_DESIGN_SKILLS = "SET_DESIGN_SKILLS"
export const SET_DEVELOPER_SKILLS = "SET_DEVELOPER_SKILLS"
export const SET_MANAGEMENT_SKILLS = "SET_MANAGEMENT_SKILLS"
export const SET_OTHER_SKILLS = "SET_OTHER_SKILLS"
export const SET_WANTED_SKILLS = "SET_WANTED_SKILLS"

export const setDesignSkills = (designSkills) => ({
  type: SET_DESIGN_SKILLS,
  payload: designSkills,
});

export const setDeveloperSkills = (developerSkills) => ({
  type: SET_DEVELOPER_SKILLS,
  payload: developerSkills,
});

export const setManagementSkills = (managementSkills) => ({
  type: SET_MANAGEMENT_SKILLS,
  payload: managementSkills,
});

export const setOtherSkills = (otherSkills) => ({
  type: SET_OTHER_SKILLS,
  payload: otherSkills,
})

export const setWantedSkills = (wantedSkills) => ({
  type: SET_WANTED_SKILLS,
  payload: wantedSkills,
})

//End Skills and Tools

// New actions for about you form
export const SET_ADJECTIVES = 'SET_ADJECTIVES';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_FIELDS_OF_INTEREST = 'SET_FIELDS_OF_INTEREST';
export const SET_OTHER_INTERESTS = 'SET_OTHER_INTERESTS';

export const setAdjectives = (adjectives) => ({
  type: SET_ADJECTIVES,
  payload: adjectives,
});

export const setDescription = (description) => ({
  type: SET_DESCRIPTION,
  payload: description,
});

export const setFieldsOfInterest = (fieldsOfInterest) => ({
  type: SET_FIELDS_OF_INTEREST,
  payload: fieldsOfInterest,
});

export const setOtherInterests = (fieldsOfInterest) => ({
  type: SET_OTHER_INTERESTS,
  payload: fieldsOfInterest,
});


// New actions for availability form
export const SET_LOCATION = 'SET_LOCATION';
export const SET_TIMEZONE = 'SET_TIMEZONE';
export const SET_HOURS_PER_WEEK = 'SET_HOURS_PER_WEEK';
export const SET_AVAILABILITY = 'SET_AVAILABILITY';

export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});

export const setTimezone = (timezone) => ({
  type: SET_TIMEZONE,
  payload: timezone,
});

export const setHoursPerWeek = (hoursPerWeek) => ({
  type: SET_HOURS_PER_WEEK,
  payload: hoursPerWeek,
});

export const setAvailability = (availability) => ({
  type: SET_AVAILABILITY,
  payload: availability,
});

// User Specific Information gained on ligging in
export const SET_PROJECT_TEAM = 'SET_PROJECT_TEAM';
export const SET_PROJECT = 'SET_PROJECT';
export const SET_PROJECT_RESOURCES = 'SET_PROJECT_RESOURCES';
export const SET_PROJECT_LINKS = "SET_PROJECT_LINKS";
export const SET_PROJECT_INSPIRATION = "SET_PROJECT_INSPIRATION"
export const SET_DATA = 'SET_DATA';

export const setUserProjectTeam = (team) => ({
  type: SET_PROJECT_TEAM,
  payload: team
})

export const setUserProject = (project) => ({
  type: SET_PROJECT,
  payload: project
})

export const setUserProjectResources = (resources) => ({
  type: SET_PROJECT_RESOURCES,
  payload: resources
})

export const setUserData = (data) => ({
  type: SET_DATA,
  payload: data
})

export const setUserProjectLinks = (links) => ({
  type: SET_PROJECT_LINKS,
  payload: links
})

export const setUserProjectInspiration = (inspirations) => ({
  type: SET_PROJECT_INSPIRATION,
  payload: inspirations
})
//end user login info


// New actions for adding a to-do task
export const TOGGLE_TASK_COMPLETION = 'TOGGLE_TASK_COMPLETION'
export const ADD_TASK = 'ADD_TASK'

export const toggleTaskCompletion = (taskId) => {
  return {
    type: TOGGLE_TASK_COMPLETION,
    payload: taskId,
  };
};

export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: 
    // {
      // id: uuidv4(), // Generate a unique ID
      task
      // completed: false, // Initialize the completed property
    // },
  };
};



// New actions for adding a new meeting
export const ADD_MEETING = 'ADD_MEETING';

export const addMeeting = (meeting) => {
  return {
    type: 'ADD_MEETING',
    payload: meeting,
  };
};


// New actions for filtering
export const SET_MAIN_FILTER = 'SET_MAIN_FILTER';
export const SET_ROLE = 'SET_ROLE';
export const SET_STATUS = 'SET_STATUS';
export const SET_DURATION = 'SET_DURATION';
export const SET_INTERESTS = 'SET_SELECTED_FIELDS';

export const setMainFilter = (filter) => ({
  type: SET_MAIN_FILTER,
  payload: filter,
});

export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});

export const setStatus = (status) => ({
  type: SET_STATUS,
  payload: status,
});

export const setDuration = (duration) => ({
  type: SET_DURATION,
  payload: duration,
});



export const setInterests = (interests) => ({
  type: SET_INTERESTS,
  payload: interests,
});


// New actions for adding projects and users from database
export const ADD_PROJECT = 'ADD_PROJECT';
export const ADD_USER = 'ADD_USER';
export const CLEAR_PROJECTS = 'CLEAR_PROJECTS';
export const CLEAR_USERS = 'CLEAR_USERS';


export const addProject = (project) => ({
  type: ADD_PROJECT,
  payload: project,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const clearProjects = (payload) => ({
  type: CLEAR_PROJECTS,
  payload,
});

export const clearUsers = (payload) => ({
  type: CLEAR_USERS,
  payload, 
});


// Toasts/Popup notifications
export const ADD_TOAST = 'ADD_TOAST';
export const REMOVE_TOAST = 'REMOVE_TOAST';

export const addToast = (message, type = 'info') => ({
  type: ADD_TOAST,
  payload: { message, type }
});

export const removeToast = (id) => ({
  type: REMOVE_TOAST,
  payload: id
});
