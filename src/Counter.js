import React from 'react';
import { connect } from 'react-redux';
import { increment } from './store/counter';
 const mapStateToProps = store => ({
  _counterValue: store.counter
});
 const mapDispatchToProps = dispatch => ({
  _increment: val => dispatch(increment(val))
});
 const Counter = props => {
  console.log('Counter props', props);
  return <div>
    <div>Count state: {props._counterValue}</div>
    <button onClick={() => props._increment()}>+</button>
    <button onClick={() => props._increment(3)}>Add 3</button>
    <button>-</button>
  </div>
};
 export default connect(mapStateToProps, mapDispatchToProps)(Counter); 