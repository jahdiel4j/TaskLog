import './App.css';
import React, {useState} from 'react';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import { Route, Switch } from 'react-router-dom';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo';
import Session from './components/Session';

function App() {

  const [todos, setTodos] = useState([])
  // const [data, setData] = useState([
  //   {
  //     'name': 'Study',
  //     'Seconds': 42
  //   },
  //   {
  //     'name': 'Read',
  //     'Seconds': 56
  //   },
  //   {
  //     'name': 'Exercise for 2 hours',
  //     'Seconds': 2
  //   }
  // ]);
  const [data, setData] = useState([]);
  const [activeTask, setTask] = useState('');

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

  const updateSession = (dataName, newTime) => {
    setData(prev => prev.map(item => (item.name === dataName ? newTime : item)))
  }

  const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)

      setTodos(removeArr);
  }

  const removeSession = name => {
    const removeArr = [...data].filter(dat => dat.name !== name)

    setData(removeArr);
  }



  const completeTodo = (id, todo) => {
    var bold = false;
    todos.map(todo => {
        if (todo.id === id) {
            bold = !todo.isComplete
            setTask(todo.text);
        }
    })
    let updatedTodos = todos.map(todo => {
        if(bold) {
            if(todo.id === id) {
                todo.isComplete = false;
            }
            if (todo.id !== id) {

                todo.isComplete = !todo.isComplete
            }
        }
        else {
            if(todo.id === id) {
                todo.isComplete = false;
            }
            if (todo.id !== id) {

                todo.isComplete = true;
            }
        }
        return todo
    })
    setTodos(updatedTodos);
}


  const updateData = ( seconds ) => {
    var bool = true;
    console.log('working');
    data.forEach(d => 
      {
        if (d.name === activeTask) {
          var s = parseInt(seconds);
          var ds = parseInt(d.Seconds);
          d.Seconds = (s + ds);
          bool = false;
        }
      }  
    );
    if (bool) {
      var copyData = [...data, {
        'name': activeTask,
        'Seconds': seconds
      }]
      setData(copyData);
    }
  }

  return (
    <div className="todo-app">
        <NavBar/>
        <hr/>
        <Switch>
          <Route path="/report">
            <Chart data={data}/>
            <h2>Completed Tasks:</h2>
            <Session data={data} updateSession={updateSession} removeSession={removeSession} />
          </Route>
          <Route path="/task">
            <Timer updateData={updateData} todos={todos}/>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
          </Route>
          <Route path="/">
          <h1>Task Log Application</h1>
          <br/>
          <h3>Created by Alex Liou, Jahdiel Suarez, Nathan Allen, and Samuel Liechty</h3>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
