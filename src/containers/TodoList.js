import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../actions/todos'

const mapStateToProps = state => ({
  todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodo(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
