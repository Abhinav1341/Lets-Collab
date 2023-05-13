import React from "react";
import "./App.css";
import s1_image from "./s1-image.jpg";
import pointer from "./pointer.svg";

export default function ServiceOne() {
  return (
    <div className="s1">
      <div className="service-info">
        <h2>AI + RPA is what we do</h2>
        <div className="image-holder-phone">
          <img src={s1_image} className="service-image-1" alt="service-image" />
        </div>
        <div className="service-details">
          <h3>
            Future-Proof your business. Drive efficiency, profitability and
            deliver on customer experience
          </h3>
        </div>
        <div className="service-link">
          <p>AI + RPA Automation</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img src={s1_image} className="service-image-1" alt="service-image" />
        </div>
      </div>
    </div>
  );
}
