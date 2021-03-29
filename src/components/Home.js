import React, { useState } from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTaskForm from './AddTaskForm';
import Search from './Search';
import LanguageContext from '../contexts/LanguageContext';

const Home = () => {
  const [lists, setLists] = useState([
    {
      name: 'Humber',
      items: ['Task 1', 'Task 2', 'Task 3'],
      id: 1,
    },
    {
      name: 'MERN',
      items: ['Lab', 'Project', 'Quiz'],
      id: 2,
    },

    {
      name: 'Java',
      items: ['Group Discussion', 'Exam', 'Assignment'],
      id: 3,
    },
  ]);
  const [lang, setLang] = useState('English');
  const [search, setSearch] = useState('');
  const filterTasks = (name) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
    // setFilterList(
    //   lists.filter((t) => t.name.toLowerCase().includes(name.toLowerCase()))
    // );
  };

  let previd = 4;
  const handleAddTask = (name, items) => {
    setLists((prevState) => [
      ...prevState,
      {
        name: name,
        items: items,
        id: (previd += 1),
      },
    ]);

    //setFilterList(lists);
  };
  const handleRemoveTask = (id) => {
    setLists((prevState) => prevState.filter((t) => t.id !== id));
  };

  let totalTask = 0;
  lists.map((t) => (totalTask += t.items.length));

  return (
    <>
      Preferred Language {lang}
      <button onClick={() => setLang('English')}>English</button>
      <button onClick={() => setLang('French')}>French</button>
      <LanguageContext.Provider value={lang}>
        <Header title='Task List' itemCount={totalTask} />
      </LanguageContext.Provider>
      <Search filterTasks={filterTasks} />
      {lists
        .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
          <Tasks
            name={g.name}
            items={g.items}
            key={g.id.toString()}
            id={g.id}
            removeTask={handleRemoveTask}
          />
        ))}
      <AddTaskForm addTask={handleAddTask} />
    </>
  );
};

export default Home;
