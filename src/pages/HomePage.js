import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/video/Video";
import CategoreyBar from "../components/categorey/CategoreyBar";
import useFetchData from "../hooks/useFetchData";
import { useSelector } from "react-redux";

const HomePage = () => {
  const videosData = useSelector((store) => store.videos.videosData);
  // console.log(videosData);
  useFetchData();
  return (
    <>
      <Container>
        <CategoreyBar />
        <Row>
          {videosData?.items?.map((item) => (
            <Col lg={3} md={4} key={item.id}>
              <Video item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
