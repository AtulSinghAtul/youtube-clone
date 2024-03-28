import React, { useEffect, useState } from "react";
import Comment from "../comment/Comment";
import { AiOutlineBarChart } from "react-icons/ai";
import axios from "axios";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../../utility/constant";
import "./_comments.scss";
import { useSelector } from "react-redux";

const Comments = ({ videoId, subscriber }) => {
  const [commentText, setCommentText] = useState([]);
  console.log(commentText);
  const [text, setText] = useState([]);
  const uid = useSelector((store) => store.auth.uid);
  console.log(uid?.token);

  useEffect(() => {
    HandleComment();
  }, [videoId]);
  // console.log(subscriber);
  if (subscriber === null) return;
  const snippet = subscriber[0]?.snippet;

  // console.log(snippet);

  const url = snippet?.thumbnails?.medium?.url;

  console.log(text);

  const obj = {
    snippet: {
      videoId: videoId,
      topLevelComment: {
        snippet: {
          textOriginal: text,
        },
      },
    },
  };

  function handleCommentPost(e) {
    e.preventDefault();
    if (text.length === 0) return;

    axios
      .post(YT_POPULAR_VIDEOS_BASE_API + "commentThreads", obj, {
        params: {
          part: "snippet",
        },
        headers: {
          Authorization: `Basic ${uid?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        console.log("comment success");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function HandleComment() {
    axios
      .get(YT_POPULAR_VIDEOS_BASE_API + "commentThreads", {
        params: { part: "snippet", videoId: videoId, key: API_KEY },
      })
      .then((res) => {
        console.log(res);
        setCommentText(res?.data?.items);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

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
        <img src={url} alt="comment_dp" className="mr-3 rounded-circle " />
        <form
          className="d-flex flex-grow-1"
          onSubmit={(e) => handleCommentPost(e)}
        >
          <input
            type="text"
            placeholder="Add a comment"
            className="flex-grow-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <button className="p-2 border-0">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {commentText?.map((comment, index) => (
          <Comment key={index} commentData={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
