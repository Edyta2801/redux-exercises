import React from 'react';

class TodoList extends React.PureComponent {
    
    state = {};

    handleInputChange = event => {
        this.setState({ value: event.target.value });
    }

    handleButtonClick = () => {
        console.log('want to save todo: ', this.state.value);
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




export default TodoList