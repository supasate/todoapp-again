import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ todos, toggle }) => (
  <ul>
   {todos.map(todo => <TodoItem key={todo.id} {...todo} toggle={toggle} />)}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(TodoItem.propTypes)),
  toggle: PropTypes.func.isRequired,
}

export default TodoList

/*
 * { id: 1, text: 'hello', complete: false }
 *
 */
