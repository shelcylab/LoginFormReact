import React from 'react';

function TaskItem({ item }) {
  return (
    <li>
      <span className='task-item'>{item}</span>
    </li>
  );
}

export default TaskItem;
