import { createSlice } from "@reduxjs/toolkit";

// this is for add, remove, clear your cart items.....

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items = 0;
    },
  },
});

export const { addItem, removeItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
