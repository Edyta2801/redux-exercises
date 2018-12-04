import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from './store/todos'


const mapStateToProps=store=>({
    todos:store.todos.allTodos,
    visibleTodos:store.todos.visibleTodos
  })



const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(addTodo(text))
})



class TodoList extends React.PureComponent {

    state = {};

    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value);
        this.props.addTodo(this.state.value)
    }

    render() {
        return <div>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}>Add todo</button>
            {this.props.todos.map(todo =>
                <div key={todo.text}>{todo.text}</div>
            )}
        </div>
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(TodoList)