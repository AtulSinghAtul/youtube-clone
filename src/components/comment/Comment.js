import moment from "moment";
import React, { useEffect } from "react";
import "./_comment.scss";
import axios from "axios";
import { YT_POPULAR_VIDEOS_BASE_API } from "../../utility/constant";

const Comment = ({ commentData }) => {
  const {
    snippet: {
      topLevelComment: {
        snippet: {
          authorProfileImageUrl,
          authorDisplayName,
          publishedAt,
          textDisplay,
        },
      },
    },
  } = commentData;
  // console.log(commentData);
  return (
    <div className="p-2 comment d-flex ">
      <img src={authorProfileImageUrl} alt="img" className="rounded-circle" />
      <div className="comment__body ">
        <p className="mb-1 comment__header">
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className="mb-0">{textDisplay}</p>
      </div>
    </div>
  );
};

export default Comment;
