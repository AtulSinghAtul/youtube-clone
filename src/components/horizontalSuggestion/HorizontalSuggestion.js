import React from "react";
// import "./_horizontalSuggestion";
import { AiFillEye } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import numeral from "numeral";
import moment from "moment";

const HorizontalSuggestion = () => {
  return (
    <Row
      className="py-2 m-1 videoHorizontal align-items-center"
      onClick={"handleClick"}
    >
      {/* //TODO refractor grid */}
      <Col
        xs={6}
        md={"searchScreen" || "subScreen" ? 4 : 6}
        className="videoHorizontal__left"
      >
        <img
          src={"medium.url"}
          className={`videoHorizontal__thumbnail ${"thumbnail"} `}
          alt=""
        />
        {"isVideo" && (
          <span className="videoHorizontal__duration">{"_duration"}</span>
        )}
      </Col>
      <Col
        xs={6}
        md={"searchScreen" || " subScreen" ? 8 : 6}
        className="p-0 videoHorizontal__right"
      >
        <p className="mb-1 videoHorizontal__title">{"title"}</p>

        {"isVideo" && (
          <div className="videoHorizontal__details">
            <AiFillEye /> {numeral(67767564).format("0.a")} Views •
            {moment(20, 2024).fromNow()}
          </div>
        )}

        {("searchScreen" || "subScreen") && (
          <p className="mt-1 videoHorizontal__desc">{"description"}</p>
        )}

        <div className="my-1 videoHorizontal__channel d-flex align-items-center">
          {"isVideo" && <img src={"channelIcon?.url"} alt="" />}
          <p className="mb-0">{"channelTitle"}</p>
        </div>
        {"subScreen" && (
          <p className="mt-2">{"video.contentDetails.totalItemCount"} Videos</p>
        )}
      </Col>
    </Row>
  );
};

export default HorizontalSuggestion;
