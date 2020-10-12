import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

import './styles.css'

const initialState = [{
  id: new Date().getTime(),
  desc: 'Aprender React',
  done: false
}]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'ADD',
      payload: newTodo
    })
  }

  const handleDelete = (todoId) => {
    dispatch({
      type: 'DELETE',
      payload: todoId
    })
  }

  const handleToggle = (todoId) => {
    dispatch({
      type: 'TOGGLE',
      payload: todoId
    })
  }

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            handleToggle={handleToggle}
            handleDelete={handleDelete} />
        </div>
        <div className="col-5">
          <TodoAdd 
            handleAddTodo={handleAddTodo} />
        </div> 
      </div>
    </div>
  )
}

export default TodoApp
