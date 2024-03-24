import { createSlice, current } from "@reduxjs/toolkit";

const watchPageSlice = createSlice({
  name: "watch",
  initialState: {
    watchPageData: null,
    // hideSidebar: true,
  },
  reducers: {
    watchPageVideoData: (state, action) => {
      // console.log(current(state));

      state.watchPageData = action.payload;
    },

    // hideSidebar: (state, action) => {
    //   current(state.hideSidebar);
    //   state.hideSidebar = !action.payload;
    // },
  },
});

export const { watchPageVideoData, hideSidebar } = watchPageSlice.actions;

export default watchPageSlice.reducer;
