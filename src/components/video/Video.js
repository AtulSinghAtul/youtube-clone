import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";
import numeral from "numeral";
import moment from "moment";

import useChannelIcons from "../../hooks/useChannelIcons";
import useDurationAndViewCount from "../../hooks/useDurationAndViewCount";

const Video = ({ item }) => {
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

  //////////////////////////////////////////////////
  //^ data comes from videos api
  const { __duration, viewCount } = useDurationAndViewCount(id);
  console.log(__duration, viewCount);

  ////////////////////////////////////////////////////
  //* changed time stamp into minute and second
  const seconds = moment.duration(__duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  //////////////////////////////////////////////////

  //^ Data comes from channels api
  const channelDp = useChannelIcons(channelId);
  console.log(channelDp);

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
