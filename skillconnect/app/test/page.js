"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../lib/Features/counter/CounterSlice";
import Notification1 from "@/components/notifications/notification1";



export default function Home() {
//useSelector gets the state from store
  const count = useSelector((state) => state.counter.value); // Access the counter state

//useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    <div style={{ padding: '20px', margin: '20px' }} >
    <div className="flex-shrink-0 pt-0.5" >
      <h1>Counter: {count}</h1> {/* Display the counter state */}
      <button className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => dispatch(increment())}>Increment by 5</button>
      <br/>
      <br/>
      <button className="inline-flex items-center rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={() => dispatch(decrement())}>Decrement by 1</button>
      <Notification1/>
    </div>
  </div>
  );
}