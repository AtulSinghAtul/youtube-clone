import React, { useEffect, useState } from "react";
import "./_metaData.scss";
import { useSelector } from "react-redux";
import numeral from "numeral";
import moment from "moment";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../../utility/constant";

const MetaData = ({ subscriber, itemData, channelId }) => {
  ///////////////////////////////////////
  console.log(channelId);
  const { uid } = useSelector((store) => store?.auth);
  const { token } = uid;
  console.log(token);
  const {
    snippet,
    statistics: { subscriberCount },
  } = subscriber[0];

  const url = snippet?.thumbnails?.medium?.url;

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

  // console.log(snippet);

  useEffect(() => {
    handleSubcriptions();
  }, []);

  function handleSubcriptions() {
    axios
      .get(YT_POPULAR_VIDEOS_BASE_API + "subscriptions", {
        params: {
          part: "snippet",
          forChannelId: "UC_gXhnzeF5_XIFn4gx_bocg",
          mine: true,
        },
        headers: {
          Authorization: `Bearer ${"ya29.a0Ad52N3-GWLr-lf5GropV-IQBd8oJquXcobIOCvxsZrw8E2c7bvcJBEurqUhLHOM-n1E2iGTQXbOemmxb9PxhSaOwE9wdMqvXXg1EOuhhqwzUIAv4AEFcWDYFdBZASoQfMmFR4VvkAOe6kxqWMrxWFPoK0J25OwaxNZsaCgYKAYcSARESFQHGX2MibMjpDivCfnK13qkMVhbXgQ0170"}`,
        },
      })
      .then((res) => {
        // ya29.a0Ad52N3-GWLr-lf5GropV-IQBd8oJquXcobIOCvxsZrw8E2c7bvcJBEurqUhLHOM-n1E2iGTQXbOemmxb9PxhSaOwE9wdMqvXXg1EOuhhqwzUIAv4AEFcWDYFdBZASoQfMmFR4VvkAOe6kxqWMrxWFPoK0J25OwaxNZsaCgYKAYcSARESFQHGX2MibMjpDivCfnK13qkMVhbXgQ0170
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="py-2 videoMetaData">
      <div className="videoMetaData__top">
        <h5 className="text-white ">{title}</h5>
      </div>

      <div className="videoMetaData__channel">
        <div className="channel_dp">
          <img src={url} alt="dp_img" />
          <div className="channel_name">
            <h6>{channelTitle}</h6>
            <p>{numeral(subscriberCount).format("0.a")} subscribers</p>
          </div>
          <button onClick={handleSubcriptions}>Subscribe</button>
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
