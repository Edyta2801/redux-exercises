import React from 'react';
// import TodoList from './TodoList'
import Counter from './Counter'




class App extends React.Component {
  render() {
    console.log('App props', this.props)
    return <Counter />;
  }
}

export default App;