import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import TodoApp from './components/TodoApp'
import rootReducer from './reducers'
import './style.css'

const preloadedState = {
  todos: [
    { id: 1, text: 'Hello', complete: false },
    { id: 2, text: 'Hi', complete: true },
  ],
}

const store = createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('react-root')
)

if (module.hot) {
  module.hot.accept('./reducers', () => {
    store.replaceReducer(rootReducer)
  })
}
