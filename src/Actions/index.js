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
