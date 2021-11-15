

export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [...state, action.payload]

        case 'delete':
            // me regresa un nuevo arreglo, no es necesario hacer ...state
            return state.filter(todo => (todo.id !== action.payload))

        default:
            return state;
    }
}