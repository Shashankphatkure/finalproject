"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 5,
};

export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 5;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions

export default CounterSlice.reducer;