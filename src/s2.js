import React from "react";
import "./App.css";
import s1_image from "./s2-image.png";
import pointer from "./pointer.svg";

export default function ServiceTwo() {
  return (
    <div className="s2">
      <div className="service-info">
        <h2>Make Bolder Choices</h2>
        <div className="image-holder-phone">
          <img src={s1_image} className="service-image" alt="service-image" />
        </div>
        <div className="service-details">
          <h3>Digital focused strategies to realize market-changing ideas</h3>
        </div>
        <div className="service-link">
          <p>Build Better Apps</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img src={s1_image} className="service-image" alt="service-image" />
        </div>
      </div>
    </div>
  );
}
