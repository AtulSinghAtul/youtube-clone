import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Video from "../components/video/Video";

const HomeScreen = () => {
  return (
    <>
      <Container>
        <Row>
          {[...new Array(20)].map(() => (
            <Col lg={5}>
              <Video />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
