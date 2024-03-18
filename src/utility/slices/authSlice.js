import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    uid: {
      uid: sessionStorage.getItem("y_uid")
        ? sessionStorage.getItem("y_uid")
        : null,
      email: sessionStorage.getItem("y_email")
        ? sessionStorage.getItem("y_email")
        : null,
      displayName: sessionStorage.getItem("y_displayName")
        ? sessionStorage.getItem("y_displayName")
        : null,
    },
  },
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
