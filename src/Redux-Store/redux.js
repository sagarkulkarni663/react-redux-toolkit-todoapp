import { configureStore } from "@reduxjs/toolkit";
import Store from "./Store";
import countSlice from "./Counterstore"
export const useredux = configureStore({
  reducer: {
    users:Store,
    counter:countSlice
  }
})