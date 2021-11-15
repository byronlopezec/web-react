import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

export const TodoList = ({ todos, handleDelete, handleToggle }) => {

    return (
        <ul className="list-group list-group-flush">
            {todos.map((todo, i) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    index={i}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete} />
                //  TodoListItem, todo, index, handleDelete, handleToggle
            ))}
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired

}

export default TodoList
