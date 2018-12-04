import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo } from './store/todos'


const mapStateToProps = store => ({
    _todos: store.todos.allTodos,
    visibleTodos: store.todos.visibleTodos
})



const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index))
})



class TodoList extends React.PureComponent {

    state = {};

    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value);
        this.props._addTodo(this.state.value)
    }

    handleTodoClick = index => {
        this.props._toggleTodo(index)


    }
    handleDeleteTodo = index => {
        this.props._deleteTodo(index)
    }

    render() {
        console.log('TodoList render,  props are:', this.props);
        return <div>
            {this.renderInput()}
            {this.renderList()}
        </div>
    }

    renderInput=()=> {
        return <div>
            <input className="new-todo__input" onChange={this.handleInputChange} />
            <button
                onClick={this.handleButtonClick}>
                Add todo
          </button>
        </div>;
    }

    renderList=()=> {
        return this.props._todos.map((todo, index) =>
            <div
                className="todo"
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                key={todo.text}>
                <div onClick={() => this.handleTodoClick(index)}>{todo.text}</div>
                <button
                    type="button"
                    onClick={() => this.handleDeleteTodo(index)}>X</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
