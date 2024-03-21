import React, { useState } from "react";
import {
  API_KEY,
  KEYWORDS,
  YT_POPULAR_VIDEOS_BASE_API,
} from "../../utility/constant";
import "./_categoriesBar.scss";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  addVideosData,
  removeVideosData,
} from "../../utility/slices/videosSlice";
import useFetchData from "../../hooks/useFetchData";

const CategoreyBar = () => {
  const dispatch = useDispatch();
  const { nextPageToken } = useSelector((store) => store.videos.videosData);

  const [activeElement, setActiveElement] = useState("All");
  // console.log(activeElement);

  function handleClick(value) {
    console.log(value);
    setActiveElement(value);
    dispatch(removeVideosData());
    async function categoreyBar() {
      console.log(value);

      if (value === "All") {
        dispatch(removeVideosData());
        console.log("All");
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

            dispatch(
              addVideosData({
                items: items,
                nextPageToken: nextPageToken,
                activeElement: value,
              })
            );

            // console.log(response?.data);
          })
          .catch((error) => {
            console.log(error);
            console.log(error.message);
          });
      } else {
        dispatch(removeVideosData());
        const data = await axios.get(YT_POPULAR_VIDEOS_BASE_API + "search", {
          params: {
            part: "snippet",
            type: "video",
            maxResults: 20,
            q: value,
            pageToken: nextPageToken,
            key: API_KEY,
          },
        });

        dispatch(
          addVideosData({
            categoreyItems: data.data.items,
            nextPageToken: data.data.nextPageToken,
            activeElement: value,
          })
        );
        console.log(data.data.items);
      }
    }
    categoreyBar();
  }

  return (
    <div className="categoriesBarContainer">
      <div className="categoriesBar">
        {KEYWORDS.map((value, index) => (
          <span
            key={index}
            onClick={() => handleClick(value)}
            className={activeElement === value ? "active" : ""}
          >
            {value}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CategoreyBar;
