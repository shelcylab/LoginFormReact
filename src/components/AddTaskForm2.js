import React from 'react';

class AddTaskForm extends React.Component {
  state = {
    name: '',
    item1: '',
    item2: '',
    item3: '',
  };
  handleValueChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleItem1ValueChange = (e) => {
    this.setState({ item1: e.target.value });
  };
  handleItem2ValueChange = (e) => {
    this.setState({ item2: e.target.value });
  };
  handleItem3ValueChange = (e) => {
    this.setState({ item3: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '') return;
    this.props.addTask(this.state.name, [
      this.state.item1,
      this.state.item2,
      this.state.item3,
    ]);
    this.setState({
      name: '',
      item1: '',
      item2: '',
      item3: '',
    });
  };

  render() {
    return (
      <div>
        <div className='add-task'>Add New Task</div>
        <form onSubmit={this.handleSubmit}>
          Name:
          <input
            className='addTaskName'
            type='text'
            placeholder='Task Name'
            value={this.state.name}
            onChange={this.handleValueChange}
          />
          <ul className='addTaskList'>
            <li>
              {' '}
              <input
                type='text'
                placeholder='Task item 1'
                value={this.state.item1}
                onChange={this.handleItem1ValueChange}
              />
            </li>
            <li>
              {' '}
              <input
                type='text'
                placeholder='Task item 2'
                value={this.state.item2}
                onChange={this.handleItem2ValueChange}
              />
            </li>
            <li>
              {' '}
              <input
                type='text'
                placeholder='Task item 3'
                value={this.state.item3}
                onChange={this.handleItem3ValueChange}
              />
            </li>
          </ul>
          <input className='addSubmit' type='submit' value='Add Task' />
        </form>
      </div>
    );
  }
}

export default AddTaskForm;
