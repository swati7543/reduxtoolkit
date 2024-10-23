import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, multiply } from './counter/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button onClick={() => dispatch(decrement())}>-</button>
      {count}
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(multiply())}>* </button>
    </div>
  );
}

export default App;
