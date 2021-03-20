import './App.css';
import React, {useState} from 'react';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import { Route, Switch } from 'react-router-dom';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo';

function App() {

  const activeTodo = 0;
  const seconds = 0;
  var isTaskSelected = false;

  const [todos, setTodos] = useState([])

  const addTodo = todo => {
      if(!todo.text || /^\s*$/.test(todo.text)) {
          return
      }

      const newTodos = [todo, ...todos]

      setTodos(newTodos)
  };

  const updateTodo = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)) {
          return
      }

      setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }

  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr);
  }

  const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              todo.isComplete = !todo.isComplete
          }
          return todo
      })
      setTodos(updatedTodos);
  }

  const toggle = () => {
    isTaskSelected = !isTaskSelected;
    console.log(isTaskSelected);
  }

  const taskSelected = (id) => {
    console.log('task selected');
  }

  const updateData = (activeTodo, seconds) => {
    console.log('working');
  }

  const data = [];
  return (
    <div className="todo-app">
        <NavBar/>
        <hr/>
        <Switch>
          <Route path="/report">
            <Chart data={data}/>
          </Route>
          <Route path="/">
            <Timer />
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
