// src/redux/actions/taskActions.js

import { ADD_TASK } from './types';

export const addTask = taskText => {
  return dispatch => {
    // Dispatch action to add task
    dispatch({
      type: ADD_TASK,
      payload: taskText
    });

    // Retrieve tasks from local storage
    const storedTasks = localStorage.getItem('tasks');
    const tasks = storedTasks ? JSON.parse(storedTasks) : [];

    // Add the new task to the tasks array
    tasks.push({ id: generateUniqueId(), text: taskText });

    // Save the updated tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
};
