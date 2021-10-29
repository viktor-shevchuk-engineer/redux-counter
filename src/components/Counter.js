// import { Component } from 'react';
import {
  useSelector,
  useDispatch,
  // connect,
} from 'react-redux';

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);
  const showValue = useSelector((state) => state.counter.showValue);

  const incrementHandler = () => dispatch(counterActions.increment());

  const increaseHandler = () => dispatch(counterActions.increase(5)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 5 }

  const decrementHandler = () => dispatch(counterActions.decrement());

  const toggleCounterHandler = () => dispatch(counterActions.toggleCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showValue && <div className={classes.value}>-- {value} --</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.value} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => ({ value: state.value });

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch({ type: 'increment' }),
//   decrement: () => dispatch({ type: 'decrement' }),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
