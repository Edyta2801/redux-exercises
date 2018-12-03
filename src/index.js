import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux'
import todos, { addTodo } from './store/todos'
import counter, {increment,decrement} from './store/counter';


const rootReducer = combineReducers({
    counter,
    todos
})

const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);


// console.warn('before dispatch:', store.getState());
store.dispatch(addTodo('Go shopping'));
store.dispatch(addTodo('Some other thing'));
store.dispatch(addTodo('Clean the house'));
store.dispatch(addTodo('Feed cat'));
// console.warn('after dispatch:', store.getState());
store.dispatch(increment());

window.increaseCounter=()=>store.dispatch(increment());
window.addToDoItem=(text)=>store.dispatch(addTodo(text));

window.decrementCounter=()=>store.dispatch(decrement())


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

