import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import MetaData from "../../components/metaData/MetaData";
import Comments from "../../components/comments/Comments";
import HorizontalSuggestion from "../../components/horizontalSuggestion/HorizontalSuggestion";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../../utility/constant";

const WatchPage = () => {
  const [subscriber, setSubscriber] = useState(null);
  const [itemData, setItemData] = useState(null);
  console.log(subscriber);

  const channelId = useLocation();
  const videoId = channelId.search.split("/")[0].slice(3);
  const channelsId = channelId.search.split("?c=")[1];

  useEffect(() => {
    axios
      .get(YT_POPULAR_VIDEOS_BASE_API + "videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          id: videoId,
          key: API_KEY,
        },
      })
      .then((res) => {
        // console.log(res);
        setItemData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [videoId]);

  useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/channels?part=statistics,snippet&id=" +
          channelsId +
          "&key=" +
          API_KEY
      )
      .then((res) => {
        const items = res?.data?.items;
        setSubscriber(items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [videoId]);

  return (
    <div>
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              width="800"
              height="450"
              src={"https://www.youtube.com/embed/" + videoId}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          {subscriber ? (
            <MetaData
              channelId={channelsId}
              subscriber={subscriber}
              itemData={itemData}
            />
          ) : (
            <h2>Loading....</h2>
          )}
          {subscriber === null ? (
            <h1>data not found</h1>
          ) : (
            <Comments subscriber={subscriber} videoId={videoId} />
          )}
        </Col>
        <Col lg={4}>
          {[...new Array(20)].map((index) => (
            <HorizontalSuggestion key={index} />
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default WatchPage;
