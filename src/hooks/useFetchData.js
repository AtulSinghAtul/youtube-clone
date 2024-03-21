import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { addVideosData } from "../utility/slices/videosSlice";

const useFetchData = () => {
  const videosData = useSelector((store) => store.videos.videosData);

  const [videoData, setVideoData] = useState({ items: [], nextPageToken: "" });
  console.log(videoData);
  const nextPageToken = useSelector(
    (store) => store.videos.videosData.nextPageToken
  );
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      if (videoData.items.length > 0) {
        setVideoData(videosData);
        console.log(videosData);
      } else {
        await axios
          .get(YT_POPULAR_VIDEOS_BASE_API + "videos", {
            params: {
              part: "snippet,contentDetails,statistics",
              chart: "mostPopular",
              regionCode: "IN",
              maxResults: 20,
              pageToken: nextPageToken,
              key: API_KEY,
            },
          })
          .then((response) => {
            const { items, nextPageToken } = response.data;

            setVideoData({
              items: items,
              nextPageToken: nextPageToken,
              activeElement: "All",
            });

            dispatch(
              addVideosData({
                items: items,
                nextPageToken: nextPageToken,
                activeElement: "All",
              })
            );

            console.log(response?.data);
          })
          .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
  console.log(videoData);

  // return videoData;
};

export default useFetchData;
