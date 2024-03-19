import React, { useState } from "react";
import {
  API_KEY,
  KEYWORDS,
  YT_POPULAR_VIDEOS_BASE_API,
} from "../../utility/constant";
import "./_categoriesBar.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addVideosData } from "../../utility/slices/videosSlice";

const CategoreyBar = () => {
  const dispatch = useDispatch();
  const [activeElement, setActiveElement] = useState("All");

  function handleClick(value) {
    console.log(value);
    setActiveElement(value);
    async function categoreyBar() {
      const data = await axios.get(YT_POPULAR_VIDEOS_BASE_API + "search", {
        params: {
          part: "snippet",
          type: "video",
          maxResults: "50",
          q: value,
          key: API_KEY,
        },
      });

      dispatch(
        addVideosData({
          items: data.data.items,
          nextPageToken: data.data.nextPageToken,
        })
      );
      console.log(data.data.items);
    }
    categoreyBar();
  }

  return (
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
  );
};

export default CategoreyBar;
