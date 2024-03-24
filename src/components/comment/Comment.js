import moment from "moment";
import React from "react";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className="p-2 comment d-flex">
      <img src="" alt="img" className="mr-3 rounded-circle" />
      <div className="comment__body">
        <p className="mb-1 comment__header">
          authorDisplayName • {moment(67675).fromNow()}
        </p>
        <p className="mb-0">textDisplay</p>
      </div>
    </div>
  );
};

export default Comment;
