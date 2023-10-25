import { ADD_TASK, TOGGLE_TASK_COMPLETION } from '../Actions';

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {...state, tasks: action.payload};
    case TOGGLE_TASK_COMPLETION:
      const taskId = action.payload; // No need to destructure
      console.log('Task ID from action:', taskId);

      // Map over tasks and update the task with the matching ID
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          console.log('Task ID in state:', task.id); // Log the task ID in the state
          if (task.id === taskId) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};
