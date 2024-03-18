import React, { useEffect, useState } from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import numeral from "numeral";
import moment from "moment";

const Video = ({ item }) => {
  const [channelDp, setChannelDp] = useState(null);

  const {
    contentDetails: { duration },
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
  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    channelIcon();
  }, []);
  async function channelIcon() {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=" +
        channelId +
        "&key=AIzaSyC8-LXLIfUSG33GsyGmi9QPSt48RaMJ_jE"
    );

    const json = await data.json();
    setChannelDp(json?.items[0]?.snippet?.thumbnails?.medium?.url);
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
          <AiFillEye /> {numeral(+item.statistics.viewCount).format("0.a")}{" "}
          views •
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
