const initialState = [{
  id: 1,
  todo: 'Comprar pan',
  done: false
}]

const todoReducer = (state = initialState, action) => {
  if (action?.type === 'ADD') {
    return [
      ...state,
      action.payload
    ]
  }
  return state
}

let todos = todoReducer()

// No usar push en React. Esto es porque push
// modifica/muta los objetos y en react eso
// no está permitido.

const newTodo = {
  id: 2,
  todo: 'Comprar leche',
  done: false
}

const addTodoAction = {
  type: 'ADD',
  payload: newTodo
}

todos = todoReducer(todos, addTodoAction)

console.log(todos)