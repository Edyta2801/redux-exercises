import React from 'react';
import { connect } from 'react-redux';
import { increment } from './store/counter'


const mapStateToProps = store => ({
    _counterValue: store.counter
})

const mapDispatchToProps = dispatch => ({
    _increment: () => dispatch(increment())
})


const Counter = props => {
    return <div>
        <div>Count state:{props._counterValue}</div>
        <button onClick={props._increment}>+</button>
        <button>-</button>
    </div>

}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)