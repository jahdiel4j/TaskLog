import './App.css';
import TodoList from './components/TodoList';
import Chart from './components/Chart';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom';
import Todo from './components/Todo';

function App() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100
    }
  ];
  return (
    <div className="todo-app">
        <NavBar/>
        <hr/>
        <Switch>
          <Route path="/report">
            <Chart data={data}/>
          </Route>
          <Route path="/">
            <TodoList/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
