import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from './redux/actions';

const TaskList = () => { // Define TaskList as a functional component
    const tasks = useSelector(state => state.tasks.tasks);
    const dispatch = useDispatch();
    
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}>
              {task.text}
            </span>
            <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
          </li>
        ))}
      </ul>
    );
    
};

export default TaskList; // Export the TaskList component
