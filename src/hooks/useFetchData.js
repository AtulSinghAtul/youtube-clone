import axios from "axios";
import React, { useEffect } from "react";
import { YT_API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addVideosData } from "../utility/slices/videosSlice";

const useFetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    axios
      .get(YT_POPULAR_VIDEOS_BASE_API + "videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 50,
          pageToken: "",
          key: "AIzaSyC8-LXLIfUSG33GsyGmi9QPSt48RaMJ_jE",
        },
      })
      .then((response) => {
        const { items, nextPageToken } = response.data;
        dispatch(addVideosData({ items: items, nextPageToken: nextPageToken }));
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }
};

export default useFetchData;
