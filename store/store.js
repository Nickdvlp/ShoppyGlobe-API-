import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../slice/searchSlice";
import cartReducer from "../slice/cartSlice";
const store = configureStore({
  reducer: {
    search: searchReducer,
    cart: cartReducer,
  },
});

export default store;
