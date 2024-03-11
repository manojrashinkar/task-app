// components/AddTaskForm.js
import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() === '') {
      setError('Task name cannot be empty');
      return;
    }
    addTask(taskName);
    setTaskName('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
        
      <input type="text" value={taskName} onChange={handleChange} placeholder="Add Task" />
      <button type="submit">Add</button>
   
      {error && <p>{error}</p>}
    </form>
  );
}

export default AddTaskForm;
