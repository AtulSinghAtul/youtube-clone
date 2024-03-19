import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import numeral from "numeral";
import moment from "moment";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../../utility/constant";
import axios from "axios";

const Video = ({ item }) => {
  const [channelDp, setChannelDp] = useState(null);
  const [__duration, setDuration] = useState(null);
  const [viewCount, setViewCount] = useState(4567890);

  const {
    id,
    snippet: {
      title,
      channelTitle,
      channelId,

      thumbnails: {
        medium: { url },
      },
      publishedAt,
    },
  } = item;

  //* changed time stamp into minute and second
  const seconds = moment.duration(__duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    channelIcon();
  }, []);

  async function channelIcon() {
    const data = await axios.get(YT_POPULAR_VIDEOS_BASE_API + "channels", {
      params: {
        part: "snippet",
        id: channelId,
        key: API_KEY,
      },
    });

    setChannelDp(data?.data?.items[0]?.snippet?.thumbnails?.medium?.url);
  }
  //////////////////////////////////////////////////
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
        // console.log(contentDetails.duration);
        // console.log(statistics.viewCount);
        // console.log(response);
      })
      .catch((error) => console.log(error));
  }

  // console.log(item);
  return (
    <div className="video ">
      <div className="video__top">
        <img src={url} alt="thumbnail-img" />
        <span className="video__top__duration">{_duration}</span>
      </div>
      <title className="video__title">{title}</title>
      <div className="video__detailes">
        <span>
          <AiFillEye /> {numeral(viewCount).format("0.a")} views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video__channel">
        <img src={channelDp} alt="channel-dp" />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};

export default Video;
