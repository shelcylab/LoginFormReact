import React from 'react';
import TaskItem from './TaskItem';

function Tasks({ id, name, items, removeTask }) {
  return (
    <div className='task'>
      <div className='task-name'>
        <button className='remove-task' onClick={() => removeTask(id)}>
          <span role='img' aria-label='close'>
            {' '}
            &#x274c;
          </span>
        </button>
        {name}
      </div>
      <ol>
        {items.map((i) => (
          <TaskItem item={i} key={i} />
        ))}
      </ol>
    </div>
  );
}

export default Tasks;
