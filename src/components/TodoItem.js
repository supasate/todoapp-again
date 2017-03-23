import React from 'react'

const TodoItem = ({ id, text, complete, toggle }) => (
  <li 
    id={id} 
    className={complete ? 'complete' : ''}
    onClick={() => toggle(id)}
  >
    {text}
  </li>
)

export default TodoItem
