// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTask } from './redux/actions';

// // const TaskInput = ({ addTask }) => 
// // {
// //   const [taskText, setTaskText] = useState('');

// //   const handleChange = (event) => {
// //     setTaskText(event.target.value);
// //   };

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     if (!taskText.trim()) return; // Ignore if taskText is empty or only whitespace
// //     addTask(taskText);
// //     setTaskText('');
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input
// //         type="text"
// //         placeholder="Enter task"
// //         value={taskText}
// //         onChange={handleChange}
// //       />
// //       <button type="submit">Add Task</button>
// //     </form>
// //   );
// // };

// const dispatch = useDispatch();

// const handleSubmit = (event) => {
//   event.preventDefault();
//   if (!taskText.trim()) return; // Ignore if taskText is empty or only whitespace
//   dispatch(addTask(taskText));
//   setTaskText('');
// };


// export default TaskInput;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/actions';
import './TaskInput.css'; 

const TaskInput = () => {
  const [taskText, setTaskText] = useState(''); // Define taskText state
  const dispatch = useDispatch(); // Get dispatch function from Redux

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!taskText.trim()) return; // Ignore if taskText is empty or only whitespace
    dispatch(addTask(taskText)); // Dispatch action to add task
    setTaskText(''); // Clear taskText after adding task
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(event) => setTaskText(event.target.value)} // Update taskText state on input change
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;

