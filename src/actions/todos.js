import { ADD_TODO, TOGGLE_TODO } from './types'

const addTodo = text => ({
  type: ADD_TODO,
  payload: {
    text,
  },
})

const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
})

export {
  addTodo,
  toggleTodo,
}

