import React from "react";
import "./App.css";
import s3_image from "./s3-image.jpg";
import pointer from "./pointer.svg";

export default function ServiceThree() {
  return (
    <div className="s3">
      <div className="service-info">
        <h2>Innovate With Speed</h2>
        <div className="image-holder-phone">
          <img src={s3_image} className="service-image" alt="service-image" />
        </div>
        <div className="service-details">
          <h3>
            Create higher quality software, deliver on customer expectations and
            business goals
          </h3>
        </div>
        <div className="service-link">
          <p>DevOps</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img src={s3_image} className="service-image" alt="service-image" />
        </div>
      </div>
    </div>
  );
}
