import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: null,
  reducers: {
    addAuthData: (state, action) => {
      return action.payload;
    },
    removeAuthData: () => {
      return null;
    },
  },
});

export const { addAuthData, removeAuthData } = authSlice.actions;
export default authSlice.reducer;
