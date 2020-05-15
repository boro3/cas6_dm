import React from 'react'
import { Todolist } from './Todolist'

export class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { id: 1, todo: 'Practice React', done: false },
        { id: 2, todo: 'Read book', done: false },
        { id: 3, todo: 'Go to Sleep', done: false }
      ],
      newTodo: ''
    }
  }

  liClicked = (todo) => {
    this.setState({
      todos: [
        ...this.state.todos.map(row => (row.id === todo.id)
          ?
          { id: row.id, todo: row.todo, done: !row.done }
          :
          row)
      ]
    })
  }

  binClicked = (todo) => {
    console.log(this.state.todos)
    this.setState({
      todos: [...this.state.todos.splice(this.state.todos.indexOf(todo), 1)]
    })
  }

  inputChangeHandler = (event) => {

    this.setState({
      newTodo: event.target.value
    })
  }


  btnChangeHandler = () => {
    let a = {
      id: this.state.todos.length + 1,
      todo: this.state.newTodo,
      done: false
    }
    if (this.state.newTodo !== "" && this.state.newTodo !== " ") {
      this.setState({
        todos: [...this.state.todos, a],
        newTodo: ''
      })
    } else {
      alert('Enter Todo to add!')
    }
  }

  render() {
    return (
      <div id='app'>
        <h1>TODO List</h1>
        <input type='text'
          value={this.state.newTodo}
          onChange={this.inputChangeHandler}
          placeholder="Enter new Todo">
        </input>

        <Todolist
          todoList={this.state.todos}
          liClicked={this.liClicked}
          binClicked={this.binClicked}
        />

        <button
          type='button'
          onClick={this.btnChangeHandler}
        >  Add New Todo</button>

      </div>
    )
  }
}