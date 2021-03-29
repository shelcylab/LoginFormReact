import React, { useState } from 'react';

const AddTaskForm = (props) => {
  const [name, setName] = useState('');
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [item3, setItem3] = useState('');

  const handleValueChange = (e) => {
    setName(e.target.value);
  };

  const handleItem1ValueChange = (e) => {
    setItem1(e.target.value);
  };

  const handleItem2ValueChange = (e) => {
    setItem2(e.target.value);
  };

  const handleItem3ValueChange = (e) => {
    setItem3(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') return;
    props.addTask(name, [item1, item2, item3]);
    setName('');
    setItem1('');
    setItem2('');
    setItem3('');
  };
  return (
    <div>
      <div className='add-task'>Add New Task</div>
      <form onSubmit={handleSubmit}>
        Name:
        <input
          className='addTaskName'
          type='text'
          placeholder='Task Name'
          value={name}
          onChange={handleValueChange}
        />
        <ul className='addTaskList'>
          <li>
            {' '}
            <input
              type='text'
              placeholder='Task item 1'
              value={item1}
              onChange={handleItem1ValueChange}
            />
          </li>
          <li>
            {' '}
            <input
              type='text'
              placeholder='Task item 2'
              value={item2}
              onChange={handleItem2ValueChange}
            />
          </li>
          <li>
            {' '}
            <input
              type='text'
              placeholder='Task item 3'
              value={item3}
              onChange={handleItem3ValueChange}
            />
          </li>
        </ul>
        <input className='addSubmit' type='submit' value='Add Task' />
      </form>
    </div>
  );
};

export default AddTaskForm;
