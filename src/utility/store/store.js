import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import videosReducer from "../slices/videosSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    videos: videosReducer,
  },
});
