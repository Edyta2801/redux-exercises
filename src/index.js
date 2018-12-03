import React from 'react';
import ReactDOM from 'react-dom';
// REDUX IMPORTS
import { combineReducers, createStore } from 'redux';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// REDUCERS IMPORT
import todos, { addTodo } from './store/todos';
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

// here
window.addToCart = price => store.dispatch(addToCart(price));


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
