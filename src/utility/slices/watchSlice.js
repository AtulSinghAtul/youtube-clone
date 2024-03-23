import { createSlice, current } from "@reduxjs/toolkit";

const watchPageSlice = createSlice({
  name: "watch",
  initialState: {
    watchPageData: null,
  },
  reducers: {
    watchPageVideoData: (state, action) => {
      // console.log(current(state));

      state.watchPageData = action.payload;
    },
  },
});

export const { watchPageVideoData } = watchPageSlice.actions;

export default watchPageSlice.reducer;
