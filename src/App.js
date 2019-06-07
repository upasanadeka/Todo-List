import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header'
import Todos from "./components/Todos";
import Addtodo from "./components/Addtodo";
import uuid from 'uuid';
class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
    ]
  }
  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todos => {
      if(todos.id === id) {
        todos.completed = !todos.completed
      }
      return todos;
    })})
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  //Add Todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title:title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  render() {
   return (
    <div className="App">
      <div className="container">
      <Header />
      <Addtodo addTodo = {this.addTodo}/>
      <Todos todos={this.state.todos} markComplete = {this.markComplete}
      delTodo={this.delTodo} />
      </div>
    </div>
    );
  }
}
export default App;
