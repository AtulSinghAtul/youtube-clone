import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/video/Video";
import CategoreyBar from "../components/categorey/CategoreyBar";
import useFetchData from "../hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";
import { addVideosData } from "../utility/slices/videosSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const videosData = useSelector((store) => store.videos.videosData);
  useFetchData();
  console.log(videosData);

  async function fetchData() {
    await axios
      .get(YT_POPULAR_VIDEOS_BASE_API + "videos", {
        params: {
          part: "snippet,contentDetails,statistics",
          chart: "mostPopular",
          regionCode: "IN",
          maxResults: 20,
          pageToken: videosData?.nextPageToken,
          key: API_KEY,
        },
      })
      .then((response) => {
        const { items, nextPageToken } = response.data;

        dispatch(addVideosData({ items: items, nextPageToken: nextPageToken }));

        console.log(response?.data);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message);
      });
  }

  return (
    <>
      <Container>
        <div className="home_categorey">
          <CategoreyBar />
        </div>

        <InfiniteScroll
          dataLength={videosData?.items.length}
          next={fetchData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <Row>
            {videosData?.items?.map((item) => (
              <Col lg={3} md={4} key={item.id}>
                <Video item={item} />
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default HomePage;
