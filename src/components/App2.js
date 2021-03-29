import React from 'react';
import Header from './Header';
import Tasks from './Tasks';
import AddTaskForm from './AddTaskForm';
class App extends React.Component {
  state = {
    searchTerm: '',
    lists: [
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
    ],
  };

  previd = 4;
  handleAddTask = (name, items) => {
    this.setState((prevState) => {
      return {
        lists: [
          ...prevState.lists,
          {
            name: name,
            items: items,
            id: (this.previd += 1),
          },
        ],
      };
    });
  };
  handleRemoveTask = (id) => {
    this.setState((prevState) => {
      return {
        lists: prevState.lists.filter((g) => g.id !== id),
      };
    });
  };

  render() {
    let totalTask = 0;
    this.state.lists.map((t) => (totalTask += t.items.length));

    return (
      <>
        <Header title='Task List' itemCount={totalTask} />

        {this.state.lists.map((g) => (
          <Tasks
            name={g.name}
            items={g.items}
            key={g.id.toString()}
            id={g.id}
            removeTask={this.handleRemoveTask}
          />
        ))}
        <AddTaskForm addTask={this.handleAddTask} />
      </>
    );
  }
}

export default App;
