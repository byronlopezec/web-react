import React from 'react'
import { useForm } from "../../hooks/useForm";


export const TodoAdd = ({ handleTodoAdd }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleTodoAdd(newTodo)
        reset();
    }

    return (
        <>
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
        </>
    )
}
