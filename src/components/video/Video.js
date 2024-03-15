import React from "react";
import "./_video.scss";
import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video ">
      <div className="video__top">
        <img
          src="https://i.ytimg.com/vi/vLV4DuQixME/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB57yjwBQC8p3m1Auhf2AeVElhH-w"
          alt="thumbnail-img"
        />
        <span className="video__top__duration">05:43</span>
      </div>
      <title className="video__title">
        Vigdiyan Heeran - Full Video | Honey 3.0 | Yo Yo Honey Singh & Urvashi
        Rautela | Zee Music Originals
      </title>
      <div className="video__detailes">
        <span>
          <AiFillEye /> 5m views
        </span>
        <span>5 dayes ago</span>
      </div>
      <div className="video__channel">
        <img src="" alt="" />
        <p>Zee Music Company</p>
      </div>
    </div>
  );
};

export default Video;
