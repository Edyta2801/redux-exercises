import React from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, filterTodos } from './store/todos'


const mapStateToProps = store => ({
    _todos: store.todos.visibleTodos,
    // visibleTodos: store.todos.visibleTodos
})



const mapDispatchToProps = dispatch => ({
    _addTodo: text => dispatch(addTodo(text)),
    _toggleTodo: index => dispatch(toggleTodo(index)),
    _deleteTodo: index => dispatch(deleteTodo(index)),
    _filterTodo: filterText => dispatch(filterTodos(filterText))
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


    handleFilterChange = (event) => {
        this.setState({ filterValue: event.target.value })
    }

    handleFilterClick = ()=>{
        this.props._filterTodo(this.state.filterValue)
        this.setState({filterValue:''})
    }

    render() {
        console.log('TodoList render,  props are:', this.props);
        return <div>
            {this.renderFilterTodos()}
            {this.renderInput()}
            {this.renderList()}
        </div>
    }

    renderFilterTodos = () => {
        return <div>
            <input onChange={this.handleFilterChange} />
            <button onClick={this.handleFilterClick}>Filter</button>
        </div>
    }



    renderInput = () => {
        return <div>
            <input className="new-todo__input" onChange={this.handleInputChange} />
            <button
                onClick={this.handleButtonClick}>
                Add todo
          </button>
        </div>;
    }

    renderList = () => {
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
