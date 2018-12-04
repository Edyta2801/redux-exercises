import React from 'react';
import TodoList from './TodoList'





class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return <TodoList />;
  }
}

export default App;