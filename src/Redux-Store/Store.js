import { createSlice } from "@reduxjs/toolkit"


const initialState = () => [
  { id: 0, name: "John Doe", email: "john.doe@email.com" },
  { id: 1, name: "Jane Smith", email: "jane.smith@email.com" },
  { id: 2, name: "Bob Johnson", email: "bob.johnson@email.com" }
]
const userSlice = createSlice({
  name: "TODO-APP",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload)
    },
    editItem: (state, action) => {
      const { id, name, email } = action.payload;
      return state.map((item) =>
        item.id === Number(id) ? { ...item, name, email } : item
      );
    },
    clearItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id)
    }
  }

})
export const { addItem, editItem, clearItem } = userSlice.actions
export default userSlice.reducer