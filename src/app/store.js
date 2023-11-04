import { configureStore, createReducer } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
