import './App.css';
import React, {useState} from 'react';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import { Route, Switch } from 'react-router-dom';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo';

function App() {

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
    var bold = false;
    todos.map(todo => {
        if (todo.id === id) {
            bold = !todo.isComplete
        }
    })
    let updatedTodos = todos.map(todo => {
        if(bold) {
            if(todo.id === id) {
                todo.isComplete = false;
            }
            if (todo.id != id) {

                todo.isComplete = !todo.isComplete
            }
        }
        else {
            if(todo.id === id) {
                todo.isComplete = false;
            }
            if (todo.id != id) {

                todo.isComplete = true;
            }
        }
        return todo
    })
    setTodos(updatedTodos);
}
  var data = [
    {
    'name': 'Study',
    'Seconds': 42
    },
    {'name': 'Read',
    'Seconds': 56
    },
    {
      'name': 'Exercise for 2 hours',
      'Seconds': 2
    }
  ];


  const updateData = ( seconds ) => {
    console.log('working');
    data.push({
      'name': 'test',
      'Seconds': seconds
    })
  }

  return (
    <div className="todo-app">
        <NavBar/>
        <hr/>
        <Switch>
          <Route path="/report">
            <Chart data={data}/>
            <h1>Completed Tasks:</h1>
          </Route>
          <Route path="/">
            <Timer updateData={updateData} todos={todos}/>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
