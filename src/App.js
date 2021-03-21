import './App.css';
import React, {useState} from 'react';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import Timer from './components/Timer';
import { Route, Switch } from 'react-router-dom';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo';
import { Modal } from 'react-bootstrap';

function App() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [todos, setTodos] = useState([])
  const [data, setData] = useState([
    {
      'name': 'Study',
      'Seconds': 42
    },
    {
      'name': 'Read',
      'Seconds': 56
    },
    {
      'name': 'Exercise for 2 hours',
      'Seconds': 2
    }
  ]);
  const [activeTask, setTask] = useState('');
  const [isActive, setActive] = useState(false);

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


  const updateData = ( seconds ) => {
    var bool = true;
    console.log('working');
    data.forEach(d => 
      {
        if (d.name === activeTask) {
          d.Seconds+=seconds;
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
