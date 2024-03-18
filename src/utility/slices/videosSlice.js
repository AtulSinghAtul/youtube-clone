import { createSlice } from "@reduxjs/toolkit";

const ytVideoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videosData: {
      videos: [],
      nextPageToken: null,
    },
  },
  reducers: {
    addVideosData: (state, action) => {
      state.videosData = action.payload;
    },
  },
});

export const { addVideosData } = ytVideoSlice.actions;
export default ytVideoSlice.reducer;
