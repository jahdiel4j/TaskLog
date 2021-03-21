import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
import "./TodoList.css"

function TodoList() {
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

    return (
        <div>
            <h1>TaskLog</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
    )
}

export default TodoList
