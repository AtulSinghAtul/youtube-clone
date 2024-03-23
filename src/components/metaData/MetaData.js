import React from "react";
import "./_metaData.scss";
import { useSelector } from "react-redux";
import numeral from "numeral";
import moment from "moment";
import { Link } from "react-router-dom";

const MetaData = ({ subscriber, itemData }) => {
  const { subscriberCount } = subscriber[0].statistics;

  // console.log(itemData?.data?.items[0]);
  const {
    snippet: {
      title,
      channelTitle,
      publishedAt,
      tags,
      localized: { description },
    },
    statistics: { likeCount, viewCount },
  } = itemData?.data?.items[0];

  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5 className="text-white ">{title}</h5>
      </div>

      <div className="videoMetaData__channel">
        <div className="channel_dp">
          <img
            src="https://img.freepik.com/free-vector/colorful-bird-illustration-gradient_343694-1741.jpg?w=740&t=st=1711035713~exp=1711036313~hmac=a9cdc0829ffc2f12d463efc7ff4645a64ea0ad0e0de0394abc541704ee1cb30c"
            alt="dp_img"
          />
          <div className="channel_name">
            <h6>{channelTitle}</h6>
            <p>{numeral(subscriberCount).format("0.a")} subscribers</p>
          </div>
          <button>Subscribe</button>
        </div>

        <div className="like_unlike_btn">
          <span className="like_unlike_btn-1">
            <span>👍{numeral(likeCount).format("0.a")}</span>|<span>👎</span>
          </span>
          <span className="like_unlike_btn-2">📤 Share</span>
          <span className="like_unlike_btn-3">⬇️ Download</span>
          <span className="like_unlike_btn-4">...</span>
        </div>
      </div>

      <div className="videoMetaData__description">
        <div>
          {/* {numeral(viewCount).format(""0,0.00"")} */}
          <span>{numeral(viewCount).format("0,0")} views</span>{" "}
          <span>{moment(publishedAt).format("MMMM DD, YYYY")}</span>{" "}
          <span>
            #{tags[0]} #{tags[2]} #{tags[8]}
          </span>
        </div>
        <span>
          {title}:<Link to="#">https://www.youtube.com/channel/UCpEh...</Link>
        </span>

        <div>
          {description}
          <span className="showMoreText">….more</span>
        </div>
      </div>
    </div>
  );
};

export default MetaData;
