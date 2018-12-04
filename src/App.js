import React from 'react';
import TodoList from './TodoList'
import {connect} from 'react-redux';

const mapStateToProps=store=>({
  todos:store.todos.allTodos,
  visibleTodos:store.todos.visibleTodos
})


class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return <TodoList todos={this.props.todos}/>;
  }
}

export default connect(mapStateToProps) (App);