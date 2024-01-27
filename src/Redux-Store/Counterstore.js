import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0
}

const countSlice = createSlice({
  name: "counter-app",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count++
    },
    decrement: (state, action) => {
      state.count--
    }
  }
})
export default countSlice.reducer
export const { increment, decrement } = countSlice.actions