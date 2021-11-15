

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            // me regresa un nuevo arreglo, no es necesario hacer ...state
            return state.filter(todo => (todo.id !== action.payload))

        case 'toggle':
            return state.map(todo => {

                if (todo.id === action.payload) {
                    console.log(todo.id);
                    return { ...todo, done: !todo.done }
                } else { return todo }
            })

        default:
            return state;
    }
}