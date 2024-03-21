import React from "react";
import { Col, Row } from "react-bootstrap";
import MetaData from "../../components/metaData/MetaData";
import Comment from "../../components/comment/Comment";
import HorizontalSuggestion from "../../components/horizontalSuggestion/HorizontalSuggestion";

const WatchPage = () => {
  return (
    <div>
      <Row>
        <Col lg={8}>
          <div className="watchScreen__player">
            <iframe
              width="800"
              height="450"
              src="https://www.youtube.com/embed/l8qHSEvXGso?si=BFJ6Fshx-jtE02rs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <MetaData />
          <Comment />
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
