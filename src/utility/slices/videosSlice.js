import { createSlice } from "@reduxjs/toolkit";

const ytVideoSlice = createSlice({
  name: "videoSlice",
  initialState: {
    videosData: {
      items: [],
      nextPageToken: null,
      activeElement: "All",
    },
  },
  reducers: {
    addVideosData: (state, action) => {
      const { items, nextPageToken, categoreyItems, activeElement } =
        action.payload;

      if (activeElement !== "All") {
        // state.videosData.items.push(...categoreyItems);
        console.log(categoreyItems);

        state.videosData.items.push(...categoreyItems);
        state.videosData.nextPageToken = nextPageToken;
        state.videosData.activeElement = activeElement;
      } else {
        console.log(items);
        state.videosData.items.push(...items);
        state.videosData.nextPageToken = nextPageToken;
        state.videosData.activeElement = "All";
      }
    },
    removeVideosData: (state, action) => {
      state.videosData.items.length = 0;
      state.videosData.nextPageToken = "";
    },
  },
});

export const { addVideosData, removeVideosData } = ytVideoSlice.actions;
export default ytVideoSlice.reducer;
