import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";

// Main Redux store.
export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});