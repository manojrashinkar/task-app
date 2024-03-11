// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <li>
      <span
        onClick={() => toggleTaskCompletion(task.id)}
        style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
      >
        {task.name}
      </span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;
