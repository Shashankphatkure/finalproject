"use client";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = CartSlice.actions

export default CartSlice.reducer;