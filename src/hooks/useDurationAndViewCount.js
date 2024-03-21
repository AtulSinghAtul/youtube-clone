import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";

const useDurationAndViewCount = (id) => {
  const [__duration, setDuration] = useState(null);
  const [viewCount, setViewCount] = useState(null);
  try {
    useEffect(() => {
      fetchData();
    }, []);

    const _videoId = id?.videoId || id;

    async function fetchData() {
      await axios
        .get(YT_POPULAR_VIDEOS_BASE_API + "videos", {
          params: {
            part: "contentDetails,statistics",
            id: _videoId,
            key: API_KEY,
          },
        })
        .then((response) => {
          const { contentDetails, statistics } = response.data.items[0];

          setDuration(contentDetails?.duration);
          setViewCount(statistics?.viewCount);

          // console.log("calling videos api first time");
        })
        .catch((error) => console.log(error));
    }
  } catch (error) {
    console.log(error);
  }
  return { __duration: __duration, viewCount: viewCount };
};

export default useDurationAndViewCount;
