import { todoReducer } from './todoReducer';
import React, { useReducer } from 'react'
import './styles.css'

export const TodoApp = () => {

    const initialState = [
        {
            id: new Date().getTime(),
            desc: 'Aprender React',
            donde: false
        }];
    
    const [todos] = useReducer(todoReducer, initialState);

    console.log(todos);
    
    return (
        <div>
            <h1>TodoApp</h1>
            <hr />
            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Tenemos</li>
            </ul>
        </div>
    )
}
