import React from 'react';
import ReactDOM from 'react-dom';
// REDUX IMPORTS
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// REDUCERS IMPORT
import todos, { addTodo, filterTodos, toggleTodo, deleteTodo } from './store/todos';
import counter, { increment } from './store/counter';
import cart, { addToCart } from './store/cart';

// REDUX CONFIG GOES HERE
const rootReducer = combineReducers({
  cart,
  counter,
  todos
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// REDUX CONFIG END

window.increaseCounter = () => store.dispatch(increment());
window.addTodoItem = (text) => store.dispatch(addTodo(text));

store.dispatch(addTodo('cooking'))
store.dispatch(addTodo('cleaning'))
store.dispatch(addTodo('learning'))
store.dispatch(addTodo('washing'))
// here
window.addToCart = price => store.dispatch(addToCart(price));

window.addToCart = (title, price) => store.dispatch(addToCart(title, price));

window.filterTodos = text => store.dispatch(filterTodos(text))
window.addTodo = text => store.dispatch(addTodo(text))

window.toggleTodo = (index) => store.dispatch(toggleTodo(index))

window.deleteTodo = (index) => store.dispatch(deleteTodo(index))

ReactDOM.render(
  <Provider

    store={store}
  >
    <App />
  </Provider >,
  document.getElementById('root'));
serviceWorker.unregister();
