const initialSate = [{
    id: 1,
    todo: 'Comprar Pan',
    donde: false
}]


const todoReducer = (state = initialSate, action) => {

    if (action?.type === 'agregar') {
        return [...state, action.payload];
    }

    return [];
}

let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    donde: false
}]

const action = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, action);

console.log(todos)