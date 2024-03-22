import React from "react";
import "./_metaData.scss";
import { useSelector } from "react-redux";

const MetaData = ({ items }) => {
  console.log(items[0]);
  const { title, channelTitle } = items[0]?.snippet;
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
            <p>170M subscribers</p>
          </div>
          <button>Subscribe</button>
        </div>

        <div className="like_unlike_btn">
          <span className="like_unlike_btn-1">
            <span>👍8.5K</span>|<span>👎</span>
          </span>
          <span className="like_unlike_btn-2">📤 Share</span>
          <span className="like_unlike_btn-3">⬇️ Download</span>
          <span className="like_unlike_btn-4">...</span>
        </div>
      </div>

      <div className="videoMetaData__description">
        <div>
          <span>431075 views</span>
          <span>22hours ago</span>
          <span>#amangupta #PeyushBansal #NamitaThapar</span>
        </div>
        <span>
          Click here to Subscribe to SET India:{" "}
          <a href="#">https://www.youtube.com/channel/UCpEh...</a>
        </span>

        <div>
          NEMA AI optimizes learning experience, enhancing memory, attention,
          and problem-solving skills whil{" "}
          <span className="showMoreText">….more</span>
        </div>
      </div>
    </div>
  );
};

export default MetaData;
