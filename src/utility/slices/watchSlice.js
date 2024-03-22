import { createSlice } from "@reduxjs/toolkit";

const watchPageSlice = createSlice({
  name: "watch",
  initialState: {
    watchPageData: null,
  },
  reducers: {
    watchPageVideoData: (state, action) => {
      console.log(action.payload);
      state.watchPage = action.payload;
    },
  },
});

export const { watchPageVideoData } = watchPageSlice.actions;

export default watchPageSlice.reducer;
