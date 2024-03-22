import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/video/Video";
import CategoreyBar from "../components/categorey/CategoreyBar";
import useFetchData from "../hooks/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { API_KEY, YT_POPULAR_VIDEOS_BASE_API } from "../utility/constant";
import { addVideosData, removeVideosData } from "../utility/slices/videosSlice";
import Shimmer from "../components/shimmer/Shimmer";
import { Link } from "react-router-dom";
import { watchPageVideoData } from "../utility/slices/watchSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const videosData = useSelector((store) => store.videos.videosData);

  const { activeElement, nextPageToken } = videosData;
  console.log(videosData);
  // useFetchData();
  // console.log(videosData);
  // console.log(videosData?.nextPageToken);

  useEffect(() => {
    // Create an instance of the AbortController API to abort the fetch request
    const controller = new AbortController();
    fetchData();
    return () => {
      controller.abort();
    };
  }, []);

  async function fetchData() {
    // dispatch(removeVideosData());
    if (activeElement === "All") {
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

          dispatch(
            addVideosData({
              items: items,
              nextPageToken: nextPageToken,
              activeElement: activeElement,
            })
          );

          // console.log(response?.data);
        })
        .catch((error) => {
          console.log(error);
          console.log(error.message);
        });
    } else if (activeElement !== "All") {
      async function categoreyBar() {
        const data = await axios.get(YT_POPULAR_VIDEOS_BASE_API + "search", {
          params: {
            part: "snippet",
            type: "video",
            maxResults: 20,
            q: activeElement,
            pageToken: nextPageToken,
            key: API_KEY,
          },
        });

        dispatch(
          addVideosData({
            categoreyItems: data.data.items,
            nextPageToken: data.data.nextPageToken,
            activeElement: activeElement,
          })
        );
        console.log(data.data.items);
      }
      categoreyBar();
    }
  }

  console.log(videosData?.items.length);

  function handleClick(item) {
    console.log(item);
    dispatch(watchPageVideoData(item));
  }

  //! conditional rendering

  if (videosData.items.length === 0) return <Shimmer />;

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
                <Link
                  to={
                    "/watch?v=" + item?.id + "/?c=" + item?.snippet?.channelId
                  }
                >
                  <Video item={item} onClick={handleClick(item)} />
                </Link>
              </Col>
            ))}
          </Row>
        </InfiniteScroll>
      </Container>
    </>
  );
};

export default HomePage;
