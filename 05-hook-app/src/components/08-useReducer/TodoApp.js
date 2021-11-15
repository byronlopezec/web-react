import { todoReducer } from './todoReducer';
import React, { useEffect, useReducer } from 'react'
import './styles.css'
import { useForm } from "../../hooks/useForm";
import TodoList from './TodoList';

const init = () => {

    return JSON.parse(localStorage.getItem('todos') || []);
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }]
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    })

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

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        dispatch(action)
        reset();
    }

    return (
        <div>
            <h1>TodoApp ({todos.length})</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    {/* TodoList, todos, handleDelete,HandleToggle */}
                    <TodoList todos={todos} handleDelete={handleDelete} handleToggle={handleToggle}/>
                </div>

                <div className="col-5">
                    <h4>Agregar</h4>
                    <hr />

                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            placeholder="Aprender ..."
                            autoComplete="off"
                            value={description}
                            onChange={handleInputChange}
                        />
                        <button
                            type="submit" className="btn btn-outline-primary mt-1 w-100">Agregar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
