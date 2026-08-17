import { createSlice } from "@reduxjs/toolkit";
import { initialBooks } from "../data/books";

// This slice stores all books in the library.
const booksSlice = createSlice({
  name: "books",

  initialState: {
    books: initialBooks,
  },

  reducers: {
    // Add a new book to the beginning of the list.
    addBook: (state, action) => {
      state.books.unshift(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;