import { ADD_TODO, TOGGLE_TODO } from '../actions/types'

const initialState = []

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO: {
      return state.map(todo => 
        todo.id !== action.payload.id 
          ? todo 
          : { 
              ...todo,
              complete: !todo.complete, 
            }
      )
    }
    case ADD_TODO: {
      /*let maxId = 0
      for (let i = 0; i < state.length; i++) {
        maxId = Math.max(maxId, state[i].id)
      }*/
      const newTodo = {
        //id: maxId + 1,
        id: 1 +  state.reduce((prevMax, cur) => Math.max(prevMax, cur.id), 0),
        text: action.payload.text,
        complete: false,
      }

      return [
        newTodo,
        ...state,
      ]
    }
    default:
      return state
  }
}

export default todosReducer
