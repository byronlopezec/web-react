import { todoReducer } from './todoReducer';
import React, { useEffect, useReducer } from 'react'
import './styles.css'
import TodoList from './TodoList';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);



    // si los todos cambian vuelvo a grabar en el localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = (todoId) => {

        const action = {
            type: 'delete',
            payload: todoId
        }
        dispatch(action);
    }

    const handleToggle = (todoId) => {
        dispatch({ type: 'toggle', payload: todoId })
    }

    const handleTodoAdd = (newTodo) => {

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
    }



    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos, handleDelete,HandleToggle */}
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle} />
                </div>

                <div className="col-5">
                    <TodoAdd handleTodoAdd={handleTodoAdd} />
                </div>
            </div>
        </div>
    )
}
