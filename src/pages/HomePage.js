import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/video/Video";
import CategoreyBar from "../components/categorey/CategoreyBar";

const HomePage = () => {
  return (
    <>
      <Container>
        <CategoreyBar />
        <Row>
          {[...new Array(20)].map((index) => (
            <Col lg={3} md={4} key={index}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
