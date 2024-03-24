import React from "react";
import Comment from "../comment/Comment";
import { AiOutlineBarChart } from "react-icons/ai";

const Comments = () => {
  return (
    <div className="comments">
      <div>
        <p>206 Comments</p>

        <p>
          <AiOutlineBarChart />
          Sort by
        </p>
      </div>
      <div className="my-2 comments__form d-flex w-100">
        <img src="" alt="comment_dp" className="mr-3 rounded-circle" />
        <form className="d-flex flex-grow-1">
          <input
            type="text"
            placeholder="Add a comment"
            className="flex-grow-1"
          />

          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {[...Array(20)].map((index) => (
          <Comment key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
