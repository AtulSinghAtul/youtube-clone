import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    authValue: 0,
  },
  reducers: {
    addAuthData: (state, action) => {
      state.authValue = action.payload;
    },
  },
});

export const { addAuthData } = authSlice.actions;
export default authSlice.reducer;
