import axios from "axios";
import { useEffect } from "react";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";
import { useDispatch } from "react-redux";
import { addVideosData } from "../utility/slices/videosSlice";

const useFetchData = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    // const data = await fetch(
    //   "https://youtube.googleapis.com/youtube/v3/videos?part"
    // );
    try {
      await axios
        .get(YT_POPULAR_VIDEOS_BASE_API + "videos", {
          params: {
            part: "snippet,contentDetails,statistics",
            chart: "mostPopular",
            regionCode: "IN",
            maxResults: 50,
            pageToken: "",
            key: API_KEY,
          },
        })
        .then((response) => {
          const { items, nextPageToken } = response.data;
          dispatch(
            addVideosData({ items: items, nextPageToken: nextPageToken })
          );
          console.log(response?.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
      console.log(error.message);
    }
  }
};

export default useFetchData;
