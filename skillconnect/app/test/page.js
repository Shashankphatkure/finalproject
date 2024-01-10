"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../lib/Features/counter/CounterSlice";


export default function Home() {
//useSelector gets the state from store
  const count = useSelector((state) => state.counter.value); // Access the counter state

//useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    <div>
    <div>
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button onClick={() => dispatch(increment())}>Increment by 5</button>
      <br/>
      <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
    </div>
  </div>
  );
}