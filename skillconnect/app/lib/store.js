"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./Features/counter/CounterSlice";
import cartReducer from "./Features/cart/CartSlice";


const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });
