import React, { Component } from 'react';
import TodoList from './TodoList'


class App extends React.Component {
  render() {
    return <TodoList todos={[
      { text: 'First todo from App' },
      { text: 'Second todo from App' }
    ]}/>;
  }
}

export default App