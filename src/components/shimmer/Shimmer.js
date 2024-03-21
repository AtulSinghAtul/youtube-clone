import React from "react";
import "./_shimmer.scss";

const Shimmer = () => {
  return (
    <div className="shimmer_container">
      {[...new Array(20)].map((index) => (
        <div key={index} className="shimmer_parent">
          <div className="shimmer_child"></div>
          <div className="shimmer_dp_title">
            <div className="shimmer_dp"></div>
            <div className="shimmer_title"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
