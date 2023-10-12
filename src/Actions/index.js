
//Personal Details
export const SET_FIRST_NAME = 'SET_FIRST_NAME';
export const SET_LAST_NAME = 'SET_LAST_NAME';
export const SET_EMAIL = 'SET_EMAIL';
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

export const setYearsOfExperience = (yearsOfExperience) => ({
  type: SET_YEARS_OF_EXPERIENCE,
  payload: yearsOfExperience,
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


// New actions for about you form
export const SET_ADJECTIVES = 'SET_ADJECTIVES';
export const SET_DESCRIPTION = 'SET_DESCRIPTION';
export const SET_FIELDS_OF_INTEREST = 'SET_FIELDS_OF_INTEREST';

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
