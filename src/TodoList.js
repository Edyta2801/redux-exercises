import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from './store/todos'


const mapStateToProps = store => ({
    __todos: store.todos.allTodos,
    visibleTodos: store.todos.visibleTodos
})



const mapDispatchToProps = dispatch => ({
    __addTodo: text => dispatch(addTodo(text)),
    __toggleTodo: index => dispatch(toggleTodo(index))
})



class TodoList extends React.PureComponent {

    state = {};

    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value);
        this.props.__addTodo(this.state.value)
    }

    handleTodoClick = index => {
        this.props.__toggleTodo(index)


    }

    render() {
        return <div>
            <input onChange={this.handleInputChange} />
            <button onClick={this.handleButtonClick}>Add todo</button>
            {this.props.__todos.map((todo, index) =>
                <div
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none'
                    }}
                    onClick={() => this.handleTodoClick(index)}
                    key={todo.text}>{todo.text} </div>
            )
            }
        </div>
    }
}






export default connect(mapStateToProps, mapDispatchToProps)(TodoList)