import { createSlice } from "@reduxjs/toolkit";

// this file for store search data and use that data for searching the products

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
  },
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;

export default searchSlice.reducer;
